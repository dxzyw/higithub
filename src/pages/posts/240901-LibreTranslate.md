<img src="/assets/image/240901-LibreTranslate.png">
<small>7.7k star,免费开源翻译神器，绝了！</small>

![](/assets/image/240901-LibreTranslate.png)
### LibreTranslate：开源机器翻译工具简介

#### 工具简介

LibreTranslate 是一个完全开源的机器翻译 API，旨在提供自托管和离线翻译能力。与依赖于谷歌或Azure等专有提供商的翻译API不同，LibreTranslate 使用开源的 Argos Translate 库作为其翻译引擎¹。这使得用户可以在不依赖外部服务的情况下，完全控制自己的翻译数据和服务。

#### 如何快速开始

要快速开始使用 LibreTranslate，您可以按照以下步骤进行设置：

1. **安装 Python**：确保您的系统上安装了 Python 3.8 或更高版本。
2. **安装 LibreTranslate**：在终端中运行以下命令来安装 LibreTranslate：
   ```bash
   pip install libretranslate
   ```
3. **启动服务**：安装完成后，您可以通过以下命令启动 LibreTranslate 服务：
   ```bash
   libretranslate
   ```
4. **访问服务**：打开浏览器并访问 `http://localhost:5000`，您将看到 LibreTranslate 的界面。

对于 Ubuntu 20.04 用户，还可以使用提供的安装脚本进行安装。

#### 功能特点

LibreTranslate 提供了多种功能，使其成为一个强大的翻译工具：

1. **多语言支持**：支持多种语言的翻译，包括但不限于英语、西班牙语、法语、德语、中文等。
2. **自动语言检测**：能够自动检测输入文本的语言，并进行相应的翻译。
3. **HTML 翻译**：支持 HTML 格式的文本翻译，保留原始 HTML 标签。
4. **多种翻译选项**：提供多种翻译选项，用户可以选择不同的翻译结果。
5. **自托管和离线能力**：用户可以在本地服务器上自托管 LibreTranslate，确保数据的隐私和安全。
6. **简单易用的 API**：提供简单易用的 API 接口，方便开发者集成到自己的应用中。

#### API 使用示例

以下是一些使用 LibreTranslate API 的示例：

- **简单请求**：
  ```javascript
  const res = await fetch("http://localhost:5000/translate", {
    method: "POST",
    body: JSON.stringify({
      q: "Hello!",
      source: "en",
      target: "es"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  console.log(await res.json());
  // 输出: { "translatedText": "¡Hola!" }
  ```

- **自动检测语言**：
  ```javascript
  const res = await fetch("http://localhost:5000/translate", {
    method: "POST",
    body: JSON.stringify({
      q: "Ciao!",
      source: "auto",
      target: "en"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  console.log(await res.json());
  // 输出: { "detectedLanguage": { "confidence": 83, "language": "it" }, "translatedText": "Bye!" }
  ```

- **HTML 请求**：
  ```javascript
  const res = await fetch("http://localhost:5000/translate", {
    method: "POST",
    body: JSON.stringify({
      q: '<p class="green">Hello!</p>',
      source: "en",
      target: "es",
      format: "html"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  console.log(await res.json());
  // 输出: { "translatedText": "<p class=\"green\">¡Hola!</p>" }
  ```

- **多种翻译选项**：
  ```javascript
  const res = await fetch("http://localhost:5000/translate", {
    method: "POST",
    body: JSON.stringify({
      q: "Hello",
      source: "en",
      target: "it",
      format: "text",
      alternatives: 3
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  console.log(await res.json());
  // 输出: { "alternatives": [ "Salve", "Pronto" ], "translatedText": "Ciao" }
  ```

#### 总结

LibreTranslate 是一个功能强大且灵活的开源机器翻译工具，适合需要自托管和离线翻译解决方案的用户。其多语言支持、自动语言检测、HTML 翻译、多种翻译选项以及简单易用的 API 接口，使其成为开发者和企业的理想选择。通过简单的安装和配置，您可以快速开始使用 LibreTranslate 提供的翻译服务，满足各种翻译需求。

 [LibreTranslate GitHub](https://github.com/LibreTranslate/LibreTranslate)

