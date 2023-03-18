<script>
    import { privKey, wallet } from "$lib/stores";
    import { Button, Heading } from "flowbite-svelte";
    import { Wallet } from "ethers";
    
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
    {/if}
  </section>
  
