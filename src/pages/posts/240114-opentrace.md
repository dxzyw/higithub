<img src="/assets/image/240114-opentrace-1.png" style="max-width: 70%; height: auto;">
<small>1.5k star，推荐一款开源、免费的、酷炫的工具</small>


可以看下预览图，**开源地址在文末**：
![](/assets/image/240114-opentrace-1.png)


OpenTrace：一款跨平台的可视化路由跟踪软件

在网络诊断和优化的过程中，路由跟踪是一种常用的方法，它可以显示数据包从源主机到目的主机的传输路径，以及每个中间节点的延迟和丢包情况。

路由跟踪可以帮助我们发现网络拥塞、故障、黑洞等问题，从而提高网络性能和安全性。

![](/assets/image/240114-opentrace-2.png)


然而，传统的路由跟踪工具，如 traceroute、tracert、mtr 等，通常只提供了基本的文本输出，缺乏可视化和交互性，不利于用户快速分析和理解路由跟踪的结果。

此外，这些工具也存在一些局限性，如不支持多种协议、不支持自定义 DNS 服务器、不支持 IP 地理位置和运营商信息等。

![](/assets/image/240114-opentrace-3.png)


为了解决这些问题，一款名为 OpenTrace 的软件应运而生。

OpenTrace 是 NextTrace 的跨平台 GUI 界面，带来您熟悉但更强大的用户体验。

NextTrace 是一款基于 Rust 语言开发的高性能路由跟踪工具，它支持 ICMP、TCP、UDP、QUIC 等多种协议，支持 DNS、DoH 等多种 DNS 服务器，支持使用本地 MMDB 格式的 IP 数据库，支持输出 JSON、CSV、XML 等多种格式的数据，支持多线程和异步 IO 等特性。


![](/assets/image/240114-opentrace-4.png)


OpenTrace 则为 NextTrace 提供了一个跨平台的原生 GUI，支持 Windows、Linux 和 macOS 等操作系统。

OpenTrace 的界面设计简洁美观，功能强大易用，用户友好的 GUI 和易于理解的参数描述，让您无需记忆复杂的命令行参数，只需点击几下鼠标，就可以开始路由跟踪的任务。

OpenTrace 还提供了 MTR（My Traceroute）的功能，可以实时显示每个节点的延迟、丢包、抖动等统计信息，以及图形化的柱状图和折线图，让您一目了然地看到路由跟踪的动态变化。

OpenTrace 还支持多语言，目前已经支持了中文、英文、日文等语言，方便不同国家和地区的用户使用。
![](/assets/image/240114-opentrace-5.png)


OpenTrace 的安装和使用非常简单，您只需要按照以下步骤操作：

1. 从开源地址下载对应系统架构的 OpenTrace，解压后得到 OpenTrace 的可执行文件。

![](/assets/image/240114-opentrace-6.png)

2. 从开race，将其放置于 OpenTrace 目录下，或者放置到系统 PATH 环境变量包含的目录中；您亦可以放到任意位置并手动指定路径（macOS 用户推荐）。
3. 运行 OpenTrace 的可执行文件，您将看到 OpenTrace 的主界面
4. 在主界面的“目标”栏中输入您想要跟踪的目标主机的 IP 地址或域名，如 www.google.com。
5. 在主界面的“参数”栏中选择您想要使用的协议、端口、超时、最大跳数、间隔等参数，或者保持默认值。
6. 在主界面的“DNS”栏中选择您想要使用的 DNS 服务器，可以是系统默认的 DNS，也可以是自定义的 DNS 或 DoH 服务器。
7. 在主界面的“IP 数据库”栏中选择您想要使用的 IP 数据库，可以是内置的 GeoLite2 数据库，也可以是自定义的 MMDB 格式的数据库。
8. 点击主界面的“开始”按钮，OpenTrace 将开始路由跟踪的任务，并在下方的“输出”栏中显示文本输出

![](/assets/image/240114-opentrace-7.png)

9. 如果您想要查看 MTR 的功能，可以点击主界面的“MTR”按钮，OpenTrace 将在新窗口中显示 MTR 的输出
10. 如果您想要保存路由跟踪的结果，可以点击主界面的“保存”按钮，选择您想要保存的格式，如 JSON、CSV、XML 等，以及保存的路径和文件名，OpenTrace 将把路由跟踪的结果保存到您指定的位置。
11. 如果您想要停止路由跟踪的任务，可以点击主界面的“停止”按钮，OpenTrace 将终止路由跟踪的进程，并清空输出栏的内容。

以上就是 OpenTrace 的简介、特点和使用方法，希望对您有所帮助。

**开源地址：https://github.com/Archeb/opentrace**
