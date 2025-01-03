<img src="/assets/image/250105-mermaid.png"/>

<small>73.7k star,mermaid生成流程图，告别传统绘图方式</small>

Mermaid 是一个基于 JavaScript 的图表生成工具，能够通过类似 Markdown 的文本定义和渲染器创建和修改复杂的图表。其主要目的是帮助文档与开发同步，解决文档腐烂的问题。文档和图表的创建和维护需要宝贵的开发时间，并且很容易过时。而没有图表或文档会降低生产力，影响组织学习。Mermaid 通过允许用户轻松修改图表来解决这个问题。

Mermaid 的特点之一是其易用性。即使是非程序员也可以通过 Mermaid Live Editor 轻松创建详细的图表。Mermaid 支持多种图表类型，包括流程图、序列图、甘特图、类图、状态图、饼图、Git 图和用户旅程图等。这些图表可以通过简单的文本语法定义，并且可以在各种应用程序中使用。

Mermaid 的另一个特点是其集成性。它可以与 GitHub 等许多常用应用程序集成，使得在这些平台上创建和展示图表变得更加方便。此外，Mermaid 还支持在生产脚本和其他代码片段中使用，使得图表的生成和更新更加自动化。

要快速开始使用 Mermaid，可以按照以下步骤进行：

1. 安装 Mermaid：可以通过 npm 安装 Mermaid，命令如下：
   ```bash
   npm install mermaid
   ```

2. 创建一个 HTML 文件，并在其中引入 Mermaid：
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <script type="module">
           import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
           mermaid.initialize({ startOnLoad: true });
       </script>
   </head>
   <body>
       <div class="mermaid">
           graph TD;
           A-->B;
           A-->C;
           B-->D;
           C-->D;
       </div>
   </body>
   </html>
   ```

3. 打开 HTML 文件，即可看到生成的图表。

Mermaid 的文档和教程页面提供了更多详细的使用指南和示例，帮助用户更好地掌握和使用这个工具。此外，Mermaid 还提供了丰富的集成和使用案例，展示了如何在不同的应用程序中使用 Mermaid。

Mermaid 的安全性也是其重要特点之一。为了防止恶意脚本的执行，Mermaid 提供了一个新的安全级别，将图表渲染在沙盒 iframe 中。这种方法虽然会阻止一些交互功能，但大大提高了安全性。

总的来说，Mermaid 是一个强大且易用的图表生成工具，适用于各种场景。无论是开发文档、展示数据，还是在生产环境中自动生成图表，Mermaid 都能提供高效的解决方案。

项目地址：https://github.com/mermaid-js/mermaid