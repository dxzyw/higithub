<img src="/assets/image/240817-zincsearch-1.png">
<small>16.8k star,轻量级、资源利用率低的一款开源软件推荐</small>

如果你的项目中使用到了elasticsearch，场景是全文检索，那么不妨看下今天推荐的这款开源项目

部分截图如下：

![](/assets/image/240817-zincsearch.png)

![](/assets/image/240817-zincsearch-1.png)

## zincsearch简介

zincsearch是一款go语言写的elasticsearch替代品，相较于后者，zincsearch更加小巧轻量化，随之而来的就是资源利用率低。

ZincSearch 是一个进行全文索引的搜索引擎。它是 Elasticsearch 的轻量级替代品，使用一小部分资源运行。它使用 bluge 作为底层索引库。

它提供了自己的ui查询界面，操作简答，部署只需要2分钟。

## zincsearch如何快速开始？

最简单的还是通过docker快速部署

```
mkdir data
docker run -v /full/path/of/data:/data -e ZINC_DATA_PATH="/data" -p 4080:4080 \
    -e ZINC_FIRST_ADMIN_USER=admin -e ZINC_FIRST_ADMIN_PASSWORD=Complexpass#123 \
    --name zincsearch public.ecr.aws/zinclabs/zincsearch:latest

```


## zincsearch有哪些功能特点
- 提供全文索引功能
- 用于安装和运行的单个二进制文件。在多个平台的版本下可用的二进制文件。
- 嵌入式 Web UI，用于查询用 Vue 编写的数据
- 与 Elasticsearch API 完全兼容，用于摄取数据（单条记录和批量 API）
- 与 Elasticsearch DSL 兼容，用于查询数据。
- 开箱即用的身份验证
  

目前该项目有16.8 k star

![](/assets/image/240817-zincsearch-2.png)