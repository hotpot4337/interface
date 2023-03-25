import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ComplexAccount, ComplexAccountInterface } from "../ComplexAccount";
type ComplexAccountConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ComplexAccount__factory extends ContractFactory {
    constructor(...args: ComplexAccountConstructorParams);
    deploy(anEntryPoint: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ComplexAccount>;
    getDeployTransaction(anEntryPoint: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ComplexAccount;
    connect(signer: Signer): ComplexAccount__factory;
    static readonly bytecode = "0x60c0604052306080523480156200001557600080fd5b506040516200221038038062002210833981016040819052620000389162000118565b6001600160a01b03811660a0526200004f62000056565b506200014a565b600054610100900460ff1615620000c35760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff908116101562000116576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6000602082840312156200012b57600080fd5b81516001600160a01b03811681146200014357600080fd5b9392505050565b60805160a05161205a620001b6600039600081816102910152818161067a0152818161072101528181610c9901528181610d65015281816110bc0152611482015260008181610445015281816104f5015281816107e50152818161089501526109de015261205a6000f3fe6080604052600436106100ec5760003560e01c80634f1ef2861161008a578063b0d691fe11610059578063b0d691fe14610282578063b61d27f6146102b5578063be13f47c146102d5578063c399ec88146102f557600080fd5b80634f1ef286146101d557806352d1902d146101e85780638da5cb5b146101fd578063affed0e01461025f57600080fd5b80633a871cdd116100c65780633a871cdd146101635780634a58db19146101835780634ca4ed1a1461018b5780634d44560d146101b557600080fd5b806318dfb3c7146100f85780632eb4a7ab1461011a5780633659cfe61461014357600080fd5b366100f357005b600080fd5b34801561010457600080fd5b50610118610113366004611b31565b61030a565b005b34801561012657600080fd5b5061013060035481565b6040519081526020015b60405180910390f35b34801561014f57600080fd5b5061011861015e366004611bbf565b61042e565b34801561016f57600080fd5b5061013061017e366004611bdc565b610633565b610118610678565b34801561019757600080fd5b506002546101a59060ff1681565b604051901515815260200161013a565b3480156101c157600080fd5b506101186101d0366004611c30565b610717565b6101186101e3366004611c8b565b6107ce565b3480156101f457600080fd5b506101306109c4565b34801561020957600080fd5b5060015461023a906c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161013a565b34801561026b57600080fd5b506001546bffffffffffffffffffffffff16610130565b34801561028e57600080fd5b507f000000000000000000000000000000000000000000000000000000000000000061023a565b3480156102c157600080fd5b506101186102d0366004611d6d565b610ab0565b3480156102e157600080fd5b506101186102f0366004611c30565b610aff565b34801561030157600080fd5b50610130610c95565b610312610d4d565b828114610380576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b83811015610427576104158585838181106103a0576103a0611df6565b90506020020160208101906103b59190611bbf565b60008585858181106103c9576103c9611df6565b90506020028101906103db9190611e25565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610e2092505050565b8061041f81611eb9565b915050610383565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001630036104f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610377565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166105687f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff161461060b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610377565b61061481610e9d565b6040805160008082526020820190925261063091839190610ea5565b50565b600061063d6110a4565b6106478484611143565b90506106566040850185611e25565b90506000036106685761066884611235565b610671826112fe565b9392505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff919091169063b760faf99034906024016000604051808303818588803b15801561070357600080fd5b505af1158015610427573d6000803e3d6000fd5b61071f611369565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b1580156107b257600080fd5b505af11580156107c6573d6000803e3d6000fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610893576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610377565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166109087f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16146109ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610377565b6109b482610e9d565b6109c082826001610ea5565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610a8b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610377565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610ab8610d4d565b610af9848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610e2092505050565b50505050565b600054610100900460ff1615808015610b1f5750600054600160ff909116105b80610b395750303b158015610b39575060005460ff166001145b610bc5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610377565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558015610c2357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b610c2d8383611404565b8015610c9057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b60007f00000000000000000000000000000000000000000000000000000000000000006040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff91909116906370a0823190602401602060405180830381865afa158015610d24573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d489190611ef1565b905090565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480610db857506001546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1633145b610e1e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e746044820152606401610377565b565b6000808473ffffffffffffffffffffffffffffffffffffffff168484604051610e499190611f36565b60006040518083038185875af1925050503d8060008114610e86576040519150601f19603f3d011682016040523d82523d6000602084013e610e8b565b606091505b50915091508161042757805160208201fd5b610630611369565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610ed857610c90836114cf565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610f5d575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610f5a91810190611ef1565b60015b610fe9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610377565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114611098576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610377565b50610c908383836115d9565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610e1e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152606401610377565b60008061119d836040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b90506111ed6111b0610140860186611e25565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525085939250506115fe9050565b6001546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff90811691161461122957600191505061122f565b60009150505b92915050565b600180546020830135916bffffffffffffffffffffffff90911690600061125b83611f52565b91906101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506bffffffffffffffffffffffff1614610630576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6163636f756e743a20696e76616c6964206e6f6e6365000000000000000000006044820152606401610377565b80156106305760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d8060008114610427576040519150601f19603f3d011682016040523d82523d6000602084013e610427565b6001546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1633148061139e57503330145b610e1e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e6572000000000000000000000000000000000000000000006044820152606401610377565b6002805460017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00909116811790915580546bffffffffffffffffffffffff166c0100000000000000000000000073ffffffffffffffffffffffffffffffffffffffff85811682029290921792839055600384905560405192048116917f0000000000000000000000000000000000000000000000000000000000000000909116907f67e89dcb7ecc90273966229da95886929d773faab2fba04ec8d14ed4120a4c4890600090a35050565b73ffffffffffffffffffffffffffffffffffffffff81163b611573576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610377565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6115e283611622565b6000825111806115ef5750805b15610c9057610af9838361166f565b600080600061160d8585611694565b9150915061161a816116d9565b509392505050565b61162b816114cf565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606106718383604051806060016040528060278152602001611ffe6027913961188c565b60008082516041036116ca5760208301516040840151606085015160001a6116be87828585611911565b945094505050506116d2565b506000905060025b9250929050565b60008160048111156116ed576116ed611f7d565b036116f55750565b600181600481111561170957611709611f7d565b03611770576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610377565b600281600481111561178457611784611f7d565b036117eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610377565b60038160048111156117ff576117ff611f7d565b03610630576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610377565b60606000808573ffffffffffffffffffffffffffffffffffffffff16856040516118b69190611f36565b600060405180830381855af49150503d80600081146118f1576040519150601f19603f3d011682016040523d82523d6000602084013e6118f6565b606091505b509150915061190786838387611a00565b9695505050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561194857506000905060036119f7565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561199c573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166119f0576000600192509250506119f7565b9150600090505b94509492505050565b60608315611a96578251600003611a8f5773ffffffffffffffffffffffffffffffffffffffff85163b611a8f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610377565b5081611aa0565b611aa08383611aa8565b949350505050565b815115611ab85781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103779190611fac565b60008083601f840112611afe57600080fd5b50813567ffffffffffffffff811115611b1657600080fd5b6020830191508360208260051b85010111156116d257600080fd5b60008060008060408587031215611b4757600080fd5b843567ffffffffffffffff80821115611b5f57600080fd5b611b6b88838901611aec565b90965094506020870135915080821115611b8457600080fd5b50611b9187828801611aec565b95989497509550505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461063057600080fd5b600060208284031215611bd157600080fd5b813561067181611b9d565b600080600060608486031215611bf157600080fd5b833567ffffffffffffffff811115611c0857600080fd5b84016101608187031215611c1b57600080fd5b95602085013595506040909401359392505050565b60008060408385031215611c4357600080fd5b8235611c4e81611b9d565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060408385031215611c9e57600080fd5b8235611ca981611b9d565b9150602083013567ffffffffffffffff80821115611cc657600080fd5b818501915085601f830112611cda57600080fd5b813581811115611cec57611cec611c5c565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715611d3257611d32611c5c565b81604052828152886020848701011115611d4b57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60008060008060608587031215611d8357600080fd5b8435611d8e81611b9d565b935060208501359250604085013567ffffffffffffffff80821115611db257600080fd5b818701915087601f830112611dc657600080fd5b813581811115611dd557600080fd5b886020828501011115611de757600080fd5b95989497505060200194505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e5a57600080fd5b83018035915067ffffffffffffffff821115611e7557600080fd5b6020019150368190038213156116d257600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611eea57611eea611e8a565b5060010190565b600060208284031215611f0357600080fd5b5051919050565b60005b83811015611f25578181015183820152602001611f0d565b83811115610af95750506000910152565b60008251611f48818460208701611f0a565b9190910192915050565b60006bffffffffffffffffffffffff808316818103611f7357611f73611e8a565b6001019392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6020815260008251806020840152611fcb816040850160208701611f0a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220e4de7c45ff1e70bf27f9874ccfcc3a4fe95256b99cde8c8f183ae162d389915f64736f6c634300080f0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IEntryPoint";
            readonly name: "anEntryPoint";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "previousAdmin";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "AdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "beacon";
            readonly type: "address";
        }];
        readonly name: "BeaconUpgraded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract IEntryPoint";
            readonly name: "entryPoint";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "ComplexAccountInitialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "addDeposit";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "entryPoint";
        readonly outputs: readonly [{
            readonly internalType: "contract IEntryPoint";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "dest";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "func";
            readonly type: "bytes";
        }];
        readonly name: "execute";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "dest";
            readonly type: "address[]";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "func";
            readonly type: "bytes[]";
        }];
        readonly name: "executeBatch";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDeposit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "anOwner";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_merkleRoot";
            readonly type: "bytes32";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "isComplex";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "merkleRoot";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "nonce";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "upgradeTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "initCode";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "callGasLimit";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "verificationGasLimit";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "preVerificationGas";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxFeePerGas";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxPriorityFeePerGas";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "paymasterAndData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "signature";
                readonly type: "bytes";
            }];
            readonly internalType: "struct UserOperation";
            readonly name: "userOp";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32";
            readonly name: "userOpHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "missingAccountFunds";
            readonly type: "uint256";
        }];
        readonly name: "validateUserOp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "validationData";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "withdrawAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "withdrawDepositTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): ComplexAccountInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ComplexAccount;
}
export {};