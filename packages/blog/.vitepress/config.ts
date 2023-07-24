import { defineConfigWithTheme } from 'vitepress'
import { ThemeLinearConfig, getPosts } from 'vitepress-theme-linear/config'

async function load() {
  return defineConfigWithTheme<ThemeLinearConfig>({
    title: '孙轶扬的博客（Yiyang Suen\'s Blog）',
    description: 'Love for life and frontend tech.',
    markdown: {
      theme: {
        light: 'github-light',
        dark: 'github-dark'
      },
    },
    cleanUrls: true,
    themeConfig: {
      posts: await getPosts('zh-CN', 'Asia/Shanghai'),
      links: [
        { name: '文章', link: '/posts', icon: '' },
        { name: '推文', link: '/tweets', icon: '' },
        { name: '友联', link: '/links', icon: '' },
        { name: '关于我', link: '/about', icon: '' },
        { name: '更新日志', link: '/log', icon: '' },
      ],
      favicon: '/favicon.svg',
      googleId: process.env.GOOGLE_TAG,
      waline: {
        serverURL: 'https://blog-comment-yysuen.vercel.app/',
        requiredMeta: ['nick', 'mail'],
        reaction: ['/assets/images/thumbs_up.svg'],
        locale: {
          reactionTitle: '',
        },
      },
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg'
      }
    }
  })
}

export default load()
