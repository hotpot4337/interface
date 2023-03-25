import { Wallet } from 'ethers';
import { persisted } from 'svelte-local-storage-store';
import { derived, writable, type Writable } from 'svelte/store';
import { ethers } from 'ethers';
import type { Web3Auth } from '@web3auth/modal';
import type { UserInfo } from '@web3auth/base';
import { browser } from '$app/environment';
import type { SimpleAccountAPI } from '@account-abstraction/sdk/dist/src/SimpleAccountAPI';
import type { HttpRpcClient } from '@account-abstraction/sdk/dist/src/HttpRpcClient';

export const web3auth: Writable<Web3Auth> = writable();
export const userData: Writable<Partial<UserInfo> | undefined> = persisted('user', undefined);
export const provider = derived(web3auth, ($web3auth) => {
	if (!$web3auth?.provider) return;
	const provider = new ethers.providers.Web3Provider($web3auth.provider);
	return provider;
});

export const accountApi: Writable<SimpleAccountAPI> = writable();
export const accountAddr: Writable<string> = writable();
export const rpcClient: Writable<HttpRpcClient> = writable();

web3auth.subscribe(async (web3auth) => {
	if (!browser) return;
	if (!web3auth.provider) return;
	const { SimpleAccountAPI, HttpRpcClient } = await import('@account-abstraction/sdk');
	const provider = new ethers.providers.Web3Provider(web3auth.provider);

	const config = {
		rpcUrl: 'http://localhost:8545',
		signingKey: provider.getSigner(),
		entryPoint: '0xF4E9c4961D3D24AE4259767E81c9A380aa524298',
		simpleAccountFactory: '0x15950998f3e5cF176DC0490209552Df5CB68Eb97',
		bundlerUrl: 'http://localhost:3000/rpc'
	};

	const accApi = new SimpleAccountAPI({
		provider,
		entryPointAddress: config.entryPoint,
		owner: provider.getSigner(),
		factoryAddress: config.simpleAccountFactory
	});

	accountApi.set(accApi);

	const accAddr = await accApi.getCounterFactualAddress();
	accountAddr.set(accAddr);

	const chainId = await provider.getNetwork().then((net) => net.chainId);
	rpcClient.set(new HttpRpcClient(config.bundlerUrl, config.entryPoint, chainId));
});
