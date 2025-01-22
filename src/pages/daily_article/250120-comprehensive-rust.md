<img src="/assets/image/250120-comprehensive-rust.png"/>

<small>28.6k star,谷歌开源，很强！</small>


Comprehensive Rust 是由 Google 的 Android 团队开发的多日 Rust 课程。该课程涵盖了 Rust 的各个方面，从基本语法到泛型和错误处理。它还包括对 Android、Chromium、裸机和并发的深入探讨。

### 项目特点

1. **全面的课程内容**：Comprehensive Rust 课程内容丰富，涵盖了 Rust 语言的基础知识和高级主题，如泛型和错误处理。
2. **多平台支持**：课程内容不仅适用于 Android 开发，还适用于 Chromium 浏览器开发、裸机开发和并发编程。
3. **适合有编程经验的工程师**：该课程主要面向有 C++ 或 Java 背景的工程师，旨在帮助他们快速掌握 Rust。
4. **课堂教学**：课程在 Google 内部以课堂教学的形式进行，强调互动和讨论。
5. **开源项目**：该项目是开源的，任何人都可以访问和贡献。

### 如何快速开始

要快速开始使用 Comprehensive Rust 项目，请按照以下步骤操作：

1. **安装 Rust**：首先，按照 [Rust 官方网站](https://rustup.rs/) 的说明安装 Rust。
2. **克隆仓库**：使用以下命令克隆 Comprehensive Rust 仓库：
   ```bash
   git clone https://github.com/google/comprehensive-rust/
   cd comprehensive-rust
   ```
3. **安装必要工具**：使用 Cargo 安装所需的工具：
   ```bash
   cargo install mdbook
   cargo install --locked mdbook-svgbob
   cargo install --locked mdbook-i18n-helpers
   cargo install --locked i18n-report
   cargo install --locked mdbook-linkcheck
   cargo install --locked --path mdbook-exerciser
   cargo install --locked --path mdbook-course
   ```
4. **运行测试**：运行以下命令测试所有包含的 Rust 代码片段：
   ```bash
   mdbook test
   ```
5. **启动本地服务器**：使用以下命令启动本地服务器并查看课程内容：
   ```bash
   mdbook serve
   ```
   课程内容将在 `http://localhost:3000` 上提供。
6. **构建静态版本**：使用以下命令构建课程的静态版本：
   ```bash
   mdbook build
   ```
   静态版本将生成在 `book/` 目录中。

### 结论

Comprehensive Rust 项目是一个全面的 Rust 课程，适合有编程经验的工程师。通过安装 Rust、克隆仓库、安装必要工具、运行测试和启动本地服务器，您可以快速开始学习和使用该课程。该项目不仅适用于 Android 开发，还适用于 Chromium 浏览器开发、裸机开发和并发编程，是一个非常有价值的学习资源。

网址：github.com/google/comprehensive-rust