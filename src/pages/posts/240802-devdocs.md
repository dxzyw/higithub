<img src="/assets/image/240802-devdocs-1.png">
<small>34.6k star,程序员的在线编程手册，建议收藏</small>

在日常的开发过程中，不可避免的需要去查看不同语言的开发文档，去查看语法。

今天推荐的一个开源网站，它上面汇集了目前最常用到的开发人员文档，并且可以即时搜索、支持离线部署

界面如下：

![devdocs.io](/assets/image/240802-devdocs.png)

## devdocs.io简介

devdocst可以说它是一个开发人员的效率工具，你可以快速去查看你想要了解语言或者中间件的一些api文档

所以也可以称为是一个api文档浏览器。

## devdocs.io如何本地化部署

首先，官方是提供了一个可以直接访问的网站的。devdocs.io

如果想要自己部署的话也是可以的

常规部署方式,需要一些前置条件(需要 Ruby 3.3.0,libcurl 以及ExecJS支持的 JavaScript 运行时)

```
git clone https://github.com/freeCodeCamp/devdocs.git && cd devdocs
gem install bundler
bundle install
bundle exec thor docs:download --default
bundle exec rackup
```
执行完之后，可以直接访问9292端口，但初始化需要一定的时间，所以要耐心等待下。

docker方式部署：

```
# First, build the image
git clone https://github.com/freeCodeCamp/devdocs.git && cd devdocs
docker build -t thibaut/devdocs .

# Finally, start a DevDocs container (access http://localhost:9292)
docker run --name devdocs -d -p 9292:9292 thibaut/devdocs

```
![github-star](/assets/image/240802-devdocs-1.png)

## 总结

devdocs的目的是为了更加快捷的查看文档，它不是一个编程教程，所以内容更加专业化

而作者想要提供的就是程序加载时间短，页面干净且可读。

这个工具支持搜索功能，所以在一定程度上，需要保证搜索结果的质量、速度和顺序

DevDocs 既不是编程指南，也不是搜索引擎。它的所有内容均来自第三方来源，该项目无意与全文搜索引擎竞争。

它的支柱是元数据；每段内容都由唯一的、“明显的”短字符串标识。不符合此要求的教程、指南和其他内容不在项目范围内。