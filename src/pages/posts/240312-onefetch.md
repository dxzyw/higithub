<img src="/assets/image/240312-onefetch-1.png" style="max-width: 70%; height: auto;">
<small>8.8k star,推荐一款开源的git信息可视化工具，实用！！</small>


先来看张图，直观的了解下这款工具，开源地址在文末：


![](/assets/image/240312-onefetch-1.png)

最近rust语言比较火，尤其是在前端领域，偶尔看一些技术群里大佬聊天，也时不时会提到。

![](/assets/image/240312-onefetch-2.png)

这个小工具就是用rust语言开发的，star数也是一路涨到了8k+，这算是一款效率工具吧。可以直接在终端展示项目的仓库的详情信息，而且是可以离线使用的。

# onefetch：一款强大的命令行 Git 信息工具

## 工具简介

onefetch 的灵感来自于 neofetch，一个用于显示系统信息的命令行工具。

onefetch 的目标是为开发者提供一个方便、快速、美观的方式，来查看他们的项目的基本信息和代码质量。

![neofetch长这样](/assets/image/240312-onefetch-3.png)

onefetch 支持超过 100 种不同的编程语言。

## 工具特点

onefetch 的主要特点有以下几点：

- 自动检测开源许可证，并从文本中提取相关信息。
- 提供用户有价值的信息，如代码分布、待处理的更改、依赖项数量（按包管理器）、最佳贡献者（按提交次数）、磁盘占用、创建日期、代码行数等。
- 默认情况下，仓库的信息会与主要语言的 logo 一起显示，但可以进一步配置 onefetch，让它使用一个图片（在支持的终端上）、一个文本输入或者什么都不显示。
- 可以通过命令行参数来定制显示的内容，可以自定义 ASCII/文本的格式，禁用信息行，忽略文件和目录，输出多种格式（Json, Yaml）等。

## 快速开始

onefetch 的安装方法有多种，可以根据操作系统和喜好选择合适的方式。

例如，如果使用的是 Linux 系统，并且已经安装了 Rust 工具链，可以通过 cargo 来安装 onefetch：

```bash
cargo install onefetch
```

使用的话，也很简单，只要执行命令带上你的仓库地址即可：

```
> onefetch /path/of/your/repo
```

![github star数](/assets/image/240312-onefetch-4.png)


**开源地址：https://github.com/o2sh/onefetch/**