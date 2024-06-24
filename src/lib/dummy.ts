/**
 * Represents a single menu item.
 */
type MenuItem = {
	/** The display name of the menu item */
	name: string;
	/** The URL or path the menu item links to */
	link: string;
};

/**
 * Represents a column in the menu structure.
 */
type MenuColumn = {
	/** The title of the menu column */
	title: string;
	/** An array of MenuItem objects in this column */
	items: MenuItem[];
};

/**
 * Represents the content structure for the blog section.
 */
type BlogContent = {
	/** An array of MenuItem objects representing popular blog posts */
	popularPosts: MenuItem[];
	/** Information about the latest blog post */
	latestPost: {
		/** The title of the latest blog post */
		title: string;
		/** The image associated with the latest blog post */
		image: {
			/** The URL of the image */
			url: string;
			/** The alt text for the image */
			alt: string;
		};
		/** A short excerpt or summary of the latest blog post */
		excerpt: string;
		/** The URL or path to the full latest blog post */
		link: string;
	};
};

/**
 * Represents a section in the mega menu.
 */
type MegaMenuSection = {
	/** Unique identifier for the section */
	id: string;
	/** The title of the section */
	title: string;
	/** Optional array of MenuColumn objects. Not all sections have columns */
	columns?: MenuColumn[];
	/** Optional BlogContent object, for sections like blog */
	content?: BlogContent;
};

/**
 * Represents the entire structure of the mega menu.
 */
type MegaMenuData = MegaMenuSection[];
// Example usage of the defined types with the data
const megaMenuData: MegaMenuData = [
	{
		id: 'services',
		title: 'Services',
		columns: [
			{
				title: 'Data Migration',
				items: [
					{ name: 'NetSuite to QuickBooks Online', link: '/services/netsuite-to-qbo' },
					{ name: 'QuickBooks Desktop to QuickBooks Online', link: '/services/qbd-to-qbo' },
					{ name: 'Sage Intacct to Xero', link: '/services/sage-to-xero' },
					{ name: 'Custom Migrations', link: '/services/custom-migrations' }
				]
			},
			{
				title: 'Business Solutions',
				items: [
					{ name: 'Process Optimization', link: '/services/process-optimization' },
					{ name: 'Software Integration', link: '/services/software-integration' },
					{ name: 'Cloud Migration', link: '/services/cloud-migration' },
					{ name: 'Data Analytics', link: '/services/data-analytics' }
				]
			},
			{
				title: 'Consultation',
				items: [
					{ name: 'Software Selection', link: '/services/software-selection' },
					{ name: 'Implementation Strategy', link: '/services/implementation-strategy' },
					{ name: 'Training & Support', link: '/services/training-support' },
					{ name: 'Compliance & Security', link: '/services/compliance-security' }
				]
			}
		]
	},
	{
		id: 'resources',
		title: 'Resources',
		columns: [
			{
				title: 'Knowledge Base',
				items: [
					{ name: 'Migration Guides', link: '/resources/migration-guides' },
					{ name: 'Best Practices', link: '/resources/best-practices' },
					{ name: 'FAQs', link: '/resources/faqs' },
					{ name: 'Glossary', link: '/resources/glossary' }
				]
			},
			{
				title: 'Tools',
				items: [
					{ name: 'ROI Calculator', link: '/resources/roi-calculator' },
					{ name: 'Compatibility Checker', link: '/resources/compatibility-checker' },
					{ name: 'Data Mapping Tool', link: '/resources/data-mapping-tool' },
					{ name: 'Migration Planner', link: '/resources/migration-planner' }
				]
			},
			{
				title: 'Support',
				items: [
					{ name: 'Documentation', link: '/resources/documentation' },
					{ name: 'Community Forum', link: '/resources/community-forum' },
					{ name: 'Webinars', link: '/resources/webinars' },
					{ name: 'Contact Support', link: '/resources/contact-support' }
				]
			}
		]
	},
	{
		id: 'blog',
		title: 'Blog',
		content: {
			popularPosts: [
				{ name: 'Top 5 Challenges in Data Migration', link: '/blog/top-5-migration-challenges' },
				{
					name: 'Choosing the Right Accounting Software',
					link: '/blog/choosing-accounting-software'
				},
				{ name: 'Cloud vs On-Premise: Pros and Cons', link: '/blog/cloud-vs-on-premise' },
				{ name: 'Ensuring Data Security During Migration', link: '/blog/data-security-migration' }
			],
			latestPost: {
				title: 'The Future of Business Intelligence in 2024',
				image: {
					url: 'favicon.png',
					alt: 'best ools for the wools.'
				},
				excerpt: "Explore the latest trends in BI and how they're shaping business decisions...",
				link: '/blog/future-of-bi-2024'
			}
		}
	},
	{
		id: 'courses',
		title: 'Courses',
		columns: [
			{
				title: 'Beginner',
				items: [
					{ name: 'Introduction to Data Migration', link: '/courses/intro-data-migration' },
					{ name: 'Basics of Cloud Computing', link: '/courses/cloud-computing-basics' },
					{ name: 'Understanding Business Analytics', link: '/courses/business-analytics-101' }
				]
			},
			{
				title: 'Intermediate',
				items: [
					{ name: 'Advanced QuickBooks Online', link: '/courses/advanced-qbo' },
					{ name: 'Data Mapping Techniques', link: '/courses/data-mapping-techniques' },
					{ name: 'Optimizing Business Processes', link: '/courses/optimizing-business-processes' }
				]
			},
			{
				title: 'Expert',
				items: [
					{
						name: 'Enterprise Data Migration Strategies',
						link: '/courses/enterprise-migration-strategies'
					},
					{ name: 'Custom API Integration', link: '/courses/custom-api-integration' },
					{ name: 'Business Intelligence Mastery', link: '/courses/bi-mastery' }
				]
			}
		]
	}
];

export default megaMenuData;
