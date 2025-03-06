<img src="/assets/image/250304-page-assist.png"/>

<small>5.4k star, 浏览器插上的AI的翅膀，爽到飞起</small>

### 让本地AI模型提升你的网页浏览体验：Page Assist 工具介绍

你是否曾经希望在浏览网页时，有一个智能助手随时解答你的问题，并与网页内容互动？Page Assist 正是为了解决这一痛点而设计的。无论你是希望更高效地查找信息，还是希望与网页内容进行对话，Page Assist 都能为你提供强大的支持。

#### 简介
Page Assist 是一个开源的浏览器扩展，提供了一个侧边栏和网页用户界面，允许你与本地运行的AI模型进行互动。你可以在任何网页上使用该扩展，与AI模型实时对话，获取你需要的信息。

#### 功能特点
- **侧边栏**：可以在任何网页上打开的侧边栏，允许你与AI模型互动并查看结果。
- **网页用户界面**：类似于 ChatGPT 网站的用户界面，允许你与AI模型互动。
- **与网页内容对话**：你可以与网页内容进行对话，询问有关内容的问题，并获得解答。

#### 如何开始
1. **安装 Page Assist**：支持Chrome、Brave、Edge 和 Firefox 浏览器。
2. **手动安装**：
   - 预备条件：
     - 安装 Bun 和 Ollama（本地AI提供程序）
     - 任何兼容 OpenAI API 的端点（如 LM Studio、llamafile 等）
   - 克隆仓库：
     ```bash
     git clone https://github.com/n4ze3m/page-assist.git
     cd page-assist
     ```
   - 安装依赖：
     ```bash
     bun install
     ```
   - 构建扩展（默认构建Chrome版本）：
     ```bash
     bun run build
     ```
     或者为 Firefox 构建：
     ```bash
     bun build:firefox
     ```
   - 加载扩展（Chrome）：打开扩展管理页面，启用开发者模式，点击“加载解压的扩展程序”并选择构建目录。
   - 加载扩展（Firefox）：打开插件页面，点击扩展标签，选择“管理你的扩展”，点击“加载临时加载项”并选择构建目录中的 manifest.json 文件。

#### 使用方法
- **侧边栏**：安装扩展后，可以通过上下文菜单或快捷键打开侧边栏。默认快捷键：`Ctrl+Shift+Y`
- **网页用户界面**：点击扩展图标打开新标签页，进入网页用户界面。默认快捷键：`Ctrl+Shift+L`
- **开发模式**：可以在开发模式下运行扩展以进行更改和测试。
  ```bash
  bun dev
  ```

Page Assist 是你在网页浏览中不可或缺的助手，帮助你高效地获取信息，提升浏览体验。立即安装，体验其强大功能吧！



