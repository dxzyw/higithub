<img src="/assets/image/240407-website downloader-1.png" style="max-width: 70%; height: auto;">
<small>1.2k star，推荐一款开源的网站整站下载工具</small>


“**Website-downloader**”是一个使用Node.js开发的工具，旨在帮助用户下载任何网站的完整源代码（包括所有资源，如Javascripts、样式表、图片等）。

先来看下效果，网站源码地址，在文末：



这个项目利用wget和archiver工具，不仅可以下载网站的所有资产，还可以将其压缩并通过socket通道发送回用户。

### 功能特点
- **递归下载**：通过`--mirror`参数，实现递归下载网站内容。
- **链接转换**：使用`--convert-links`参数，将所有链接（包括CSS样式表链接）转换为相对路径，适合离线浏览。
- **扩展名调整**：`--adjust-extension`参数可以根据内容类型为文件名添加合适的扩展名（如html或css）。
- **页面必需品下载**：`--page-requisites`参数确保下载正确显示页面离线所需的CSS样式表和图片。
- **父目录限制**：`--no-parent`参数用于限制下载到网站的某个部分，不上升到父目录。

### 快速开始

这里介绍下docker方式启动，这样启动的优点就是，可以随用随启，不需要的时候，可以先停掉、删除。

下面给出Dockerfile及docker-compose文件

```
#Dockerfile
# 使用官方Node.js运行时作为父镜像
FROM node:14

# 设置工作目录
WORKDIR /usr/src/app

# 复制package.json文件和package-lock.json文件
COPY package*.json ./

# 安装项目依赖
RUN npm install 

# 复制项目源代码
COPY . .

# 应用运行在3000端口
EXPOSE 3000

# 运行应用
CMD [ "npm", "start" ]

```

```
#docker-compose.yml
version: '3'
services:
  web:
    image: website:v01
    ports:
      - "38080:3000"
```

执行命令启动，如下：
![](/assets/image/240407-website downloader-1.png)

![](/assets/image/240407-website downloader-2.png)

查看docker日志

![](/assets/image/240407-website downloader-3.png)

启动完成，不报错，访问127.0.0.1:38080来看下效果：

![](/assets/image/240407-website downloader-4.png)


## 常规方式启动

1. 克隆仓库：`git clone https://github.com/AhmadIbrahiim/Website-downloader.git`
2. 进入项目目录：`cd website-downloader`
3. 安装依赖：`npm install`
4. 启动项目：`npm start`
5. 在浏览器中访问：`http://localhost:3000/`

### 总结
“**Website-downloader**”是一个强大的工具，它提供了一种简单的方法来下载和存档网站的完整源代码。

这对于需要离线访问网站内容的用户来说非常有用，也方便开发者学习和分析网站的构建方式。

![](/assets/image/240407-website downloader-5.png)

**开源地址：https://github.com/AhmadIbrahiim/Website-downloader**

**体验demo：https://website-downloader.onrender.com/**