<img src="/assets/image/241008-libcimbar.png">
<small>3.2k star,最近超火一个开源神器</small>

### libcimbar: 高效的彩色图标矩阵条码实现

#### 软件简介

libcimbar 是一个高效的彩色图标矩阵条码（Color Icon Matrix Barcode）实现，旨在通过计算机显示器和智能手机摄像头进行数据传输。

该项目由 sz3 开发，提供了一种无需互联网、蓝牙或 NFC 等传统通信方式的全新数据传输方法。

libcimbar 通过将数据编码为彩色图标矩阵条码，并利用摄像头进行解码，实现了高达 850 kbps（约 106 KB/s）的传输速度。

![](/assets/image/241008-libcimbar.png)

#### 功能特点

1. **高密度数据编码**：libcimbar 使用彩色图标矩阵条码格式，将数据存储在彩色瓷砖网格中。每个瓷砖的位置和颜色编码了数据位，结合 Reed Solomon 纠错码，确保数据传输的可靠性。

2. **高效数据压缩**：libcimbar 采用了基于喷泉码（fountain codes）和 zstd 压缩的文件编码协议。压缩后的文件可以通过一系列 cimbar 码输出为图像或实时视频流。

3. **跨平台支持**：libcimbar 的代码主要用 C++ 编写，并在 amd64+linux、arm64+android（仅解码器）和 emscripten+WASM（仅编码器）上开发和测试。由于编码器可以编译为 asmjs 和 wasm，因此可以在任何现代 Web 浏览器上运行。

4. **离线使用**：用户可以将 cimbar.org 安装为渐进式 Web 应用（PWA），或下载最新版本的 cimbar_js.html 并在本地浏览器中打开。

5. **简单依赖管理**：libcimbar 依赖于 OpenCV 和 GLFW（包括 OpenGL ES 头文件），其他所有依赖项都包含在源代码树中。

#### 如何快速开始

1. **环境准备**：
   - 安装 OpenCV 和 GLFW：
     ```bash
     sudo apt-get install libopencv-dev libglfw3-dev libgles2-mesa-dev
     ```

2. **克隆仓库**：
   ```bash
   git clone https://github.com/sz3/libcimbar.git
   cd libcimbar
   ```

3. **构建项目**：
   - 使用 CMake 构建：
     ```bash
     mkdir build
     cd build
     cmake ..
     make
     ```

4. **运行编码器**：
   - 编码器可以将文件编码为 cimbar 码并输出为图像或视频流：
     ```bash
     ./cimbar_encoder input_file output_directory
     ```

5. **运行解码器**：
   - 解码器使用摄像头读取 cimbar 码并重建文件：
     ```bash
     ./cimbar_decoder output_directory
     ```

6. **Web 版本**：
   - 访问 [cimbar.org](https://cimbar.org) 使用 Web 编码器。
   - 下载 cimbar_js.html 并在本地浏览器中打开以离线使用。

#### 结论

libcimbar 提供了一种创新的、无需传统通信方式的数据传输方法。其高效的编码和解码机制、跨平台支持以及简单的依赖管理，使其成为数据传输领域的一个有力工具。

无论是开发者还是普通用户，都可以通过简单的步骤快速上手，体验这一高效的数据传输方式。

希望这篇介绍能帮助您更直观地了解 libcimbar，并激发您对这一创新技术的兴趣！

>libcimbar GitHub 仓库(https://github.com/sz3/libcimbar)
