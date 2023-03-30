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
	import { Button, Heading, Modal } from 'flowbite-svelte';
	import { ethers } from 'ethers';
	import { formatEther, solidityKeccak256 } from 'ethers/lib/utils';
	import toast from 'svelte-french-toast';
	import { QRCodeImage } from 'svelte-qrcode-image';
	import OtpInput from 'svelte-otp';
	import TOTP from 'totp.js';
	import { StandardMerkleTree } from '@openzeppelin/merkle-tree';
	import { browser } from '$app/environment';

	let isOpen = false;
	let otpInstance: any;
	let isTotpValid = false;
	let totp: TOTP;
	let totpUrl = '';
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

	function mtest(): StandardMerkleTree<String[]> {
		// const salt = 0xdeadbeef;
		// const values: String[][] = [];
		// const intervalOffset = 0;
		// for (let i = 0; i < 10; i++) {
		// 	// left/right pseudo-leaves, must be provided in addition to witness proving we can hash to the leaf, even after leaves are sorted
		// 	const left = solidityKeccak256(['uint256', 'uint256'], [i, salt]);
		// 	const right = solidityKeccak256(
		// 		['uint256', 'uint256'],
		// 		[i, getTOTPByInterval(intervalOffset + i)]
		// 	);
		// 	values.push([left, right]);
		// }
		// // (2)
		// const tree = StandardMerkleTree.of(values, ['bytes32', 'bytes32']);
		// // (3)
		// console.log('Merkle Root:', tree.root);
		// console.log('Merkle rendered (leaves are sorted):', tree.root);
		// console.log(tree.render());
		// return tree;

		const salt = 0xdeadbeef;

		const values: String[][] = [];
		const intervalOffset = 0;
		for (let i = 0; i < 10; i++) {
			// left/right pseudo-leaves, must be provided in addition to witness proving we can hash to the leaf, even after leaves are sorted
			const left = solidityKeccak256(['uint256', 'uint256'], [i, salt]);
			const right = solidityKeccak256(
				['uint256', 'uint256'],
				[i, getTOTPByInterval(intervalOffset + i)]
			);

			values.push([left, right]);
		}

		// (2)
		const tree = StandardMerkleTree.of(values, ['bytes32', 'bytes32']);

		// (3)
		console.log('Merkle Root:', tree.root);
		console.log('Merkle rendered (leaves are sorted):', tree.root);
		console.log(tree.render());
		return tree;
	}

	async function transfer() {
		if (!$accountApi || !$rpcClient || !$merkleTree) return;
		const salt = 0xdeadbeef;
		const target = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';
		const value = ethers.utils.parseEther('1');
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

		const proof = $merkleTree.getProof([saltHash, totpHash]);

		const op = await $accountApi.createSignedUserOp(
			{
				target,
				value,
				data: '0x'
			},
			proof,
			saltHash,
			0,
			totpCode
		);

		const uoHash = await $rpcClient.sendUserOpToBundler(op);
		console.log(`UserOpHash: ${uoHash}`);
		console.log('Hi');

		console.log('Waiting for transaction...');
		const txHash = await $accountApi.getUserOpReceipt(uoHash);

		console.log(`Transaction hash: ${txHash}`);
	}

	async function mintWETH() {
		if (!$accountApi || !$rpcClient || !$provider) return;
		const WETH_ABI = [
			'function deposit() external payable',
			'function approve(address spender, uint amount) external'
		];
		const wethAddr = '0x77d2723a1824D891188Fcc7bA7eE7A0516319b51';
		const weth = new ethers.Contract(wethAddr, WETH_ABI, $provider);
		const amount = '0.5';
		const value = ethers.utils.parseEther(amount);

		console.log(`Wrapping ${amount} ETH ...`);
		const op = await $accountApi.createSignedUserOp({
			target: weth.address,
			value,
			data: weth.interface.encodeFunctionData('deposit')
		});

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

	async function initModal() {
		if (!browser) return;
		const key = TOTP.randomKey();
		console.log(key);
		totp = new TOTP.HOTP(key);
		const code = totp.genOTP();
		totpUrl = `otpauth://totp/${$userData?.email}?issuer=magik&secret=${key}`;
		isOpen = true;
		$merkleTree = mtest();
	}

	function genMerkle(amount: number) {
		const salt = 0xdeadbeef; // This should be unique to each user
		const timeStep = 30;
		const count = amount;
		const movingFactorOffset = Math.floor(Date.now() / 1000 / timeStep);
		const otps: number[] = [];
		for (let i = 0; i < count; i++) {
			otps.push(parseInt(totp.genOTP(movingFactorOffset + i)));
			console.log(totp.genOTP(movingFactorOffset + i));
		}

		const values: String[][] = [];
		for (let i = 0; i < count; i++) {
			const left = solidityKeccak256(['uint256', 'uint256'], [i, salt]);
			const right = solidityKeccak256(['uint256', 'uint256'], [i, otps[i]]);

			values.push([left, right]);
		}

		const tree = StandardMerkleTree.of(values, ['bytes32', 'bytes32']);

		console.log('Merkle rendered (leaves are sorted):', tree.root);
		console.log(tree.render());
		tree.startingN = movingFactorOffset;
		return tree;
	}

	async function createWallet() {}
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
							Balance: {value ? formatEther(value) : '---'} ETH
						{/await}
						{#await isDeployed() then isDeployed}
							{#if isDeployed}
								x
							{/if}
						{:catch error}
							{error.msg}
						{/await}
					{/if}
				</p>
			</div>
			<p>This wallet must contain eth to execute UserOps (unless a Paymaster is active)</p>
			<Button on:click={transfer}>Transfer 1 ETH</Button>
			<Button
				on:click={() =>
					toast.promise(mintWETH(), {
						loading: 'Minting WETH...',
						success: 'Trasaction successful!',
						error: 'Error sending transfer'
					})}>Mint 0.5 WETH</Button
			>
		{:else}
			<Button on:click={initModal}>Create wallet</Button>
			<Modal title="Setup 2fa" bind:open={isOpen} autoclose>
				<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
					Scan the following QR code with your authenticator app
				</p>

				<QRCodeImage text={totpUrl} width={1000} margin={0} displayClass="w-48 mx-auto" />
				<OtpInput
					numberOfInputs={6}
					customRowClass="inline-flex items-center "
					customTextInputClass="w-10"
					customInputWrapperClass="w-10"
					customSeparatorClass="px-2"
					bind:this={otpInstance}
					on:notify={() => (isTotpValid = totp.verify(otpInstance?.getValue().completevalue))}
				/>
				<svelte:fragment slot="footer">
					<Button on:click={() => {}} disabled={!isTotpValid}>Done</Button>
				</svelte:fragment>
			</Modal>
		{/if}
	{:else}
		<Heading tag="h1" class="text-xl mb-2">Your magic wallet is one click away</Heading>
		<p class="max-w-xl m-auto mb-4">Login with any method to access your wallet.</p>

		<Button on:click={() => $web3auth.connect()}>Login</Button>
	{/if}
</section>
