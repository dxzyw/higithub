<img src="/assets/image/240127-vimwiki-1.png" style="max-width: 70%; height: auto;">
<small>8.4k star，推荐一款开源工具，vim+wiki</small>


可以看下效果：

![](/assets/image/240127-vimwiki-1.png)

![](/assets/image/240127-vimwiki-2.png)


# VimWiki：Vim 中的个人 Wiki

## 什么是 VimWiki？

VimWiki 是一个 Vim 插件，它可以让你在 Vim 中创建和管理一组链接起来的、有独特语法高亮的文本文件，也就是个人 Wiki。

你可以用 VimWiki 来组织笔记和想法，管理待办事项，编写文档，坚持写日记，甚至将这一切导出成 HTML 网页。

## VimWiki 有哪些特点？

VimWiki 的特点有以下几点：

- 支持多种语法格式，包括默认的 VimWiki 语法，Markdown 语法和 MediaWiki 语法³。
- 支持多个 Wiki，每个 Wiki 可以有不同的语法格式，路径和名称⁴。
- 支持在 Wiki 中创建链接，列表，表格，标题，代码块，数学公式等元素⁵。
- 支持在 Wiki 中使用标签，以便于搜索和分类⁶。
- 支持在 Wiki 中使用日历，以便于记录和查看每天的日记。
- 支持将 Wiki 导出成 HTML 网页，可以自定义 CSS 和模板。
- 支持使用 Vim 的快捷键和命令来操作 Wiki，以及自定义一些选项和变量。

## 如何安装和使用 VimWiki？

安装 VimWiki 的方法有多种，其中一种是使用 Vim 的包管理功能（需要 Vim 7.4.1528 或更高版本）。具体步骤如下：

- 在终端中执行以下命令，将 VimWiki 克隆到 Vim 的插件目录中：

```bash
git clone https://github.com/vimwiki/vimwiki.git ~/.vim/pack/plugins/start/vimwiki
```

- 在 Vim 中执行以下命令，生成 VimWiki 的帮助文档：

```vim
:helptags ~/.vim/pack/plugins/start/vimwiki/doc
```

- 重启 Vim，然后执行以下命令，查看 VimWiki 的帮助文档：

```vim
:help vimwiki
```

使用 VimWiki 的方法很简单，只需要按下 `<Leader>ww`（默认是 `\ww`）就可以打开你的主 Wiki 的索引文件。

默认情况下，它位于 `~/vimwiki/index.wiki`。你可以在这个文件中输入一些标题和链接，然后按下 `Enter` 键来创建和打开新的 Wiki 页面。

你也可以在 Wiki 页面中输入一些内容，比如列表，表格，代码块等。你还可以使用一些快捷键和命令来操作 Wiki，比如 `<Leader>wr` 来重命名当前页面，`:VimwikiSearch` 来搜索 Wiki 中的内容，`:VimwikiRebuildTags` 来重建标签索引等。

## 总结

VimWiki 是一个强大而灵活的 Vim 插件，它可以让你在 Vim 中创建和管理个人 Wiki，从而提高你的效率和创造力。


![](/assets/image/240127-vimwiki-3.png)

开源地址：https://github.com/vimwiki/vimwiki
官网地址：https://vimwiki.github.io/