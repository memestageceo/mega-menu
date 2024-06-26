<script lang="ts">
	import type { NavFeaturedData } from './types';

	let { featuredData }: { featuredData: NavFeaturedData } = $props();
</script>

<div>
	<p class="font-mono font-medium">{featuredData.title}</p>
	<a href={featuredData.link.link}>
		{#if featuredData.image}
			<img
				src={featuredData.image.url}
				alt={featuredData.image.alt}
				class="max-h-[250px] w-full rounded-md object-cover"
			/>
		{/if}
		{featuredData.link.label}
	</a>
</div>
