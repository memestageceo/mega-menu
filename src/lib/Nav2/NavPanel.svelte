<script lang="ts">
	import type { NavPanelData } from './types';
	import { navState } from './navState.svelte';

	let { label, link, featured, index, children }: NavPanelData = $props();

	const showPanel = (e: Event) => {
		navState.hovering = index;

		const target = e.target as HTMLElement;
		navState.popoverLeft = target.offsetLeft;
		navState.popoverHeight = target.offsetHeight;
	};
</script>

<li data-id={index} onmouseenter={showPanel} id="nav-panel">
	<a href={link} class="text-blue-600 hover:underline">{label}</a>
	{#if navState.hovering !== null}
		<div
			class={`absolute top-6 gap-7 rounded-md bg-red-400 px-2 py-3 shadow-xl transition-transform duration-100 ease-in-out ${navState.hovering === index ? 'opacity-100' : 'pointer-events-none opacity-0'} ${navState.hovering === index ? 'transform-none' : navState.hovering! > index ? '-translate-x-24' : 'translate-x-24'} `}
			aria-hidden={navState.hovering !== index}
		>
			<div class="flex max-w-2xl flex-row flex-wrap gap-3">
				{@render children()}
				{#if featured}
					<div class="col-span-2 w-full overflow-hidden">
						{@render featured()}
					</div>
				{/if}
			</div>
		</div>
	{/if}
</li>

<style>
	/*
	.nav-panel {
		background-color: white;
		padding: 1rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		border-radius: 0.5rem;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 1fr 1fr;
		grid-gap: 5px;
	}
*/
	/* Target the third navigation item */
	.nav-panel:nth-child(3) .absolute {
		width: 100%;
		left: 0;
		right: 0;
	}

	/* Make the content inside the third panel take full width */
	.nav-panel:nth-child(3) .absolute > div {
		width: 100%;
	}

	/* Adjust the layout for the third panel when it has a featured section */
	.nav-panel:nth-child(3) .absolute > div:has(> div + div) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}

	/* Make the featured section in the third panel take full width */
	.nav-panel:nth-child(3) .absolute > div > div:last-child:not(:first-child) {
		grid-column: 1 / -1;
	}
</style>
