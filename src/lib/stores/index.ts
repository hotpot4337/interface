import { Wallet } from 'ethers'
import { persisted } from 'svelte-local-storage-store'
import { derived } from 'svelte/store'


export const privKey = persisted('privKey', "")
export const wallet = derived(privKey, ($privKey) => {
	if ($privKey) {
		return new Wallet($privKey)
	}
})