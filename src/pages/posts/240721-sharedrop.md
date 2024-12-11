<img src="/assets/image/240721-sharedrop.png">
<small>9.2k star，安卓和iphone之间快速传输原图文件！</small>

类似的功能在apple设备上叫airdrop，也有一些第三方软件可以实现如localsend，今天介绍的这款是一个开源免费的通过网页端实现文件传输的工具。

除了可以在互联网两端（包括移动端）传输，也可以在局域网环境下使用。

### 项目简介

sharedrop的灵感就是来自己apple的airdrop，但是后者有局限性。

这个工具可以在设备之间实现点对点文件传输，事前不需要上传文件，原理实际就是采用webrtc技术来完成。

也可以用firebase来在线监控状态。

### 如何使用

最简单的方式就是打开 https://www.sharedrop.io/ 网站，如果是同一网络下，那么就可以发现双方，如果不是同一网络，可以通过创建同一url房间来实现文件快速传输。

sharedrrop是可以在移动端和pc端相互传输文件的。


### 功能特点

- 无需服务器，采用webrtc的技术
- 使用简单， 只需要拖拽即可完成文件传输
- 实时共享，可以快速高效完成文件传输
- 安全、跨平台支持

下为相关技术补充介绍：

### 什么是webrtc

WebRTC（Web Real-Time Communications）是一个支持网页浏览器进行实时音视频通信的开放标准。它允许开发者在网页上实现音视频通话、文件共享等功能，而无需安装任何插件或第三方软件。

WebRTC的主要特点包括：

实时性：支持低延迟的实时通信。
浏览器兼容性：可以在多种浏览器上运行，包括Chrome、Firefox、Safari等。
点对点通信：支持P2P（Peer-to-Peer）连接，减少服务器负载。
加密：使用DTLS（Datagram Transport Layer Security）和SRTP（Secure Real-time Transport Protocol）提供端到端的加密通信。
跨平台：可以在不同操作系统和设备上运行。

### star增长图

 ![github-star](/assets/image/240721-sharedrop.png)

 >项目地址：https://github.com/szimek/sharedrop