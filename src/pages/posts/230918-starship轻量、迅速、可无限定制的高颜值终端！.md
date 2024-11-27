<img src="/assets/image/230918-starship轻量、迅速、可无限定制的高颜值终端！-1.gif" style="max-width: 70%; height: auto;">
<small>36.4k star，推荐一款轻量、迅速、可无限定制的高颜值终端！适合大部分终端</small>


老规矩，先上动态图了解下，更多**实用工具到文末**查看


![](/assets/image/230918-starship轻量、迅速、可无限定制的高颜值终端！-1.gif)

Starship: 极简、极速、无限可定制的命令行提示工具

命令行是许多开发人员和系统管理员的日常工作环境，但是默认的命令行提示符通常相当简陋，提供的信息有限。Starship（星舰）是一款极简、极速、无限可定制的命令行提示工具，它可以帮助您将命令行打造成一个更加高效和个性化的工作环境。

### Starship 的特点

#### 1. 极速运行

Starship 是一款高性能的命令行提示工具。它经过精心设计，不会拖慢您的终端响应速度。不再需要等待漫长的提示符加载时间，您可以即时执行命令。

#### 2. 无限可定制

Starship 提供了广泛的自定义选项，您可以根据自己的需求对提示符进行几乎无限的个性化定制。您可以更改外观、颜色、样式，添加或删除模块以满足您的工作流程。

#### 3. 跨平台支持

无论您使用的是哪种Shell，无论是Linux、macOS还是Windows，Starship 都可以完美运行。这意味着无需为不同操作系统和Shell分别配置提示符，只需在Starship中进行一次配置即可。

#### 4. 智能提示

Starship 显示了相关信息，如当前的工作目录、版本控制状态、正在运行的进程等，以帮助您更好地理解当前环境。这些信息以简洁的方式呈现，让您一目了然。

#### 5. 丰富的功能

Starship 支持显示您喜欢使用的各种工具的状态，包括Git、Mercurial、Subversion、Rust、Python、Node.js等。您可以快速了解这些工具的状态，无需执行额外的命令。

#### 6. 简单易用

安装和配置 Starship 非常简单，您可以在几分钟内安装并开始使用。即使是不熟悉命令行的用户也可以轻松上手。

### 安装 Starship

在安装 Starship 之前，有一些先决条件需要满足。您需要安装并启用一个 Nerd Font 字体，例如 FiraCode Nerd Font，以确保Starship能够正确显示特殊字符。

接下来，根据您的操作系统，选择以下步骤来安装 Starship：

#### 在 Linux 和 BSD 上安装 Starship

您可以使用以下命令来安装最新版本的 Starship：

```bash
curl -sS https://starship.rs/install.sh | sh
```

此外，您还可以使用各种包管理器来安装 Starship，具体命令请根据您的发行版和包管理器进行相应的操作。

#### 在 macOS 上安装 Starship

在 macOS 上，您可以使用以下命令来安装 Starship：

```bash
curl -sS https://starship.rs/install.sh | sh
```

同样，您也可以选择使用 `cargo`、`conda-forge`、`Homebrew`、`MacPorts` 等包管理器来安装 Starship。

#### 在 Windows 上安装 Starship

在 Windows 上，您可以从 Starship 的发布页面下载 MSI 安装程序来安装 Starship。此外，您还可以使用 `cargo`、`choco`、`conda-forge`、`Scoop`、`winget` 等包管理器来安装。

### 配置 Starship

安装完成后，接下来需要配置您的 Shell 以使用 Starship。具体的配置方式因不同的 Shell 而异，以下是一些常见 Shell 的配置方法：

#### 对于 Bash 用户

在 `~/.bashrc` 文件末尾添加以下内容：

```bash
eval "$(starship init bash)"
```

#### 对于 Zsh 用户

在 `~/.zshrc` 文件末尾添加以下内容：

```bash
eval "$(starship init zsh)"
```

其他 Shell 用户可以根据自己使用的 Shell 类型，选择相应的配置方法。

完成配置后，启动一个新的 Shell 实例，您将看到自定义的 Starship 提示符。如果您对默认配置感到满意，那么可以立即开始使用了！

如果您希望进一步自定义 Starship，您可以查阅 Starship 官方文档****