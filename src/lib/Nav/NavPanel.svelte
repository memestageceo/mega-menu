<script lang="ts">
	import type { Snippet } from 'svelte';
	type NavPanelProps = {
		uid: string;
		title: string;
		tabindex: number;
		onMouseEnter: (index: number, el: HTMLElement) => void;
		children: Snippet;
		hovering: number | null;
		popoverLeft: number | null;
		popoverHeight: number | null;
		refs: HTMLElement[];
	};

	let {
		uid,
		title,
		tabindex,
		onMouseEnter,
		children,
		hovering = $bindable(),
		popoverLeft = $bindable(0),
		popoverHeight = $bindable(0),
		refs = $bindable([])
	}: NavPanelProps = $props();
</script>

<!-- @component Navigation Panel that appears when you hover under a link -->

<li data-id={uid}>
	<a
		href={uid}
		role="menuitem"
		{tabindex}
		onmouseenter={(e: Event) => onMouseEnter(tabindex, e.target as HTMLElement)}
	>
		{title}
	</a>

	<div
		class={`mega-popup absolute top-12 z-40 grid w-fit max-w-2xl grid-cols-2 gap-4 rounded-sm bg-slate-100 px-4 pb-3 pt-6 text-slate-800 shadow-md transition-all duration-200 left-${popoverLeft || 0} h-${popoverHeight || 0} ${hovering === tabindex ? 'opacity-100' : 'point-events-none opacity-0'} ${hovering === tabindex ? 'transform-none' : hovering! > tabindex ? '-translate-x-24' : 'translate-x-24'}`}
		bind:this={refs[tabindex]}
	>
		{@render children()}
	</div>
</li>
