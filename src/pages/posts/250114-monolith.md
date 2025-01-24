<img src="/assets/image/250114-monolith.png"/>

<small>12.3k star,一条命令行打包一个网页为html 文件</small>

### Monolith 项目简介

Monolith 是一个命令行工具，旨在将完整的网页保存为单个 HTML 文件。这个工具不仅保存目标文档，还嵌入了 CSS、图像和 JavaScript 资源，生成一个单一的 HTML5 文档。与传统的“另存为”功能不同，Monolith 能够将所有资源嵌入为数据 URL，从而使浏览器在没有网络连接的情况下也能准确渲染保存的页面。

### 项目特点

1. **全面保存**：Monolith 不仅保存网页的 HTML 内容，还嵌入了所有相关的 CSS、图像和 JavaScript 资源，确保页面在离线状态下也能完美呈现。
2. **多平台支持**：该工具支持多种操作系统，包括 macOS、Windows 和各种 Linux 发行版。用户可以通过多种包管理器（如 Homebrew、Chocolatey、Scoop 等）安装 Monolith。
3. **灵活配置**：Monolith 提供了丰富的命令行选项，用户可以根据需要排除特定资源（如音频、视频、CSS、JavaScript 等），自定义基础 URL，设置网络请求超时等。
4. **动态内容处理**：虽然 Monolith 本身不具备 JavaScript 引擎，但可以结合其他工具（如 Chromium）预处理动态内容，从而保存动态网页。
5. **开源和社区支持**：Monolith 是一个开源项目，用户可以自由使用、修改和分发。项目在 GitHub 上有活跃的社区，用户可以提交问题、贡献代码。

### 快速开始

要快速开始使用 Monolith，可以按照以下步骤进行：

1. **安装 Monolith**：
   - 使用 Cargo 安装（跨平台）：
     ```bash
     cargo install monolith
     ```
   - 使用 Homebrew 安装（macOS 和 GNU/Linux）：
     ```bash
     brew install monolith
     ```
   - 使用 Chocolatey 安装（Windows）：
     ```bash
     choco install monolith
     ```
   - 使用 Scoop 安装（Windows）：
     ```bash
     scoop install main/monolith
     ```
   - 使用 Winget 安装（Windows）：
     ```bash
     winget install --id=Y2Z.Monolith -e
     ```
   - 使用 MacPorts 安装（macOS）：
     ```bash
     sudo port install monolith
     ```
   - 使用 Snapcraft 安装（GNU/Linux）：
     ```bash
     snap install monolith
     ```
   - 使用 Guix 安装（GNU/Linux）：
     ```bash
     guix install monolith
     ```
   - 使用 NixPkgs 安装：
     ```bash
     nix-env -iA nixpkgs.monolith
     ```
   - 使用 Flox 安装：
     ```bash
     flox install monolith
     ```
   - 使用 Pacman 安装（Arch Linux）：
     ```bash
     pacman -S monolith
     ```
   - 使用 aports 安装（Alpine Linux）：
     ```bash
     apk add monolith
     ```
   - 使用 XBPS Package Manager 安装（Void Linux）：
     ```bash
     xbps-install -S monolith
     ```
   - 使用 FreeBSD packages 安装（FreeBSD）：
     ```bash
     pkg install monolith
     ```
   - 使用 FreeBSD ports 安装（FreeBSD）：
     ```bash
     cd /usr/ports/www/monolith/
     make install clean
     ```
   - 使用 pkgsrc 安装（NetBSD、OpenBSD、Haiku 等）：
     ```bash
     cd /usr/pkgsrc/www/monolith
     make install clean
     ```
   - 使用容器安装：
     ```bash
     docker build -t y2z/monolith .
     sudo install -b dist/run-in-container.sh /usr/local/bin/monolith
     ```

2. **使用 Monolith 保存网页**：
   - 保存指定网页为 HTML 文件：
     ```bash
     monolith https://example.com -o example.html
     ```
   - 从标准输入读取 HTML 并保存：
     ```bash
     cat some-site-page.html | monolith -aIiFfcMv -b https://some.site/ - > some-site-page-with-assets.html
     ```

通过以上步骤，你可以快速开始使用 Monolith，将任意网页保存为单个 HTML 文件，方便离线浏览和分享。

地址：github.com/Y2Z/monolith