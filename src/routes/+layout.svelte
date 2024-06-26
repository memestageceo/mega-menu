<script>
	import { DramaIcon, HomeIcon } from 'lucide-svelte';
	import '../app.css';
	import megaMenuData from '$lib/dummy';
	import { Nav, NavPanel, NavFeatured, NavGroup } from '$lib/Nav2';

	const dummyNavGroup = {
		title: 'Navigation',
		links: [
			{ label: 'Home', link: '/' },
			{ label: 'About', link: '/about' },
			{ label: 'Services', link: '/services' },
			{ label: 'Contact', link: '/contact' },
			{ label: 'Contact', link: '/contact' },
			{ label: 'Contact', link: '/contact' },
			{ label: 'Contact', link: '/contact' }
		]
	};
	let { children } = $props();
</script>

{#snippet linkIcon()}
	<HomeIcon color="blue" size="15" />
{/snippet}

<Nav>
	<!-- ICON -->
	{#snippet icon()}
		<HomeIcon />
	{/snippet}

	<!-- PANELS as children -->
	{#each new Array(3) as _, index}
		<NavPanel label={`Panel ${index + 1}`} link={`/panel-${index + 1}`} {index}>
			<!-- GROUPS -->
			{#each new Array(3) as _, i}
				<NavGroup navGroup={{ ...dummyNavGroup, icon: linkIcon }} />
			{/each}

			<!-- FEATURED if exists -->

			{#snippet featured()}
				<NavFeatured
					featuredData={{
						title: `Featured ${index + 1}`,
						image: {
							url: 'https://picsum.photos/id/237/200/300',
							alt: 'Featured Image'
						},
						link: {
							label: 'Featured Link',
							link: '/'
						}
					}}
				/>
			{/snippet}
		</NavPanel>
	{/each}
</Nav>

{@render children()}
