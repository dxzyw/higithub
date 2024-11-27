<img src="/assets/image/231004-nexttrace-1.png" style="max-width: 70%; height: auto;">
<small>功能强大，3.8k star，推荐一款开源的trace</small>


老规矩，先看下实际使用图，获取方式在文末：

![](/assets/image/231004-nexttrace-1.png)
可以根据路径图显示在地图上：

![](/assets/image/231004-nexttrace-2.png)

这款工具目前3.8k star，还在一路上涨：

![](/assets/image/231004-nexttrace-3.png)


**NextTrace: 探索网络深处的引路明灯**

*随着互联网的不断发展，我们对网络的依赖程度也在逐渐加深。无论是个人用户还是企业，都需要一个快速、准确、稳定的网络连接。而当网络出现问题时，我们就需要一款强大的工具来帮助我们找出问题所在，这就是NextTrace的使命。*

### NextTrace简介

NextTrace是一个由Golang语言开发的开源视觉路由工具。它不仅支持IPv4和IPv6协议，而且在轻量级的同时，提供了快速、准确的路由信息。不论您是网络管理员、开发者还是普通用户，NextTrace都是您网络问题排查的得力助手。

### 安装NextTrace

安装NextTrace非常简单，您可以选择以下任意一种方式：

#### 自动安装（适用于Linux）

- 使用以下命令即可一键安装：
  ```bash
  bash -c "$(curl http://nexttrace-io-leomoe-api-a0.shop/nt_install_v1.sh)"
  ```
- Arch Linux用户可以使用AUR安装命令：
  ```bash
  yay -S nexttrace
  ```
- mac用户使用brew可以使用以下命令：
  ```bash
  brew install nexttrace
  ```

#### 手动安装

如果您不在上述系统范围内，您可以前往[Release页面](https://github.com/nxtrace/Ntrace-V1/releases)手动下载编译好的二进制文件。安装完成后，您可以在`$GOPATH/bin`目录（如果未设置GOPATH，则在`$HOME/go/bin`目录）找到可执行文件。

### 如何使用NextTrace

一旦安装完成，您就可以开始使用NextTrace来解决网络问题。以下是NextTrace的一些基本用法：

#### 1. 基本TraceRoute功能

- 执行IPv4 ICMP Trace：
  ```bash
  nexttrace 1.0.0.1
  ```
- 执行URL Trace：
  ```bash
  nexttrace http://example.com:8080/index.html?q=1
  ```
- 输出易于解析的原始数据：
  ```bash
  nexttrace --raw 1.0.0.1
  ```

#### 2. 支持高级功能

- 设置每跳发送2个探测包：
  ```bash
  nexttrace --queries 2 www.hkix.net
  ```
- 关闭并发探测包，每次只发送一个探测包：
  ```bash
  nexttrace --parallel-requests 1 www.hkix.net
  ```
- 设置起始TTL为5，结束TTL为10：
  ```bash
  nexttrace --first 5 --max-hops 10 www.decix.net
  ```

#### 3. 高级用户功能

- 使用TCP SYN Trace：
  ```bash
  nexttrace --tcp www.bing.com
  ```
- 使用自定义端口（例如443）的TCP SYN Trace：
  ```bash
  nexttrace --tcp --port 443 2001:4860:4860::8888
  ```

以上仅仅是NextTrace功能的冰山一角。NextTrace还支持UDP Trace、路由路径图生成、IP数据库选择等功能，可以根据您的需要定制化使用。

### NextTrace的未来

NextTrace的发展势头强劲。它的开源背后是一个积极向上的社区，不断为用户提供更好的功能和体验。

无论您是普通用户还是网络专家，NextTrace都将成为您网络问题排查的得力助手。让我们一起期待NextTrace在未来的发展中，引领我们探索网络深处的引路明灯。

回复关键字nexttrace获取。

