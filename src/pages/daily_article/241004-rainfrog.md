<img src="/assets/image/241004-rainfrog.png">
<small>1.2k star,这个开源项目，不错！
</small>

## Rainfrog: 轻量级数据库管理工具

### 软件简介

Rainfrog 是一个专为 PostgreSQL 设计的轻量级终端用户界面（TUI）数据库管理工具。它旨在提供一个高效、便捷的替代方案，取代传统的图形化数据库管理工具如 pgAdmin 和 DBeaver。

Rainfrog 目前处于 alpha 阶段，主要目标是为用户提供一个快速、直观的数据库管理体验。

![](/assets/image/241004-rainfrog.png)

### 功能特点

Rainfrog 拥有一系列强大的功能，使其成为数据库管理的理想选择：



1. **高效导航**：支持类似 Vim 的键绑定和鼠标控制，用户可以快速在界面中移动和操作。
2. **查询编辑器**：内置查询编辑器，支持关键字高亮和会话历史记录，方便用户编写和管理 SQL 查询。
3. **数据复制和过滤**：用户可以快速复制数据、过滤表格，并在不同的模式之间切换。
4. **表格元数据查看**：提供快捷方式查看表格的元数据和属性，帮助用户更好地理解数据库结构。
5. **跨平台支持**：Rainfrog 支持 macOS、Linux、Windows 以及通过 Termux 在 Android 上运行。
6. **轻量级和快速**：作为一个终端工具，Rainfrog 运行速度快，占用资源少，非常适合在资源有限的环境中使用。

### 如何快速开始

要快速开始使用 Rainfrog，您可以按照以下步骤进行安装和配置：

#### 1. 安装 Rust

Rainfrog 依赖于 Rust 编程语言，因此首先需要安装 Rust。推荐使用 rustup 工具进行安装：

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

安装完成后，您可以使用以下命令检查 Rust 是否安装成功：

```bash
rustc --version
```

#### 2. 安装 Rainfrog

安装 Rust 后，您可以使用 Cargo（Rust 的包管理工具）来安装 Rainfrog：

```bash
cargo install rainfrog
```

对于 Arch Linux 用户，可以通过 AUR 安装：

```bash
paru -S rainfrog
```

如果您使用 Termux，可以通过以下命令安装 Rust 和 Rainfrog：

```bash
pkg install rust
cargo install rainfrog --features termux --no-default-features
```

#### 3. 配置环境变量

安装完成后，您需要将 Rainfrog 的二进制文件路径添加到您的 PATH 环境变量中。您可以编辑 `~/.bashrc` 或 `~/.zshrc` 文件，添加以下内容：

```bash
export PATH="$HOME/.cargo/bin:$PATH"
```

然后，重新加载配置文件：

```bash
source ~/.bashrc
```

#### 4. 运行 Rainfrog

安装和配置完成后，您可以通过以下命令运行 Rainfrog：

```bash
rainfrog --url postgres://username:password@localhost:5432/postgres
```

请将 `username` 和 `password` 替换为您的数据库用户名和密码，`localhost:5432` 替换为您的数据库地址和端口。

### 使用指南

Rainfrog 提供了一系列快捷键，帮助用户高效地管理数据库：

- **Ctrl+c**：退出程序
- **Alt+1, Ctrl+n**：切换焦点到菜单
- **Alt+2, Ctrl+b**：切换焦点到查询编辑器
- **Alt+3, Ctrl+h**：切换焦点到查询历史
- **Alt+4, Ctrl+g**：切换焦点到结果
- **Tab**：向前循环焦点
- **Shift+Tab**：向后循环焦点

### 总结

Rainfrog 是一个功能强大且轻量级的数据库管理工具，适合那些希望在终端中高效管理 PostgreSQL 数据库的用户。其丰富的功能和跨平台支持使其成为一个非常有吸引力的选择。

尽管目前处于 alpha 阶段，但其设计理念和实现已经展示了其巨大的潜力。希望这篇文章能帮助您更好地了解和使用 Rainfrog。
