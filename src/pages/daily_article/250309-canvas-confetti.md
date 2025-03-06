<img src="/assets/image/250309-canvas-confetti.png"/>

<small>11.1k star,牛逼，这是真正的撒花 ！</small>

你是否遇到过这样的问题或者需求？
- 你的网页缺少一抹色彩和活力
- 用户在你的网站上停留的时间不够长
- 想为用户带来惊喜，但又不知从何入手

如果你有以上困扰，canvas-confetti这个工具将会是你的完美解决方案！

### 简介
canvas-confetti是一个高性能的网页动画工具，可以在浏览器中创建炫目的彩纸动画效果。无论是庆祝特定事件、吸引用户注意力，还是提升网页互动性，canvas-confetti都能帮助你实现这些目标。

### 功能特点
1. **简单易用**：只需几行代码即可在网页上实现丰富多彩的彩纸效果。
2. **高度可定制**：支持多种参数设置，包括彩纸数量、角度、速度、颜色、形状等，让你可以根据需求随心所欲地进行调整。
3. **响应用户偏好**：支持disableForReducedMotion选项，可以针对不喜欢动画效果的用户自动禁用彩纸动画。
4. **支持SVG路径和文本**：可以使用自定义SVG路径和文本（如emoji）来创建独特的彩纸形状。
5. **多实例支持**：允许在同一页面上创建多个独立的彩纸实例，灵活性更强。

### 如何开始
1. **安装**：你可以通过NPM安装该模块：
   ```bash
   npm install --save canvas-confetti
   ```
   然后在项目中引入它：
   ```javascript
   const confetti = require('canvas-confetti');
   ```

2. **使用CDN**：如果不想使用NPM，你也可以直接在HTML页面中引用CDN版本：
   ```html
   <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
   ```

3. **基础用法**：调用confetti函数即可启动默认的彩纸动画：
   ```javascript
   confetti();
   ```

4. **自定义设置**：传递一个参数对象，以根据需求自定义动画效果：
   ```javascript
   confetti({
     particleCount: 100,
     angle: 60,
     spread: 55,
     origin: { x: 0.5, y: 0.5 }
   });
   ```

### 总结
通过canvas-confetti，你可以轻松为网站添加炫目的彩纸动画效果，提升用户体验。立即动手，让你的网页充满活力吧！

开源地址:github.com/catdad/canvas-confetti