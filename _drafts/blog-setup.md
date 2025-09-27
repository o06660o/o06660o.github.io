## 初次部署步骤

- 按照这篇 [github 文档][github_doc] 把里面的步骤走一遍.
- 配置 GitHub Actions 来方便的添加扩展功能.

[github_doc]: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll

## 我添加的扩展功能

- 参考[这篇博客][enable_mathjax] 来加入数学公式渲染.
- 添加插件 `jekyll-remote-theme` 来使用最新版本的 `minima` 主题.
- 添加插件 `jekyll-gfm-admonitions` 用来在正文中插入一些额外内容.
<!-- TODO: 考虑让文章生成 TOC 并作为 sidebar. -->

[enable_mathjax]: https://jojozhuang.github.io/tutorial/jekyll-math-symbols-with-mathjax/

## 可能忘记的东西

- 本地测试: `bundle exec jekyll serve --livereload`.
- 在 `site-header` 中添加新的内容 (比如 About) 只需要往根目录添加 `about.md`, 里面的开头加上

  ```text
  ---
  layout: page
  title: About
  permalink: /about/
  ---
  ```

- `jekyll-gfm-admonitions` 的用法:

  ```md
  > [!NOTE]
  > Highlights information that users should take into account, even when skimming.
  > And supports multi-line text.

  > [!TIP]
  > Optional information to help a user be more successful.

  > [!IMPORTANT]
  > Crucial information necessary for users to succeed.

  > [!WARNING]
  > Critical content demanding immediate
  > user attention due to potential risks.

  > [!CAUTION]
  > Negative potential consequences of an action.
  > Opportunity to provide more context.
  ```
