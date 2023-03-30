import { persisted } from 'svelte-local-storage-store';
import { derived, writable, type Writable } from 'svelte/store';
import { ethers } from 'ethers';
import type { Web3Auth } from '@web3auth/modal';
import type { UserInfo } from '@web3auth/base';
import { browser } from '$app/environment';
import type { HttpRpcClient } from '@account-abstraction/sdk/dist/src/HttpRpcClient';
import type { ComplexAccountAPI } from '$packages/ComplexAccountAPI';
import type { StandardMerkleTree } from '@openzeppelin/merkle-tree';
import {
	PUBLIC_RPC_URL,
	PUBLIC_BUNDLER_URL,
	PUBLIC_ACCOUNT_FACTORY_ADDRESS
} from '$env/static/public';

export const web3auth: Writable<Web3Auth> = writable();
export const userData: Writable<Partial<UserInfo> | null> = persisted('user', null);
export const merkleTree: Writable<StandardMerkleTree<String[]> | null> = persisted(
	'merkleTree',
	null
);

export const provider = derived(web3auth, ($web3auth) => {
	if (!$web3auth?.provider) return;
	const provider = new ethers.providers.Web3Provider($web3auth.provider);
	return provider;
});

export const accountApi: Writable<ComplexAccountAPI> = writable();
export const accountAddr: Writable<string> = writable();
export const rpcClient: Writable<HttpRpcClient> = writable();

web3auth.subscribe(async (web3auth) => {
	if (!browser) return;
	if (!web3auth?.provider) return;
	const [{ HttpRpcClient }, { ComplexAccountAPI }] = await Promise.all([
		import('@account-abstraction/sdk'),
		import('$packages/ComplexAccountAPI')
	]);

	const provider = new ethers.providers.Web3Provider(web3auth.provider);

	const config = {
		rpcUrl: PUBLIC_RPC_URL,
		signingKey: provider.getSigner(),
		entryPoint: '0x0576a174D229E3cFA37253523E645A78A0C91B57',
		simpleAccountFactory: '0x15950998f3e5cF176DC0490209552Df5CB68Eb97',
		bundlerUrl: PUBLIC_BUNDLER_URL
	};

	// const accApi = new SimpleAccountAPI({
	// 	provider,
	// 	entryPointAddress: config.entryPoint,
	// 	owner: provider.getSigner(),
	// 	factoryAddress: config.simpleAccountFactory
	// })

	merkleTree.subscribe(async (tree) => {
		if (!tree?.root) return;
		console.log('Setting AccApi with merkle root ', tree.root);
		const accApi = new ComplexAccountAPI({
			provider,
			entryPointAddress: config.entryPoint,
			factoryAddress: PUBLIC_ACCOUNT_FACTORY_ADDRESS,
			owner: provider.getSigner(),
			merkleRoot: tree.root
		});

		accountApi.set(accApi);
		try {
			const accAddr = await accApi.getCounterFactualAddress();
			accountAddr.set(accAddr);
		} catch (err) {
			console.log(err, ':((CC((');
		}
	});

	const chainId = await provider.getNetwork().then((net) => net.chainId);
	rpcClient.set(new HttpRpcClient(config.bundlerUrl, config.entryPoint, chainId));
});
