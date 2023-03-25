/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TokenPaymaster,
  TokenPaymasterInterface,
} from "../TokenPaymaster";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "accountFactory",
        type: "address",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "COST_OF_POST",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
  {
    inputs: [
      {
        internalType: "enum IPaymaster.PostOpMode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
    ],
    name: "postOp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "theFactory",
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
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "maxCost",
        type: "uint256",
      },
    ],
    name: "validatePaymasterUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200224438038062002244833981016040819052620000349162000327565b8180826200004233620000a0565b6001600160a01b031660805260046200005c8382620004bc565b5060056200006b8282620004bc565b5050506001600160a01b03831660a05262000088306001620000f0565b620000973033600019620001b9565b505050620005af565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0382166200014c5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b806003600082825462000160919062000588565b90915550506001600160a01b0382166000818152600160209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6001600160a01b0383166200021d5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840162000143565b6001600160a01b038216620002805760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840162000143565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b505050565b6001600160a01b0381168114620002fc57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b80516200032281620002e6565b919050565b6000806000606084860312156200033d57600080fd5b83516200034a81620002e6565b602085810151919450906001600160401b03808211156200036a57600080fd5b818701915087601f8301126200037f57600080fd5b815181811115620003945762000394620002ff565b604051601f8201601f19908116603f01168101908382118183101715620003bf57620003bf620002ff565b816040528281528a86848701011115620003d857600080fd5b600093505b82841015620003fc5784840186015181850187015292850192620003dd565b828411156200040e5760008684830101525b809750505050505050620004256040850162000315565b90509250925092565b600181811c908216806200044357607f821691505b6020821081036200046457634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002e157600081815260208120601f850160051c81016020861015620004935750805b601f850160051c820191505b81811015620004b4578281556001016200049f565b505050505050565b81516001600160401b03811115620004d857620004d8620002ff565b620004f081620004e984546200042e565b846200046a565b602080601f8311600181146200052857600084156200050f5750858301515b600019600386901b1c1916600185901b178555620004b4565b600085815260208120601f198616915b82811015620005595788860151825594840194600190910190840162000538565b5085821015620005785787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008219821115620005aa57634e487b7160e01b600052601160045260246000fd5b500190565b60805160a051611c376200060d6000396000818161039201526116fa015260008181610426015281816105970152818161070b015281816108ea015281816109b101528181610a4101528181610af401526111f80152611c376000f3fe6080604052600436106101a15760003560e01c80639f5ca221116100e1578063c23a5cea1161008a578063dd62ed3e11610064578063dd62ed3e1461049a578063f0dda65c146104ed578063f2fde38b1461050d578063f465c77e1461052d57600080fd5b8063c23a5cea1461045d578063c399ec881461047d578063d0e30db01461049257600080fd5b8063a9a23409116100bb578063a9a23409146103f4578063b0d691fe14610414578063bb9fe6bf1461044857600080fd5b80639f5ca22114610380578063a457c2d7146103b4578063a9059cbb146103d457600080fd5b8063313ce5671161014e578063715018a611610128578063715018a6146102f4578063796d4371146103095780638da5cb5b1461031f57806395d89b411461036b57600080fd5b8063313ce56714610275578063395093511461029157806370a08231146102b157600080fd5b806318160ddd1161017f57806318160ddd14610216578063205c28781461023557806323b872dd1461025557600080fd5b80630396cb60146101a657806306fdde03146101bb578063095ea7b3146101e6575b600080fd5b6101b96101b43660046117a8565b61055b565b005b3480156101c757600080fd5b506101d061060d565b6040516101dd9190611840565b60405180910390f35b3480156101f257600080fd5b50610206610201366004611875565b61069f565b60405190151581526020016101dd565b34801561022257600080fd5b506003545b6040519081526020016101dd565b34801561024157600080fd5b506101b9610250366004611875565b6106b7565b34801561026157600080fd5b506102066102703660046118a1565b61074f565b34801561028157600080fd5b50604051601281526020016101dd565b34801561029d57600080fd5b506102066102ac366004611875565b610773565b3480156102bd57600080fd5b506102276102cc3660046118e2565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205490565b34801561030057600080fd5b506101b96107bf565b34801561031557600080fd5b50610227613a9881565b34801561032b57600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101dd565b34801561037757600080fd5b506101d06107d3565b34801561038c57600080fd5b506103467f000000000000000000000000000000000000000000000000000000000000000081565b3480156103c057600080fd5b506102066103cf366004611875565b6107e2565b3480156103e057600080fd5b506102066103ef366004611875565b6108b8565b34801561040057600080fd5b506101b961040f3660046118ff565b6108c6565b34801561042057600080fd5b506103467f000000000000000000000000000000000000000000000000000000000000000081565b34801561045457600080fd5b506101b96108e0565b34801561046957600080fd5b506101b96104783660046118e2565b610964565b34801561048957600080fd5b50610227610a10565b6101b9610ac6565b3480156104a657600080fd5b506102276104b536600461198e565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260026020908152604080832093909416825291909152205490565b3480156104f957600080fd5b506101b9610508366004611875565b610b4e565b34801561051957600080fd5b506101b96105283660046118e2565b610b64565b34801561053957600080fd5b5061054d6105483660046119c7565b610bcd565b6040516101dd929190611a1b565b610563610bf0565b6040517f0396cb6000000000000000000000000000000000000000000000000000000000815263ffffffff821660048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690630396cb609034906024016000604051808303818588803b1580156105f157600080fd5b505af1158015610605573d6000803e3d6000fd5b505050505050565b60606004805461061c90611a3d565b80601f016020809104026020016040519081016040528092919081815260200182805461064890611a3d565b80156106955780601f1061066a57610100808354040283529160200191610695565b820191906000526020600020905b81548152906001019060200180831161067857829003601f168201915b5050505050905090565b6000336106ad818585610c71565b5060019392505050565b6106bf610bf0565b6040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063205c287890604401600060405180830381600087803b1580156105f157600080fd5b60003361075d858285610e24565b610768858585610ef5565b506001949350505050565b33600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906106ad90829086906107ba908790611a90565b610c71565b6107c7610bf0565b6107d1600061116b565b565b60606005805461061c90611a3d565b33600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190838110156108ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6107688286868403610c71565b6000336106ad818585610ef5565b6108ce6111e0565b6108da8484848461127f565b50505050565b6108e8610bf0565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561095057600080fd5b505af11580156108da573d6000803e3d6000fd5b61096c610bf0565b6040517fc23a5cea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063c23a5cea90602401600060405180830381600087803b1580156109f557600080fd5b505af1158015610a09573d6000803e3d6000fd5b5050505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610a9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac19190611acf565b905090565b6040517fb760faf90000000000000000000000000000000000000000000000000000000081523060048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063b760faf99034906024016000604051808303818588803b1580156109f557600080fd5b610b56610bf0565b610b6082826112b2565b5050565b610b6c610bf0565b610b9630610b8f60005473ffffffffffffffffffffffffffffffffffffffff1690565b6000610c71565b610b9f816113a7565b610bca30827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610c71565b50565b60606000610bd96111e0565b610be485858561145b565b91509150935093915050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108a2565b73ffffffffffffffffffffffffffffffffffffffff8316610d13576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016108a2565b73ffffffffffffffffffffffffffffffffffffffff8216610db6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016108a2565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600260209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108da5781811015610ee8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016108a2565b6108da8484848403610c71565b73ffffffffffffffffffffffffffffffffffffffff8316610f98576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016108a2565b73ffffffffffffffffffffffffffffffffffffffff821661103b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016108a2565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260016020526040902054818110156110f1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016108a2565b73ffffffffffffffffffffffffffffffffffffffff80851660008181526001602052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061115e9086815260200190565b60405180910390a36108da565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146107d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f53656e646572206e6f7420456e747279506f696e74000000000000000000000060448201526064016108a2565b600061128d838501856118e2565b905060006112a56112a0613a9885611a90565b6116a4565b9050610605823083610ef5565b73ffffffffffffffffffffffffffffffffffffffff821661132f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016108a2565b80600360008282546113419190611a90565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000818152600160209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6113af610bf0565b73ffffffffffffffffffffffffffffffffffffffff8116611452576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016108a2565b610bca8161116b565b6060600080611469846116a4565b9050613a988660a0013511611500576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f546f6b656e5061796d61737465723a2067617320746f6f206c6f7720666f722060448201527f706f73744f70000000000000000000000000000000000000000000000000000060648201526084016108a2565b61150d6040870187611ae8565b1590506115c15761151d866116b7565b8061152e6102cc60208901896118e2565b10156115bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f546f6b656e5061796d61737465723a206e6f2062616c616e636520287072652d60448201527f637265617465290000000000000000000000000000000000000000000000000060648201526084016108a2565b61163a565b806115d26102cc60208901896118e2565b101561163a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f546f6b656e5061796d61737465723a206e6f2062616c616e636500000000000060448201526064016108a2565b61164760208701876118e2565b6040805173ffffffffffffffffffffffffffffffffffffffff909216602083015201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190529660009650945050505050565b60006116b1606483611b54565b92915050565b60006116c66040830183611ae8565b6116d591601491600091611b8f565b6116de91611bb9565b60601c905073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168114610b60576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f546f6b656e5061796d61737465723a2077726f6e67206163636f756e7420666160448201527f63746f727900000000000000000000000000000000000000000000000000000060648201526084016108a2565b6000602082840312156117ba57600080fd5b813563ffffffff811681146117ce57600080fd5b9392505050565b6000815180845260005b818110156117fb576020818501810151868301820152016117df565b8181111561180d576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006117ce60208301846117d5565b73ffffffffffffffffffffffffffffffffffffffff81168114610bca57600080fd5b6000806040838503121561188857600080fd5b823561189381611853565b946020939093013593505050565b6000806000606084860312156118b657600080fd5b83356118c181611853565b925060208401356118d181611853565b929592945050506040919091013590565b6000602082840312156118f457600080fd5b81356117ce81611853565b6000806000806060858703121561191557600080fd5b84356003811061192457600080fd5b9350602085013567ffffffffffffffff8082111561194157600080fd5b818701915087601f83011261195557600080fd5b81358181111561196457600080fd5b88602082850101111561197657600080fd5b95986020929092019750949560400135945092505050565b600080604083850312156119a157600080fd5b82356119ac81611853565b915060208301356119bc81611853565b809150509250929050565b6000806000606084860312156119dc57600080fd5b833567ffffffffffffffff8111156119f357600080fd5b84016101608187031215611a0657600080fd5b95602085013595506040909401359392505050565b604081526000611a2e60408301856117d5565b90508260208301529392505050565b600181811c90821680611a5157607f821691505b602082108103611a8a577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60008219821115611aca577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500190565b600060208284031215611ae157600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611b1d57600080fd5b83018035915067ffffffffffffffff821115611b3857600080fd5b602001915036819003821315611b4d57600080fd5b9250929050565b600082611b8a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60008085851115611b9f57600080fd5b83861115611bac57600080fd5b5050820193919092039150565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008135818116916014851015611bf95780818660140360031b1b83161692505b50509291505056fea26469706673582212205fa1c4433771bc5ebbec47ad9b42c2d4287f56d953505d5110a73423dab9d16864736f6c634300080f0033";

type TokenPaymasterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenPaymasterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenPaymaster__factory extends ContractFactory {
  constructor(...args: TokenPaymasterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    accountFactory: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenPaymaster> {
    return super.deploy(
      accountFactory,
      _symbol,
      _entryPoint,
      overrides || {}
    ) as Promise<TokenPaymaster>;
  }
  override getDeployTransaction(
    accountFactory: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      accountFactory,
      _symbol,
      _entryPoint,
      overrides || {}
    );
  }
  override attach(address: string): TokenPaymaster {
    return super.attach(address) as TokenPaymaster;
  }
  override connect(signer: Signer): TokenPaymaster__factory {
    return super.connect(signer) as TokenPaymaster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenPaymasterInterface {
    return new utils.Interface(_abi) as TokenPaymasterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenPaymaster {
    return new Contract(address, _abi, signerOrProvider) as TokenPaymaster;
  }
}
