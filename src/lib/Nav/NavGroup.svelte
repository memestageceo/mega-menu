<script lang="ts">
	type NavGroupProps = {
		title: string;
		links: Array<{
			name: string;
			link: string;
		}>;
	};

	let { title, links }: NavGroupProps = $props();
</script>

<div>
	<p class="font-mono font-semibold">{title}</p>
	<ul>
		{#each links as link}
			<li>
				<a href={link.link} class="text-slate-500 hover:text-slate-800 hover:underline"
					>{link.name}</a
				>
			</li>
		{/each}
	</ul>
</div>
