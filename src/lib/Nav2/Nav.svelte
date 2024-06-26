<script lang="ts">
	import { type Snippet } from 'svelte';
	import { createNavState, navState } from './navState.svelte';
	type Props = {
		icon: Snippet;
		children: Snippet;
	};

	let { icon, children }: Props = $props();

	//const navState = createNavState();

	function hideMenus() {
		navState.hovering = null;
	}
</script>

<nav class="flex w-full max-w-none flex-row flex-nowrap gap-6" onmouseleave={hideMenus}>
	{@render icon()}
	<ul class="flex flex-row flex-nowrap gap-4" role="navigation">
		{@render children()}
	</ul>
</nav>
