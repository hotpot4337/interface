import { Wallet } from 'ethers';
import { persisted } from 'svelte-local-storage-store';
import { derived, writable, type Writable } from 'svelte/store';
import { ethers } from 'ethers';
import type { Web3Auth } from '@web3auth/modal';
import type { UserInfo } from '@web3auth/base';

export const privKey = persisted('privKey', '');
export const wallet = derived(privKey, ($privKey) => {
	if ($privKey) {
		return new Wallet($privKey);
	}
});

export const web3auth: Writable<Web3Auth> = writable();
export const userData: Writable<Partial<UserInfo> | undefined> = persisted('user', undefined);
export const provider = derived(web3auth, ($web3auth) => {
	if (!$web3auth?.provider) return;
	const provider = new ethers.providers.Web3Provider($web3auth.provider);
	return provider;
});
