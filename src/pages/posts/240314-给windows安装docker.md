<img src="/assets/image/240314-给windows安装docker-2.png" style="max-width: 70%; height: auto;">
<small>给windows上安装docker</small>


![Docker Desktop](/assets/image/240314-给windows安装docker-1.png)

**为什么要在Windows上使用Docker**

在Windows上使用Docker主要是为了简化开发和部署过程。

Docker能够将应用程序及其依赖项打包在一起，创建一个隔离的环境，这样就可以确保应用程序在不同的机器和操作系统上都能以相同的方式运行。

这样做的好处包括：

1. **环境一致性**：避免了“我这边就正常运行”的问题。
2. **快速部署**：通过Docker容器，可以快速启动和停止服务。
3. **便捷性**：无需繁琐的配置和设置，使用Docker后，部署仅需一键操作。
4. **跨平台**：在Windows上使用Docker，可以轻松地运行和管理基于Linux的应用。

如果你采用常规的部署，有些麻烦，后续操作也比较复杂，这里建议直接使用docker desktop 方式。

**最新版Docker Desktop的特性**

最新版的Docker Desktop引入了许多新特性，提高了用户体验和安全性。以下是一些显著的新特性：

1. **Containerd集成**：使用containerd进行镜像管理，与更广泛的行业工具保持一致。
2. **扩展程序直接访问**：通过鲸鱼菜单直接访问Docker扩展程序，增强了Docker Desktop的功能。
3. **运行未标记的镜像**：改进了与未标记镜像相关的UI。
4. **搜索功能**：为Docker Extension的Marketplace添加了搜索功能，方便用户找到所需工具。
5. **新扩展**：增加了新的Docker扩展，如Mini Cluster和Volumes Backup & Share。
6. **UI缩放功能**：增加了放大、缩小或设置为实际大小的功能，改善了用户界面的可视性。
7. **支持k8s**：可以一键部署一套k8s环境，方便测试。

![](/assets/image/240314-给windows安装docker-2.png)

下面是在Windows上安装Docker Desktop的步骤，以及一些可能需要调整的配置：

### 安装步骤
1. **前往Docker官网**：在浏览器中打开Docker官方网站。
2. **下载Docker Desktop**：选择适用于Windows的Docker Desktop版本进行下载。
![](/assets/image/240314-给windows安装docker-3.png)

3. **运行安装程序**：下载完成后，双击安装程序启动安装。
4. **接受许可协议**：阅读用户许可协议，若同意则勾选并继续。
5. **选择安装类型**：可以选择典型安装（推荐新手）或自定义安装（高级用户）。
6. **等待安装完成**：安装过程可能需要几分钟时间，请耐心等待。
7. **完成安装**：安装完成后，点击“关闭”按钮。
8. **启动Docker Desktop**：安装完成并重启电脑后，启动Docker Desktop应用程序。
9. **配置Docker Desktop**：根据需要调整Docker Desktop的设置，例如资源分配、网络配置等。
10. **安装WSL 2**：对于Windows 10的用户，推荐安装Windows Subsystem for Linux (WSL) 2，以获得更好的性能和兼容性。
11. **测试安装**：运行一个简单的Docker命令，如`docker run hello-world`，以确认Docker Desktop已正确安装和配置。


![可以查看日志、控制台、监控状态等](/assets/image/240314-给windows安装docker-4.png)


### 需要调整的配置
- **启用Hyper-V**：Docker Desktop需要Windows的Hyper-V功能，确保在控制面板中启用。

![](/assets/image/240314-给windows安装docker-5.png)

- **CPU和内存分配**：在Docker设置中，可以根据需要调整虚拟机使用的CPU核心数和内存大小。
- **共享驱动器**：如果需要容器访问Windows文件系统，需在Docker设置中共享相应的驱动器。
- **网络设置**：根据需要调整网络代理和IP地址分配。

如上就是关于如何在windows上快速使用docker的步骤，如果有其它启动问题，欢迎咨询。
