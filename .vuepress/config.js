const currentDateUTC = new Date().toUTCString()

module.exports = {
	title: 'Azure Tips and Tricks',
	dest: './public',
	base: '/azpagetest/',
    markdown: {
        lineNumbers: true
      },
	themeConfig: {
		displayAllHeaders: true,
		sidebar: 'auto',
		repo: 'microsoft/azuretipsandtricks',
		repoLabel: 'GitHub',
		editLinks: true,
		editLinkText: 'Edit this page on GitHub',
		sidebar: [
			{
				title: 'Home',
				collapsable: false,
				children: [
					'/'
				]
			},
			{
				title: 'Tips',
				collapsable: false
			},
			{
				title: 'AzCopy',
				collapsable: true,
				children: ['/blog/tip81', 
						'/blog/tip139'	]
			},
			{
				title: 'App Service',
				collapsable: true,
				children: [ '/blog/tip16', '/blog/tip20', '/blog/tip21', '/blog/tip22', '/blog/tip23', '/blog/tip26', '/blog/tip27', '/blog/tip28', '/blog/tip29', '/blog/tip30', '/blog/tip31', '/blog/tip32', '/blog/tip33', 
				'/blog/tip112', '/blog/tip113', '/blog/tip117', '/blog/tip119', '/blog/tip132', '/blog/tip143', 
				'/blog/tip144', '/blog/tip149'	]
			},
			{
				title: 'Media Services',
				collapsable: true,
				children: ['/blog/tip178', 
						'/blog/tip179'	]
			},
		],
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Blog', link: '/blog/' },
			{ text: 'Questions?', link: 'http://github.com/microsoft/azuretipsandtricks/issues' },
			{ text: 'RSS Feed', link: '/rss.xml/' }
		],
		logo: '/vuepress-blog-logo.png'
	},
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: '' // UA-00000000-0
			}
		],
		[
			'vuepress-plugin-rss',
			{
				base_url: '/',
				site_url: 'https://mbcrump.github.io/azpagetest',
            	copyright: '2019 Microsoft',
				filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
				count: 20
			}
		],
		'vuepress-plugin-janitor'
	],
	head: [
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
		['meta', { name: 'theme-color', content: '#ffffff' }]
	]
}
