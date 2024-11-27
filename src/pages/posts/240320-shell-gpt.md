<img src="/assets/image/240320-shell-gpt-1.gif" style="max-width: 70%; height: auto;">
<small>8k star，推荐一款可以在终端使用的ChatGPT</small>


下面是一个例子，可以生成一段简单的静态文件，并通过docker启动一个web服务，开源地址见文末：

![](/assets/image/240320-shell-gpt-1.gif)

ShellGPT是一个由AI大型语言模型驱动的命令行生产力工具，旨在帮助用户更快、更高效地完成任务。

### 简介
ShellGPT是一个开源的命令行工具，它利用先进的AI语言模型来优化和简化命令行操作。这款工具可以生成shell命令、代码片段、文档等，从而减少了用户查找外部资源（如Google搜索）的需求。ShellGPT支持Linux、macOS、Windows操作系统，并且与所有主要的Shell环境（如PowerShell、CMD、Bash、Zsh等）兼容。

### 软件特点
- **AI驱动**：ShellGPT使用OpenAI的API和GPT-4模型，提供智能的命令行交互体验。
- **跨平台兼容性**：支持多种操作系统和Shell环境。
- **开源**：遵循MIT许可证，允许用户自由使用和修改代码。
- **多功能性**：能够生成各种shell命令和代码片段，简化日常工作流程。
- **易于安装**：通过pip安装，简单快捷。
- **灵活性**：支持从标准输入(stdin)和命令行参数接收提示，适应不同用户的使用习惯。
- **本地模型支持**：除了使用OpenAI的API，用户还可以选择使用本地托管的开源模型，如Ollama。


![](/assets/image/240320-shell-gpt-2.png)


### 快速开始使用
要开始使用ShellGPT，用户需要按照以下步骤操作：

1. 安装ShellGPT：
   ```bash
   pip install shell-gpt
   ```
   默认情况下，ShellGPT使用OpenAI的API和GPT-4模型。您需要一个API密钥，可以在这里生成一个。

2. 配置API密钥：
   在`~/.config/shell_gpt/.sgptrc`文件中输入您的API密钥。

3. 使用ShellGPT：
   ShellGPT设计用于快速分析和检索信息。例如，您可以使用以下命令来获取有关斐波那契序列的信息：
   ```bash
   sgpt "What is the fibonacci sequence"
   ```
   或者，您可以通过标准输入传递日志，并附上提示，以快速分析日志，识别错误并获得可能的解决方案：
   ```bash
   docker logs -n 20 my_app | sgpt "check logs, find errors, provide possible solutions"
   ```

ShellGPT的集成和灵活性使其成为一个强大的工具，特别适合那些希望提高命令行工作效率的用户。无论是技术配置还是一般知识，ShellGPT都能提供快速而准确的解决方案，从而节省宝贵的时间和精力。

开源地址： https://github.com/TheR1D/shell_gpt


![](/assets/image/240320-shell-gpt-3.png)
