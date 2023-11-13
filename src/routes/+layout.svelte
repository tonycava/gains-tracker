<script lang="ts">
	import '@styles/app.css';
	import 'flowbite';
	import Navbar from '@components/layout/Navbar.svelte';
	import { page } from '$app/stores';
	import { user } from '@stores/user.store';
	import { initFlowbite } from 'flowbite';
	import { onMount } from 'svelte';

	onMount(() => {
		initFlowbite();
	})

	const hideNavbar = [
		'/login',
		'/register'
	];

	export let data;

  $: user.set(data.user);
	$: needToShowNavbar = hideNavbar.includes($page.url.pathname);
</script>

{#if !needToShowNavbar}
  <Navbar />
{/if}

<slot />