---
title: Switch from Hexo to VitePress
date: 2022-05-05
---

# Switch from Hexo to VitePress

I've just made a switch from Hexo to VitePress for a couple of days. The main differences between this two SSG engines in my opinion are as follows.

## Theming

I use custom theme rather than official or community themes. To develop a blog theme, it takes me over two weeks to finish in Hexo while only less than one week in VitePress.

The Hexo theme using `ejs` for layout and `stylus` for style is hard for me to develop and maintain. The VitePress theme using `Vue` SFC is more developer friendly.

## Performance

In my personal experience, the opening of my VitePress blog is faster than Hexo blog. The static site generation is faster too.

Feeling is not always so accurate. I use Lighthouse to test my blogs and here is the result.

First, let's see Hexo blog scoring.

![Lighthouse for Hexo blog](https://syy11cn-blog.oss-cn-chengdu.aliyuncs.com/20220505140547.png/watermark)

In comparison, here's the scoring of VitePress blog.

![Lighthouse for VitePress blog](https://syy11cn-blog.oss-cn-chengdu.aliyuncs.com/20220505140655.png/watermark)

## Conclusion

To each his own. I personally prefer VitePress rather than Hexo now. You can choose what you like and there is always a theme called `Linear` for both SSG engines.

## Reference

- [Hexo theme linear](https://github.com/syy11cn/hexo-theme-linear);
- [VitePress theme linear](https://github.com/syy11cn/vitepress-theme-linear).

---

## Updates

- Upgrade dev dependency VitePress to `1.0-beta`.
