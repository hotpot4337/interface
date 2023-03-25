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
exports.SimpleAccount__factory = void 0;
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
var _bytecode = "0x60c03461015a57601f62001ed338819003918201601f19168301916001600160401b0383118484101761015f5780849260209460405283398101031261015a57516001600160a01b038116810361015a573060805260a05260005460ff8160081c166101055760ff808216106100ca575b604051611d5d908162000176823960805181818161032601528181610a460152610c23015260a051818181610548015281816107180152818161080101528181610dcf01528181610ef20152818161187301526118d10152f35b60ff90811916176000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160ff8152a138610070565b60405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001b575b361561001957600080fd5b005b60003560e01c806318dfb3c71461011f5780633659cfe6146101165780633a871cdd1461010d5780634a58db19146101045780634d44560d146100fb5780634f1ef286146100f257806352d1902d146100e95780638da5cb5b146100e0578063affed0e0146100d7578063b0d691fe146100ce578063b61d27f6146100c5578063c399ec88146100bc5763c4d66de80361000e576100b7610f75565b61000e565b506100b7610e78565b506100b7610df3565b506100b7610d83565b506100b7610d38565b506100b7610cf8565b506100b7610bdc565b506100b76109c4565b506100b76107a2565b506100b76106d5565b506100b76104dd565b506100b76102d1565b506100b761015e565b9181601f840112156101595782359167ffffffffffffffff8311610159576020808501948460051b01011161015957565b600080fd5b50346101595760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101595767ffffffffffffffff600435818111610159576101af903690600401610128565b9091602435908111610159576101c9903690600401610128565b91906101d36118ba565b8282036102555760005b8281106101e657005b8061021a6101ff6101fa600194878a61173f565b61175d565b61021461020d848988611767565b369161098d565b90611c93565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610248575b016101dd565b6102506116df565b610242565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e67746873000000000000000000000000006044820152fd5b73ffffffffffffffffffffffffffffffffffffffff81160361015957565b50346101595760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101595760043561030d816102b3565b73ffffffffffffffffffffffffffffffffffffffff90817f00000000000000000000000000000000000000000000000000000000000000001691610353833014156110d9565b6103827f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc938285541614611164565b61038a611caa565b60405190610397826108cb565b600082527f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156103d15750506100199150611296565b6020600491604094939451928380927f52d1902d00000000000000000000000000000000000000000000000000000000825286165afa600091816104ad575b5061049a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608490fd5b610019936104a8911461120b565b611382565b6104cf91925060203d81116104d6575b6104c78183610903565b8101906111ef565b9038610410565b503d6104bd565b5034610159577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc6060813601126101595760043567ffffffffffffffff811161015957610160816004019282360301126101595773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001633036106775761058861057d6024358461196d565b926044830190611620565b9050156105b3575b6105af8261059f604435611671565b6040519081529081906020820190565b0390f35b6024600154916bffffffffffffffffffffffff927fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008482169480861461066a575b600186011691161760015501350361060c5738610590565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6163636f756e743a20696e76616c6964206e6f6e6365000000000000000000006044820152fd5b6106726116df565b6105f4565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152fd5b506000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261079f5773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001681813b1561079f57602491604051928380927fb760faf900000000000000000000000000000000000000000000000000000000825230600483015234905af18015610792575b610786575080f35b61078f906108aa565b80f35b61079a6111fe565b61077e565b80fd5b503461015957600060407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261079f576004356107e0816102b3565b6107e8611caa565b8173ffffffffffffffffffffffffffffffffffffffff807f00000000000000000000000000000000000000000000000000000000000000001692833b15610876576044908360405195869485937f205c287800000000000000000000000000000000000000000000000000000000855216600484015260243560248401525af1801561079257610786575080f35b8280fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff81116108be57604052565b6108c661087a565b604052565b6020810190811067ffffffffffffffff8211176108be57604052565b6060810190811067ffffffffffffffff8211176108be57604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176108be57604052565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f60209267ffffffffffffffff8111610980575b01160190565b61098861087a565b61097a565b92919261099982610944565b916109a76040519384610903565b829481845281830111610159578281602093846000960137010152565b5060407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610159576004356109fb816102b3565b60243567ffffffffffffffff8111610159573660238201121561015957610a2c90369060248160040135910161098d565b9073ffffffffffffffffffffffffffffffffffffffff91827f00000000000000000000000000000000000000000000000000000000000000001692610a73843014156110d9565b610aa27f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc948286541614611164565b610aaa611caa565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610ae05750506100199150611296565b6020600491604094939451928380927f52d1902d00000000000000000000000000000000000000000000000000000000825286165afa60009181610bbc575b50610ba9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608490fd5b61001993610bb7911461120b565b611461565b610bd591925060203d81116104d6576104c78183610903565b9038610b1f565b50346101595760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101595773ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610c74576040517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8152602090f35b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152fd5b50346101595760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261015957602060015460601c604051908152f35b50346101595760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101595760206bffffffffffffffffffffffff60015416604051908152f35b50346101595760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261015957602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346101595760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261015957600435610e2f816102b3565b6044359067ffffffffffffffff908183116101595736602384011215610159578260040135918211610159573660248385010111610159576024610019930190602435906116ab565b5034610159576000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261079f576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260208160248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa908115610f68575b8291610f2e575b604051828152602090f35b90506020813d8211610f60575b81610f4860209383610903565b81010312610f5c576105af91505138610f23565b5080fd5b3d9150610f3b565b610f706111fe565b610f1c565b50346101595760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261015957600435610fb1816102b3565b61101360005491610fd960ff8460081c1615809481956110cb575b81156110ab575b50611791565b8261100a60017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff006000541617600055565b6110755761181c565b61101957005b6110467fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff60005416600055565b604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890602090a1005b6110a66101007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff6000541617600055565b61181c565b303b159150816110bd575b5038610fd3565b6001915060ff1614386110b6565b600160ff8216109150610fcc565b156110e057565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152fd5b1561116b57565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152fd5b90816020910312610159575190565b506040513d6000823e3d90fd5b1561121257565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152fd5b803b156112fe5773ffffffffffffffffffffffffffffffffffffffff7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc91167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152fd5b9061138c82611296565b73ffffffffffffffffffffffffffffffffffffffff82167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a2805115801590611459575b6113db575050565b61145691600080604051936113ef856108e7565b602785527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c60208601527f206661696c6564000000000000000000000000000000000000000000000000006040860152602081519101845af46114506114c1565b91611556565b50565b5060006113d3565b9061146b82611296565b73ffffffffffffffffffffffffffffffffffffffff82167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a28051158015906114b9576113db575050565b5060016113d3565b3d156114ec573d906114d282610944565b916114e06040519384610903565b82523d6000602084013e565b606090565b156114f857565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b91929015611579575081511561156a575090565b611576903b15156114f1565b90565b82519091501561158c5750805190602001fd5b604051907f08c379a000000000000000000000000000000000000000000000000000000000825281602080600483015282519283602484015260005b848110611609575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f836000604480968601015201168101030190fd5b8181018301518682016044015285935082016115c8565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610159570180359067ffffffffffffffff82116101595760200191813603831361015957565b806116795750565b600080808093337ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1506114566114c1565b6116bc60009493859461020d6118ba565b91602083519301915af16116ce6114c1565b90156116d75750565b602081519101fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9190811015611750575b60051b0190565b61175861170f565b611749565b35611576816102b3565b909161178092811015611784575b60051b810190611620565b9091565b61178c61170f565b611775565b1561179857565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152fd5b6bffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000006001549260601b169116178060015560601c73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000167f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de600080a3565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163314801561195f575b1561190157565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e746044820152fd5b5060015460601c33146118fa565b906119f06119e873ffffffffffffffffffffffffffffffffffffffff9260405160208101917f19457468657265756d205369676e6564204d6573736167653a0a3332000000008352603c820152603c81526119c7816108e7565b5190206119e261020d60015460601c96610140810190611620565b90611bc2565b919091611a39565b16036119fb57600090565b600190565b60051115611a0a57565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b611a4281611a00565b80611a4a5750565b611a5381611a00565b60018103611aba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b611ac381611a00565b60028103611b2a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b80611b36600392611a00565b14611b3d57565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608490fd5b906041815114600014611bec57611780916020820151906060604084015193015160001a90611bf6565b5050600090600290565b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311611c875791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa15611c7a575b815173ffffffffffffffffffffffffffffffffffffffff811615611c74579190565b50600190565b611c826111fe565b611c52565b50505050600090600390565b600091829182602083519301915af16116ce6114c1565b60015460601c33148015611d1e575b15611cc057565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e6572000000000000000000000000000000000000000000006044820152fd5b50303314611cb956fea2646970667358221220f6fae4283af08d51e17bdf7ee352c434e0e4fb1ad67bed33946abd69c462feaa64736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var SimpleAccount__factory = /** @class */ (function (_super) {
    __extends(SimpleAccount__factory, _super);
    function SimpleAccount__factory() {
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
    SimpleAccount__factory.prototype.deploy = function (anEntryPoint, overrides) {
        return _super.prototype.deploy.call(this, anEntryPoint, overrides || {});
    };
    SimpleAccount__factory.prototype.getDeployTransaction = function (anEntryPoint, overrides) {
        return _super.prototype.getDeployTransaction.call(this, anEntryPoint, overrides || {});
    };
    SimpleAccount__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    SimpleAccount__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    SimpleAccount__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    SimpleAccount__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    SimpleAccount__factory.bytecode = _bytecode;
    SimpleAccount__factory.abi = _abi;
    return SimpleAccount__factory;
}(ethers_1.ContractFactory));
exports.SimpleAccount__factory = SimpleAccount__factory;