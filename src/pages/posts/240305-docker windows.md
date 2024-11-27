<img src="/assets/image/240305-docker windows-1.png" style="max-width: 70%; height: auto;">
<small>4.2k star，用docker运行windows，支持win7到win11</small>


docker可以运行linux、macos，近期发现一个项目可以通过docker运行win7到win11。

启动后可以在浏览器中访问win系统

![](/assets/image/240305-docker windows-1.png)


# dockur/windows：在 Docker 容器中运行 Windows

Docker 是一个流行的开源平台，可以让开发者和运维人员快速地构建、运行和分享应用程序。

Docker 可以在不同的操作系统和环境中提供一致的体验，无论是 Linux、Mac 还是 Windows。

但是，如果你想在 Docker 容器中运行 Windows，你可能会遇到一些困难和限制。

例如，你需要使用 Windows 10 或 Windows 11 的专业版或企业版，你需要开启 Hyper-V 或 WSL 2 功能，你需要下载特定的 Windows 镜像，等等。

这些都会增加你的工作量和复杂度，也会影响你的性能和兼容性。

dockur/windows 是一个开源工具，可以让你在 Docker 容器中轻松地运行 Windows。它有以下的功能特色：

- ISO 下载器：它可以自动从互联网上下载你想要的 Windows 版本的 ISO 文件，无需你手动寻找和下载。
- KVM 加速：它可以利用 Linux 的 KVM 技术，为你的 Windows 容器提供硬件虚拟化的加速，提高你的运行速度和稳定性。
- Web-based viewer：它可以通过 Web 浏览器，让你实时地查看和控制你的 Windows 容器的桌面，无需你安装任何额外的软件或插件。

使用 dockur/windows 非常简单，你只需要遵循以下的步骤：

- 安装 Docker Desktop for Windows，并确保你的系统满足运行要求。
- 下载 dockur/windows 的源码，或者直接从 Docker Hub 上拉取它的镜像。
- 编辑 docker-compose.yml 文件，根据你的需要，设置你想要的 Windows 版本、CPU 核心数、内存大小、磁盘大小等参数。
- 运行 docker-compose up 命令，启动你的 Windows 容器。
- 打开你的 Web 浏览器，访问 http://localhost:8006 ，查看你的 Windows 容器的桌面。
- 等待 Windows 的安装过程完成，这可能需要一些时间，取决于你的网络速度和系统性能。
- 享受你的全新的 Windows 机器，你可以使用它来运行你想要的应用程序或测试你的代码。

dockur/windows 是一个创新和实用的开源工具，可以让你在 Docker 容器中运行 Windows，无需复杂的配置和安装。

它可以为你节省时间和资源，也可以为你提供更多的选择和灵活性。

如果你对它感兴趣，你可以访问它的 GitHub 仓库，了解更多的信息和文档，也可以给它一个星星，支持它的开发者。

![](/assets/image/240305-docker windows-2.png)
