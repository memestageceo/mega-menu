import type { Snippet } from 'svelte';

export type NavFeaturedData = {
	title: string;
	image?: {
		url: string;
		alt: string;
	};
	link: {
		label: string;
		link: string;
	};
};

const featuredData = {
	title: `Featured`,
	image: {
		url: 'https://picsum.photos/id/237/200/300',
		alt: 'Featured Image'
	},
	link: {
		label: 'Featured Link',
		link: '/'
	}
};

export type NavGroupData = {
	title: string;
	icon?: Snippet;
	links: Array<{
		label: string;
		link: string;
	}>;
};

export type NavPanelData = {
	label: string;
	link?: string;
	index: number;
	featured?: Snippet;
	children: Snippet;
};
