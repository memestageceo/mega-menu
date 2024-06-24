<script lang="ts">
	type NavFeaturedProps = {
		title: string;
		image?: {
			url: string;
			alt: string;
		};
		link: {
			name: string;
			link: string;
		};
	};

	let { title, image, link }: NavFeaturedProps = $props();
</script>

<div>
	<p class="font-mono font-semibold">{title}</p>
	<a href={link.link}>
		{#if image}
			<img src={image.url} alt={image.alt} />
		{/if}
		{link.name}
	</a>
</div>

<style>
	a:hover p {
		text-decoration: underline;
		color: #010101;
	}
</style>
