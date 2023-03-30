import { type BigNumberish, BigNumber, utils } from 'ethers';
import { ecsign, toRpcSig, keccak256 as keccak256_buffer } from 'ethereumjs-util';

// import {
//   SimpleAccount,
//   SimpleAccount__factory, SimpleAccountFactory,
//   SimpleAccountFactory__factory
// } from '@account-abstraction/contracts'

import { ComplexAccount__factory } from './contracts/types/factories/ComplexAccount__factory';
import { ComplexAccountFactory__factory } from './contracts/types/factories/ComplexAccountFactory__factory';
import type { ComplexAccount, ComplexAccountFactory } from './contracts/dist'; // gen with scripts/prepack-contracts-package.sh

import { arrayify, hexConcat, hexlify, splitSignature, zeroPad } from 'ethers/lib/utils';
import type { Signer } from '@ethersproject/abstract-signer';
import { type BaseApiParams, BaseAccountAPI } from './sdk/src/BaseAccountAPI'; // './BaseAccountAPI'
/**
 * constructor params, added no top of base params:
 * @param owner the signer object for the account owner
 * @param factoryAddress address of contract "factory" to deploy new contracts (not needed if account already deployed)
 * @param index nonce value used when creating multiple accounts for the same owner
 */
export interface ComplexAccountApiParams extends BaseApiParams {
	owner: Signer;
	merkleRoot: string;
	factoryAddress?: string;
	index?: number;
}
// export interface BaseApiParams {
//   provider: Provider
//   entryPointAddress: string
//   accountAddress?: string
//   overheads?: Partial<GasOverheads>
//   paymasterAPI?: PaymasterAPI
// }

/**
 * An implementation of the BaseAccountAPI using the ComplexAccount contract.
 * - contract deployer gets "entrypoint", "owner" addresses and "index" nonce
 * - owner signs requests using normal "Ethereum Signed Message" (ether's signer.signMessage())
 * - nonce method is "nonce()"
 * - execute method is "execFromEntryPoint()"
 */
export class ComplexAccountAPI extends BaseAccountAPI {
	factoryAddress?: string;
	owner: Signer;
	index: number;
	merkleRoot: string;

	/**
	 * our account contract.
	 * should support the "execFromEntryPoint" and "nonce" methods
	 */
	accountContract?: ComplexAccount;

	factory?: ComplexAccountFactory;

	constructor(params: ComplexAccountApiParams) {
		super(params);
		this.factoryAddress = params.factoryAddress;
		this.owner = params.owner;
		this.index = params.index ?? 0;
		this.merkleRoot = params.merkleRoot; // TOMO
	}

	async _getAccountContract(): Promise<ComplexAccount> {
		if (this.accountContract == null) {
			this.accountContract = ComplexAccount__factory.connect(
				await this.getAccountAddress(),
				this.provider
			);
		}
		return this.accountContract;
	}

	/**
	 * return the value to put into the "initCode" field, if the account is not yet deployed.
	 * this value holds the "factory" address, followed by this account's information
	 */
	async getAccountInitCode(): Promise<string> {
		if (this.factory == null) {
			if (this.factoryAddress != null && this.factoryAddress !== '') {
				this.factory = ComplexAccountFactory__factory.connect(this.factoryAddress, this.provider);
			} else {
				throw new Error('no factory to get initCode');
			}
		}
		return hexConcat([
			this.factory.address,
			this.factory.interface.encodeFunctionData('createAccount', [
				await this.owner.getAddress(),
				this.index,
				utils.formatBytes32String('TOMO')
			])
		]);
	}

	async getNonce(): Promise<BigNumber> {
		if (await this.checkAccountPhantom()) {
			return BigNumber.from(0);
		}
		const accountContract = await this._getAccountContract();
		return await accountContract.nonce();
	}

	/**
	 * encode a method call from entryPoint to our contract
	 * @param target
	 * @param value
	 * @param data
	 */
	async encodeExecute(target: string, value: BigNumberish, data: string): Promise<string> {
		const accountContract = await this._getAccountContract();
		return accountContract.interface.encodeFunctionData('execute', [target, value, data]);
	}

	async signUserOpHash(
		userOpHash: string,
		proof: string[],
		saltHash: string,
		nInterval: number,
		totpCode: number
	): Promise<string> {
		console.log(proof, saltHash, nInterval, totpCode);
		const sig = await this.owner.signMessage(arrayify(userOpHash));

		const signedMessage1B = arrayify(sig);

		// B for bytes (Uint8Array)
		console.log('S', saltHash);
		const saltHashB = arrayify(saltHash);
		const nIntervalB = zeroPad(hexlify([nInterval]), 32);
		const totpCodeB = zeroPad(arrayify(`0x0${totpCode.toString(16)}`), 32);
		const proofBArr: Uint8Array[] = [];
		proof.forEach((leaf) => {
			proofBArr.push(arrayify(leaf));
		});
		let proofB: Uint8Array = new Uint8Array();
		proofBArr.forEach((leafB) => {
			proofB = arrayify([...proofB, ...leafB]);
		});
		const proofLenB = zeroPad(arrayify(`0x0${proof.length.toString(16)}`), 2);

		const byteArray: Uint8Array = arrayify([
			...saltHashB,
			...nIntervalB,
			...totpCodeB,
			...proofLenB,
			...proofB,
			...signedMessage1B
		]);
		const signatureString = hexlify(byteArray);
		return signatureString;
	}
}
