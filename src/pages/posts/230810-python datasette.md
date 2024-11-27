<img src="/assets/image/230810-python datasette-1.png" style="max-width: 70%; height: auto;">
<small>https://github.com/simonw/datasette</small>


8.1k star,推荐个好东西，python实现

## 1  简介
如果你手头有些数据放在csv中，或者是json格式的，也可以是数据库中，那么通过datasette这个工具，可以在几分钟内快速通过json api的形式分享，而不需要构建你的后端。

![](/assets/image/230810-python datasette-1.png)
Datasette面向数据记者，博物馆馆长，档案保管员，地方政府以及希望与世界共享数据的任何其他人。它是更广泛的工具和插件生态系统的一部分，致力于使结构化数据的处理尽可能高效。
  

## 2 安装

github可以访问的直接到如下链接去下载就可以

**https://github.com/simonw/datasettet**

github如果无法访问的话，可以后台直接私信

也可访问官方网站：

**datasette.io**

可以通过pip来安装：

```
pip install datasette
```

mach环境，如下命令安装

```
brew install datasette
```

感兴趣的，也可以看下官方提供的demo，数据集为全球33w座发电厂，尝试演示并探索全球 33，000 座发电厂，然后按照教程进行操作或查看 Datasette 的其他一些示例。

**https://global-power-plants.datasettes.com/global-power-plants/global-power-plants**

## 3 如何使用
本地直接执行如下命令启动

```
datasette serve path/to/database.db
```

通过如下路径访问对应的地址：

```
http://localhost:8001/
#如下地址可用于数据下载
 http://localhost:8001/History/downloads 
```