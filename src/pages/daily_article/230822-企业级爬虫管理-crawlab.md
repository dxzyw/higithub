<img src="/assets/image/230822-企业级爬虫管理-crawlab-1.png" style="max-width: 70%; height: auto;">
<small>10.1k star，推荐一款爬虫管理工具，crawlab</small>


go写的一款企业级的管理爬虫的工具，文档很全，该有的功能都有，个人用于用于管理日常的一些爬虫任务，绰绰有余，企业内部如果有一些爬虫内容，开源版本用于管理也是足够的，对于运维来讲，完全可以用来作为作业平台嘛。

## 1  crawlab简介

基于Golang的分布式网络爬虫管理平台，支持各种语言，包括Python，NodeJS，Go，Java，PHP和各种网络爬虫框架，包括Scrapy，Puppeteer，Selenium。

## 2 如何安装启动？

### docker方式启动

```
docker pull crawlabteam/crawlab
docker pull mongo

```

### docker-compose方式启动

docker-compose文件
```
version: '3.3'
services:
  master:
    image: crawlabteam/crawlab
    container_name: crawlab_master
    environment:
      CRAWLAB_NODE_MASTER: "Y"
      CRAWLAB_MONGO_HOST: "mongo"
    ports:
      - "8080:8080"
    depends_on:
      - mongo
  mongo:
    image: mongo:4.2

```
执行如下启动

```
docker-compose up -d

```

安装完成后，通过如下路径访问

**http://localhost:8080**

更多内容可以到如下github地址访问

**hhttps://github.com/crawlab-team/crawlab**

github如果无法访问的话，可以后台直接私信

## 3 使用体验介绍

官方提供了demo可以去体验，地址如下：

**https://demo.crawlab.cn/** 

### 1 爬虫管理

提供专业级的网络爬虫管理解决方案,可以轻松掌控复杂的爬虫代码定制。可高效管理爬虫任务,还提供实时在线代码编辑功能,确保始终完全掌控爬虫程序。

相较现有爬虫管理工具,提供了更优秀的用户体验,以及更灵活可控的代码自定义能力。

![](/assets/image/230822-企业级爬虫管理-crawlab-1.png)

支持在线代码编辑

![](/assets/image/230822-企业级爬虫管理-crawlab-2.png)

### 2 集成git

提供卓越的代码版本管理解决方案，能够轻松地实现与 Git 的无缝集成。无论是个人开发者还是团队项目，都能够协助您更好地管理和协作开发过程中的代码。

除了基本的 Git 功能外，还集成了一系列高级工具和功能，例如自动化构建和自动部署等，可以提升开发效率。


![](/assets/image/230822-企业级爬虫管理-crawlab-3.png)

### 3 数据集成

可以轻松地连接、管理和操作多种数据库系统，实现高效的数据交互和管理。支持主流的数据库系统，包括 MongoDB、MySQL、PostgreSQL、ElasticSearch、Kafka 等，能够在一个统一的界面下进行跨数据库的操作和查询。无需切换不同的工具和环境，可以高效地处理和分析不同类型的数据。

提供了强大的数据转换和同步功能，实现不同数据库之间的数据迁移和实时同步。同时，提供实时监控和报告，随时了解数据的状态。


![](/assets/image/230822-企业级爬虫管理-crawlab-4.png)

## 4 更多可以到官网了解
Crawlab是一款使用Go语言开发的企业级爬虫管理平台。它支持各种编程语言(Python、NodeJS、Go等)和主流爬虫框架(Scrapy、Puppeteer等),可以用于分布式管理网络爬虫。

Crawlab提供完善的文档和功能,个人用户可以用它来管理日常爬虫任务,而企业内部也可以用其开源版本来管理爬虫项目。

对于运维人员来说,Crawlab可以作为爬虫作业平台使用。它为用户提供一站式的爬虫管理解决方案,包括定时作业、数据存储、Web UI等功能。

总之,Crawlab是一个非常全面且易于使用的企业级爬虫管理平台,可以高效管理各类爬虫作业。它的开源版本也非常成熟,适合个人学习研究和企业内部使用。
