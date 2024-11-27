<img src="/assets/image/230811-基于git的wiki-1.png" style="max-width: 70%; height: auto;">
<small>https://github.com/gollum/gollum</small>


13.2k star,推荐一款轻量级wiki，gollum

一款基于git的wiki，支持markdown语法，简单来讲，就是你可以在本地编辑你在github上的wiki了，同理可以应用于gitlab。

另外如果你直接去查gollum，你可能查到的是指环王里面的角色。

## gollum简介

Gollum 是一个基于 Git 的轻量级 Wiki 系统。它是一个使用 Ruby 语言开发的开源项目,托管在 GitHub 上,于 2008 年首次发布。

- 它建立在Git版本控制之上,可以对文档进行版本管理和多人协作。

- 它使用各种标记语言编写页面,并可以自由组织页面目录结构。

- 支持嵌入图片、PDF等其他内容。

- 提供网页编辑接口和各种标记语言支持。

- 兼容GitHub/GitLab wiki,可以直接克隆使用。

- 支持UML图、引用管理、批注、数学公式等高级功能。

- 可扩展性强,支持插件和宏等。

- 可以作为Ruby库、Web应用或Docker镜像使用。

- 适用于多种平台,包括Windows。

Gollum是一个非常易用和强大的基于Git的Wiki系统,它简单的架构设计与Git的版本控制特性结合得很好,适合用来构建团队知识库或者个人笔记。

Gollum 很好地结合了 Wiki 和 Git 的优点,可以帮助团队管理知识,也可以用于个人的知识整理。它的简单易用性吸引了大量用户和贡献者。

## gollum如何安装使用

如果你安装好了ruby环境，那么部署是最简单的，直接执行如下就好：

```
gem install gollum
```

如果你有docker环境，那么执行如下可以启动

```
#拉取镜像
docker pull gollumwiki/gollum:v5.3.0
#启动
docker run --rm -p 4567:4567 -v $(pwd):/wiki gollumwiki/gollum:v5.3.0
```

传统java环境的话，需要在releases中下载war包。地址如下：
**https://github.com/gollum/gollum/releases/**
```
java -jar gollum.war -S gollum <your-gollum-arguments-here>
```

## 界面展示及特点

启动后，默认启动的是4567端口，界面大概如下：

![](/assets/image/230811-基于git的wiki-1.png)
- 基于Git,支持版本控制和协作:Gollum中的每个Wiki都是一个Git仓库,这样就天然具备版本控制的能力,支持查看历史版本、进行回滚等操作。同时也支持多人协作编辑。

- 组织灵活的页面和目录:用户可以自由组织Wiki页面的目录结构,页面可以放在任何目录下。

- 支持各种标记语言:Gollum支持Markdown、Textile、Org-mode、Creole等多种标记语言来编写Wiki页面。

- 本地编辑:用户可以使用任意文本编辑器在本地编辑Wiki页面,修改后提交到Git仓库即可发布更改。

- 内置网页编辑:Gollum包含一个内置的网页编辑器,用户可以直接在浏览器中编辑和预览Wiki页面。

- 良好的兼容性:Gollum可以无缝克隆和兼容GitHub/GitLab的Wiki,直接对其进行本地管理。

- 强大的扩展性:Gollum有很强的扩展性,支持插件系统,可以引入各种功能插件来扩展其功能。

- 运行环境的可移植性:Gollum可以运行在多种平台上,如Linux、Windows、macOS等,后端可以使用MRI Ruby或JRuby运行。

- Docker镜像支持:提供官方Docker镜像,可以通过Docker容器快速运行Gollum。

- 多种安装方式:支持RubyGem安装、编译源代码安装、Docker镜像等多种安装方式。




## 总结

Gollum是一个基于Git构建的非常易用和强大的轻量级Wiki系统。它简单的架构设计与Git的版本控制特性结合得很好,支持多种标记语言、网页编辑、多种扩展等功能。

同时它还内置了数学公式、图表、批注等许多高级功能。Gollum可以运行在多种平台上,提供多种便捷的安装方式。它非常适合中小团队进行知识管理和协作,也可以用于构建个人知识库。

