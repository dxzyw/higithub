<img src="/assets/image/250616-mazanoke.png/> 

<small>1.4k star，牛叉！图片处理神器</small>

**假如你是一名摄影爱好者，或者需要频繁处理图片的设计师，你是否曾为图片优化而烦恼？**你可能经历过这样的问题：上传图片到某些“免费”在线工具后，担心隐私泄露；或者使用复杂的软件进行图片压缩，却发现软件占用资源过多，影响工作流。而现在，有一个解决方案可以让你轻松优化图片，同时保护隐私——**Mazanoke，一款本地自托管的浏览器图片优化工具。**

### **Mazanoke 简介**
Mazanoke 是一款专为本地图片优化设计的工具，它在浏览器中运行，**无需联网**，**不会将你的图片上传到任何服务器**，确保隐私安全。不同于传统的在线图片优化工具，Mazanoke 让用户能在自己的设备上完成图片压缩、格式转换等操作，并且可以**随时随地使用**，甚至支持离线模式。

### **Mazanoke 的功能特点**
Mazanoke 以简洁高效著称，并提供以下强大功能：

1. **图片优化与压缩**
   - **调整图片质量**，确保清晰度与文件大小的平衡
   - **设定目标文件大小**，减少存储空间占用
   - **自定义最大宽度/高度**，适应不同用途

2. **多格式支持**
   - 支持格式转换，包括 **JPG、PNG、WebP**
   - 能够处理 **HEIC、AVIF、GIF、SVG** 文件并转换为常见格式

3. **隐私保护**
   - **完全离线运行**，无需连接网络
   - **本地图片处理**，图片不会离开你的设备
   - **自动移除 EXIF 数据**，防止位置、拍摄时间等隐私信息泄露

4. **安装与使用便捷**
   - **无需复杂软件**，直接通过浏览器访问
   - **支持本地安装**，可以作为 Web 应用使用
   - **提供 Docker 部署选项**，方便服务器端自托管

### **如何快速开始？**
想要立即体验 Mazanoke 的便捷优化功能，你可以按以下几种方式快速开始：

- **直接在浏览器中使用**  
  访问 [MAZANOKE.com](https://mazanoke.com)，无需安装，打开即用。如果想要更强隐私保护，你也可以选择**自托管**版本。

- **本地运行（离线模式）**  
  下载安装包，打开 `index.html` 文件，即可在浏览器中运行 Mazanoke，离线优化你的图片。

- **Docker 部署**  
  如果你希望在服务器端使用 Mazanoke，可以通过以下 Docker Compose 配置进行快速部署：
  ```yaml
  services:
    mazanoke:
      container_name: mazanoke
      image: ghcr.io/civilblur/mazanoke:latest
      ports:
        - "3474:80"
  ```
  配置完成后，你可以通过 `http://localhost:3474` 访问 Mazanoke。

### **结语**
Mazanoke 以**高效、安全、隐私友好**为核心，为用户提供了**无需联网的图片优化体验**，适合个人使用，也适用于**小型团队及自托管环境**。如果你正在寻找一个**简洁、高效且不损害隐私**的图片优化工具，Mazanoke 将是你的理想选择。

现在就试试 Mazanoke，享受更自由、更安心的图片处理体验吧！