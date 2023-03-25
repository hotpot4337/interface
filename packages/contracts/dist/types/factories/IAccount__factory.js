"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.__esModule = true;
exports.IAccount__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    },
                ],
                internalType: "struct UserOperation",
                name: "userOp",
                type: "tuple"
            },
            {
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "missingAccountFunds",
                type: "uint256"
            },
        ],
        name: "validateUserOp",
        outputs: [
            {
                internalType: "uint256",
                name: "validationData",
                type: "uint256"
            },
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var IAccount__factory = /** @class */ (function () {
    function IAccount__factory() {
    }
    IAccount__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IAccount__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IAccount__factory.abi = _abi;
    return IAccount__factory;
}());
exports.IAccount__factory = IAccount__factory;
