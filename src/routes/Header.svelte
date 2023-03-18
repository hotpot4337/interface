<script>
  import { page } from "$app/stores";
  import logo from "$lib/images/svelte-logo.svg";
  import github from "$lib/images/github.svg";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Button,
  } from "flowbite-svelte";
  import { privKey } from "$lib/stores";
</script>

<Navbar let:hidden let:toggle class="!bg-transparent">
  <NavBrand href="/">
    <img
      src="https://www.graphicsprings.com/filestorage/stencils/4b40cf984e9b9b012f27dc489588b46c.svg"
      class="mr-2 h-6 sm:h-9"
      alt="Logo"
    />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white !text-blue"
    >
      AADefi
    </span>
  </NavBrand>
  <div class="flex md:order-2">
    <a href="https://github.com/">
      <img src={github} alt="GitHub" class="w-10 mr-3" />
    </a>
    <Button href="/wallet" size="sm">
      {$privKey ? "My wallet" : "Create wallet"}</Button
    >
    <NavHamburger on:click={toggle} />
  </div>
  <NavUl class="order-1">
    <NavLi href="/link">Home</NavLi>
  </NavUl>
</Navbar>

<!-- <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
<a href="/">Home</a>
</li> -->
<style></style>
