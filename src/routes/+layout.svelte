<script>
	import { HomeIcon } from 'lucide-svelte';
	import '../app.css';
	import megaMenuData from '$lib/dummy';

	import { Nav, NavPanel, NavGroup, NavFeatured } from '$lib/Nav';

	let { children } = $props();
</script>

{#snippet icon()}
	<HomeIcon />
{/snippet}

<Nav {icon}></Nav>
{@render children()}
