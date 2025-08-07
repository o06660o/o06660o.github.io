## 初次部署步骤

- 按照这篇 [github 文档][github_doc] 把里面的步骤走一遍.
- 安装插件 [jekyll-gfm-admonitions][plugin_gfm_admonitions].
  记得配置 GitHub Actions 来确保这个插件在 github pages 能正常使用.
- 默认的 `theme: minima` 是稳定版本, 但是我想要使用新版本提供的 `page.modified_date`, 所以需要根据
  对应 [仓库][minima] 的 README 进行修改.
- 参考 [这篇博客][enable_mathjax] 来加入数学公式渲染.

[github_doc]: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll
[plugin_gfm_admonitions]: https://github.com/Helveg/jekyll-gfm-admonitions/tree/main
[minima]: https://github.com/jekyll/minima/tree/master
[enable_mathjax]: https://jojozhuang.github.io/tutorial/jekyll-math-symbols-with-mathjax/
