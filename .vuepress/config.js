const currentDateUTC = new Date().toUTCString()

module.exports = {
	title: 'Azure Tips and Tricks',
	dest: './public',
	base: '/AzureTipsAndTricks/',
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		// algolia: {
		// 	apiKey: '25959cccb36e23a6a3f0b7090c865869',
		// 	indexName: 'azuretipsandtricks',
		// 	hitsPerPage: 20,
		//   },
		search: 'auto',
		searchPlaceholder: 'Search...',
		domain: 'https://microsoft.github.io/AzureTipsAndTricks',
		displayAllHeaders: true,
		sidebar: 'auto',
		searchMaxSuggestions: 10,
		repo: 'microsoft/azuretipsandtricks',
		repoLabel: 'Star this Repo',
		editLinks: true,
		editLinkText: 'Edit this page on GitHub',
		logo: '/files/vintage.png',
		sidebar: [
			['/', 'Home']
		],
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Videos', link: 'https://www.youtube.com/playlist?list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC' },
			{ text: 'Questions?', link: 'https://github.com/microsoft/AzureTipsAndTricks/issues/new?assignees=&labels=&template=questions.md&title=' },
			{ text: 'RSS Feed', link: 'https://microsoft.github.io/AzureTipsAndTricks/rss.xml' }
		]
	},
	plugins: [
		[
			'vuepress-plugin-rss',
			{
				site_url: 'https://microsoft.github.io/AzureTipsAndTricks',
				copyright: '2020 Microsoft',
				filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
				count: 20
			}
		],
		'vuepress-plugin-janitor'
	],
	head: [
		['script', {}, `
			(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-TDHW3GW');
		`],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' }
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' }
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' }
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' }
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '114x114',
				href: '/apple-icon-114x114.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '120x120',
				href: '/apple-icon-120x120.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '144x144',
				href: '/apple-icon-144x144.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '152x152',
				href: '/apple-icon-152x152.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-icon-180x180.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '192x192',
				href: '/android-icon-192x192.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '96x96',
				href: '/favicon-96x96.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png'
			}
		],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
		[
			'meta',
			{ name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }
		],
		['meta', { name: 'theme-color', content: '#ffffff' }],
		['script', { async: true, src: "https://platform.twitter.com/widgets.js", charset: "utf-8" }]
	]
}
