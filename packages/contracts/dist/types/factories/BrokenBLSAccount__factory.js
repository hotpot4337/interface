"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BrokenBLSAccount__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IEntryPoint",
                name: "anEntryPoint",
                type: "address"
            },
            {
                internalType: "address",
                name: "anAggregator",
                type: "address"
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address"
            },
        ],
        name: "AdminChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address"
            },
        ],
        name: "BeaconUpgraded",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8"
            },
        ],
        name: "Initialized",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256[4]",
                name: "oldPublicKey",
                type: "uint256[4]"
            },
            {
                indexed: false,
                internalType: "uint256[4]",
                name: "newPublicKey",
                type: "uint256[4]"
            },
        ],
        name: "PublicKeyChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "contract IEntryPoint",
                name: "entryPoint",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
        ],
        name: "SimpleAccountInitialized",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
            },
        ],
        name: "Upgraded",
        type: "event"
    },
    {
        inputs: [],
        name: "addDeposit",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [],
        name: "aggregator",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "entryPoint",
        outputs: [
            {
                internalType: "contract IEntryPoint",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "dest",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "func",
                type: "bytes"
            },
        ],
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "dest",
                type: "address[]"
            },
            {
                internalType: "bytes[]",
                name: "func",
                type: "bytes[]"
            },
        ],
        name: "executeBatch",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "getBlsPublicKey",
        outputs: [
            {
                internalType: "uint256[4]",
                name: "",
                type: "uint256[4]"
            },
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [],
        name: "getDeposit",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "anOwner",
                type: "address"
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256[4]",
                name: "aPublicKey",
                type: "uint256[4]"
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "nonce",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "proxiableUUID",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address"
            },
        ],
        name: "upgradeTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            },
        ],
        name: "upgradeToAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
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
    {
        inputs: [
            {
                internalType: "address payable",
                name: "withdrawAddress",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "withdrawDepositTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        stateMutability: "payable",
        type: "receive"
    },
];
var _bytecode = "0x60e0604052306080523480156200001557600080fd5b50604051620020c6380380620020c683398101604081905262000038916200013f565b6001600160a01b03821660a052816200005062000064565b506001600160a01b031660c052506200017e565b600054610100900460ff1615620000d15760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff908116101562000124576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6001600160a01b03811681146200013c57600080fd5b50565b600080604083850312156200015357600080fd5b8251620001608162000126565b6020840151909250620001738162000126565b809150509250929050565b60805160a05160c051611ecb620001fb60003960008181610137015261068a01526000818161029001528181610703015281816107aa01528181610b8c01528181610f2e0152818161128a015261152c015260008181610486015281816105360152818161086e0152818161091e0152610a670152611ecb6000f3fe6080604052600436106100f75760003560e01c80638da5cb5b1161008a578063c399ec8811610059578063c399ec88146102d4578063c4d66de8146102e9578063e02afbae14610309578063ee472f361461032b57600080fd5b80638da5cb5b14610221578063affed0e01461025e578063b0d691fe14610281578063b61d27f6146102b457600080fd5b80634a58db19116100c65780634a58db19146101d15780634d44560d146101d95780634f1ef286146101f957806352d1902d1461020c57600080fd5b806318dfb3c714610103578063245a7bfc146101255780633659cfe6146101835780633a871cdd146101a357600080fd5b366100fe57005b600080fd5b34801561010f57600080fd5b5061012361011e3660046118ef565b61034b565b005b34801561013157600080fd5b506101597f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561018f57600080fd5b5061012361019e36600461197d565b61046f565b3480156101af57600080fd5b506101c36101be36600461199a565b610674565b60405190815260200161017a565b610123610701565b3480156101e557600080fd5b506101236101f43660046119ee565b6107a0565b610123610207366004611a98565b610857565b34801561021857600080fd5b506101c3610a4d565b34801561022d57600080fd5b50600154610159906c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1681565b34801561026a57600080fd5b506001546bffffffffffffffffffffffff166101c3565b34801561028d57600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610159565b3480156102c057600080fd5b506101236102cf366004611b5e565b610b39565b3480156102e057600080fd5b506101c3610b88565b3480156102f557600080fd5b5061012361030436600461197d565b610c40565b34801561031557600080fd5b5061031e610dd3565b60405161017a9190611be7565b34801561033757600080fd5b50610123610346366004611c18565b610de8565b610353610f16565b8281146103c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b83811015610468576104568585838181106103e1576103e1611c96565b90506020020160208101906103f6919061197d565b600085858581811061040a5761040a611c96565b905060200281019061041c9190611cc5565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610fe992505050565b8061046081611d59565b9150506103c4565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610534576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084016103b8565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166105a97f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff161461064c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f7879000000000000000000000000000000000000000060648201526084016103b8565b61065581611066565b604080516000808252602082019092526106719183919061106e565b50565b600061067e611272565b604080516060810182527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16808252600060208301819052919092015290506106df6040850185611cc5565b90506000036106f1576106f184611311565b6106fa826113da565b9392505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff919091169063b760faf99034906024016000604051808303818588803b15801561078c57600080fd5b505af1158015610468573d6000803e3d6000fd5b6107a8611445565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b15801561083b57600080fd5b505af115801561084f573d6000803e3d6000fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016300361091c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084016103b8565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166109917f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610a34576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f7879000000000000000000000000000000000000000060648201526084016103b8565b610a3d82611066565b610a498282600161106e565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610b14576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016103b8565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610b41610f16565b610b82848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610fe992505050565b50505050565b60007f00000000000000000000000000000000000000000000000000000000000000006040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff91909116906370a0823190602401602060405180830381865afa158015610c17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3b9190611d91565b905090565b600054610100900460ff1615808015610c605750600054600160ff909116105b80610c7a5750303b158015610c7a575060005460ff166001145b610d06576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016103b8565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558015610d6457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b610d6d826114e0565b8015610a4957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b610ddb611885565b610de3611885565b919050565b600054610100900460ff1615808015610e085750600054600160ff909116105b80610e225750303b158015610e22575060005460ff166001145b610eae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016103b8565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558015610f0c57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b610d6d60006114e0565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480610f8157506001546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1633145b610fe7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e7460448201526064016103b8565b565b6000808473ffffffffffffffffffffffffffffffffffffffff1684846040516110129190611dd6565b60006040518083038185875af1925050503d806000811461104f576040519150601f19603f3d011682016040523d82523d6000602084013e611054565b606091505b50915091508161046857805160208201fd5b610671611445565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156110a6576110a183611578565b505050565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561112b575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261112891810190611d91565b60015b6111b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f74205555505300000000000000000000000000000000000060648201526084016103b8565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114611266576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c6555554944000000000000000000000000000000000000000000000060648201526084016103b8565b506110a1838383611682565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610fe7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e740000000060448201526064016103b8565b600180546020830135916bffffffffffffffffffffffff90911690600061133783611df2565b91906101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506bffffffffffffffffffffffff1614610671576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6163636f756e743a20696e76616c6964206e6f6e63650000000000000000000060448201526064016103b8565b80156106715760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d8060008114610468576040519150601f19603f3d011682016040523d82523d6000602084013e610468565b6001546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1633148061147a57503330145b610fe7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e65720000000000000000000000000000000000000000000060448201526064016103b8565b600180546bffffffffffffffffffffffff166c0100000000000000000000000073ffffffffffffffffffffffffffffffffffffffff8481168202929092179283905560405192048116917f0000000000000000000000000000000000000000000000000000000000000000909116907f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de90600090a350565b73ffffffffffffffffffffffffffffffffffffffff81163b61161c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e74726163740000000000000000000000000000000000000060648201526084016103b8565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b61168b836116a7565b6000825111806116985750805b156110a157610b8283836116f4565b6116b081611578565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606106fa8383604051806060016040528060278152602001611e6f6027913960606000808573ffffffffffffffffffffffffffffffffffffffff168560405161173e9190611dd6565b600060405180830381855af49150503d8060008114611779576040519150601f19603f3d011682016040523d82523d6000602084013e61177e565b606091505b509150915061178f86838387611799565b9695505050505050565b6060831561182f5782516000036118285773ffffffffffffffffffffffffffffffffffffffff85163b611828576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103b8565b5081611839565b6118398383611841565b949350505050565b8151156118515781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b89190611e1d565b60405180608001604052806004906020820280368337509192915050565b60008083601f8401126118b557600080fd5b50813567ffffffffffffffff8111156118cd57600080fd5b6020830191508360208260051b85010111156118e857600080fd5b9250929050565b6000806000806040858703121561190557600080fd5b843567ffffffffffffffff8082111561191d57600080fd5b611929888389016118a3565b9096509450602087013591508082111561194257600080fd5b5061194f878288016118a3565b95989497509550505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461067157600080fd5b60006020828403121561198f57600080fd5b81356106fa8161195b565b6000806000606084860312156119af57600080fd5b833567ffffffffffffffff8111156119c657600080fd5b840161016081870312156119d957600080fd5b95602085013595506040909401359392505050565b60008060408385031215611a0157600080fd5b8235611a0c8161195b565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611a9057611a90611a1a565b604052919050565b60008060408385031215611aab57600080fd5b8235611ab68161195b565b915060208381013567ffffffffffffffff80821115611ad457600080fd5b818601915086601f830112611ae857600080fd5b813581811115611afa57611afa611a1a565b611b2a847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611a49565b91508082528784828501011115611b4057600080fd5b80848401858401376000848284010152508093505050509250929050565b60008060008060608587031215611b7457600080fd5b8435611b7f8161195b565b935060208501359250604085013567ffffffffffffffff80821115611ba357600080fd5b818701915087601f830112611bb757600080fd5b813581811115611bc657600080fd5b886020828501011115611bd857600080fd5b95989497505060200194505050565b60808101818360005b6004811015611c0f578151835260209283019290910190600101611bf0565b50505092915050565b600060808284031215611c2a57600080fd5b82601f830112611c3957600080fd5b6040516080810181811067ffffffffffffffff82111715611c5c57611c5c611a1a565b604052806080840185811115611c7157600080fd5b845b81811015611c8b578035835260209283019201611c73565b509195945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611cfa57600080fd5b83018035915067ffffffffffffffff821115611d1557600080fd5b6020019150368190038213156118e857600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611d8a57611d8a611d2a565b5060010190565b600060208284031215611da357600080fd5b5051919050565b60005b83811015611dc5578181015183820152602001611dad565b83811115610b825750506000910152565b60008251611de8818460208701611daa565b9190910192915050565b60006bffffffffffffffffffffffff808316818103611e1357611e13611d2a565b6001019392505050565b6020815260008251806020840152611e3c816040850160208701611daa565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220e8216bd5bed96c3054900347338e146658e0b8f83200aeb2bba94c6d88d97aac64736f6c634300080f0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var BrokenBLSAccount__factory = /** @class */ (function (_super) {
    __extends(BrokenBLSAccount__factory, _super);
    function BrokenBLSAccount__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    BrokenBLSAccount__factory.prototype.deploy = function (anEntryPoint, anAggregator, overrides) {
        return _super.prototype.deploy.call(this, anEntryPoint, anAggregator, overrides || {});
    };
    BrokenBLSAccount__factory.prototype.getDeployTransaction = function (anEntryPoint, anAggregator, overrides) {
        return _super.prototype.getDeployTransaction.call(this, anEntryPoint, anAggregator, overrides || {});
    };
    BrokenBLSAccount__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    BrokenBLSAccount__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    BrokenBLSAccount__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    BrokenBLSAccount__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    BrokenBLSAccount__factory.bytecode = _bytecode;
    BrokenBLSAccount__factory.abi = _abi;
    return BrokenBLSAccount__factory;
}(ethers_1.ContractFactory));
exports.BrokenBLSAccount__factory = BrokenBLSAccount__factory;
