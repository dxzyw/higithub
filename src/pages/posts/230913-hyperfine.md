<img src="/assets/image/230913-hyperfine-1.gif" style="max-width: 70%; height: auto;">
<small>建议收藏！好用、强大的命令分析工工具，对比命令参数的效率、性能，强的离谱！！</small>



当我们需要衡量命令的性能、比较不同命令或命令参数的效率时，通常会使用基准测试工具。在这个领域，Hyperfine 是一个备受欢迎的命令行工具，它的功能强大，易于使用，并提供了丰富的功能集合。本文将详细介绍 Hyperfine，包括其特点、用法以及如何安装和配置。


![](/assets/image/230913-hyperfine-1.gif)


## Hyperfine：什么是它？

Hyperfine 是一个命令行基准测试工具，用于评估命令的性能。它通过多次运行命令并分析结果，帮助用户更好地理解命令的执行时间。无论您是开发人员、系统管理员还是普通用户，Hyperfine 都能为您提供有关命令性能的重要见解。

### 特点亮点

Hyperfine 提供了许多令人印象深刻的特点，这些特点使其成为一个出色的基准测试工具。

#### 1. 统计分析

Hyperfine 允许您对同一命令进行多次运行，并提供统计分析。这意味着它不仅仅是简单地运行一次命令并返回时间，而是运行多次以获取准确的性能指标。

#### 2. 支持任意 Shell 命令

无论您要测试的命令是什么，Hyperfine 都可以胜任。只需提供 Shell 命令作为参数，它将为您运行并测量它们的性能。

#### 3. 即时反馈

Hyperfine 提供实时反馈，告诉您基准测试的进度和当前估计。这意味着您可以随时监视测试的进行，而不必等待太长时间才能获取结果。

#### 4. 热身运行和预处理命令

对于某些需要频繁读写磁盘的命令，性能测试的结果可能会受到缓存的影响。Hyperfine 允许您在正式的性能测试之前运行一些“热身运行”，以确保缓存已经被加载。

#### 5. 参数化基准测试

如果您想要测试一系列命令，其中一个参数会变化（例如，线程数），Hyperfine 允许您轻松执行参数化基准测试。这对于需要评估不同配置的命令非常有用。

#### 6. 跨平台支持

Hyperfine 是跨平台的，可以在 Linux、macOS 和 Windows 上运行。这意味着无论您使用哪种操作系统，都可以轻松使用它。

#### 7. 输出结果导出

您可以将基准测试的结果导出为不同格式，包括 CSV、JSON、Markdown 和 AsciiDoc。这使得结果分析更加方便。


![](/assets/image/230913-hyperfine-2.png)


![](/assets/image/230913-hyperfine-3.png)


#### 8. 中间 Shell 控制

Hyperfine 允许您指定要使用的 Shell，还可以控制是否使用中间 Shell。这使得测试更加灵活。

#### 9. 支持 Shell 函数和别名

如果您使用 Bash，您可以导出 Shell 函数以直接在 Hyperfine 中进行基准测试。这对于自定义功能的性能测试非常有用。

#### 10. 统计异常值检测

Hyperfine 还支持统计异常值检测，以帮助您识别可能来自其他程序干扰或缓存效应的性能异常。

### 使用示例

现在让我们看一下如何在实际情况下使用 Hyperfine 进行基准测试。

#### 基本基准测试

要运行基本的基准测试，只需调用 `hyperfine` 后跟一个或多个 Shell 命令。例如，要测试 `sleep 0.3` 的执行时间，只需运行以下命令：

```bash
hyperfine 'sleep

 0.3'
```

Hyperfine 会自动确定运行每个命令的次数。默认情况下，它将至少运行 10 次基准测试，并测量至少 3 秒。

#### 更改运行次数

如果您想要更改运行次数，可以使用 `-r/--runs` 选项。例如，要将运行次数更改为 5 次，可以运行以下命令：

```bash
hyperfine --runs 5 'sleep 0.3'
```

#### 热身运行

对于某些命令，特别是那些需要频繁读写磁盘的命令，基准测试的结果可能会受到缓存的影响。要在热缓存上运行基准测试，您可以使用 `-w/--warmup` 选项来执行一定数量的预热运行。例如：

```bash
hyperfine --warmup 3 'grep -R TODO *'
```

这将在正式性能测试之前运行 3 次命令，以确保缓存已被加载。

#### 参数化基准测试

如果您需要测试一系列命令，其中一个参数会变化，您可以使用 `-P/--parameter-scan` 选项。例如，要测试不同线程数下的编译性能，可以运行：

```bash
hyperfine --prepare 'make clean' --parameter-scan num_threads 1 12 'make -j {num_threads}'
```

这将测试 `make -j 1`、`make -j 2`、`make -j 3`，一直到 `make -j 12` 的性能。

#### 导出结果

Hyperfine 允许将基准测试的结果导出为各种格式，包括 Markdown 和 JSON。要将结果导出为 Markdown 表格，可以运行：

```bash
hyperfine --export-markdown results.md 'sleep 0.3' 'sleep 0.5'
```

这将创建一个 Markdown 文件，其中包含了基准测试的结果。

## 安装和配置 Hyperfine

现在您已经对 Hyperfine 有了初步了解，让我们看看如何安装和配置它。

### 安装

Hyperfine 可以通过多种方式进行安装，具体取决于您的操作系统。以下是一些常见操作系统的安装方法：

#### Ubuntu/Debian

```bash
wget https://github.com/sharkdp/hyperfine/releases/download/v1.16.1/hyperfine_1.16.1_amd64.deb
sudo dpkg -i hyperfine_1.16.1_amd64.deb
```

#### Fedora

```bash
dnf install hyperfine
```

#### Alpine Linux

```bash
apk add hyperfine
```

#### Arch Linux

```bash
pacman -S hyperfine
```

#### macOS

```bash
brew install hyperfine
```

#### Windows

您可以使用 Chocolatey、Scoop 或 Winget 来安装 Hyperfine。

### 使用 Hyperfine

安装完成后，您可以立即开始使用 Hyperfine。只需在终端中输入 `hyperfine`，然后加上您要测试的命令。例如：

```bash
hyperfine 'sleep 0.3'
```

这将运行基准测试，并在完成后显示性能摘要。根据您的需求，您可以使用各种选项来自定义测试的行为，如更改运行次数、执行预热运行或导出结果。

## 总结

Hyperfine 是一个强大的命令行基准测试工具，可帮助您衡量和比较不同命令或命令参数的性能。它提供了丰富的特点，包括统计分析、热身运行、参数化基准测试以及结果导出功能。通过使用 Hyperfine，开发人员和系统管理员可以更好地了解命令的性能，识别潜在瓶颈，并采取措施来提高效率。无论您是在调优脚本、编写复杂的命令行工具还是简化工作流程，Hyperfine 都是一个不可或缺的工具。

无论您是一名开发人员还是一名系统管理员，都可以从 Hyperfine 中受益。它提供了一种快速、灵活和可靠的方式来评估命令的性能，从而提高工作效率。所以，不妨尝试一下 Hyperfine，看看它如何帮助您更好地理解和优化您的命令行工作流程。
