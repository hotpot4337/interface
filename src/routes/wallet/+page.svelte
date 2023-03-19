<script lang="ts">
  import { privKey, wallet } from "$lib/stores";
  import { Button, Heading } from "flowbite-svelte";
  import { Wallet } from "ethers";
  import { onMount } from "svelte";
	import type { Web3Auth, Web3AuthOptions } from "@web3auth/modal";
  
  let web3auth: Web3Auth;
  onMount(async () => {
    const {CHAIN_NAMESPACES} = await import("@web3auth/base");
    const {Web3Auth} = await import("@web3auth/modal");
    const w3aOptions: Web3AuthOptions = {
      clientId: "BC4YzMOp19gUIoce1rLpXIXhfV5q4Np5sdfwc5jjVz_Jl8W0rJj-wU9nVcCW-VxG7Sr2TMGrrv_dPL7UJmyrBbc",
      web3AuthNetwork: "testnet",
      chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x1",
            rpcTarget: "https://rpc.ankr.com/eth", // This is the public RPC we have added, please pass on your own endpoint while creating an app
          },
      uiConfig: {
        theme: "light",
        loginMethodsOrder: ["twitter", "google", "github", "discord"],
        defaultLanguage: "en",
      },
    } 
    web3auth = new Web3Auth(w3aOptions);
    const modal = await web3auth.initModal();
  })

  async function connect() {
    const provider = await web3auth.connect();
  }

  
  function generate() {
    const wallet = Wallet.createRandom();
    $privKey = wallet.privateKey;
  }
</script>

<section class="text-center mt-24">
  {#if $privKey}
    <h2>{$wallet?.address}</h2>
    <Button on:click={() => $privKey = ""}  color="red" size="sm">Delte wallet</Button>
  {:else}
    <Heading tag="h1" class="text-2xl mb-2">Create wallet</Heading>
    <p class="max-w-xl m-auto mb-4">
      Create a magic wallet for <b>gasless transactions</b> and
      <b>2fa protection</b>! You will see a QR code to scan with Google
      Authenticator
    </p>

    <Button on:click={generate} color="dark">Generate wallet 🪄</Button>
    <Button on:click={connect}>Social login</Button>
  {/if}
</section>

