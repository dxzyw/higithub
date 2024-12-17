<img src="/assets/image/241211-ophiuchi-desktop.png" />

<small>1.3k star,太好用了！开发日常必备小工具推荐</small>

Ophiuchi Desktop 是一个本地 HTTPS 代理服务器管理工具，使用 Docker 作为后端。这个项目由 @cheeselemon 创建，旨在提供一个简单易用的解决方案，用于管理和配置本地 HTTPS 代理服务器。以下是对该项目的详细介绍，包括其特点和快速开始的方法。

### 项目简介

Ophiuchi Desktop 是一个开源项目，采用 MIT 许可证。它的主要功能是通过 Docker 容器化技术，提供一个本地的 HTTPS 代理服务器管理工具。该项目的目标是简化 HTTPS 代理服务器的配置和管理，使开发者能够更方便地在本地环境中进行开发和测试。

### 项目特点

1. **易于使用**：Ophiuchi Desktop 提供了一个用户友好的界面，使用户能够轻松地配置和管理 HTTPS 代理服务器。即使是没有太多技术背景的用户，也能快速上手。
2. **高效**：通过 Docker 容器化技术，Ophiuchi Desktop 能够高效地运行和管理代理服务器，确保系统资源的最佳利用。
3. **跨平台支持**：该项目支持多种操作系统，包括 Windows、macOS 和 Linux，使其具有广泛的适用性。
4. **安全性**：Ophiuchi Desktop 提供了强大的安全功能，确保代理服务器的安全性和数据的隐私性。
5. **开源社区**：作为一个开源项目，Ophiuchi Desktop 拥有一个活跃的社区，用户可以参与项目的开发和改进，共同推动项目的发展。

### 快速开始

要快速开始使用 Ophiuchi Desktop，可以按照以下步骤进行：

1. **安装 Docker**：首先，需要在你的系统上安装 Docker。可以访问 Docker 的官方网站，下载并安装适用于你操作系统的 Docker 版本。
2. **克隆项目**：在终端中运行以下命令，将 Ophiuchi Desktop 项目克隆到本地：
   ```bash
   git clone https://github.com/cheeselemon/ophiuchi-desktop.git
   ```
3. **安装依赖**：进入项目目录，并安装所需的依赖：
   ```bash
   cd ophiuchi-desktop
   npm install
   ```
4. **运行项目**：使用以下命令启动 Ophiuchi Desktop：
   ```bash
   npm run tauri dev
   ```
   这将启动开发服务器，并在本地运行 Ophiuchi Desktop 应用。
5. **构建项目**：如果需要构建发布版本，可以使用以下命令：
   ```bash
   npm run tauri build -- --debug
   ```
   这将生成一个可调试的构建版本，供你在本地进行测试和调试。

### 结论

Ophiuchi Desktop 是一个功能强大且易于使用的本地 HTTPS 代理服务器管理工具。通过 Docker 容器化技术，它能够高效地运行和管理代理服务器，并提供强大的安全功能。无论你是开发者还是普通用户，都可以通过简单的步骤快速开始使用 Ophiuchi Desktop，享受其带来的便利和高效。

