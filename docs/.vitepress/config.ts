import { defineConfigWithTheme } from 'vitepress'
import { ThemeLinearConfig, getPosts } from 'vitepress-theme-linear/config'


async function load() {
  return defineConfigWithTheme<ThemeLinearConfig>({
    title: 'Yiyang Sun',
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
        { name: 'Posts', link: '/posts', icon: '' },
        { name: 'GitHub', link: 'https://github.com/syy11cn', icon: '' },
        { name: 'Twitter', link: 'https://twitter.com/syy11cn', icon: '' },
        { name: 'Links', link: '/links', icon: '' },
        { name: 'Resume', link: '/resume', icon: '' },
      ],
      favicon: 'https://shaun-logo.oss-cn-beijing.aliyuncs.com/avatar.jpg',
      googleId: 'G-F3PB7TDT3P',
      walineServerURL: 'https://blog-comment-syy11cn.vercel.app/'
    }
  })
}

export default load()
