<img src="/assets/image/240903-kotaemon-1.png">
<small>8.5k star，开源！强大，可定制的RAG UI</small>
### Kotaemon 软件介绍

**Kotaemon** 是一个开源的文档问答（RAG）工具，旨在为终端用户和开发者提供一个简洁且可定制的用户界面，用于与文档进行交互。

该项目由 Cinnamon 开发，支持多种大型语言模型（LLM）API 提供商，如 OpenAI、AzureOpenAI 和 Cohere，以及本地 LLM。

>项目地址：https://github.com/Cinnamon/kotaemon 

效果如下图

![](/assets/image/240903-kotaemon.png)
![](/assets/image/240903-kotaemon-1.png)

#### 功能特点

1. **用户友好的界面**：Kotaemon 提供了一个简洁、极简的用户界面，方便终端用户进行文档问答。
2. **多模型支持**：支持多种 LLM API 提供商和本地 LLM（通过 ollama 和 llama-cpp-python）。
3. **易于安装**：提供简单的安装脚本，无需复杂的环境设置。
4. **开发者友好**：为开发者提供了一个框架，可以用来构建自己的 RAG 文档问答管道，并通过提供的 UI 进行定制和查看。
5. **多用户登录**：支持多用户登录，用户可以在私有或公共集合中组织文件，并与他人分享聊天记录。

#### 快速开始

1. **克隆仓库**：
   ```bash
   git clone https://github.com/Cinnamon/kotaemon.git
   cd kotaemon
   ```

2. **安装依赖**：
   ```bash
   pip install -r requirements.txt
   ```

3. **运行应用**：
   ```bash
   python app.py
   ```

4. **访问界面**：在浏览器中打开 `http://localhost:7860`，即可开始使用 Kotaemon 进行文档问答。

Kotaemon 是一个功能强大且易于使用的工具，无论是终端用户还是开发者，都可以从中受益。如果你对文档问答有需求，Kotaemon 将是一个不错的选择。

