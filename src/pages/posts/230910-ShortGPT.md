<img src="/assets/image/230910-ShortGPT-1.png" style="max-width: 70%; height: auto;">
<small></small>

这个工具，可以让你快速生成100个视频，强大！！



### ShortGPT：内容创作的未来

随着数字内容的爆炸性增长，内容创作者和市场营销团队需要更多的创意、更多的文字、更多的视频和更多的声音来满足不断增长的需求。这也意味着内容创作者们需要更多的时间和资源来应对这一挑战。在这个信息过剩的时代，自动化成为了一种解决方案，能够在内容创作过程中提高效率，减轻工作负担。

![](/assets/image/230910-ShortGPT-1.png)
 

**ShortGPT** 是一个强大的自动化内容创作框架，它将内容创作带入了一个全新的境界。它不仅简化了视频创作、素材采集、语音合成和编辑任务，还为创作者提供了更多的自由度和创造力。本文将深入介绍 ShortGPT，探讨其功能、用途以及如何使用它来提升您的内容创作。

### ShortGPT 简介

ShortGPT 是一个内容创作的一站式解决方案。无论您是制作短视频、长视频、配音还是编辑，ShortGPT 都可以助您一臂之力。下面是 ShortGPT 的一些重要特点：

#### 自动化编辑框架

ShortGPT 提供了一种 LLM（Large Language Models）导向的视频编辑语言，可极大地简化视频创建过程。无需繁琐的手动编辑，ShortGPT 可以帮助您快速生成高质量的视频内容。

#### 脚本和提示

ShortGPT 提供了现成的脚本和提示，用于各种自动化编辑过程。这些脚本可以帮助您轻松完成常见的编辑任务，而无需编写复杂的代码。

#### 多语言支持

ShortGPT 支持多种语言，包括英语、西班牙语、阿拉伯语、法语、波兰语、德语、意大利语、葡萄牙语、俄语、普通话、日语、印地语、韩语等等，甚至还支持超过 30 种其他语言。这意味着您可以轻松地为全球受众创作内容。

#### 字幕生成

ShortGPT 可以自动化生成视频字幕，无需手动输入和编辑。这极大地提高了字幕生成的效率。

#### 素材采集

ShortGPT 可以从互联网上获取图像和视频素材，甚至可以连接到 Pexels API，以获取高质量的素材。这让您不再为寻找素材而浪费时间。

#### 内存和持久性

ShortGPT 使用 TinyDB 确保自动化编辑变量的长期持久性。这意味着您可以安心地存储和管理编辑中的数据。

#### 快速入门

如果您不想在本地安装必要的依赖，ShortGPT 提供了 Google Colab 笔记本的选项，可以在云端运行。这是一个免费的选项，无需任何安装设置。您只需点击链接，即可开始使用 ShortGPT。

### 如何开始使用 ShortGPT

现在，让我们一起探讨如何开始使用 ShortGPT。以下是安装和使用 ShortGPT 的详细步骤：

#### 安装 ImageMagick 和 FFmpeg

首先，您需要安装 ImageMagick 和 FFmpeg，这两者是进行自动化编辑所必需的工具。您可以按照官方文档中的步骤来完成这一过程。详细的安装说明请参阅[

官方文档](https://docs.shortgpt.ai/docs/how-to-install)。

#### 克隆 ShortGPT 仓库

1. 打开终端或命令提示符。

2. 使用以下命令克隆 ShortGPT 仓库：

   ```
   git clone https://github.com/rayventura/shortgpt.git
   ```

#### 安装 Python 依赖项

1. 打开终端或命令提示符。

2. 切换到包含 `runShortGPT.py` 文件的目录（克隆的仓库所在目录）。

3. 使用以下命令安装所需的 Python 依赖项：

   ```
   pip install -r requirements.txt
   ```

   这个命令将安装 `requirements.txt` 文件中指定的必要包。

#### 运行 runShortGPT.py

安装完 ImageMagick、FFmpeg 和 Python 依赖项后，您可以运行 `runShortGPT.py` 来启动 ShortGPT。以下是具体步骤：

1. 打开终端或命令提示符。

2. 切换到包含 `runShortGPT.py` 文件的目录。

3. 使用以下命令运行脚本：

   ```
   python runShortGPT.py
   ```

4. 运行脚本后，您将在本地主机的 31415 端口上看到一个 Gradio 界面（[http://localhost:31415](http://localhost:31415)）。通过这个界面，您可以开始使用 ShortGPT 进行内容创作。


![](/assets/image/230910-ShortGPT-2.png)


### ShortGPT 的功能概览

ShortGPT 提供了多个引擎和功能，以满足不同类型的内容创作需求。下面是 ShortGPT 的一些主要引擎：

#### ContentShortEngine

ContentShortEngine 旨在创建短视频，从脚本生成到最终渲染，一应俱全，甚至可以添加 YouTube 的元数据。

#### ContentVideoEngine

ContentVideoEngine 非常适合制作更长的视频，它负责生成音频、自动获取背景视频素材、定时字幕以及准备背景素材等任务。

#### ContentTranslationEngine

ContentTranslationEngine 设计用于配音和翻译整个视频，从主流语言到更具体的目标语言。它可以接受视频文件或 YouTube 链接，将其音频转录、翻译内容、以目标语言配音、添加字幕，最终生成一段全新语言的视频。

#### Automated EditingEngine

Automated EditingEngine 使用编辑标记语言和 JSON，将编辑过程分解为可管理和可定制的块，对大型语言模型易于理解。

#### 自定义选项

ShortGPT 提供了许多自定义选项，以满足您的需求，从语言选择到水印添加，您都可以根据具体情况进行调整。

### 结语

ShortGPT 是内容创作的未来。它通过自动化、简化和提高效率，为内容创作者提供了更多的创作自由度和时间。不管您是个人创作者还是市场营销团队，ShortGPT 都能够满足您的需求，帮助您快速高效地创作出令人印象深刻的内容。

通过结合 Moviepy、Openai、ElevenLabs、EdgeTTS、Pexels 和 Bing Image 等多种技术，ShortGPT 提供了一种无缝且高效的自动化内容创作体验。这个框架适应性强，灵活多变，为创作者们提供了一个高效、创造性的内容创作工具。

随着 ShortGPT 不断发展，我们可以期待更多的文档和功能。无论您是想要快速生成视频内容，还是需要更多创作的灵感，ShortGPT 都值得您的关注。

如果您希望进一步了解 ShortGPT，不妨亲自尝试一下。通过自动化内容创作，您将有更多时间专注于创作的艺术，而不是繁琐的手工工作。祝您创作愉快！