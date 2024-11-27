<img src="/assets/image/240923-HivisionIDPhotos-1.png">
<small>4.1k star,AI 一键生成证件照</small>

![](/assets/image/240923-HivisionIDPhotos.png)

HivisionIDPhotos 是一个轻量级且高效的AI证件照制作工具，旨在为用户提供便捷的证件照生成服务。该项目由 Zeyi Lin 开发，利用先进的图像处理技术，实现了对多种用户拍照场景的识别、抠图与证件照生成。无论是个人用户还是开发者，都可以通过该工具快速生成标准证件照，满足各种需求。

![](/assets/image/240923-HivisionIDPhotos-1.png)

### 功能特点

HivisionIDPhotos 拥有以下主要功能：

1. **轻量级抠图**：该工具能够在仅使用CPU的情况下快速进行图像抠图，无需高性能GPU支持，适用于各种计算环境。
2. **多尺寸证件照生成**：根据不同的尺寸规格，HivisionIDPhotos 可以生成标准证件照和六寸排版照，满足不同场景的需求。
3. **自定义底色**：用户可以根据需要自定义证件照的背景颜色，提供更多个性化选择。
4. **智能换正装**：未来版本将支持智能换正装功能，进一步提升证件照的专业性。
5. **美颜功能**：未来版本还将加入美颜功能，使证件照更加美观。
6. **API 服务**：HivisionIDPhotos 提供了API服务，方便开发者集成到自己的应用中。

### 如何快速开始

以下是快速开始使用 HivisionIDPhotos 的步骤：

#### 环境安装与依赖

1. **克隆项目**：
   ```bash
   git clone https://github.com/Zeyi-Lin/HivisionIDPhotos.git
   cd HivisionIDPhotos
   ```

2. **安装依赖环境**：
   ```bash
   pip install -r requirements.txt
   ```

3. **下载权重文件**：
   从项目的 Release 页面下载权重文件 `hivision_modnet.onnx`，并将其存放到项目根目录下。

#### 运行 Gradio Demo

1. **运行程序**：
   ```bash
   python app.py
   ```
   运行程序后，将生成一个本地 Web 页面，用户可以在页面中完成证件照的操作与交互。

#### 部署 API 服务

1. **启动后端**：
   ```bash
   python deploy_api.py
   ```

2. **请求 API 服务**：
   使用 Python 发送请求：
   ```bash
   python requests_api.py -u http://127.0.0.1:8080 -i images/test.jpg -o ./idphoto.png -s '(413,295)'
   ```

#### Docker 部署

1. **拉取或构建镜像**：
   ```bash
   docker pull linzeyi/hivision_idphotos:v1
   ```
   或者使用 Dockerfile 构建镜像：
   ```bash
   docker build -t hivision_idphotos .
   ```

2. **运行 Gradio Demo**：
   ```bash
   docker run -p 7860:7860 hivision_idphotos
   ```
   在本地访问 `http://127.0.0.1:7860` 即可使用。

3. **运行 API 后端服务**：
   ```bash
   docker run -p 8080:8080 hivision_idphotos python3 deploy_api.py
   ```

### 总结

HivisionIDPhotos 是一个功能强大且易于使用的AI证件照制作工具，适用于个人用户和开发者。通过简单的安装和配置，用户可以快速生成高质量的证件照，并根据需要进行自定义。未来版本还将加入更多智能功能，使证件照制作更加便捷和专业。如果你需要经常处理证件照，或是有制作证件照服务的需求，HivisionIDPhotos 将是一个理想的选择。

希望这篇介绍文章能帮助你更好地了解 HivisionIDPhotos，并鼓励你尝试使用这款工具来解决证件照制作问题。

>开源地址：https://github.com/Zeyi-Lin/HivisionIDPhotos
