/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  BrokenBLSAccountFactory,
  BrokenBLSAccountFactoryInterface,
} from "../BrokenBLSAccountFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "aggregator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "accountImplementation",
    outputs: [
      {
        internalType: "contract BrokenBLSAccount",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
      {
        internalType: "uint256[4]",
        name: "aPublicKey",
        type: "uint256[4]",
      },
    ],
    name: "createAccount",
    outputs: [
      {
        internalType: "contract BrokenBLSAccount",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
      {
        internalType: "uint256[4]",
        name: "aPublicKey",
        type: "uint256[4]",
      },
    ],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051612ede380380612ede83398101604081905261002f916100aa565b818160405161003d90610085565b6001600160a01b03928316815291166020820152604001604051809103906000f080158015610070573d6000803e3d6000fd5b506001600160a01b0316608052506100e49050565b6120c680610e1883390190565b6001600160a01b03811681146100a757600080fd5b50565b600080604083850312156100bd57600080fd5b82516100c881610092565b60208401519092506100d981610092565b809150509250929050565b608051610d0d61010b60003960008181604b0152818160f7015261020d0152610d0d6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806311464fbe1461004657806319c2a1b214610096578063de3398dd146100a9575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61006d6100a436600461038e565b6100bc565b61006d6100b736600461038e565b6101de565b6000806100c984846101de565b905073ffffffffffffffffffffffffffffffffffffffff81163b80156100f1575090506101d8565b8460001b7f0000000000000000000000000000000000000000000000000000000000000000856040516024016101279190610418565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fee472f3600000000000000000000000000000000000000000000000000000000179052516101a790610352565b6101b2929190610479565b8190604051809103906000f59050801580156101d2573d6000803e3d6000fd5b50925050505b92915050565b60006103198360001b604051806020016101f790610352565b6020820181038252601f19601f820116604052507f00000000000000000000000000000000000000000000000000000000000000008560405160240161023d9190610418565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fee472f360000000000000000000000000000000000000000000000000000000017905290516102c293929101610479565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526102fe92916020016104e7565b60405160208183030381529060405280519060200120610320565b9392505050565b60006103198383306000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b6107c18061051783390190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060a083850312156103a157600080fd5b82359150602084603f8501126103b657600080fd5b6040516080810181811067ffffffffffffffff821117156103d9576103d961035f565b6040528060a08601878111156103ee57600080fd5b8387015b8181101561040957803583529184019184016103f2565b50505080925050509250929050565b60808101818360005b6004811015610440578151835260209283019290910190600101610421565b50505092915050565b60005b8381101561046457818101518382015260200161044c565b83811115610473576000848401525b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600082518060408401526104b4816060850160208701610449565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016060019392505050565b600083516104f9818460208801610449565b83519083019061050d818360208801610449565b0194935050505056fe60806040526040516107c13803806107c183398101604081905261002291610321565b61002e82826000610035565b505061043e565b61003e8361006b565b60008251118061004b5750805b156100665761006483836100ab60201b6100291760201c565b505b505050565b610074816100d7565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100d0838360405180606001604052806027815260200161079a602791396101a9565b9392505050565b6100ea8161022260201b6100551760201c565b6101515760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101887f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61023160201b6100711760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060600080856001600160a01b0316856040516101c691906103ef565b600060405180830381855af49150503d8060008114610201576040519150601f19603f3d011682016040523d82523d6000602084013e610206565b606091505b50909250905061021886838387610234565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102a357825160000361029c576001600160a01b0385163b61029c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610148565b50816102ad565b6102ad83836102b5565b949350505050565b8151156102c55781518083602001fd5b8060405162461bcd60e51b8152600401610148919061040b565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103105781810151838201526020016102f8565b838111156100645750506000910152565b6000806040838503121561033457600080fd5b82516001600160a01b038116811461034b57600080fd5b60208401519092506001600160401b038082111561036857600080fd5b818501915085601f83011261037c57600080fd5b81518181111561038e5761038e6102df565b604051601f8201601f19908116603f011681019083821181831017156103b6576103b66102df565b816040528281528860208487010111156103cf57600080fd5b6103e08360208301602088016102f5565b80955050505050509250929050565b600082516104018184602087016102f5565b9190910192915050565b602081526000825180602084015261042a8160408501602087016102f5565b601f01601f19169190910160400192915050565b61034d8061044d6000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610074565b6100b9565b565b606061004e83836040518060600160405280602781526020016102f1602791396100dd565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b90565b60006100b47f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e8080156100d8573d6000f35b3d6000fd5b60606000808573ffffffffffffffffffffffffffffffffffffffff16856040516101079190610283565b600060405180830381855af49150503d8060008114610142576040519150601f19603f3d011682016040523d82523d6000602084013e610147565b606091505b509150915061015886838387610162565b9695505050505050565b606083156101fd5782516000036101f65773ffffffffffffffffffffffffffffffffffffffff85163b6101f6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b5081610207565b610207838361020f565b949350505050565b81511561021f5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ed919061029f565b60005b8381101561026e578181015183820152602001610256565b8381111561027d576000848401525b50505050565b60008251610295818460208701610253565b9190910192915050565b60208152600082518060208401526102be816040850160208701610253565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201cd78ab6a31213989661cff2d7d05fc9b9c38b1a848e8249e2e398659a9eb7e364736f6c634300080f0033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212205cbdc2b3e282fa175ab7c831178cc1f58c3aae1b1d09bed26a4cc1fde5db341364736f6c634300080f003360e0604052306080523480156200001557600080fd5b50604051620020c6380380620020c683398101604081905262000038916200013f565b6001600160a01b03821660a052816200005062000064565b506001600160a01b031660c052506200017e565b600054610100900460ff1615620000d15760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff908116101562000124576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6001600160a01b03811681146200013c57600080fd5b50565b600080604083850312156200015357600080fd5b8251620001608162000126565b6020840151909250620001738162000126565b809150509250929050565b60805160a05160c051611ecb620001fb60003960008181610137015261068a01526000818161029001528181610703015281816107aa01528181610b8c01528181610f2e0152818161128a015261152c015260008181610486015281816105360152818161086e0152818161091e0152610a670152611ecb6000f3fe6080604052600436106100f75760003560e01c80638da5cb5b1161008a578063c399ec8811610059578063c399ec88146102d4578063c4d66de8146102e9578063e02afbae14610309578063ee472f361461032b57600080fd5b80638da5cb5b14610221578063affed0e01461025e578063b0d691fe14610281578063b61d27f6146102b457600080fd5b80634a58db19116100c65780634a58db19146101d15780634d44560d146101d95780634f1ef286146101f957806352d1902d1461020c57600080fd5b806318dfb3c714610103578063245a7bfc146101255780633659cfe6146101835780633a871cdd146101a357600080fd5b366100fe57005b600080fd5b34801561010f57600080fd5b5061012361011e3660046118ef565b61034b565b005b34801561013157600080fd5b506101597f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561018f57600080fd5b5061012361019e36600461197d565b61046f565b3480156101af57600080fd5b506101c36101be36600461199a565b610674565b60405190815260200161017a565b610123610701565b3480156101e557600080fd5b506101236101f43660046119ee565b6107a0565b610123610207366004611a98565b610857565b34801561021857600080fd5b506101c3610a4d565b34801561022d57600080fd5b50600154610159906c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1681565b34801561026a57600080fd5b506001546bffffffffffffffffffffffff166101c3565b34801561028d57600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610159565b3480156102c057600080fd5b506101236102cf366004611b5e565b610b39565b3480156102e057600080fd5b506101c3610b88565b3480156102f557600080fd5b5061012361030436600461197d565b610c40565b34801561031557600080fd5b5061031e610dd3565b60405161017a9190611be7565b34801561033757600080fd5b50610123610346366004611c18565b610de8565b610353610f16565b8281146103c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b83811015610468576104568585838181106103e1576103e1611c96565b90506020020160208101906103f6919061197d565b600085858581811061040a5761040a611c96565b905060200281019061041c9190611cc5565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610fe992505050565b8061046081611d59565b9150506103c4565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610534576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084016103b8565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166105a97f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff161461064c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f7879000000000000000000000000000000000000000060648201526084016103b8565b61065581611066565b604080516000808252602082019092526106719183919061106e565b50565b600061067e611272565b604080516060810182527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16808252600060208301819052919092015290506106df6040850185611cc5565b90506000036106f1576106f184611311565b6106fa826113da565b9392505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff919091169063b760faf99034906024016000604051808303818588803b15801561078c57600080fd5b505af1158015610468573d6000803e3d6000fd5b6107a8611445565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b15801561083b57600080fd5b505af115801561084f573d6000803e3d6000fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016300361091c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084016103b8565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166109917f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610a34576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f7879000000000000000000000000000000000000000060648201526084016103b8565b610a3d82611066565b610a498282600161106e565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610b14576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016103b8565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610b41610f16565b610b82848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610fe992505050565b50505050565b60007f00000000000000000000000000000000000000000000000000000000000000006040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff91909116906370a0823190602401602060405180830381865afa158015610c17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3b9190611d91565b905090565b600054610100900460ff1615808015610c605750600054600160ff909116105b80610c7a5750303b158015610c7a575060005460ff166001145b610d06576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016103b8565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558015610d6457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b610d6d826114e0565b8015610a4957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b610ddb611885565b610de3611885565b919050565b600054610100900460ff1615808015610e085750600054600160ff909116105b80610e225750303b158015610e22575060005460ff166001145b610eae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016103b8565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558015610f0c57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b610d6d60006114e0565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480610f8157506001546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1633145b610fe7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e7460448201526064016103b8565b565b6000808473ffffffffffffffffffffffffffffffffffffffff1684846040516110129190611dd6565b60006040518083038185875af1925050503d806000811461104f576040519150601f19603f3d011682016040523d82523d6000602084013e611054565b606091505b50915091508161046857805160208201fd5b610671611445565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156110a6576110a183611578565b505050565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561112b575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261112891810190611d91565b60015b6111b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f74205555505300000000000000000000000000000000000060648201526084016103b8565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114611266576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c6555554944000000000000000000000000000000000000000000000060648201526084016103b8565b506110a1838383611682565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610fe7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e740000000060448201526064016103b8565b600180546020830135916bffffffffffffffffffffffff90911690600061133783611df2565b91906101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506bffffffffffffffffffffffff1614610671576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6163636f756e743a20696e76616c6964206e6f6e63650000000000000000000060448201526064016103b8565b80156106715760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d8060008114610468576040519150601f19603f3d011682016040523d82523d6000602084013e610468565b6001546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1633148061147a57503330145b610fe7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e65720000000000000000000000000000000000000000000060448201526064016103b8565b600180546bffffffffffffffffffffffff166c0100000000000000000000000073ffffffffffffffffffffffffffffffffffffffff8481168202929092179283905560405192048116917f0000000000000000000000000000000000000000000000000000000000000000909116907f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de90600090a350565b73ffffffffffffffffffffffffffffffffffffffff81163b61161c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e74726163740000000000000000000000000000000000000060648201526084016103b8565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b61168b836116a7565b6000825111806116985750805b156110a157610b8283836116f4565b6116b081611578565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606106fa8383604051806060016040528060278152602001611e6f6027913960606000808573ffffffffffffffffffffffffffffffffffffffff168560405161173e9190611dd6565b600060405180830381855af49150503d8060008114611779576040519150601f19603f3d011682016040523d82523d6000602084013e61177e565b606091505b509150915061178f86838387611799565b9695505050505050565b6060831561182f5782516000036118285773ffffffffffffffffffffffffffffffffffffffff85163b611828576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103b8565b5081611839565b6118398383611841565b949350505050565b8151156118515781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b89190611e1d565b60405180608001604052806004906020820280368337509192915050565b60008083601f8401126118b557600080fd5b50813567ffffffffffffffff8111156118cd57600080fd5b6020830191508360208260051b85010111156118e857600080fd5b9250929050565b6000806000806040858703121561190557600080fd5b843567ffffffffffffffff8082111561191d57600080fd5b611929888389016118a3565b9096509450602087013591508082111561194257600080fd5b5061194f878288016118a3565b95989497509550505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461067157600080fd5b60006020828403121561198f57600080fd5b81356106fa8161195b565b6000806000606084860312156119af57600080fd5b833567ffffffffffffffff8111156119c657600080fd5b840161016081870312156119d957600080fd5b95602085013595506040909401359392505050565b60008060408385031215611a0157600080fd5b8235611a0c8161195b565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611a9057611a90611a1a565b604052919050565b60008060408385031215611aab57600080fd5b8235611ab68161195b565b915060208381013567ffffffffffffffff80821115611ad457600080fd5b818601915086601f830112611ae857600080fd5b813581811115611afa57611afa611a1a565b611b2a847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611a49565b91508082528784828501011115611b4057600080fd5b80848401858401376000848284010152508093505050509250929050565b60008060008060608587031215611b7457600080fd5b8435611b7f8161195b565b935060208501359250604085013567ffffffffffffffff80821115611ba357600080fd5b818701915087601f830112611bb757600080fd5b813581811115611bc657600080fd5b886020828501011115611bd857600080fd5b95989497505060200194505050565b60808101818360005b6004811015611c0f578151835260209283019290910190600101611bf0565b50505092915050565b600060808284031215611c2a57600080fd5b82601f830112611c3957600080fd5b6040516080810181811067ffffffffffffffff82111715611c5c57611c5c611a1a565b604052806080840185811115611c7157600080fd5b845b81811015611c8b578035835260209283019201611c73565b509195945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611cfa57600080fd5b83018035915067ffffffffffffffff821115611d1557600080fd5b6020019150368190038213156118e857600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611d8a57611d8a611d2a565b5060010190565b600060208284031215611da357600080fd5b5051919050565b60005b83811015611dc5578181015183820152602001611dad565b83811115610b825750506000910152565b60008251611de8818460208701611daa565b9190910192915050565b60006bffffffffffffffffffffffff808316818103611e1357611e13611d2a565b6001019392505050565b6020815260008251806020840152611e3c816040850160208701611daa565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220e8216bd5bed96c3054900347338e146658e0b8f83200aeb2bba94c6d88d97aac64736f6c634300080f0033";

type BrokenBLSAccountFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BrokenBLSAccountFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BrokenBLSAccountFactory__factory extends ContractFactory {
  constructor(...args: BrokenBLSAccountFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    entryPoint: PromiseOrValue<string>,
    aggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BrokenBLSAccountFactory> {
    return super.deploy(
      entryPoint,
      aggregator,
      overrides || {}
    ) as Promise<BrokenBLSAccountFactory>;
  }
  override getDeployTransaction(
    entryPoint: PromiseOrValue<string>,
    aggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(entryPoint, aggregator, overrides || {});
  }
  override attach(address: string): BrokenBLSAccountFactory {
    return super.attach(address) as BrokenBLSAccountFactory;
  }
  override connect(signer: Signer): BrokenBLSAccountFactory__factory {
    return super.connect(signer) as BrokenBLSAccountFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BrokenBLSAccountFactoryInterface {
    return new utils.Interface(_abi) as BrokenBLSAccountFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BrokenBLSAccountFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BrokenBLSAccountFactory;
  }
}
