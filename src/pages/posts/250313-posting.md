<img src="/assets/image/250313-posting.png"/>

<small>8.2k star，牛逼！以后就用它了</small>

是否厌倦了繁琐的API管理和调试过程？让我们来解决这个痛点，为你介绍一个能简化工作的工具——Posting，一个现代化的API客户端，它就在你的终端里。

### 简介
Posting 是一个强大的 HTTP 客户端，不同于 Postman 和 Insomnia。作为一个TUI应用程序，它可以通过 SSH 使用，并实现高效的键盘驱动工作流。你的请求会以简单的 YAML 文件形式保存在本地，易于阅读和版本控制。

### 功能特点
- **跳转模式导航**：轻松浏览。
- **环境变量**：管理和使用变量。
- **自动补全**：快速输入。
- **语法高亮**：使用 tree-sitter 实现代码高亮。
- **Vim键**：便捷的键盘操作。
- **自定义键绑定**：根据你的需求调整。
- **用户定义主题**：个性化你的界面。
- **运行Python代码**：在请求前后运行Python脚本。
- **广泛配置**：高度可配置。
- **在$EDITOR中打开**：快速编辑。
- **导入curl命令**：通过URL栏粘贴导入curl命令。
- **导出请求为cURL命令**：方便分享和复用。
- **导入OpenAPI规格**：支持规范化文档。
- **命令调色板**：快速访问功能。

### 如何开始
Posting 可以通过uv在MacOS、Linux和Windows上安装。uv 是一个单一的Rust二进制文件，可以用于安装Python应用程序。它比其他工具快得多，并能在几秒钟内让你开始使用Posting。你甚至不需要自己安装Python，uv会处理所有安装工作。

#### 快速安装（MacOS/Linux）
```sh
curl -LsSf https://astral.sh/uv/install.sh | sh
uv tool install --python 3.12 posting
```

安装后，你可以通过命令行运行Posting：
```sh
posting
```

uv还可以轻松安装额外的Python包到你的Posting环境中，然后你可以在预请求和后响应脚本中使用这些包。

### 更多信息
了解更多关于Posting的信息，请访问 [Posting官网](https://posting.sh) 。

### 结语
通过使用Posting，你将体验到更高效、更便捷的API管理流程。不再为繁琐的操作而烦恼，立即开始使用Posting，简化你的工作！

希望这篇介绍对你有帮助！如果有其他问题或需要进一步信息，请随时告诉我。 😊

开源地址:github.com/darrenburns/posting

