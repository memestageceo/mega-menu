<script lang="ts">
	import { Home } from 'lucide-svelte';
	import type { NavGroupData } from './types';

	let { navGroup }: { navGroup: NavGroupData } = $props();
</script>

<div class="rounded-lg border border-gray-300 bg-gray-50 p-4">
	<div class="inline-flex flex-row gap-2">
		{#if navGroup.icon}
			{@render navGroup.icon()}
		{/if}
		<h2 class="mb-2 text-lg font-medium text-slate-600">{navGroup.title}</h2>
	</div>
	<ul class="grid list-none grid-flow-row grid-cols-4 gap-4 p-0">
		{#each navGroup.links as navLink}
			<li class="mb-2">
				<a href={navLink.link} class="text-blue-600 hover:underline">{navLink.label}</a>
			</li>
		{/each}
	</ul>
</div>
