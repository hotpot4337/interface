<script lang="ts" context="module">
	const salt = 0xdeadbeef;

	function genMerkleTree(): StandardMerkleTree<String[]> {
		const values: String[][] = [];
		const intervalOffset = 0;
		for (let i = 0; i < 10; i++) {
			const left = solidityKeccak256(['uint256', 'uint256'], [i, salt]);
			const right = solidityKeccak256(
				['uint256', 'uint256'],
				[i, getTOTPByInterval(intervalOffset + i)]
			);

			values.push([left, right]);
		}
		const tree = StandardMerkleTree.of(values, ['bytes32', 'bytes32']);
		console.log('Merkle rendered (leaves are sorted):', tree.root);
		console.log(tree.render());
		return tree;
	}
	function getTOTPByInterval(interval: number): number {
		const codez = [
			829868, 599210, 550111, 335494, 142679, 194260, 94507, 481019, 882821, 944678, 775843, 905116,
			513504, 478870, 555515, 692347, 453302, 721259, 745391, 622246, 163111, 490131, 86960, 845996,
			205617, 572258, 846287, 383159, 402593, 472473, 548055, 765519, 832873, 241454, 100441, 72731,
			72624, 715378, 713035, 543461, 528216, 399547, 380249, 418717, 590977, 515900, 17271, 605114,
			31861, 192496, 305144, 569166, 622794, 636149, 260463, 156346, 333927, 166123, 95479, 231230,
			16248, 562947, 873320, 832918, 783404, 289122, 122312, 629719, 846749, 23894, 986524, 612000,
			352963, 620762, 766099, 862553, 794643, 755589, 881995, 937853, 426760, 311903, 556027,
			227710, 70533, 7226, 997671, 24333, 996863, 776623, 31836, 67757, 995985, 90688, 184099,
			590653, 354748, 760921, 58694, 154526
		];
		return codez[interval];
	}

	// function genMerkle(amount: number) {
	// 	const salt = 0xdeadbeef; // This should be unique to each user
	// 	const timeStep = 30;
	// 	const count = amount;
	// 	const movingFactorOffset = Math.floor(Date.now() / 1000 / timeStep);
	// 	const otps: number[] = [];
	// 	for (let i = 0; i < count; i++) {
	// 		otps.push(parseInt(totp.genOTP(movingFactorOffset + i)));
	// 		console.log(totp.genOTP(movingFactorOffset + i));
	// 	}

	// 	const values: String[][] = [];
	// 	for (let i = 0; i < count; i++) {
	// 		const left = solidityKeccak256(['uint256', 'uint256'], [i, salt]);
	// 		const right = solidityKeccak256(['uint256', 'uint256'], [i, otps[i]]);

	// 		values.push([left, right]);
	// 	}

	// 	const tree = StandardMerkleTree.of(values, ['bytes32', 'bytes32']);

	// 	console.log('Merkle rendered (leaves are sorted):', tree.root);
	// 	console.log(tree.render());
	// 	tree.startingN = movingFactorOffset;
	// 	return tree;
	// }

	function genProof(tree: StandardMerkleTree<String[]>) {
		// const offset = Math.floor(Date.now() / 1000 / 30);
		// const n = offset - $merkleTree.startingN;
		// console.log(n);

		// const salt = 0xdeadbeef;
		// const totpCode = parseInt(totp.genOTP(offset));
		// console.log(totpCode);

		// const saltHash = solidityKeccak256(['uint256', 'uint256'], [n, salt]);
		// console.log(saltHash);
		// const totpHash = solidityKeccak256(['uint256', 'uint256'], [n, totpCode]);
		// const proof = $merkleTree.getProof([saltHash, totpHash]);
		// console.log('proof', proof);

		const totpCode = 829868;
		const saltHash = solidityKeccak256(['uint256', 'uint256'], [0, salt]);
		const totpHash = solidityKeccak256(['uint256', 'uint256'], [0, totpCode]);

		const proof = tree.getProof([saltHash, totpHash]);
		if (StandardMerkleTree.verify(tree.root, ['bytes32', 'bytes32'], [saltHash, totpHash], proof)) {
			console.log('Client side merkle proof is valid');
		}
		return { totpCode, saltHash, proof };
	}

	const ERC20_ABI = [
		// Read-Only Functions
		'function balanceOf(address owner) view returns (uint256)',
		'function decimals() view returns (uint8)',
		'function symbol() view returns (string)',

		// Authenticated Functions
		'function transfer(address to, uint amount) returns (bool)',
		'function approve(address spender, uint value) external returns (bool)',

		// Events
		'event Transfer(address indexed from, address indexed to, uint amount)'
	];
</script>

<script lang="ts">
	import {
		web3auth,
		accountApi,
		rpcClient,
		userData,
		merkleTree,
		accountAddr,
		provider
	} from '$lib/stores';
	import { Button, Heading, Input, Label, Modal } from 'flowbite-svelte';
	import { ethers } from 'ethers';
	import { formatEther, solidityKeccak256 } from 'ethers/lib/utils';
	import toast from 'svelte-french-toast';
	import { QRCodeImage } from 'svelte-qrcode-image';
	import OtpInput from 'svelte-otp';
	import TOTP from 'totp.js';
	import { StandardMerkleTree } from '@openzeppelin/merkle-tree';
	import { browser } from '$app/environment';

	let isOpen = false;
	let isFlowOpen = false;
	let otpInstance: any;
	let isTotpValid = false;
	let totp: TOTP;
	let totpUrl = '';

	async function transfer() {
		if (!$accountApi || !$rpcClient || !$merkleTree) return;
		const target = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';
		const value = ethers.utils.parseEther('0.00007');

		const { totpCode, saltHash, proof } = genProof($merkleTree);

		const op = await $accountApi.createSignedUserOp(
			{
				target,
				value,
				data: '0x'
			},
			proof,
			saltHash,
			1,
			totpCode
		);

		const uoHash = await $rpcClient.sendUserOpToBundler(op);
		console.log(`UserOpHash: ${uoHash}`);

		console.log('Waiting for transaction...');
		const txHash = await $accountApi.getUserOpReceipt(uoHash);
		console.log(`Transaction hash: ${txHash}`);
	}
	async function isDeployed() {
		if (!$provider || !$accountAddr) return;
		const bytecode = await $provider.getCode($accountAddr);
		if (bytecode === '0x') {
			return false;
		}
		return bytecode !== '0x' ? true : false;
	}

	async function createFlow() {
		if (!$accountApi || !$rpcClient || !$merkleTree || !$provider) return;
		const { totpCode, saltHash, proof } = genProof($merkleTree);
		console.log(totpCode, saltHash, proof);

		const tkn = '0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f'; //fDaix
		const token = ethers.utils.getAddress(tkn);
		const to = ethers.utils.getAddress('0x83dA1Af7a92477681B08966e2ecB62D58C08B565');
		console.log(token, to);
		const amt = '0.001';
		// TODO wrapped
		const erc20 = new ethers.Contract(token, ERC20_ABI, $provider);
		const [symbol, decimals] = await Promise.all([erc20.symbol(), erc20.decimals()]);
		const amount = ethers.utils.parseUnits(amt, decimals);
		console.log(`Transferring ${amt} ${symbol}...`);

		const me = await $accountApi.getAccountAddress();

		const cfaV1Address = '0xcfa132e353cb4e398080b9700609bb008eceb125'; // mumbai
		const CFA_ABI = [
			// 'function createFlow(ISuperToken token, address sender, address receiver, int96 flowrate, bytes memory userData) external returns (bool)',
			// etherscan: createFlow(address token,address sender,address receiver,int96 flowrate,bytes userData)
			'function createFlow(address token, address sender, address receiver, int96 flowrate, bytes memory userData) external returns (bool)',
			// 'function getFlow(address token, address sender, address receiver) external view override returns (uint256 timestamp, int96 flowRate, uint256 deposit, uint256 owedDeposit)'
			// etherscan only getFlowInfo not getFlow - returns lastUpdated now timestamp
			'function getFlowInfo(address token, address sender, address receiver) external view override returns (uint256 lastUpdated, int96 flowRate, uint256 deposit, uint256 owedDeposit)'
			// XXX not this one
			// 'function createFlow(address token, address receiver, int96 flowRate, bytes calldata ctx) external override returns(bytes memory newCtx)'
		];
		const cfaV1 = new ethers.Contract(cfaV1Address, CFA_ABI, $provider);

		const [lastUpdated, flowrate, deposit, owedDeposit] = await cfaV1.getFlowInfo(
			tkn,
			'0x9230891a2f0d2c78Fb14F33d28AB6C1E3754AE1D',
			to
		);

		console.log('lastUpdated:', new Date(lastUpdated.toNumber() * 1000).toLocaleString());
		console.log('flowrate', ethers.utils.formatUnits(flowrate, decimals));
		console.log('deposit', ethers.utils.formatUnits(deposit, decimals));
		console.log('owedDeposit', ethers.utils.formatUnits(owedDeposit, decimals));

		const emptyUserData = '0x';

		const op = await $accountApi.createSignedUserOp(
			{
				target: cfaV1Address,
				data: cfaV1.interface.encodeFunctionData('createFlow', [
					token,
					me,
					to,
					amount,
					emptyUserData
				])
			},
			proof,
			saltHash,
			1,
			totpCode
		);

		const uoHash = await $rpcClient.sendUserOpToBundler(op);
		console.log(`UserOpHash: ${uoHash}`);

		toast.success('Successfuly created flow');
	}

	async function initModal() {
		if (!browser) return;
		const key = TOTP.randomKey();
		console.log(key);
		totp = new TOTP(key);
		const code = totp.genOTP();
		console.log(code);
		totpUrl = `otpauth://totp/${$userData?.email}?issuer=magik&secret=${key}`;
		isOpen = true;
	}

	function initCreateFlow() {
		// modal
	}

	async function genWallet() {
		$merkleTree = genMerkleTree();
		toast.success;
	}
</script>

<section class="text-center mt-24">
	{#if $userData}
		{#if $merkleTree}
			<div>
				Your wallet address:
				<b>{$accountAddr ?? '---'} </b>
				<p>
					{#if $accountAddr}
						{#await $provider?.getBalance($accountAddr)}
							---
						{:then value}
							Balance: {value ? formatEther(value) : '---'} MATIC
						{/await}
					{/if}
				</p>
			</div>
			<p>This wallet must contain eth to execute UserOps (unless a Paymaster is active)</p>
			<Button on:click={transfer}>Transfer MATIC</Button>
			<br /><br />

			<Input type="text" placeholder="Amount" class="!w-48 inline-block" required />
			<Input type="text" placeholder="To address" class="!w-48 inline-block" required />
			<Button on:click={() => (isFlowOpen = true)}>Create DAI Flow</Button>

			<Modal title="Create flow" class="text-left" bind:open={isFlowOpen} autoclose>
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="block !mt-0">
					Input your 2FA code:
					<OtpInput
						numberOfInputs={6}
						customWrapperClass="!mt-1 text-center"
						customRowClass="inline-flex items-center "
						customTextInputClass="w-10"
						customInputWrapperClass="w-10"
						customSeparatorClass="px-2"
						bind:this={otpInstance}
						on:notify={() => (isTotpValid = totp.verify(otpInstance?.getValue().completevalue))}
					/>
				</label>
				<svelte:fragment slot="footer">
					<Button class="w-full" on:click={createFlow} disabled={!isTotpValid}>Confirm</Button>
				</svelte:fragment>
			</Modal>
		{:else}
			<Button on:click={initModal}>Create wallet</Button>
			<Modal title="Setup 2fa" class="text-left" bind:open={isOpen} autoclose>
				<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
					Scan the following QR code with your authenticator app
				</p>

				<QRCodeImage text={totpUrl} width={1000} margin={0} displayClass="w-48 mx-auto !my-2" />
				<small class="block !m-0 text-center">{totp?.key}</small>
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="block mt-2">
					Input your 2FA code:
					<OtpInput
						numberOfInputs={6}
						customWrapperClass="!mt-1 text-center"
						customRowClass="inline-flex items-center "
						customTextInputClass="w-10"
						customInputWrapperClass="w-10"
						customSeparatorClass="px-2"
						bind:this={otpInstance}
						on:notify={() => (isTotpValid = totp.verify(otpInstance?.getValue().completevalue))}
					/>
				</label>
				<svelte:fragment slot="footer">
					<Button class="w-full" on:click={genWallet} disabled={!isTotpValid}
						>Generate wallet</Button
					>
				</svelte:fragment>
			</Modal>
		{/if}
	{:else}
		<Heading tag="h1" class="text-xl mb-2">Your magic wallet is one click away</Heading>
		<p class="max-w-xl m-auto mb-4">Login with any method to access your wallet.</p>

		<Button type="block" on:click={() => $web3auth.connect()}>Login</Button>
	{/if}
</section>
