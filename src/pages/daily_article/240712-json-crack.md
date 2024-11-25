<img src="/assets/image/240712-json-crack-1.png">
<small>28.9k star，王炸！json工具</small>

>开源地址及官网在文末

![json工具](/assets/image/240712-json-crack.png)

**JSON Crack** 是一个创新的开源数据可视化应用程序，它能够将 JSON、YAML、XML、CSV 等多种数据格式转换成交互式图表。这个项目由 Aykut Sarac 发起，目的是帮助开发者和数据爱好者更容易地探索、分析和理解复杂的数据结构。通过直观的用户界面，**JSON Crack** 使得即使是最复杂的数据结构也变得易于探索和理解。

![download](/assets/image/240712-json-crack-2.png)

![search](/assets/image/240712-json-crack-3.png)

### 功能特点
- **多种视图模式**：支持图形和树状视图模式，让用户可以从不同角度查看数据。
- **暗黑模式**：提供暗黑模式，减少对眼睛的压力，改善用户体验。
- **AI 数据转换与过滤**：利用 AI 技术转换和过滤数据，提高工作效率。
- **多种导出选项**：支持将数据导出为 PNG、SVG、JPEG 格式或复制到剪贴板。
- **触摸手势支持**：支持使用触摸手势进行缩放和平移操作。
- **支持多种数据格式**：除了 JSON，还支持 YAML、CSV、XML、TOML 等格式。
- **丰富的工具集**：包括搜索图表、JSON 路径、验证、保存到云等工具。
- **嵌入式 iframe 小部件**：允许将 JSON Crack 的功能嵌入到其他网页中。
![feature](/assets/image/240712-json-crack-1.png)
### 快速开始使用
要在本地运行 **JSON Crack**，你需要遵循以下简单步骤：
1. **环境要求**：确保你的系统中安装了 Node.js (版本: >=18.x) 和 Pnpm (推荐)。
2. **克隆仓库**：将仓库克隆到你的 GitHub 公共仓库中（或者[分叉](^4^)）。
3. **安装依赖**：在项目文件夹中使用 `pnpm install` 命令安装所需的包。
4. **运行项目**：使用 `pnpm dev` 命令运行项目，然后在浏览器中访问 `http://localhost:3000/`。

此外，项目还提供了 Dockerfile，如果你想要使用 Docker 来运行 **JSON Crack**，可以参考仓库根目录中的 Docker 相关文件和说明。

```
# Build a Docker image with:
docker build -t jsoncrack .

# Run locally with `docker run`
docker run -p 8888:8080 jsoncrack

# Run locally with `docker-compose`
docker-compose up -d

# Go to http://localhost:8888
```


**JSON Crack** 不仅仅是一个 JSON 编辑器。它是一个强大的工具，可以帮助用户从数据中发现隐藏的洞察力。无论你是在进行大规模项目开发，还是仅仅是一个对数据感兴趣的爱好者，**JSON Crack** 都能提供你需要的工具和功能，帮助你充分挖掘数据的潜力。

**JSON Crack** 是一个社区驱动的项目，鼓励开发者参与贡献。你可以通过提交问题、参与讨论、提供代码或文档改进等方式参与到项目中。项目的[贡献指南](^1^)和[行为准则](^1^)提供了更多关于如何参与的信息。

总的来说，**JSON Crack** 是一个强大而灵活的工具，适用于任何需要数据可视化的场景。它的开源性质意味着它会不断地得到社区的支持和改进，使其成为数据可视化领域的一个重要工具。如果你对数据可视化感兴趣，那么 **JSON Crack** 绝对值得一试。🚀

>传送门:https://jsoncrack.com/
>
>开源地址：https://github.com/AykutSarac/jsoncrack.com