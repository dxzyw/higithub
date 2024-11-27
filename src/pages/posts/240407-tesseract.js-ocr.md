<img src="/assets/image/240407-tesseract.js-ocr-1.png" style="max-width: 70%; height: auto;">
<small>33k star，支持100种语言的开源OCR工具</small>



可以看下效果，开源地址在文末：
![](/assets/image/240407-tesseract.js-ocr-1.png)


**Tesseract.js：强大的纯JavaScript OCR库**

**简介**
Tesseract.js是一个基于纯JavaScript的光学字符识别（OCR）库，能够从图片中识别出100多种语言的文字。

这个库是Tesseract OCR引擎的WebAssembly端口的封装，可以在浏览器和Node.js服务器上运行。

**功能特点**
- **多语言支持**：Tesseract.js支持超过100种语言的文字识别，覆盖了全球大部分的文字系统。
- **多平台兼容**：无论是在浏览器中通过script标签或是在Node.js环境中，都可以轻松部署和使用。
- **实时识别**：提供实时视频文字识别功能，增强了用户交互体验。
- **简单易用**：通过简洁的API设计，使得开发者可以快速集成OCR功能到自己的应用中。
- **性能优化**：版本5带来了文件大小的显著减小，对于首次用户的运行时间减少了约50%，同时内存使用也大幅度降低。

**快速开始**
1. 安装：可以通过CDN、npm或yarn来安装Tesseract.js。
   ```javascript
   // CDN方式
   <script src="https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js"></script>
   ```
   ```bash
   # npm安装
   npm install tesseract.js
   # yarn安装
   yarn add tesseract.js
   ```
2. 使用：创建一个worker并开始识别。
   ```javascript
   import { createWorker } from 'tesseract.js';

   (async () => {
     const worker = await createWorker();
     const { data: { text } } = await worker.recognize('path/to/image.png');
     console.log(text);
     await worker.terminate();
   })();
   ```

**总结**
Tesseract.js以其强大的功能和简单的使用方法，为开发者提供了一个高效的OCR解决方案。

无论是在个人项目还是商业应用中，Tesseract.js都能够提供稳定可靠的文字识别服务，是当今开源社区中不可多得的优秀项目之一。


![](/assets/image/240407-tesseract.js-ocr-2.png)

**开源地址:https://github.com/naptha/tesseract.js**

**在线demo：http://tesseract.projectnaptha.com/**