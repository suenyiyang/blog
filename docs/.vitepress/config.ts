import { defineConfigWithTheme } from 'vitepress'
import { ThemeLinearConfig, getPosts } from './theme/config'


async function load() {
  return defineConfigWithTheme<ThemeLinearConfig>({
    themeConfig: {
      posts: await getPosts('en-US', 'Asia/Shanghai'),
      links: [
        { name: 'GitHub', link: 'https://github.com/syy11cn', icon: '/assets/images/github.svg' },
      ]
    }
  })
}

export default load()
