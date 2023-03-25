<script lang="ts">
	import { web3auth, accountApi, rpcClient, userData, accountAddr, provider } from '$lib/stores';
	import { Button, Heading } from 'flowbite-svelte';
	import { ethers, Wallet } from 'ethers';
	import { formatEther } from 'ethers/lib/utils';
	import toast from 'svelte-french-toast';

	$: balance = $provider;
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
</script>

<section class="text-center mt-24">
	{#if $userData}
		<div>
			Your wallet address:
			<b>{$accountAddr ?? '---'} </b>
			<p>
				{#await $provider?.getBalance($accountAddr)}
					---
				{:then value}
					Balance: {value ? formatEther(value) : '---'} ETH
				{:catch error}
					error :(
				{/await}
			</p>
		</div>
		<p>This wallet must contain eth to execute UserOps (unless a Paymaster is active)</p>
		<Button
			on:click={() =>
				toast.promise(transfer(), {
					loading: 'Transfering...',
					success: 'Trasaction successful!',
					error: 'Error sending transfer'
				})}>Transfer</Button
		>
	{:else}
		<Heading tag="h1" class="text-xl mb-2">Your magic wallet is one click away</Heading>
		<p class="max-w-xl m-auto mb-4">Login with any method to access your wallet.</p>

		<Button on:click={() => $web3auth.connect()}>Login</Button>
	{/if}
</section>
