module.exports = {
  title: 'ChannelAttribution',
  tagline: 'Markov model for online Multi-Channel Attribution',
  url: 'http:\\www.channelattribution.net',
  baseUrl: '/',
  favicon: 'img/logo.ico',
  organizationName: 'Davide Altomare, David Loris, Session Technologies SL',
  projectName: 'ChannelAttribution',
  themeConfig: {
    navbar: {
      title: 'ChannelAttribution',
      logo: {
        alt: 'ChannelAttribution Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/gettingstarted',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
		{
          to: 'docs/roadmap',
          activeBasePath: 'docs',
          label: 'Roadmap ',
          position: 'left',
        },
		{
          to: 'https://groups.google.com/forum/#!forum/channelattribution',
          activeBasePath: 'docs',
          label: 'Forum',
          position: 'left',
        },
		{
          to: 'docs/contactus',
          activeBasePath: 'docs',
          label: 'Contact Us',
          position: 'left',
        },
		{
          to: 'docs/supportus',
          activeBasePath: 'docs',
          label: 'Support Us',
          position: 'left',
        },
	    {
          href: 'http://app.channelattribution.net:3838/',
          label: 'App',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/DavideAltomare/ChannelAttribution',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2/',
        //     },
        //   ],
        // },
        {
          title: 'Links',
          items: [
            {
              label: 'Whitepaper',
              href: 'pdf/ChannelAttributionWhitePaper.pdf',
            },
            // {
              // label: 'Gitter',
              // href: '...',
            // }
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/DavideAltomare/ChannelAttribution',
            },
          ],
        },
      ],
      copyright: `Copyright © 2015 - 2020 ChannelAttribution. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'getting-started',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            '',
        },
        // blog: {
          // showReadingTime: true,
          // editUrl:
            // '',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
