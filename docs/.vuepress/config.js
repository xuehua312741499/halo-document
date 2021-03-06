module.exports = {
  title: 'Halo',
  description: 'Halo | ✍️ 可能是最好的 Java 博客系统',
  host: 'localhost',
  port: '4000',
  docsDir: 'docs',
  ga: 'UA-110780416-2',
  head: [
    ['link', { rel: 'icon', href: '/halo.png' }],
  ],
  siteConfig: {
    links: {
      github: 'https://github.com/halo-dev/halo',
    },
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: 'halo-dev/halo',
    nav: [
      { text: '首 页', link: '/' },
      { text: '文 档', link: '/install' },
      { text: '社 区', link: 'https://bbs.halo.run' },
    ],
    sidebar: [
      {
        title: '安装指南',
        collapsable: false,
        children: [
          '/install',
        ],
      },
      {
        title: '界面预览',
        collapsable: false,
        children: [
          '/preview'
        ],
      },
      {
        title: '使用指南',
        collapsable: false,
        children: [
          '/guidance'
        ],
      },
      {
        title: '主题制作',
        collapsable: false,
        children: [
          '/theme'
        ],
      },
      {
        title: '常见问题',
        collapsable: false,
        children: [
          '/faq',
        ],
      },
      {
        title: '捐赠',
        collapsable: false,
        children: [
          '/donate',
        ],
      },
    ],
    lastUpdated: '最后更新于',
  },
}
