<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Button,
		Chevron,
		Dropdown,
		DropdownItem
	} from 'flowbite-svelte';
	import { userData, web3auth } from '$lib/stores';
</script>

<Navbar let:hidden let:toggle class="!bg-transparent">
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white !text-blue">
			AADefi
		</span>
	</NavBrand>
	<div class="flex md:order-2">
		{#if $userData?.name}
			<Button color="light" class="!bg-transparent !p-1">
				<Chevron>
					<div class="flex items-center gap-2">
						<img
							src={$userData.profileImage}
							alt="avatar"
							class="rounded-full border-gray-800  w-8"
						/>
						<span>{$userData.name}</span>
					</div>
				</Chevron>
			</Button>
			<Dropdown>
				<div slot="header" class="px-4 py-2">
					<span class="block text-sm text-gray-900 dark:text-white">{$userData.email}</span>
				</div>
				<DropdownItem>My wallet</DropdownItem>
				<DropdownItem>Settings</DropdownItem>
				<DropdownItem slot="footer" class="text-red-600" on:click={() => $web3auth?.logout()}
					>Log out</DropdownItem
				>
			</Dropdown>
			<div class="flex items-center gap-2" />
		{:else}
			<Button on:click={() => $web3auth.connect()}>Login</Button>
		{/if}
		<NavHamburger on:click={toggle} />
	</div>
	<NavUl class="order-1">
		<NavLi href="/swap">Swap</NavLi>
	</NavUl>
</Navbar>

<!-- <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
<a href="/">Home</a>
</li> -->
<style></style>
