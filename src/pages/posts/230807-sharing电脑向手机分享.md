<img src="/assets/image/230807-sharing电脑向手机分享-1.jpg" style="max-width: 70%; height: auto;">
<small>1.6kstar，推荐一款共享神器，sharing</small>



## 1  简介
sharing是一个命令行工具，用于将目录和文件从命令行共享到 iOS 和 Android 设备，而无需额外的客户端应用程序
![](/assets/image/230807-sharing电脑向手机分享-1.jpg)


## 2 安装

github源码可以访问如下地址

**https://github.com/parvardegr/sharing**

github如果无法访问的话，可以后台直接私信

该工具需要nodejs环境，通过npm安装
```
npm install -g easy-sharing
```

## 3 软件特性或亮点
- 共享目录和文件
- 共享剪贴板
- 接收文件
- 支持基本身份验证
- 支持ssl


## 4 简单使用

1. 共享文件或目录
```
sharing /directory-or-file-to-share
```

2. 用手机扫描二维码,两台设备必须连接到同一 Wi-Fi，或者，如果您有公共 IP 地址，请使用该 --ip 参数。
```
sharing --ip your-public-ip-address /directory-or-file-to-share
```
3. 浏览目录下载需要的文件或目录

![](/assets/image/230807-sharing电脑向手机分享-2.png)

注意: macOS 用户应使用 easy-sharing 二进制而不是 sharing

其它用法:
```
$ sharing --help

Usage:
• Share file or directory
$ sharing /path/to/file-or-directory

• Share clipboard
$ sharing -c

• Receive file
$ sharing /destination/directory --receive;

• Share file with Basic Authentication
$ sharing /path/to/file-or-directory -U user -P password  # also works with
--receive

Options:
      --version                     Show version number                [boolean]
      --debug                       enable debuging logs
  -p, --port                        Change default port
      --ip                          Your machine public ip address
  -c, --clipboard                   Share Clipboard
  -t, --tmpdir                      Clipboard Temporary files directory
  -w, --on-windows-native-terminal  Enable QR-Code support for windows native
                                    terminal
  -r, --receive                     Receive files
  -q, --receive-port                change receive default port
  -U, --username                    set basic authentication username
                                                               [default: "user"]
  -P, --password                    set basic authentication password
      --help                        Show help                          [boolean]
```

如果你想要用客户端工具的话，那么之前推荐的过的这款工具也可用于文件分享或同步
> https://mp.weixin.qq.com/s?__biz=MzU4MjY3Mzc3OQ==&mid=2247486546&idx=1&sn=72d810b894708dd16ca4e8bc17a09702&chksm=fdb5f84ecac2715821dddd03cc7b8b5ca9c9cd5a29843bad779f9458e27374b59b9dd72201cb&scene=21#wechat_redirect

>注：如需转载，须保留文首公众号名片，其它行为一律视为非授权转载。