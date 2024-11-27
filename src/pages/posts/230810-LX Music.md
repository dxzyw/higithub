<img src="/assets/image/230810-LX Music-1.png" style="max-width: 70%; height: auto;">
<small></small>

## 1  简介

一个免费&开源的音乐查找工具，基于 electron开发。

除了ios不支持外，其它环境都支持，ios也没有计划支持。

这款软件可以用来干嘛呢？在线音乐搜索、排行榜音乐、其他app歌单迁移、同步各端收藏的歌曲

如果你是音乐爱好者，对于目前不同app之间切换繁琐很是不开心，那么可以尝试下这款软件。
![](/assets/image/230810-LX Music-1.png)

之前还推荐过一款浏览器插件款，很轻量，可以到如下去看：


## 2 安装

目前本项目的原始发布地址只有GitHub及蓝奏网盘

github可以访问的直接到如下链接去下载就可以，目前支持windows、mac、linux、安卓版本

**https://github.com/lyswhut/lx-music-desktop**

github如果无法访问的话，可以后台直接私信**音乐软件**

## 3 软件特性或亮点
- 免费且无广告
  - 本项目开发的初衷仅是为了对新技术的学习与研究，因此软件直至停止维护都将会一直保持纯净
- 多端支持
  - 本项目支持在Windows、Mac OS、Linux、Android平台上运行。注：不计划支持IOS 
- 开源
  - 本项目开源发布于 GitHub 面向全世界人用作对技术的学习交流使用
  
## 4 源码如何使用

1. 安装Node.js环境（如已安装请跳过）: 下载Node.js安装结束后，打开命令行输入node -v将会输出Node.js的版本号即表示已安装完成
2. 拉取代码: 克隆本仓库代码
3. 安装依赖: 在项目根目录打开命令行，执行命令：npm install，若此命令执行的过程中报错可以尝试百度报错内容找解决方法
- 开发&构建
```
# 开发模式
npm run dev

# 构建免安装版
npm run pack:dir

# 构建安装包（Windows版）
npm run pack:win

# 构建安装包（Mac版）
npm run pack:mac

# 构建安装包（Linux版）
npm run pack:linux

```



>注：如需转载，须保留文首公众号名片，其它行为一律视为非授权转载。