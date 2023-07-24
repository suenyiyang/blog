import { defineConfigWithTheme } from 'vitepress'
import type { ThemeLinearConfig } from 'vitepress-theme-linear/types'
import { getPosts } from 'vitepress-theme-linear/config'

const getConfig = async () => {
  const posts = await getPosts('zh-CN', 'Asia/Shanghai')
  return defineConfigWithTheme<ThemeLinearConfig>({
    title: 'Vitepress Theme Linear',
    description: 'A dream theme for vitepress blogs.',
    cleanUrls: true,
    markdown: {
      theme: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
    themeConfig: {
      links: [
        { name: 'GitHub', link: 'https://github.com/syy11cn/vitepress-theme-linear', icon: '/assets/images/github.svg' },
        { name: 'Posts', link: '/posts', icon: '/assets/images/post.svg' },
        { name: 'Links', link: '/links', icon: '/assets/images/link.svg' },
      ],
      posts,
      favicon: 'https://shaun-logo.oss-cn-beijing.aliyuncs.com/avatar.jpg',
    },
  })
}

export default getConfig()
