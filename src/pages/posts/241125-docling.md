<img src="/assets/image/241125-docling.png">

<small>10.4k star,开源热榜第一！IBM开源工具</small>

日常接触到的文档格式越发的多，pdf、doc、ppt、html等等，有没有一种方式可以将其转化为统一的格式呢？比如转为markdown或者json格式。

今天推荐一个IBM开源的工具，它可以满足你的需求，它是用python开发的。

下面为具体介绍内容：
#### **项目简介**

Docling是一个用于文档解析和格式转换的工具，支持多种文档格式（如PDF、DOCX、PPTX等），能够快速将文档导出为Markdown和JSON格式。它提供了简单易用的命令行界面，并具备先进的PDF理解能力，适合用于生成技术报告、文档管理和集成到AI应用中。

#### **特点**

Docling 拥有众多引人注目的特点，使其在众多文档处理工具中脱颖而出：
- 1. 多格式支持：Docling 支持多种文档格式的读取，用户可以轻松处理不同类型的文档，无需担心格式兼容性问题。
  
- 2. 高级 PDF 理解：该工具具备先进的 PDF 文档理解能力，能够识别页面布局、阅读顺序和表格结构。这一特性使得用户在处理复杂的 PDF 文档时，能够获得更好的效果。
  
- 3. 统一的文档表示格式：Docling 提供了一种统一且富有表现力的 DoclingDocument 表示格式，用户可以更方便地进行文档的操作和转换。
  
- 4. OCR 支持：对于扫描的 PDF 文档，Docling 还提供了光学字符识别（OCR）支持，能够将图像中的文字提取出来，进一步提升了文档处理的灵活性。
  
- 5. 简单的命令行界面：Docling 提供了一个简单而方便的命令行界面，用户可以通过命令行快速执行文档转换操作，极大地提高了工作效率。
  
- 6. 与 LlamaIndex 和 LangChain 的集成：Docling 可以轻松与 LlamaIndex 和 LangChain 集成，支持强大的 RAG（检索增强生成）和 QA（问答）应用，进一步扩展了其应用场景。

#### **如何快速开始**

要开始使用 Docling，用户只需简单几步即可完成安装和初步使用。以下是快速入门的步骤：
安装 Docling：用户可以通过 Python 的包管理器 pip 安装 Docling。在终端中输入以下命令即可完成安装：


1. **安装 Docling**：用户可以通过 Python 的包管理器 pip 安装 Docling。在终端中输入以下命令即可完成安装：

   ```bash
   pip install docling
   ```


2. **文档转换**：安装完成后，用户可以使用 `convert()` 方法进行文档转换。以下是一个简单的示例代码：

   ```python
   from docling.document_converter import DocumentConverter

   source = "https://arxiv.org/pdf/2408.09869"  # 文档的本地路径或 URL
   converter = DocumentConverter()
   result = converter.convert(source)
   print(result.document.export_to_markdown())  # 输出转换后的 Markdown 文档
   ```


3. **探索更多功能**：Docling 提供了丰富的功能和选项，用户可以通过查阅官方文档，了解更多高级功能和使用技巧，充分发挥 Docling 的强大能力。

Docling是一个结合技术与学术的创新典范，它的诞生为语言学研究带来了前所未有的便利与突破。无论你是一名学者、开发者，还是对语言技术充满好奇的探索者，Docling都为你提供了无限可能。现在，开始你的探索之旅吧！