<script lang="ts">
	import type { Snippet } from 'svelte';
	import NavGroup from './NavGroup.svelte';
	import NavFeatured from './NavFeatured.svelte';
	import NavPanel from './NavPanel.svelte';
	type NavProps = {
		icon: Snippet;
		megaMenuData: Array<{
			id: string;
			title: string;
		}>;
		children?: Snippet;
	};
	let { icon, megaMenuData, children }: NavProps = $props();

	let hovering = $state<number | null>(null);
	let popoverLeft = $state<number | null>(null);
	let popoverHeight = $state<number | null>(null);

	let refs = $state<HTMLElement[]>([]); // tracks all the nav items

	// $inspect(hovering);

	const onMouseEnter = (index: number, el: HTMLElement) => {
		hovering = index;
		popoverLeft = el.offsetLeft;
		const menuElement = refs[index];
		if (menuElement) {
			popoverHeight = el.offsetHeight;
		}
	};
</script>

<!-- 
NavBar
	NavItem
		Menu
			NavGroup || NavFeatured
-->

<!-- @component Navigation  -->

<nav
	class="flex flex-row flex-nowrap justify-stretch gap-10 px-2 py-4"
	onmouseleave={() => (hovering = null)}
>
	{#if icon}
		{@render icon()}
	{/if}
	<ul class="flex flex-1 flex-row flex-nowrap gap-5">
		{#each megaMenuData as section, i}
			<!-- 
			
			<NavPanel /> 
			
			-->
			<NavPanel
				bind:hovering
				bind:popoverHeight
				bind:popoverLeft
				bind:refs
				tabindex={i}
				{onMouseEnter}
				uid={section.id}
				title={section.title}
			>
				<!-- JS Gotcha - hovering = 0 is falsy -->
				<!-- {@render children()} -->

				{#if section.columns && hovering !== null}
					{#each section.columns as column}
						<NavGroup title={column.title} links={column.items} />
					{/each}
				{/if}
				{#if section.content && hovering !== null}
					<NavGroup title="Popular Posts" links={section.content.popularPosts} />

					<NavFeatured
						title="Latest Post"
						image={section.content.latestPost.image}
						link={{
							name: section.content.latestPost.title,
							link: section.content.latestPost.link
						}}
					/>
				{/if}
			</NavPanel>
		{/each}
	</ul>
</nav>

<!-- 

-->

<style>
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
