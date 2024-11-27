<img src="/assets/image/240922-Foliate-1.png">
<small>6.1k star,简洁美观电子书阅读器,好用的不行</small>


Foliate：一款优雅的电子书阅读器

![](/assets/image/240922-Foliate.png)

#### 软件简介

Foliate 是一款开源的电子书阅读器，专为 Linux 用户设计。它由 John Factotum 开发，旨在提供简洁、现代且功能丰富的阅读体验。Foliate 支持多种电子书格式，包括 EPUB、MOBI、AZW、AZW3 和 PDF。其名字“Foliate”源自拉丁语，意为“叶子”，象征着书页的翻动。

#### 功能特点

1. **多格式支持**：Foliate 支持多种电子书格式，确保用户可以阅读各种类型的电子书。
2. **现代化界面**：采用 GTK 4 和 Libadwaita 库，界面简洁美观，用户体验流畅。
3. **自定义主题**：用户可以选择不同的主题，包括浅色、深色和自定义主题，以适应不同的阅读环境。
4. **注释和书签**：支持添加注释和书签，方便用户记录和查找重要内容。
5. **文本到语音**：集成了文本到语音功能，用户可以听书，解放双眼。
6. **自动换行和分页**：支持自动换行和分页，确保文本显示美观且易于阅读。
7. **词典和翻译**：内置词典和翻译功能，帮助用户理解不熟悉的词汇和句子。
8. **OPDS 支持**：支持 OPDS 目录，用户可以方便地从在线书库下载电子书。
9. **高性能**：优化了启动时间和内存使用，确保即使是大文件也能快速打开和流畅阅读。
![](/assets/image/240922-Foliate-1.png)

![](/assets/image/240922-Foliate-2.png)

#### 如何快速开始

1. **安装 Foliate**

   Foliate 可以通过多种方式安装，包括 Flatpak、Snap 和从源码编译。以下是几种常见的安装方法：

   - **Flatpak**：
     ```bash
     flatpak install flathub com.github.johnfactotum.Foliate
     ```
     安装完成后，可以通过以下命令启动：
     ```bash
     flatpak run com.github.johnfactotum.Foliate
     ```

   - **Snap**：
     ```bash
     sudo snap install foliate
     ```
     安装完成后，可以通过以下命令启动：
     ```bash
     foliate
     ```

   - **从源码编译**：
     首先，克隆 Foliate 的 GitHub 仓库：
     ```bash
     git clone --recurse-submodules https://github.com/johnfactotum/foliate.git
     cd foliate
     ```
     然后，安装依赖项并编译安装：
     ```bash
     meson setup build
     sudo ninja -C build install
     ```

2. **初次启动**

   安装完成后，启动 Foliate。首次启动时，Foliate 会显示一个简洁的界面，用户可以通过菜单栏或快捷键打开电子书。

3. **打开电子书**

   用户可以通过以下几种方式打开电子书：
   - **文件菜单**：点击菜单栏中的“文件”->“打开”，选择要阅读的电子书文件。
   - **拖放文件**：将电子书文件拖放到 Foliate 窗口中。
   - **命令行**：在终端中使用命令打开电子书：
     ```bash
     foliate /path/to/your/book.epub
     ```

4. **自定义阅读体验**

   Foliate 提供了丰富的自定义选项，用户可以根据个人喜好调整阅读体验：
   - **主题**：在设置中选择浅色、深色或自定义主题。
   - **字体**：调整字体类型、大小和行间距。
   - **页面布局**：选择单页或双页布局，调整页面边距。

5. **使用注释和书签**

   在阅读过程中，用户可以通过点击工具栏中的“添加书签”按钮来添加书签，或通过右键菜单添加注释。所有书签和注释都可以在侧边栏中查看和管理。

6. **文本到语音**

   如果需要听书，用户可以启用文本到语音功能。点击工具栏中的“播放”按钮，Foliate 会开始朗读当前页面的内容。

7. **词典和翻译**

   在阅读过程中，用户可以选中不熟悉的词汇，然后点击右键选择“查词”或“翻译”。Foliate 会显示词典解释或翻译结果，帮助用户更好地理解内容。

#### 总结

Foliate 是一款功能强大且易于使用的电子书阅读器，适合所有喜欢在 Linux 上阅读电子书的用户。无论是从界面设计、功能丰富度还是性能优化方面，Foliate 都表现出色。如果你正在寻找一款可靠的电子书阅读器，不妨试试 Foliate。

希望这篇介绍能帮助你更好地了解和使用 Foliate。

>开源地址：https://github.com/johnfactotum/foliate