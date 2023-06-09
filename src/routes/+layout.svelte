<script lang="ts">
	import '../app.postcss';
	import Header from './Header.svelte';
	import { Toaster } from 'svelte-french-toast';

	import './styles.css';
	import github from '$lib/images/github.svg';

	import { Buffer } from 'buffer';
	import process from 'process';
	import { onMount } from 'svelte';

	import type { Web3AuthOptions } from '@web3auth/modal';
	import { web3auth, userData } from '$lib/stores';
	import { PUBLIC_CHAIN_ID, PUBLIC_RPC_URL } from '$env/static/public';

	onMount(async () => {
		window.Buffer = Buffer;
		window.process = process;

		const { CHAIN_NAMESPACES } = await import('@web3auth/base');
		const { Web3Auth } = await import('@web3auth/modal');
		const w3aOptions: Web3AuthOptions = {
			clientId:
				'BC4YzMOp19gUIoce1rLpXIXhfV5q4Np5sdfwc5jjVz_Jl8W0rJj-wU9nVcCW-VxG7Sr2TMGrrv_dPL7UJmyrBbc',
			web3AuthNetwork: 'testnet',
			chainConfig: {
				chainNamespace: CHAIN_NAMESPACES.EIP155,
				chainId: PUBLIC_CHAIN_ID,
				rpcTarget: PUBLIC_RPC_URL // This is the public RPC we have added, please pass on your own endpoint while creating an app
			},
			uiConfig: {
				theme: 'light',
				loginMethodsOrder: ['twitter', 'google', 'github', 'discord'],
				defaultLanguage: 'en'
			}
		};

		const w3a = new Web3Auth(w3aOptions);
		if (!w3a) return;
		await w3a.initModal();
		$web3auth = w3a;
		$userData = await w3a.getUserInfo();

		w3a.on('disconnected', () => {
			$userData = null;
			$web3auth = w3a;
		});

		w3a.on('connected', async () => {
			$web3auth = w3a;
			$userData = await w3a.getUserInfo();
		});
	});
</script>

<Toaster />
<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<a href="https://github.com/" class="flex items-center text-sm gap-1">
			<img src={github} alt="GitHub" class="w-6" />
			Created at March Account Abstraction Hackathon
		</a>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
