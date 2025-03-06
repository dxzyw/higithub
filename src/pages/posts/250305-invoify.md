<img src="/assets/image/250305-invoify.png"/>

<small>4.5k star, 办公神器，强的一批！</small>

你是否厌倦了复杂的发票生成过程？希望有一种简单高效的方式来创建专业的发票？Invoify 可能正是你所需要的工具！

### Invoify 简介
Invoify 是一个基于 Next.js、TypeScript 和 Shadcn UI 库构建的网络发票生成应用。它提供了一种简单的方法来创建和管理专业的发票。

### 功能特点
- **轻松创建发票**：使用简单的表单快速生成发票。
- **存储以便日后访问**：将发票直接存储在浏览器中，方便日后检索。
- **灵活的下载选项**：直接下载发票或以 PDF 格式通过电子邮件发送。
- **多种模板选择**：从多个（目前为2个）发票模板中选择。
- **实时预览**：编辑表单时实时查看更改。
- **多格式导出**：以不同格式导出发票，包括 JSON、XLSX、CSV 和 XML。
- **多语言支持**：支持多种语言的 UI 和模板。
- **可定制的输入**：定义缺省发票生成器中缺失的自定义输入（例如：增值税号）。
- **单独的项目税**：为特定项目添加税务详情。

### 如何开始
按照以下步骤在本地机器上运行 Invoify：
1. 确保系统已安装 Node.js 和 npm。
2. 克隆存储库：`git clone https://github.com/al1abb/invoify.git`
3. 进入项目目录：`cd invoify`
4. 安装依赖项：`npm install`
5. 创建 `.env.local` 文件并添加以下内容（此步骤用于发送 PDF 到电子邮件功能）：
   ```
   NODEMAILER_EMAIL = your_email@example.com
   NODEMAILER_PW = your_email_password
   ```
6. 启动开发服务器：`npm run dev`
7. 在 web 浏览器中访问应用程序：`http://localhost:3000`

Invoify 使发票生成过程变得简单高效，让你专注于更重要的任务！

开源地址:github.com/al1abb/invoify