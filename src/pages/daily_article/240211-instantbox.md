<img src="/assets/image/240211-instantbox-1.png" style="max-width: 70%; height: auto;">
<small># instantbox：获得开箱即用的临时 Linux 环境</small>


## 软件简介

instantbox 是一个开源的项目，它可以让您在网页上快速创建和使用临时的 Linux 系统。

您可以从多种 Linux 发行版中选择，如 Ubuntu、CentOS、Debian、Alpine 等，并且可以调整配置、使用时长和端口。

instantbox 基于 Docker 技术，因此您不需要安装任何额外的软件，只需要一个浏览器和一个 Docker 主机即可。

![](/assets/image/240211-instantbox-1.png)
instantbox 的主要用途是为您提供一个干净的 Linux 环境，您可以在其中进行各种操作，例如：

- 为一个演示或教学准备一个 Linux 环境
- 在一个新的环境中尝试一个灵感或一个开源项目
- 从任何设备管理您的服务器
- 测试软件的性能或兼容性
- 以及更多的可能性...

instantbox 的优点是：

- 快速：您可以在几秒钟内创建一个 Linux 系统，并且可以随时删除它
- 简单：您不需要复杂的设置或命令，只需要在网页上选择您想要的选项
- 灵活：您可以根据您的需求调整系统的配置、使用时长和端口
- 安全：您的数据不会被保存或泄露，您的系统也不会受到其他用户的影响

![](/assets/image/240211-instantbox-2.png)
## 如何快速开始

要使用 instantbox，您需要先安装 Docker，并且确保您的 Docker 主机可以访问互联网。

然后，您可以按照以下步骤来部署和启动 instantbox：

1. 在您的 Docker 主机上创建一个 instantbox 目录，并进入该目录：

```bash
mkdir instantbox && cd $_
```

2. 下载并运行 instantbox 的初始化脚本：

```bash
bash < (curl -sSL [4](https://raw.githubusercontent.com/instantbox/instantbox/master/init.sh%29)
```

3. 在脚本中输入您想要对外暴露的端口，例如 8000。请注意，您需要在您的防火墙中放行该端口，以便您可以通过浏览器访问 instantbox。


![](/assets/image/240211-instantbox-3.png)


4. 使用 docker-compose 命令来启动 instantbox：

```bash
docker-compose up -d
```

5. 在您的浏览器中输入您的 Docker 主机的 IP 地址和端口，例如 `http://192.168.1.100:8000`，您就可以看到 instantbox 的网页界面了。

6. 在网页上选择您想要使用的 Linux 发行版、内存大小、使用时长和内部端口，然后点击“创建”按钮，您就可以得到一个临时的 Linux 系统了。

7. 点击“打开”按钮，您就可以在网页上使用 webshell 来操作您的 Linux 系统了。您也可以使用您的 Docker 主机的 IP 地址和随机生成的外部端口来访问您在 Linux 系统中创建的应用，例如 `http://192.168.1.100:12345`。

8. 当您使用完毕后，您可以点击“删除”按钮来销毁您的 Linux 系统，或者等待它自动过期。您的数据不会被保存或泄露，您的系统也不会受到其他用户的影响。

## 总结

instantbox 是一个基于 Docker 的项目，可以让您在网页上快速创建和使用临时的 Linux 系统。

它可以为您提供一个干净、简单、灵活和安全的 Linux 环境，让您可以在其中进行各种操作。

您只需要一个浏览器和一个 Docker 主机，就可以轻松地使用 instantbox 了。



