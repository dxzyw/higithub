<img src="/assets/image/240624-CyberChef-1.png">
<small>26.7k star,推荐个超强的开源工具</small>

这是一款强大的工具合集，最大的特点在于可以在浏览器中使用。
![时间转换](/assets/image/240624-CyberChef-2.png)

![alt text](/assets/image/240624-CyberChef-1.png)

## CyberChef简介

CyberChef是由英国政府通信总部（GCHQ）开发的一款开源工具，被誉为“网络瑞士军刀”。

它是一个简单直观的网络应用程序，用于执行各种“网络”操作，包括简单的编码（如XOR和Base64）、更复杂的加密（如AES、DES和Blowfish）、创建二进制和十六进制转储、数据的压缩和解压缩、计算哈希和校验和、IPv6和X.509解析、更改字符编码等。

## CyberChef特点

CyberChef的功能非常丰富，可以满足技术和非技术分析师在数据处理方面的需求。它的操作包括但不限于：
- **数据编码与解码**：支持多种编码方式，如URL、HTML、Base64等。
- **数据加密与解密**：提供AES、DES、Blowfish等多种加密算法。
- **数据压缩与解压缩**：支持常见的数据压缩格式。
- **哈希与校验和计算**：能够计算MD5、SHA系列等多种哈希值。
- **文件处理**：可以生成和解析二进制和十六进制转储。
- **网络数据解析**：能够解析IPv6地址、X.509证书等。

## CyberChef如何快速使用

可以使用docker快速部署，也可以体验demo版本，地址在文末：

```
docker build --tag cyberchef --ulimit nofile=10000 .
docker run -it -p 8080:80 cyberchef
```

也可以使用官方提供的镜像：

```
docker run -it -p 8080:80 ghcr.io/gchq/cyberchef:latest
```
CyberChef的设计理念是使得数据处理变得简单，即使是没有技术背景的用户也能够轻松地进行复杂的数据操作。

它的用户界面非常友好，您可以通过拖放操作来构建处理流程，实时查看输入和输出数据。

总的来说，CyberChef是一个强大的工具，适用于各种数据处理任务。无论是一名经验丰富的技术分析师还是刚入门的爱好者，CyberChef都能提供所需的功能，高效地完成工作。

>传送门：https://gchq.github.io/CyberChef/
>
>开源地址：https://github.com/gchq/CyberChef

![github_star](/assets/image/240624-CyberChef.png)


