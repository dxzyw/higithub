<img src="/assets/image/230925-devtoys-1.png" style="max-width: 70%; height: auto;">
<small>很全！很酷！很强！程序员的工具箱助手</small>


# DevToys：开发者的得力助手

先来看图，更多实用工具见文末！！

![](/assets/image/230925-devtoys-1.png)


在现代软件开发的世界中，开发者们不仅需要编写代码，还需要进行各种其他任务，例如数据格式化、文本比较、正则表达式测试等。

通常情况下，为了完成这些任务，他们需要使用不同的在线工具或者下载多个应用程序，这不仅繁琐，还浪费了宝贵的时间。

然而，有一个名为**DevToys**的工具，它旨在帮助开发者集中进行这些任务，从而提高效率。

## DevToys是什么？

**DevToys**是一款多合一开发者工具，旨在帮助开发者在日常开发中执行各种任务，而无需切换到不同的工具或网站。

它拥有一个直观的用户界面，可以轻松完成各种任务，包括数据格式化、编码解码、生成数据、检查正则表达式等。DevToys的目标是使开发者的工作更加高效，减少不必要的复杂性，使开发过程更加愉快。

## 主要功能

DevToys提供了多个实用工具，涵盖了各种开发任务。以下是其中一些主要功能：

### 转换工具

- **JSON <> YAML 转换：** 在JSON和YAML之间轻松转换数据格式。
- **时间戳转换：** 将时间戳转换为易于理解的日期和时间格式。
- **进制转换：** 支持不同进制之间的转换，包括二进制、八进制、十进制和十六进制。
- **Cron 表达式解析器：** 解析和理解Cron表达式，有助于管理定时任务。



![](/assets/image/230925-devtoys-2.png)

![](/assets/image/230925-devtoys-3.png)



### 编码器 / 解码器

- **HTML 编码 / 解码：** 对HTML特殊字符进行编码或解码。
- **URL 编码 / 解码：** 对URL中的特殊字符进行编码或解码。
- **Base64 文本和图像编码 / 解码：** 对Base64编码的文本和图像进行编码或解码。
- **GZip 编码 / 解码：** 压缩或解压缩数据，使用GZip格式。
- **JWT 解码：** 解码JSON Web Token（JWT），以查看其内容。 


![](/assets/image/230925-devtoys-4.png)


### 格式化工具

- **JSON 格式化：** 格式化JSON数据，使其更易于阅读。
- **SQL 格式化：** 格式化SQL查询，以便更好地理解。
- **XML 格式化：** 格式化XML数据，以便更好地查看其结构。 


![](/assets/image/230925-devtoys-5.png)


### 生成器

- **Hash 生成器：** 生成哈希值，包括MD5、SHA1、SHA256和SHA512。
- **UUID 生成器：** 生成UUID（通用唯一标识符）。
- **Lorem Ipsum：** 生成Lorem Ipsum文本，用于占位或测试。
- **校验和文件：** 计算文件的校验和，以确保数据完整性。
- **文本生成器：** 生成随机文本，可用于各种目的。 


![](/assets/image/230925-devtoys-6.png)


### 检查器和大小写转换

- **正则表达式测试器：** 测试正则表达式，以验证它们是否匹配预期的文本。
- **文本比较器：** 比较两个文本文件或字符串，以查看它们的差异。
- **XML 验证器：** 验证XML数据是否符合指定的模式。
- **Markdown 预览：** 预览Markdown文档，以查看其最终渲染效果。

### 图形工具

- **色盲模拟器：** 模拟色盲用户的视觉体验，以进行可访问性测试。
- **颜色选择器和对比度检测：** 选择颜色并检查其对比度，以确保良好的可读性。
- **PNG / JPEG 压缩：** 压缩图像以减小文件大小。
- **图像转换：** 将图像从一种格式转换为另一种格式。 


![](/assets/image/230925-devtoys-7.png)


这只是DevToys提供的一小部分功能。它还包括许多其他实用工具，可以帮助您更高效地进行开发工作。

## 如何安装DevToys

DevToys可以在Windows 10版本1903或更高版本上运行。以下是安装DevToys的几种方法：

### 通过Microsoft Store安装

- 打开Microsoft Store应用程序。
- 在搜索框中搜索“Dev

Toys”并安装。

### 手动安装

- 下载并解压缩DevToys的最新版本。
- 双击*.msixbundle文件进行安装。

### 使用WinGet安装

- 打开PowerShell命令提示符。
- 输入`winget search DevToys`以搜索并查看有关DevToys的详细信息。
- 输入`winget install DevToys`以安装应用程序。

### 使用Chocolatey安装

- 确保已在计算机上安装了Chocolatey。
- 打开PowerShell命令提示符。
- 输入`choco install devtoys`或访问[Chocolatey社区包](https://chocolatey.org/packages/devtoys)以安装应用程序。

请注意，对于使用WinGet安装，您需要一个Microsoft Store帐户。我们正在努力解决这个问题。

## 应用程序权限

尽管DevToys完全离线工作，但为了确保正确运行，应用程序需要一些其他权限。这些权限包括：

- **使用所有系统资源：** 一些工具（如PNG / JPEG压缩工具或即将推出的屏幕颜色选择器/测量工具）需要此权限。它们使用第三方开源Win32进程（例如Efficient-Compression-Tool）。所有需要此权限的代码都可以在[这里](https://github.com/DevToys/DevToys/blob/main/DevToys/Tools)找到。

## 如何运行DevToys

您可以使用多种方式启动DevToys：

### 使用开始菜单

- 打开Windows开始菜单。
- 在搜索框中键入“DevToys”，然后按Enter键。

### 使用PowerShell

DevToys的一个很酷的功能是，您可以在命令行中启动它！为此，只需打开PowerShell命令提示符，然后输入`start devtoys:?tool={tool name}`。

例如，`start devtoys:?tool=jsonyaml`将打开DevToys并启动Json <> Yaml工具。

以下是可以使用的工具名称列表：

- base64 - Base64文本编码/解码器
- base64img - Base64图像编码/解码器
- gzip - GZip编码/解码器
- hash - 哈希生成器
- uuid - UUID生成器
- loremipsum - Lorem Ipsum生成器
- checksum - 校验和文件
- cronparser - Cron表达式解析器
- jsonformat - JSON格式化
- sqlformat - SQL格式化
- xmlformat - XML格式化
- jsonyaml - Json <> Yaml
- jwt - JWT解码
- colorblind - 色盲模拟器
- color - 颜色选择器和对比度检测
- imgcomp - PNG/JPEG压缩工具
- imageconverter - 图像转换
- markdown - Markdown预览
- regex - 正则表达式测试器
- time - Unix时间戳转换
- baseconverter - 进制转换器
- string - 字符串工具
- url - URL编码/解码器
- html - HTML编码/解码器
- diff - 文本比较器
- xmlvalidator - XML验证器
- escape - 文本转义/反转义
- settings - 设置
