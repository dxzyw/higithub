<img src="https://files.mdnice.com/user/46581/d8cb8b53-edb9-420f-a5a0-f91f4ae11c0b.png" style="max-width: 70%; height: auto;">
<small>推荐一款开源的高级玩意</small>


可以看下效果：


![这是一份年度命令记录](/assets/image/240127-cmd-wrapped-1.png)


# cmd-wrapped：在命令行中回顾你的过去一年

cmd-wrapped 是一个用 Rust 编写的命令行工具，它可以根据你的历史命令，生成一份有趣的数据总结，直观地展示你过去一年在命令行中的使用习惯、活跃分布、常用命令等信息。

它的灵感来源于 Spotify Wrapped，一个每年年底向用户展示他们在 Spotify 上听歌情况的服务。

## 特点

- 支持 Zsh 和 Bash，可以自动检测你的 shell 类型。
- 可以通过参数显示过去任意一年的数据，例如 `cmd-wrapped -y 2022` 就可以查看 2022 年的数据。
- 生成类似于 GitHub 的年度命令分布图，用不同的颜色表示不同的命令频率。
- 统计每日最活跃的时段，以及每个时段的平均命令条数。
- 统计最常用的命令，以及每个命令的平均执行时间。
- 生成一份简洁的报告，包含你的命令总数、平均每日命令数、最长连续使用天数等数据。

## 如何使用

### 安装

你可以从 GitHub 上下载 cmd-wrapped 的源码，然后使用 cargo 构建它⁸。你需要先安装 Rust 的开发环境，可以参考 [这里](^9^) 的教程。

```bash
git clone https://github.com/YiNNx/cmd-wrapped.git
cd cmd-wrapped
cargo build --release
```

构建完成后，你可以将生成的可执行文件复制到你的 PATH 中，例如：

```bash
cp target/release/cmd-wrapped /usr/local/bin
```

或者，你也可以直接从 GitHub 上下载 cmd-wrapped 的二进制文件，然后赋予它可执行权限。你需要根据你的操作系统选择合适的文件，例如：

```bash
wget https://github.com/YiNNx/cmd-wrapped/releases/download/v0.1.0/cmd-wrapped-linux-x86_64
mv cmd-wrapped-linux-x86_64 cmd-wrapped
chmod +x cmd-wrapped
```

然后，你也可以将它复制到你的 PATH 中，或者直接在当前目录运行它。

### 参数

cmd-wrapped 支持以下参数：

- `-y` 或 `--year`：指定要查看的年份，例如 `cmd-wrapped -y 2022`。
- `-h` 或 `--help`：显示帮助信息，例如 `cmd-wrapped -h`。
- `-v` 或 `--version`：显示版本信息，例如 `cmd-wrapped -v`。

如果不指定任何参数，cmd-wrapped 将默认显示当前年份的数据。

### 运行

运行 cmd-wrapped 很简单，只需要在命令行中输入 `cmd-wrapped`，然后按回车键，就可以看到你的数据总结了。例如：

如下仅为部分：

```bash
$ cmd-wrapped
cmd-wrapped
在命令行中查看你的过去一年！

你在 2023 年的命令行使用情况如下：

+-----------------+-----------------+
| 总命令条数      | 12345           |
+-----------------+-----------------+
| 平均每日命令数  | 33.84           |
+-----------------+-----------------+
| 最长连续使用天数 | 365             |
+-----------------+-----------------+
| 最常用的命令    | git (4567 次)   |
+-----------------+-----------------+
| 最快的命令      | ls (0.01 秒)    |
+-----------------+-----------------+
| 最慢的命令      | cargo run (9.87 秒) |
+-----------------+-----------------+


