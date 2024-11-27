<img src="/assets/image/240114-mitmproxy-1.png" style="max-width: 70%; height: auto;">
<small>32.8k star,强大你、好玩的python抓包工具</small>

开源地址在文末：
![](/assets/image/240114-mitmproxy-1.png)

mitmproxy 是一个免费开源的交互式 HTTPS 代理工具，可以用于拦截、检查、修改和重放网络流量，如 HTTP/1, HTTP/2, WebSockets 或 SSL/TLS 保护的协议。

它有以下几个特点：

- 它提供了命令行、Web 界面和 Python API 三种方式来使用，可以根据不同的需求和场景选择合适的方式。
- 它可以美化和解码各种消息类型，从 HTML 到 Protobuf，拦截特定的消息并在到达目的地之前修改它们，或者稍后将它们重放给客户端或服务器。
- 它可以用于调试、测试、隐私测量和渗透测试，对于开发者和安全研究者来说是一把瑞士军刀。
- 它有一个活跃的社区和生态系统，有许多基于它的插件和工具，可以增强它的功能和应用范围。

要使用 mitmproxy，首先需要安装它。它支持多种平台，如 Windows, Linux, macOS, WSL 和 Docker。安装方法可以参考官网的[下载页面](^2^)。安装完成后，可以通过以下步骤来使用它：

- 在命令行中运行 `mitmproxy` 命令，启动代理服务器。默认情况下，它会监听 8080 端口。
- 在客户端设备上，配置代理设置，将 HTTP 和 HTTPS 流量转发到 mitmproxy 的地址和端口。例如，如果客户端和 mitmproxy 在同一台机器上，可以将代理设置为 `http://127.0.0.1:8080`。
- 在客户端设备上，访问 mitmproxy 的地址和端口，下载并安装 mitmproxy 的证书。例如，如果客户端和 mitmproxy 在同一台机器上，可以访问 `http://mitm.it` 来获取证书。这一步是为了让客户端信任 mitmproxy 的证书，从而可以拦截 HTTPS 流量。
- 在命令行中，可以看到 mitmproxy 拦截的流量，按不同的按键可以进行不同的操作，如查看、修改、重放、保存等。具体的按键说明可以参考官网的[文档](^3^)。
- 如果想使用 Web 界面，可以运行 `mitmweb` 命令，启动 Web 服务器。默认情况下，它会监听 8081 端口。然后在浏览器中访问 `http://127.0.0.1:8081`，可以看到一个类似于 Chrome DevTools 的界面，可以进行类似的操作。
- 如果想使用 Python API，可以运行 `mitmdump` 命令，启动脚本模式。可以通过 `-s` 参数指定一个 Python 脚本，该脚本可以定义一些回调函数，来处理 mitmproxy 拦截的流量。具体的 API 说明可以参考官网的[文档](^3^)。

要在 mitmproxy 中修改请求头和响应头，有几种方法可以实现。

一种是使用命令行的 --modify-headers 参数，它可以根据一个或多个模式来修改请求头或响应头。模式的格式如下：

`/flow-filter/header-name/old-value/new-value`

flow-filter 是一个可选的 mitmproxy 过滤表达式，用于指定哪些流量需要修改。header-name 是要修改的头部名称。old-value 是要替换的头部值。

new-value 是要替换成的头部值。分隔符是任意的，由第一个字符决定。

例如，如果想把所有请求头中的 User-Agent 改为 Mozilla/5.0，可以使用以下命令：

`mitmproxy --modify-headers '/User-Agent/.*/Mozilla/5.0'`

如果想把所有响应头中的 Content-Type 改为 application/json，可以使用以下命令：

`mitmproxy --modify-headers '/~s/Content-Type/.*/application/json'`

另一种方法是使用 Python API，编写一个自定义的插件，用于修改请求头或响应头。

插件需要定义一个类，其中包含一个 request 方法和一个 response 方法，分别用于处理请求和响应。这两个方法都接收一个 flow 参数，它是一个 HTTPFlow 对象，可以通过它的 request.headers 和 response.headers 属性来访问和修改头部。

插件还需要注册到 mitmproxy 的 addons 中，才能生效。然后可以使用以下命令来运行插件：

`mitmdump -s plugin.py`

其中 plugin.py 是插件的文件名。


总之，mitmproxy 是一个强大而灵活的 HTTPS 代理工具，可以用于多种目的和场景，值得一试。


开源地址：https://github.com/mitmproxy/mitmproxy