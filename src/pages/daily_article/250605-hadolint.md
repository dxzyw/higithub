<img src="/assets/image/250605-hadolint.png"/> 

<small>11.1k star,收藏！dockerfile利器</small>

**假如你是一名开发者，正在编写 Dockerfile 以构建容器化应用程序。**  
你可能会遇到诸多问题：Dockerfile 语法是否规范？是否遵循最佳实践？是否存在潜在的安全隐患？手动检查不仅耗时，而且容易忽略关键问题。那么，该如何解决？这时，**Hadolint** 便是你的得力助手！

### **简介**
Hadolint 是一款强大的 Dockerfile Linter，旨在帮助开发者验证 Dockerfile 的语法，并确保其符合最佳实践。它能够解析 Dockerfile，识别潜在错误，并提供改进建议，从而提升 Docker 镜像的质量和安全性。此外，Hadolint 还集成了 **ShellCheck**，用于检查 Dockerfile 中的 Bash 语法，确保脚本的正确性和可读性。

### **功能特点**
Hadolint 拥有一系列实用功能，使其成为开发者不可或缺的工具：
1. **语法检查**：解析 Dockerfile，检测语法错误并提供修正建议。
2. **最佳实践建议**：遵循 Dockerfile 编写标准，避免不规范用法。
3. **安全性提升**：识别可能存在的安全风险，例如避免使用 `latest` 标签、建议非 root 用户等。
4. **集成 ShellCheck**：针对 `RUN` 指令中的 Bash 代码进行检查，优化脚本质量。
5. **忽略规则**：支持用户自定义忽略规则，灵活调整检查策略。
6. **多平台支持**：提供 **CLI** 版本，可在 Linux、Windows 和 macOS 上运行，同时支持 Docker 容器运行。

### **如何快速开始**
如果你希望快速体验 Hadolint 的强大功能，以下是简单的安装和使用指南：

#### **1. 安装 Hadolint**
你可以选择不同的方式安装 Hadolint：
- **在 macOS 上使用 Homebrew**：
  ```bash
  brew install hadolint
  ```
- **在 Windows 上使用 Scoop**：
  ```powershell
  scoop install hadolint
  ```
- **直接下载预编译的二进制文件**：
  访问 [GitHub Hadolint Releases](https://github.com/hadolint/hadolint/releases)，下载适用于你的平台的最新版本。

- **使用 Docker 容器运行**：
  ```bash
  docker run --rm -i hadolint/hadolint < Dockerfile
  ```

#### **2. 执行 Hadolint 进行语法检查**
你只需简单地运行：
```bash
hadolint Dockerfile
```
如果希望忽略特定规则，可以使用 `--ignore` 选项：
```bash
hadolint --ignore DL3003 --ignore DL3006 Dockerfile
```

#### **3. 配置 Hadolint**
Hadolint 允许开发者使用 YAML 配置文件进行自定义：
```yaml
ignored:
  - DL3000
  - SC1010
trustedRegistries:
  - docker.io
  - my-company.com:5000
```
你可以将该文件命名为 `.hadolint.yaml` 并放置在项目根目录，即可应用自定义规则。

### **总结**
Hadolint 是 Docker 开发者的必备工具，它能有效提高 Dockerfile 的质量，减少构建中的问题，并遵循行业最佳实践。无论是新手还是资深开发者，都能从中受益。在编写 Dockerfile 之前，使用 Hadolint 进行检查，让你的镜像更加安全、规范、稳定。

那么，还在等待什么呢？赶快开始使用 Hadolint，让你的容器化开发更上一层楼吧！ 🚀  