<script lang="ts">
	import { privKey, wallet, web3auth, provider, userData } from '$lib/stores';
	import { Button, Heading } from 'flowbite-svelte';
	import { ethers, Wallet } from 'ethers';
	import { onMount } from 'svelte';
	import type { SimpleAccountAPI } from '@account-abstraction/sdk';

	let accountApi: Maybe<SimpleAccountAPI>;
	let accountAddress: string = '';

	// onMount(init);

	async function init() {
		console.log('hi');
		const { SimpleAccountAPI, HttpRpcClient } = await import('@account-abstraction/sdk');
		const config = {
			rpcUrl: 'http://localhost:8545',
			signingKey: $privKey,
			entryPoint: '0xF4E9c4961D3D24AE4259767E81c9A380aa524298',
			simpleAccountFactory: '0x15950998f3e5cF176DC0490209552Df5CB68Eb97',
			bundlerUrl: 'http://localhost:3000/rpc'
		};
		if (!$web3auth?.provider) return;
		await $web3auth.addChain;
		const provider = new ethers.providers.Web3Provider($web3auth.provider); // web3auth.provider

		accountApi = new SimpleAccountAPI({
			provider,
			entryPointAddress: config.entryPoint,
			owner: await provider.getSigner(),
			factoryAddress: config.simpleAccountFactory
		});

		const chainId = await provider.getNetwork().then((net) => net.chainId);
		const rpcClient = new HttpRpcClient(config.bundlerUrl, config.entryPoint, chainId);

		const target = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';
		const value = ethers.utils.parseEther('1.5');

		const op = await accountApi.createSignedUserOp({
			target,
			value,
			data: '0x'
		});

		const uoHash = await rpcClient.sendUserOpToBundler(op);
		console.log(`UserOpHash: ${uoHash}`);

		console.log('Waiting for transaction...');
		const txHash = await accountApi.getUserOpReceipt(uoHash);
		console.log(`Transaction hash: ${txHash}`);
		accountAddress = await accountApi.getCounterFactualAddress();
		console.log(accountAddress);
	}

	async function getAccountAddress() {
		if (!accountApi) return;
		// accountAddress = await walletApi.getCounterFactualAddress();
	}

	async function transfer() {
		if (!accountApi) return;
		// walletApi.createSignedUserOp();
	}
</script>

<section class="text-center mt-24">
	{#if $userData}
		{$userData?.name}
		<Button on:click={() => $web3auth?.logout()} color="red" size="sm">Logout</Button>
		<Button on:click={getAccountAddress} size="sm">Get address</Button>
		<div>
			Your wallet address:
			{accountAddress}
		</div>
		<Button on:click={init}>Transfer</Button>
	{:else}
		<Heading tag="h1" class="text-2xl mb-2">Create wallet</Heading>
		<p class="max-w-xl m-auto mb-4">
			Create a magic wallet for <b>gasless transactions</b> and
			<b>2fa protection</b>! You will see a QR code to scan with Google Authenticator
		</p>

		<!-- <Button on:click={generate} color="dark">Generate wallet 🪄</Button> -->
		<Button on:click={() => $web3auth.connect()}>Social login</Button>
	{/if}
</section>
