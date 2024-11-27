<img src="/assets/image/230925-可观测平台-hyperdx-1.png" style="max-width: 70%; height: auto;">
<small>4.4k star酷炫、强大的开源监控平台推荐，更聚焦于业务，更快速的响应、监控到生产异常！！</small>


先通过一段官方提供的图片的了解下这个工具：

![](/assets/image/230925-可观测平台-hyperdx-1.png)

# HyperDX：彻底改变生产环境故障排除方式

在现代软件开发领域，监控和故障排除是至关重要的任务。为了帮助工程师更快速地解决生产环境问题，HyperDX已经成为一个强大的工具。

HyperDX将日志、指标、跟踪、异常和会话重放集中到一个地方，有助于工程师找出生产环境故障的根本原因。

此外，它还是一个开源的、开发者友好的替代工具。


## 主要功能

HyperDX提供了一套强大的功能，使工程师能够更有效地解决生产环境问题。

### 1. 端到端关联

HyperDX可以帮助您快速追踪问题的根本原因。您可以通过几次点击从浏览器会话重放追踪到日志和跟踪信息。这个功能有助于您迅速了解问题的全貌。

![](/assets/image/230925-可观测平台-hyperdx-2.png)


### 2. 极速性能

HyperDX通过强大的Clickhouse引擎提供了出色的性能支持。您可以信任它以极快的速度处理海量的监控数据。

### 3. 直观搜索

它提供了直观的全文搜索和属性搜索语法，如`level:err`，让您能够快速定位关键信息。

![](/assets/image/230925-可观测平台-hyperdx-3.png)

### 4. 自动事件模式聚类

HyperDX可以自动从数十亿事件中聚类出模式，使您更容易识别问题。不再需要手动分析庞大的数据集。


![](/assets/image/230925-可观测平台-hyperdx-4.png)


### 5. 灵活的仪表盘

您可以轻松创建高基数事件的仪表板，无需编写复杂的查询语言。这使您可以可视化监控重要的指标。


![](/assets/image/230925-可观测平台-hyperdx-5.png)


### 6. 快速警报设置

只需点击几下，您就可以设置警报，以便在问题出现时迅速通知您的团队。这有助于快速响应问题。

### 7. 自动JSON/结构化日志解析

HyperDX自动解析JSON和结构化日志，使日志更容易理解和分析。

### 8. OpenTelemetry本地支持

HyperDX本地支持OpenTelemetry，这是CNCF支持的一种供应商中立的标准，用于仪表化您的应用程序。支持的语言/平台包括Kubernetes、JavaScript、Python、Java、Go、Ruby、PHP、.NET、Elixir、Rust等等。这简化了集成过程。

## 开始使用HyperDX

使用HyperDX非常简单。首先，您需要启动HyperDX环境。您可以使用Docker Compose快速启动完整的HyperDX环境。只需克隆此存储库，并运行以下命令：

```shell
docker compose up -d
```

之后，您可以访问HyperDX用户界面，地址为http://localhost:8080。如果您的服务器位于防火墙后面，您需要打开/转发端口8080、8000和4318，以便分别访问UI、API和OpenTelemetry收集器。

如果您想快速预览HyperDX，您可以启用自我仪表化和演示日志。将`HYPERDX_API_KEY`设置为您的摄取密钥（在创建帐户后，转到http://localhost:8080/team），然后重新启动堆栈。

```shell
HYPERDX_API_KEY=<YOUR_INGESTION_KEY> docker compose up -d
```

如果您需要使用`sudo`运行Docker，请确保使用`-E`标志将环境变量传递给它：

```shell
HYPERDX_API_KEY=<YOUR_KEY> sudo -E docker compose up -d
```

## 更改主机名和端口

默认情况下，HyperDX应用程序/API在本地主机上使用端口8080/8000运行。您可以通过更新`.env`文件中的`HYPERDX_APP_**`和`HYPERDX_API_**`变量来更改这些设置。在进行更改后，使用`make build-local`重新构建映像。



## 为您的应用程序添加仪表化

要将日志、指标、跟踪、会话重放等数据发送到HyperDX，您需要为您的应用程序添加仪表化。

HyperDX提供一组SDK和集成选项，以使入门更容易。我们支持各种语言/平台，包括浏览器、Node.js和Python等。您可以在我们的文档中找到完整的列表。

此外，HyperDX与OpenTelemetry兼容，OpenTelemetry是CNCF支持的一种供应商中立的标准，用于仪表化您的应用程序。

支持的语言/平台包括Kubernetes、JavaScript、Python、Java、Go、Ruby、PHP、.NET、Elixir、Rust等等。

一旦HyperDX运行起来，您可以将您的OpenTelemetry SDK配置到在http://localhost:4318上启动的OpenTelemetry收集器。


## 动机



在我们的经验中，现有的工具在某些方面往往表现不佳：

- 它们可能很昂贵，而定价不会随着遥测数据量的增加而扩展，导致团队不得不减少他们可以收集的数据量。
- 它们可能难以使用，需要全职SRE设置，并需要专业领域的专家才能自信使用。
- 它们通常需要从一个工具跳到另一个工具（日志、会话重放、APM、异常等等）来自行拼凑线索。



HyperDX正在重新定义工程师故障排除生产环境的方式。凭借其强大的功能、开源性质和云托管的便利性，它是现代软件开发的改变者。尝试一下，提升您的可观察性和故障排除能力！
