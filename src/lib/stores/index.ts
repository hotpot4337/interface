import { persisted } from 'svelte-local-storage-store';
import { derived, writable, type Writable } from 'svelte/store';
import { ethers } from 'ethers';
import type { Web3Auth } from '@web3auth/modal';
import type { UserInfo } from '@web3auth/base';
import { browser } from '$app/environment';
import type { HttpRpcClient } from '@account-abstraction/sdk/dist/src/HttpRpcClient';
import type { ComplexAccountAPI } from '$packages/ComplexAccountAPI';
import type { StandardMerkleTree } from '@openzeppelin/merkle-tree';

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
		rpcUrl: 'http://localhost:8545',
		signingKey: provider.getSigner(),
		entryPoint: '0xF4E9c4961D3D24AE4259767E81c9A380aa524298',
		simpleAccountFactory: '0x15950998f3e5cF176DC0490209552Df5CB68Eb97',
		bundlerUrl: 'http://localhost:3000/rpc'
	};

	// const accApi = new SimpleAccountAPI({
	// 	provider,
	// 	entryPointAddress: config.entryPoint,
	// 	owner: provider.getSigner(),
	// 	factoryAddress: config.simpleAccountFactory
	// })

	merkleTree.subscribe(async (tree) => {
		if (!tree) return;
		const accApi = new ComplexAccountAPI({
			provider,
			merkleRoot: tree.root,
			entryPointAddress: config.entryPoint,
			owner: provider.getSigner(),
			factoryAddress: '0xea6AD1f5c2aC92E872EFd1DB2eF02157C875c16C'
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
