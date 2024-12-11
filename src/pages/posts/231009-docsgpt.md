<img src="/assets/image/231009-docsgpt-1.png" style="max-width: 70%; height: auto;">
<small>11.2k star，真的好用!,推荐一款开源的文档、pdf解读神器</small>


可以看下这个开源项目的star数，9月份之后开挂式上涨，我自己也去试用了一下，确实好用：
![](/assets/image/231009-docsgpt-1.png)
可以简单了解下如何使用：

![](/assets/image/231009-docsgpt-2.gif)

![](/assets/image/231009-docsgpt-3.gif)


支持多种格式文档（.pdf, .txt, .rst, .md, .zip ）限制文件大小为10M

有个最大的特点是支持本地部署，不过也可以在线访问，**地址见文末  **

DocsGPT：基于GPT模型的项目文档智能查询解决方案

项目文档是开发者在进行软件开发时不可或缺的资源，它可以帮助开发者了解项目的需求、设计、实现、测试、部署等各个方面。然而，随着项目的复杂度和规模的增加，项目文档也会变得庞大和分散，这给开发者带来了很大的困难和挑战。如何在海量的项目文档中快速地找到所需的信息，成为了开发者面临的一个重要问题。

为了解决这个问题，我们推出了DocsGPT，一个基于GPT模型的项目文档智能查询解决方案。DocsGPT是一个开源的项目，它利用了GPT模型强大的自然语言理解和生成能力，为开发者提供了一个简单而高效的文档查询接口。开发者只需要输入自然语言的问题，就可以从项目文档中获得准确和相关的答案。

DocsGPT具有以下几个特点：

- 灵活的文档支持：无论是技术手册、指南、说明书还是其他任何形式的文档，DocsGPT都可以支持。开发者只需要将文档导入到DocsGPT中，就可以对其进行智能查询。
- 简洁的代码需求：即使是对编程不熟悉的开发者，也可以轻松地使用DocsGPT。DocsGPT提供了一个简单的命令行界面，让开发者可以方便地导入、查询和管理文档。
- 兼容的平台集成：DocsGPT可以与其他主流的机器学习平台进行集成，从而实现更强大的功能和效果。例如，开发者可以将DocsGPT与TensorFlow、PyTorch等平台结合使用，以提高模型的性能和准确度。
- 安全的本地部署：为了保护开发者的隐私和安全，DocsGPT可以在开发者自己的本地环境中部署和运行。这样，开发者就不需要将文档上传到云端或第三方服务器，也不需要担心文档被泄露或篡改。
- 互动的聊天机器人界面：除了命令行界面外，DocsGPT还提供了一个聊天机器人界面，让开发者可以与DocsGPT进行自然语言交互。开发者可以像与人聊天一样，向DocsGPT提出问题，并立即获得回答。这种方式既简单又有趣。

## 本地化部署

**在本地部署DocsGPT：快速启动指南**

在部署DocsGPT之前，请确保您已经安装了Docker。以下是在Mac OS或Linux系统上快速启动DocsGPT的步骤：

1. 下载DocsGPT的本地部署代码库：
   ```
   git clone https://github.com/arc53/DocsGPT.git
   ```

2. 在根目录下创建一个`.env`文件，并设置以下环境变量：
   ```
   API_KEY=YourOpenAIKey
   VITE_API_STREAMING=true
   ```
   注意：您需要将`API_KEY`设置为您的OpenAI API密钥，并决定是否启用流式答案（true为启用，false为禁用）。

3. 执行以下命令构建和运行Docker容器：
   ```
   ./setup.sh
   ```
   这将安装所有依赖项并允许您下载本地模型或使用OpenAI的模型。

4. 访问http://localhost:5173/来启动DocsGPT的本地部署。在需要停止服务时，只需按下`Ctrl + C`即可。

**开发环境配置**

在开发环境中，只需要使用`docker-compose-dev.yaml`文件中的Mongo和Redis两个容器。以下是配置开发环境的步骤：

1. 构建和启动Mongo和Redis容器：
   ```
   docker compose -f docker-compose-dev.yaml build
   docker compose -f docker-compose-dev.yaml up -d
   ```

2. 配置后端环境：
   - 确保您已经安装了Python 3.10或3.11。
   - 在`/application`文件夹中，导出所需的环境变量或准备一个`.env`文件：
     ```
     cp .env_sample .env
     ```
     在`.env`文件中，将`API_KEY`和`EMBEDDINGS_KEY`字段设置为您的OpenAI API密钥。
   - 创建Python虚拟环境（可选步骤）：
     ```
     python -m venv venv
     . venv/bin/activate  # 对于Mac OS和Linux
     venv/Scripts/activate  # 对于Windows
     ```
   - 在`application/`子目录下安装后端的依赖项：
     ```
     cd application/
     pip install -r requirements.txt
     ```
   - 使用以下命令启动应用：
     ```
     flask run --host=0.0.0.0 --port=7091
     celery -A application.app.celery worker -l INFO
     ```

3. 启动前端环境：
   - 确保您的Node版本是16或更高。
   - 进入`/frontend`文件夹：
     ```
     cd frontend/
     ```
   - 安装所需的依赖包：
     ```
     npm install husky -g
     npm install vite -g
     npm install --include=dev
     ```
   - 使用以下命令启动前端应用：
     ```
     npm run dev
     ```

通过以上步骤，您将能够在本地成功部署DocsGPT！

总之，DocsGPT是一个创新的开源解决方案，它可以帮助开发者在项目文档中快速地找到所需的信息。它不仅节省了开发者的时间和精力，也提高了开发者的效率和质量。我们邀请您尝试使用DocsGPT，并看看它如何改变您的项目文档体验。同时，我们也欢迎您参与到DocsGPT的开发中，并成为人工智能助理领域的一员。


在线访问地址**https://docsgpt.arc53.com/**