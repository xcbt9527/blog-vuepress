module.exports = {
  title: 'm-blog',
  description: '我的个人博客',
  base: '/docs/',
  themeConfig: {
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    nav: [
      { text: '面试题', link: '/interview/' },
      { text: '博客', link: '/blog/' },
      { text: 'github', link: 'https://github.com/xcbt9527/blog-vuepress' },
    ],
    sidebar: {
      '/blog/': ['/blog/', '/blog/plop'],
      '/interview/': ['/interview/'],
    },
  },
};
