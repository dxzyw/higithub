<img src="/assets/image/240114-让OrbStack带飞-1.png" style="max-width: 70%; height: auto;">
<small>3.5k star，一款带你起飞的软件工具</small>


看图，官网地址在文末：

![](/assets/image/240114-让OrbStack带飞-1.png)

![与Docker Desktop对比](/assets/image/240114-让OrbStack带飞-2.gif)

有个遗憾，只有mac版本！！！

OrbStack 是一个在 macOS 上运行 Docker 容器和 Linux 机器的快速、轻量级和简单的方式。它是一个超级充电版 WSL 和 Docker Desktop 的替代品，所有这些都在一个易于使用的应用程序中实现。本文将介绍 OrbStack 的简介、特点、安装方法和类似工具，并做出总结。

## 简介
OrbStack 是一个由 OrbStack 团队开发的 macOS 应用程序，它可以让用户在 macOS 上运行 Docker 容器和 Linux 机器，而无需安装虚拟机或其他复杂的软件。

OrbStack 使用了一种名为 Orb 的技术，它是一种基于 Linux 的轻量级操作系统，可以在 macOS 上以原生速度运行。OrbStack 还提供了一个图形界面和一个命令行工具，让用户可以方便地管理和控制 Orb 中的容器和机器。

## 特点
OrbStack 有以下几个主要的特点：

- **快速**：OrbStack 可以在 2 秒内启动，拥有优化的网络和文件系统，支持 Rosetta 模拟。OrbStack 可以让用户以极快的速度开发和运行 Docker 容器和 Linux 机器，无需等待长时间的启动和加载。
- **轻量**：OrbStack 占用的 CPU 和磁盘资源很少，对电池友好，可以在内存较少的设备上工作，是一个用 Swift 编写的原生应用程序。OrbStack 不会像其他虚拟机或容器软件那样拖慢用户的电脑，也不会影响用户的其他应用程序的性能。
- **简单**：OrbStack 提供了自动的域名和迁移功能，可以与 CLI 和文件系统集成，支持 VPN 和 SSH。OrbStack 让用户无需复杂的配置和设置，就可以轻松地在 macOS 上运行 Docker 容器和 Linux 机器，还可以通过菜单栏快速地管理和访问它们。
- **强大**：OrbStack 可以运行 Docker 容器、Kubernetes 和 Linux 发行版，支持多种编程语言和框架。OrbStack 还可以让用户探索和修改容器和镜像的文件，提供了丰富的功能和选项。

## 安装
OrbStack 的安装方法很简单，只需按照以下步骤操作：

- 访问 OrbStack 的官方网站 ，点击 Download 按钮，下载 OrbStack 的 dmg 文件。
- 打开 dmg 文件，将 OrbStack 的图标拖放到 Applications 文件夹中。
- 打开 Applications 文件夹，双击 OrbStack 的图标，启动 OrbStack 应用程序。
- 在 OrbStack 的欢迎界面中，点击 Get Started 按钮，开始使用 OrbStack。

## 类似工具
OrbStack 的类似工具有以下几个：

- **Docker Desktop**：Docker Desktop 是 Docker 官方提供的在 macOS 和 Windows 上运行 Docker 容器的软件，它使用了 HyperKit 和 WSL 2 等虚拟化技术，提供了图形界面和命令行工具。Docker Desktop 的优点是功能完善，支持多种容器和集群，缺点是启动和运行速度慢，占用资源多，需要频繁更新和重启。
- **WSL 2**：WSL 2 是 Windows Subsystem for Linux 的第二代版本，它是一种在 Windows 上运行 Linux 的技术，它使用了 Hyper-V 等虚拟化技术，提供了命令行工具和文件系统集成。WSL 2 的优点是运行速度快，支持多种 Linux 发行版，缺点是只能在 Windows 上使用，需要安装和配置较多的组件，与 Docker 的集成需要额外的步骤。
- **Multipass**：Multipass 是一种在 macOS、Windows 和 Linux 上运行 Ubuntu 的技术，它使用了 HyperKit、Hyper-V 和 KVM 等虚拟化技术，提供了命令行工具和图形界面。Multipass 的优点是安装和使用简单，支持多个实例和云端集成，缺点是只能运行 Ubuntu，占用资源较多，与 Docker 的集成需要额外的步骤。

## 总结
OrbStack 是一个在 macOS 上运行 Docker 容器和 Linux 机器的快速、轻量级和简单的方式。

它是一个超级充电版 WSL 和 Docker Desktop 的替代品，所有这些都在一个易于使用的应用程序中实现。OrbStack 有着快速、轻量、简单和强大的特点，可以让用户在 macOS 上享受到 Linux 的优势，提高开发和运行的效率和体验。

OrbStack 的安装方法很简单，只需下载和启动即可。OrbStack 的类似工具有 Docker Desktop、WSL 2 和 Multipass，它们各有优缺点，但 OrbStack 在速度、资源和易用性方面都有明显的优势。OrbStack 是一个值得尝试和使用的 macOS 应用程序，它可以为用户带来更多的可能性和创造力。



开源地址：https://github.com/orbstack

官网地址：https://orbstack.dev/