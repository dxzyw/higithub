<img src="/assets/image/250404-IronRDP.png"/>

<small>2.2k star,真棒，开源的RDP</small>

假如你是一个程序员，需要实现一个安全高效的远程桌面协议（RDP）客户端，该怎么办？别担心，**IronRDP** 是你的理想选择！

### 简介
IronRDP 是由 **Devolutions** 开发的一套基于 Rust 编程语言的库，专门实现微软的远程桌面协议（RDP）。它以高性能和安全性为核心，提供一套全面且灵活的解决方案，让你轻松构建 RDP 客户端或集成相关功能。

---

### 功能特点
IronRDP 提供了以下核心功能：
1. **多种视频解码支持**：支持从未压缩的原始位图到 Microsoft RemoteFX（RFX）等多种编解码器，满足各种远程桌面应用场景。
2. **异步与同步实现**：支持非阻塞的异步 I/O 实现，同时还提供了同步的使用方式，适合不同开发需求。
3. **跨平台与高性能**：利用 Rust 的系统级性能，IronRDP 能够高效地处理复杂的远程桌面协议任务。
4. **简化开发流程**：只需几百行代码即可创建一个基本的 RDP 客户端，节省开发时间。
5. **高级特性支持**：支持远程桌面图形更新的解码，并将输出保存为图像文件（如 BMP）。

---

### 如何开始
1. **安装工具**：
   - 确保系统已安装 Rust 工具链。
   - 通过 `cargo` 下载并使用 IronRDP。

2. **示例代码**：
   使用以下命令运行内置客户端示例：
   ```bash
   cargo run --bin ironrdp-client -- <HOSTNAME> --username <USERNAME> --password <PASSWORD>
   ```
   或运行截图功能示例：
   ```bash
   cargo run --example=screenshot -- --host <HOSTNAME> --username <USERNAME> --password <PASSWORD> --output out.bmp
   ```

3. **启用高级功能**（如 RemoteFX 支持）：
   - 在服务器上启用 RemoteFX，使用 PowerShell 命令：
     ```powershell
     Set-ItemProperty -Path 'HKLM:\\Software\\Policies\\Microsoft\\Windows NT\\Terminal Services' -Name 'ColorDepth' -Type DWORD -Value 5
     Set-ItemProperty -Path 'HKLM:\\Software\\Policies\\Microsoft\\Windows NT\\Terminal Services' -Name 'fEnableVirtualizedGraphics' -Type DWORD -Value 1
     ```
   - 或通过 `gpedit.msc` 编辑组策略配置后重启服务器。

---

### 总结
无论你是构建 RDP 客户端，还是需要整合远程桌面协议到现有项目中，IronRDP 都是一个强大的工具，能够极大地提升开发效率和安全性。赶快开始你的开发旅程吧！🚀

如果有任何疑问或需要帮助，可以访问 [IronRDP GitHub 页面](https://github.com/Devolutions/IronRDP) 查阅详细文档和示例。

