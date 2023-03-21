import { Wallet } from 'ethers';
import { persisted } from 'svelte-local-storage-store';
import { derived, writable, type Writable } from 'svelte/store';
import { ethers } from 'ethers';
import type { Web3Auth } from '@web3auth/modal';

// const provider = new JsonRpcProvider(web3auth.provider);

export const privKey = persisted('privKey', '');
export const wallet = derived(privKey, ($privKey) => {
	if ($privKey) {
		return new Wallet($privKey);
	}
});

export const web3auth: Writable<Web3Auth> = writable();
export const signer = derived(web3auth, async ($web3auth) => {
	if (!$web3auth?.provider) return;
	const provider = new ethers.providers.Web3Provider($web3auth.provider);
	const signer = await provider.getSigner();
	return signer;
});
