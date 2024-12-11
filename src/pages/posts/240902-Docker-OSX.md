<img src="/assets/image/240902-Docker-OSX.png">
<small>43.4k star，超强开源软件推荐！</small>

如果你想在docker中运行一个macos系统，你能想到什么办法？

今天推荐一个超强的开源软件！

### Docker-OSX 介绍

**Docker-OSX** 可以许用户在 Docker 容器中运行 macOS 虚拟机。

这个项目是由Sick.Codes开源及维护，它的想法在于提供接近原生性能的 macOS-KVM 环境

并且支持 X11 转发、CI/CD 安全研究等功能，如下图：

![](/assets/image/240902-Docker-OSX.png)

#### 软件简介

Docker-OSX 是一个强大的工具，特别适合需要在 macOS 环境中进行开发、测试和安全研究的用户。

通过在 Docker 容器中运行 macOS，用户可以在 Linux 和 Windows 系统上轻松访问 macOS 环境，而无需实际的 Apple 硬件。

#### 功能特点

1. **接近原生性能**：利用 KVM 技术，提供高效的虚拟化性能。
2. **X11 转发**：支持图形界面的应用程序，通过 X11 转发在本地显示。
3. **CI/CD 集成**：适用于 macOS 安全研究和持续集成/持续部署（CI/CD）流程。
4. **多版本支持**：支持多个 macOS 版本，包括 Catalina 和 Big Sur。
5. **USB 支持**：支持 iPhone 等 USB 设备的连接和调试。
6. **社区支持**：活跃的社区和支持渠道，包括 Discord 和 Telegram¹。

#### 快速开始

以下是快速开始使用 Docker-OSX 的步骤：

1. **安装 Docker**：确保系统上已安装 Docker。可以通过 Docker 官方网站下载并安装适用于你操作系统的 Docker 版本。
2. **拉取 Docker-OSX 镜像**：
   ```bash
   docker pull sickcodes/docker-osx:latest
   ```
3. **运行容器**：
   ```bash
   docker run -it \
     --device /dev/kvm \
     -p 50922:10022 \
     -v /tmp/.X11-unix:/tmp/.X11-unix \
     -e "DISPLAY=${DISPLAY:-:0.0}" \
     sickcodes/docker-osx:latest
   ```
4. **访问 macOS**：通过 VNC 客户端连接到 `localhost:50922`，即可访问运行在 Docker 容器中的 macOS 环境。

具体操作可以访问如下地址：

开源地址：https://github.com/sickcodes/Docker-OSX

