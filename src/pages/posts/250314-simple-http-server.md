<img src="/assets/image/250314-simple-http-server.png"/>

<small>2.9k star，rust写的又一款小而精的服务</small>

在现代Web开发中，快速搭建一个安全、可靠、功能强大的HTTP服务器是许多开发者面临的共同挑战。为此，简单HTTP服务器（simple-http-server）应运而生，它基于Rust语言，兼容Windows、Mac和Linux平台，提供了一系列功能强大的特性，简化了HTTP服务器的搭建与管理过程。

## 简介
简单HTTP服务器是一款基于Rust语言的轻量级服务器解决方案，旨在提供跨平台支持，兼容Windows、Mac和Linux操作系统。无论你是初学者还是专业开发者，simple-http-server都能帮助你快速搭建一个安全、高效的HTTP服务器。

## 功能特点
simple-http-server提供了多种功能，满足不同场景下的需求：
- **跨平台支持**：兼容Windows、Mac和Linux操作系统。
- **自定义监听地址**：指定服务器的IP地址和端口号。
- **多线程支持**：指定工作线程数量，提高并发性能。
- **目录视图**：支持Nginx风格的目录视图，提供文件链接、文件大小和修改日期信息。
- **面包屑导航**：默认启用，简化目录层级浏览。
- **MIME类型识别**：自动识别文件的MIME类型。
- **HTTP缓存控制**：支持发送Last-Modified和ETag，回复304状态码。
- **分块请求**：支持Accept-Ranges，处理部分请求。
- **自动渲染索引页**：自动渲染index.html和index.htm。
- **文件上传**：支持文件上传，提供CSRF保护。
- **HTTP基本认证**：通过用户名和密码进行身份验证。
- **HTTPS支持**：支持TLS/SSL证书，提供安全传输。
- **CORS支持**：添加CORS头部，支持跨域资源共享。
- **静默模式**：禁用所有输出，适用于后台运行。

## 如何开始
以下是安装和使用simple-http-server的步骤：

### 1. 下载二进制文件
你可以从GitHub页面下载适用于Windows、Mac和Linux系统的二进制文件。

### 2. 使用Cargo安装
如果你已经安装了Rust，可以使用Cargo安装simple-http-server：
```sh
curl https://sh.rustup.rs -sSf | sh  # 安装Rust
cargo install simple-http-server     # 安装simple-http-server
```

### 3. 启动服务器
安装完成后，你可以使用以下命令启动服务器：
```sh
simple-http-server -i -p 80 folder-name
```
上述命令会使用端口80启动服务器，并指定网站根目录为`folder-name`。你可以根据需要修改端口号和根目录。

通过simple-http-server，开发者可以轻松应对HTTP服务器搭建中的各种挑战，专注于业务逻辑的实现。希望这个介绍对你有所帮助，欢迎你尝试并体验这款强大的工具！