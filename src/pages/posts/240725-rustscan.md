<img src="/assets/image/240725-rustscan-1.png">
<small>2.2k star，3秒内扫描65k个端口的开源工具</small>

rust语言可以精细的控制内存及处理器，所以效率会很高，所以出现了蛮多rust小工具，今天推荐的这款工具就是一个用rust写的快速、高效的端口扫描器。

![demo](/assets/image/240725-rustscan-1.png)

## rustscan简介

端口扫描器，用处嘛，懂的都懂，需要的可以直接去看下

可以看到这个工具在开源社区也是比较火的

![github-star](/assets/image/240725-rustscan.png)

## rustscan如何安装

可以通过包管理器cargo去安装，或者直接docker启动可以避免很多问题

docker方式启动

```
#可以根据需要配置扫描地址
docker run -it --rm --name rustscan rustscan/rustscan:2.1.1 <rustscan arguments here> <ip address to scan>
#如果需要一只执行，可以如下
alias rustscan='docker run -it --rm --name rustscan rustscan/rustscan:alpine'
#然后可以继续执行
rustscan 127.0.0.1 -t 500 -b 1500 -- -A
```

你也可以参考github内容去构建属于自己的镜像

```
git clone https://github.com/RustScan/RustScan.git
cd /path/to/download/RustScan
docker build -t <yourimagename> .
```

如果你是mac环境，可以用brew安装
```
brew install rustscan
```
安卓或者termux环境，如下安装
```
pkg install rustscan
```
## rustscan的特点

- 最大的特点就是快，可以在在3秒内扫描所有65k端口。
- 完整的脚本引擎支持。自动将结果传输到Nmap，或者使用我们的脚本（或编写您自己的脚本）来执行任何您想要的操作。
- 可以自己去适配系统环境



>传送门：https://github.com/RustScan/RustScan