<img src="/assets/image/240803-diff-pdf-1.png">
<small>3.3k star，推荐一个开源小工具</small>

这是一个可以用来对比pdf文件内容的小工具，值得收藏，万一哪天会用到呢！

效果如下：

![带有明显区别的输出](/assets/image/240803-diff-pdf.png)

## diff-pdf简介

diff-pdf是一个用于直观比较两个 PDF 的工具。

## diff-pdf如何使用

它需要两个 PDF 文件作为参数。默认情况下，它的唯一输出是返回码，如果没有差异，则为 0；如果两个 PDF 不同，则为 1。如果给定--output-diff选项， diff-pdf会生成一个具有视觉突出显示差异的 PDF 文件：

```
$ diff-pdf --output-diff=diff.pdf a.pdf b.pdf

```

另一种选择是使用--view参数在简单的 GUI 中直观地比较两个文件：
```
$ diff-pdf --view a.pdf b.pdf
```
这将打开一个窗口，您可以在其中查看文件页面、识别它们的差异并放大详细信息


## diff-pdf如何安装

这个小工具，跨平台支持，所以你可以在不同环境中安装下载

你可以选择直接安装二进制文件，也可以自行去编译源码

二进制安装

windows可以直接使用choco包管理器安装
```
$ choco install diff-pdf
```
mac环境的话，直接使用brew安装就好
```
$ brew install diff-pdf
```
linux环境的话，如果是ferora或者centos8的话

```
$ sudo dnf install diff-pdf
```

当然了，也可以直接到releases中去下载

![install](/assets/image/240803-diff-pdf-1.png)

开源地址：github.com/vslavik/diff-pdf