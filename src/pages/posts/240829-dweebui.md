<img src="/assets/image/240829-dweebui.png">
<small>推荐一个开源的docker管理平台</small>
![](/assets/image/240829-dweebui.png)

### DweebUI：轻松管理你的容器世界

#### 工具简介

DweebUI 是一个开源的 Web 用户界面，用于管理 Docker 容器。它提供了一个动态更新的仪表板，显示服务器和容器的各种指标，并允许用户执行容器的基本操作，如启动、停止、暂停和重启等。DweebUI 支持多用户权限系统，适用于 Windows、Linux 和 MacOS 平台，并且具有移动设备友好性。

#### 如何快速开始

要快速开始使用 DweebUI，可以按照以下步骤进行设置：

1. **安装 Docker 和 Docker Compose**：
   确保你的系统上已经安装了 Docker 和 Docker Compose。如果没有，请先安装它们。

2. **下载 DweebUI**：
   克隆 DweebUI 的 GitHub 仓库：
   ```bash
   git clone https://github.com/lllllllillllllillll/DweebUI.git
   cd DweebUI
   ```

3. **创建 Docker Compose 文件**：
   在 DweebUI 目录下创建一个名为 `docker-compose.yml` 的文件，并粘贴以下内容：
   ```yaml
   version: "3.9"
   services:
     dweebui:
       container_name: dweebui
       image: lllllllillllllillll/dweebui
       environment:
         PORT: 8000
         SECRET: MrWiskers
       restart: unless-stopped
       ports:
         - 8000:8000
       volumes:
         - dweebui:/app/config
         - /var/run/docker.sock:/var/run/docker.sock
       networks:
         - dweebui_net
   volumes:
     dweebui:
   networks:
     dweebui_net:
       driver: bridge
   ```

4. **启动 DweebUI**：
   打开终端，导航到 DweebUI 目录，运行以下命令启动服务：
   ```bash
   docker compose up -d
   ```
   如果遇到权限问题，可以使用 `sudo`：
   ```bash
   sudo docker compose up -d
   ```

5. **访问 DweebUI**：
   在浏览器中打开 `http://localhost:8000`，即可访问 DweebUI 的界面。

#### 功能特点

DweebUI 提供了丰富的功能，帮助用户高效管理 Docker 容器：

1. **动态更新的仪表板**：
   仪表板实时显示服务器和容器的各种指标，包括 CPU 使用率、内存使用情况、网络流量等。

2. **多用户支持**：
   DweebUI 具有多用户权限系统，可以为不同用户分配不同的权限，确保系统的安全性和灵活性。

3. **容器管理**：
   用户可以通过界面执行容器的基本操作，如启动、停止、暂停、重启、查看详情和日志等。

4. **跨平台兼容**：
   DweebUI 兼容 Windows、Linux 和 MacOS 平台，并且具有移动设备友好性，用户可以随时随地管理容器。

5. **网络、镜像和卷管理**：
   用户可以通过 DweebUI 管理 Docker 网络、镜像和卷，简化了容器管理的复杂性。

6. **模板支持**：
   DweebUI 提供了易于安装的应用模板，用户可以快速部署常用的应用程序。它还支持 Docker Compose，用户可以通过编写 `docker-compose.yml` 文件来管理复杂的多容器应用。

7. **主题和模式**：
   DweebUI 提供了浅色和深色模式，用户可以根据个人喜好进行切换。

8. **未来计划**：
   开发者计划在未来版本中添加更多功能，如容器更新、预设变量和更多主题等。

#### 总结

DweebUI 是一个功能强大且易于使用的 Docker 容器管理工具。它不仅提供了丰富的功能，还具有良好的用户体验和跨平台兼容性。无论你是开发者还是运维人员，DweebUI 都能帮助你高效地管理容器，提升工作效率。如果你对容器管理感兴趣，不妨试试 DweebUI，相信它会成为你工作中的得力助手。

