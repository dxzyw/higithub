<img src="/assets/image/250411-postgres-language-server.png"/> 

<small>4.8k star，rust开发！有一款高效pg工具</small>

假如你是一个程序员，正在为 PostgreSQL 数据库的开发体验感到苦恼：SQL 语法复杂、调试效率低、错误提示模糊，甚至缺乏良好的工具支持，该怎么办？

别担心，Postgres Language Server 将为你带来全新体验！这是一个专注于开发者体验的工具集，基于 PostgreSQL 自身的解析器 `libpg_query`，确保 100% 的语法兼容性。下面，我们来详细介绍这个工具的功能和特点。

### 简介
Postgres Language Server 是一个支持 Postgres 的语言工具和语言服务器协议 (LSP) 的实现，旨在提升开发者对 SQL 工具的使用体验。它采用服务器-客户端架构，支持多种接口，包括 CLI、HTTP API 和 WebAssembly 模块。

### 功能特点
1. **自动补全**：输入 SQL 语句时，智能提示关键词和表名，省去反复查阅文档的麻烦。
2. **语法错误高亮**：在编写 SQL 时，实时检测并高亮语法错误，快速修复问题。
3. **类型检查**：通过 EXPLAIN 错误分析，提供对 SQL 类型的检查。
4. **代码风格检测**：灵感来源于 Squawk 的语法规范化工具，让代码更整洁。

### 如何开始
要开始使用 Postgres Language Server，你可以按以下步骤操作：
1. **安装**：根据 [官方文档](https://pgtools.dev/) 提供的指南，选择适合的平台进行安装。
2. **选择编辑器插件**：支持的编辑器包括 VSCode、Neovim 和 Zed，为你的日常开发保驾护航。
3. **启动服务**：根据 CLI 或接口配置，启动服务并连接到你的开发环境。
4. **享受流畅体验**：开启智能补全、错误高亮等功能，为 PostgreSQL 开发大幅提速！

Postgres Language Server 的目标是让所有优秀的 Postgres 工具触手可得，同时构建任何尚未满足的功能需求。访问 (github.com/supabase-community/postgres-language-server) 

借助 Postgres Language Server，复杂的 SQL 编写将变得前所未有地轻松！准备好尝试了吗？