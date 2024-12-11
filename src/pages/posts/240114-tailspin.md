<img src="/assets/image/240114-tailspin-1.png" style="max-width: 70%; height: auto;">
<small>4.1k star，推荐一款开源的命令行神器！</small>


看下效果图：
![](/assets/image/240114-tailspin-1.png)


# tailspin：让日志文件更美观的工具

tailspin是一个开源的日志文件高亮插件，它可以用于实时观看或追踪任何格式的日志文件，无需额外配置，内置了颜色语法高亮功能，可以高亮dates、numbers、IP addresses、URLs等内容，让日志文件更易于阅读和分析。

## 如何安装

tailspin的二进制文件名是tspin，您可以通过以下几种方式安装它：

- Homebrew：`brew install tailspin`
- Cargo：`cargo install tailspin`
- Archlinux：`pacman -S tailspin`
- Nix：`nix-shell -p tailspin`
- NetBSD：`pkgin install tailspin`
- FreeBSD：`pkg install tailspin`

您也可以从源码编译安装，只需运行`cargo install --path .`，然后将`~/.cargo/bin`添加到您的PATH环境变量中。

注意：当从源码编译时，请确保您使用的是最新版本的less。

## 如何使用

tailspin的基本用法是`tspin [file]`，它会打开指定的日志文件，并用less作为分页器，让您可以滚动、搜索和过滤日志内容。

tailspin支持以下几种高亮组：

- Dates：日期，如`2023-12-31`或`31/12/2023`
- Keywords：关键词，如`ERROR`或`WARN`
- URLs：网址，如`https://github.com/bensadeh/tailspin`
- Numbers：数字，如`42`或`3.14`
- IP Addresses：IP地址，如`192.168.0.1`或`2001:db8::1`
- Quotes：引号，如`"hello world"`
- Unix file paths：Unix文件路径，如`/home/user/file.txt`
- HTTP methods：HTTP方法，如`GET`或`POST`
- UUIDs：UUID，如`123e4567-e89b-12d3-a456-426614174000`
- Key-value pairs：键值对，如`name=John`
- Unix processes：Unix进程，如`sshd`或`nginx`

您可以使用`-t`或`--tail`选项来从文件末尾开始读取，这在日志文件很大时很有用。您也可以使用`-f`或`--follow`选项来持续监听文件的变化，这在日志文件实时更新时很有用。

tailspin还可以监听文件夹，这在日志文件被轮换时很有用。当监听文件夹时，tailspin会自动进入跟随模式（按Ctrl + C退出），并且只打印在启动后到达的新行。

## 有哪些特点

tailspin的特点有以下几点：

- 它可以处理任何格式的日志文件，不需要任何配置或设置
- 它可以高亮日志文件中的各种常见模式，让日志文件更美观和清晰
- 它可以实时观看或追踪日志文件的变化，方便监控和分析
- 它可以轻松地与其他命令集成，例如`tail -f /var/log/syslog | tspin`
- 它使用less作为分页器，提供了强大的滚动、搜索和过滤功能
- 它支持自定义高亮组的颜色、样式和边框
- 它支持隐藏日期和时间的高亮

## 总结

tailspin是一个开源的日志文件高亮插件，它可以让您更方便地查看和处理日志文件，无论是什么格式。它是一个轻量级的工具，只需要一个二进制文件就可以运行，不依赖于其他库或框架。它是一个实用的工具，可以帮助您提高日志文件的可读性和可分析性。

