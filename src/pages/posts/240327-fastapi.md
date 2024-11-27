<img src="/assets/image/240327-fastapi-1.png" style="max-width: 70%; height: auto;">
<small>21.6k star，推荐一款FastAPI全栈模板</small>



![](/assets/image/240327-fastapi-1.png)

### 软件简介
**Full Stack FastAPI Template** 是一个开源项目，由 Sebastián Ramírez（也就是 FastAPI 的创建者）维护。

这个模板是基于 FastAPI、SQLModel、PostgreSQL、Docker 和 React 等技术构建的。

它提供了一个预先配置好的开发环境，使得开发者可以立即开始编写代码，而不需要从零开始设置整个开发栈。

![](/assets/image/240327-fastapi-2.png)

### 特点
- **FastAPI**: 这是一个现代、快速（高性能）的 Web 框架，用于构建 API。FastAPI 依赖于标准 Python 类型提示，这些提示提供了多种好处，包括编辑器支持、类型检查以及请求和响应的自动序列化。
- **SQLModel**: 结合了 SQLAlchmey 和 Pydantic 的优点，SQLModel 为数据库交互提供了一个简单而强大的 ORM。
- **Pydantic**: 用于数据验证和设置管理，确保了数据的正确性和安全性。
- **PostgreSQL**: 作为 SQL 数据库，提供了强大的数据存储能力。
- **React**: 用于构建现代的前端界面，提供了丰富的用户交互体验。
- **TypeScript** 和 **Chakra UI**: 提升前端开发体验，TypeScript 提供了类型安全，而 Chakra UI 提供了一套美观的 UI 组件。
- **Docker Compose**: 用于开发和生产环境的容器化，简化了部署和运维过程。
- **JWT Token Authentication**: 提供了一个安全的用户认证机制。
- **CI/CD**: 基于 GitHub Actions 的持续集成和持续部署，自动化了测试和部署流程。
- **自动生成的前端客户端**: 简化了与后端的交互，提高了开发效率。
- **暗黑模式支持**: 提供了更佳的用户体验，尤其是在光线较暗的环境中。

![](/assets/image/240327-fastapi-3.png)

### 快速开始
要开始使用这个模板，你可以通过以下步骤：
1. **Fork** 或 **Clone** 仓库：你可以直接在 GitHub 上 fork 这个项目，或者使用 `git clone` 命令将其克隆到本地。
2. **配置环境变量**：更新 `.env` 文件中的配置，以定制你的设置。至少应更改 `SECRET_KEY`、`FIRST_SUPERUSER_PASSWORD` 和 `POSTGRES_PASSWORD` 等敏感值。
3. **安装依赖**：使用 `docker-compose` 命令来构建和启动容器。
4. **运行项目**：一旦容器启动，你的应用程序就可以在本地运行了。

此外，这个模板还提供了详细的文档，包括如何进行开发、测试和部署。这些文档对于新手和经验丰富的开发者都非常有用，因为它们提供了关于如何最大化利用模板的指导。

总的来说，**Full Stack FastAPI Template** 是一个强大的工具，它为开发者提供了一个快速启动和部署现代网络应用程序的能力。无论你是一个正在寻找快速原型开发的创业者，还是一个需要构建复杂系统的经验丰富的工程师，这个模板都能为你节省宝贵的时间和精力。


通过使用这个模板，你可以专注于编写业务逻辑代码，而不是花费时间在设置和配置开发环境上。随着技术的不断进步，我们期待看到更多的开发者利用这个模板来构建出色的应用程序。

![](/assets/image/240327-fastapi-4.png)

开源地址：https://github.com/tiangolo/full-stack-fastapi-template