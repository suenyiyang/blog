import { defineConfigWithTheme } from 'vitepress'
import { ThemeLinearConfig, getPosts } from './theme/config'


async function load() {
  return defineConfigWithTheme<ThemeLinearConfig>({
    title: 'Yiyang Sun',
    description: 'Love for life and frontend tech.',
    markdown: {
      theme: {
        light: 'css-variables',
        dark: 'css-variables'
      },
    },
    themeConfig: {
      posts: await getPosts('en-US', 'Asia/Shanghai'),
      links: [
        { name: 'GitHub', link: 'https://github.com/syy11cn', icon: '/assets/images/github.svg' },
        { name: 'Posts', link: '/posts', icon: '/assets/images/post.svg' },
        { name: 'Links', link: '/links', icon: '/assets/images/link.svg' },
        { name: 'Resume', link: '/resume', icon: '/assets/images/resume.svg' },
      ],
      favicon: 'https://shaun-logo.oss-cn-beijing.aliyuncs.com/avatar.jpg',
      googleId: 'G-F3PB7TDT3P',
    }
  })
}

export default load()
