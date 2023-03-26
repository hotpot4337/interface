<script lang="ts">
	import { web3auth, accountApi, rpcClient, userData, accountAddr, provider } from '$lib/stores';
	import { Button, Heading, Modal } from 'flowbite-svelte';
	import { ethers } from 'ethers';
	import { formatEther } from 'ethers/lib/utils';
	import toast from 'svelte-french-toast';
	import { QRCodeImage } from 'svelte-qrcode-image';

	let isOpen = false;
	async function transfer() {
		if (!$accountApi || !$rpcClient) return;
		const target = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';
		const value = ethers.utils.parseEther('1');

		const op = await $accountApi.createSignedUserOp({
			target,
			value,
			data: '0x'
		});

		const uoHash = await $rpcClient.sendUserOpToBundler(op);
		console.log(`UserOpHash: ${uoHash}`);

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
</script>

<section class="text-center mt-24">
	{#if $userData}
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
		<Button
			on:click={() =>
				toast.promise(transfer(), {
					loading: 'Transfering...',
					success: 'Trasaction successful!',
					error: 'Error sending transfer'
				})}>Transfer 1 ETH</Button
		>
		<Button
			on:click={() =>
				toast.promise(mintWETH(), {
					loading: 'Minting WETH...',
					success: 'Trasaction successful!',
					error: 'Error sending transfer'
				})}>Mint 0.5 WETH</Button
		>
		<Button on:click={() => (isOpen = true)}>Default modal</Button>
		<Modal title="Setup 2fa" bind:open={isOpen} autoclose>
			<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
				Scan the following QR code with your authenticator app
			</p>

			<QRCodeImage text="hi" width={1000} margin={0} displayClass="w-48 mx-auto" />
			<svelte:fragment slot="footer">
				<Button on:click={() => alert('Handle "success"')}>Done</Button>
			</svelte:fragment>
		</Modal>
	{:else}
		<Heading tag="h1" class="text-xl mb-2">Your magic wallet is one click away</Heading>
		<p class="max-w-xl m-auto mb-4">Login with any method to access your wallet.</p>

		<Button on:click={() => $web3auth.connect()}>Login</Button>
	{/if}
</section>
