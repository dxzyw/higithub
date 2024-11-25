<img src="/assets/image/240920-grapesjs-1.png">
<small>21.9k star,无需编码即可构建模板的下一代工具</small>

![](/assets/image/240920-grapesjs-1.png)

### GrapesJS简介

GrapesJS 是一个开源的网页构建框架，旨在帮助用户无需编写代码即可轻松创建 HTML 模板。它不仅适用于网页，还可以用于创建新闻通讯、移动应用程序等。GrapesJS 主要设计用于内容管理系统（CMS）中，以加速动态模板的创建。

### 功能特点

![](/assets/image/240920-grapesjs.png)

1. **拖放界面**：GrapesJS 提供了一个直观的拖放界面，用户可以通过拖放组件来构建网页。这使得即使没有编程经验的用户也能轻松上手。

2. **组件库**：GrapesJS 内置了丰富的组件库，包括文本、图片、视频、表单等常用组件。用户可以根据需要添加和自定义这些组件。

3. **模板管理**：用户可以创建、保存和管理多个模板，这对于需要频繁创建相似页面的用户非常有用。

4. **插件支持**：GrapesJS 支持多种插件，用户可以根据需要扩展其功能。例如，用户可以使用 MJML 插件来创建响应式邮件模板。

5. **代码导出**：用户可以随时导出生成的 HTML 和 CSS 代码，这使得与其他开发工具的集成变得非常简单³。

6. **多用途**：除了网页，GrapesJS 还可以用于创建新闻通讯、移动应用程序、桌面应用程序等。

### 如何快速开始

#### 1. 安装 GrapesJS

用户可以通过多种方式安装 GrapesJS，包括使用 CDN、npm 或直接从 GitHub 克隆代码。

**使用 CDN：**
```html
<link rel="stylesheet" href="//unpkg.com/grapesjs/dist/css/grapes.min.css">
<script src="//unpkg.com/grapesjs"></script>
```

**使用 npm：**
```bash
npm install grapesjs
```

**从 GitHub 克隆：**
```bash
git clone https://github.com/GrapesJS/grapesjs.git
```

#### 2. 初始化编辑器

在 HTML 文件中添加一个容器元素，并使用 JavaScript 初始化 GrapesJS 编辑器。
```html
<div id="gjs">
  <h1>Hello World Component!</h1>
</div>
<script>
  const editor = grapesjs.init({
    container: '#gjs',
    fromElement: true,
    height: '300px',
    width: 'auto',
    storageManager: false,
    panels: { defaults: [] },
  });
</script>
```

#### 3. 添加自定义块

用户可以创建自定义块并将其添加到编辑器中。以下是一个简单的示例：
```html
<div id="blocks"></div>
<script>
  const editor = grapesjs.init({
    container: '#gjs',
    fromElement: true,
    blockManager: {
      appendTo: '#blocks',
      blocks: [
        {
          id: 'section',
          label: '<b>Section</b>',
          attributes: { class:'gjs-block-section' },
          content: `<section>
                      <h1>This is a simple title</h1>
                    </section>`,
        },
      ],
    },
  });
</script>
```

#### 4. 使用插件

GrapesJS 支持多种插件，用户可以根据需要进行扩展。例如，使用 MJML 插件创建响应式邮件模板
```bash
npm install grapesjs-mjml
```
```javascript
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import grapesjsMjml from 'grapesjs-mjml';

const editor = grapesjs.init({
  container: '#gjs',
  plugins: [grapesjsMjml],
});
```

### 结论

GrapesJS 是一个功能强大且灵活的网页构建框架，适用于各种应用场景。无论是创建网页、新闻通讯还是移动应用程序，GrapesJS 都能提供直观的拖放界面和丰富的组件库，帮助用户快速构建所需的模板。通过简单的安装和初始化步骤，用户可以轻松上手，并根据需要扩展其功能


