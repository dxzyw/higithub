<img src="/assets/image/240927-YesPlayMusic-1.png">
<small>28.8k star,牛逼的飞起的开源项目推荐</small>

![](/assets/image/240927-YesPlayMusic.png)






**YesPlayMusic** 是一款高颜值的第三方网易云音乐播放器，支持 Windows、macOS 和 Linux 平台。该软件由 Vue.js 全家桶开发，旨在为用户提供简洁、美观且功能丰富的音乐播放体验。

YesPlayMusic 不仅支持网易云音乐的基本功能，还增加了许多实用的扩展功能，使其成为音乐爱好者的理想选择。

![](/assets/image/240927-YesPlayMusic-1.png)

#### 功能特点

![](/assets/image/240927-YesPlayMusic-2.png)

1. **多平台支持**：YesPlayMusic 支持 Windows、macOS 和 Linux 平台，用户可以在不同操作系统上享受一致的音乐体验。
2. **网易云账号登录**：支持扫码、手机和邮箱登录，方便用户快速访问自己的音乐库。
3. **MV 播放**：用户可以直接在软件中观看网易云音乐的 MV 视频。
4. **歌词显示**：支持同步显示歌词，让用户在听歌的同时可以跟随歌词一起唱。
5. **私人 FM 和每日推荐**：根据用户的听歌习惯，推荐个性化的音乐内容。
6. **无社交功能**：专注于音乐播放，去除了社交功能，提供纯粹的音乐体验。
7. **海外用户支持**：海外用户也可以使用网易云账号登录并播放音乐。
8. **UnblockNeteaseMusic 支持**：自动使用各类音源替换变灰歌曲链接（网页版不支持）。
9. **每日自动签到**：支持手机端和电脑端同时签到，方便用户获取更多积分。
10. **Light/Dark Mode 自动切换**：根据系统设置自动切换明暗模式，保护用户视力。
11. **Touch Bar 支持**：macOS 用户可以通过 Touch Bar 快速控制音乐播放。
12. **PWA 支持**：可以在 Chrome 或 Edge 浏览器中安装为桌面应用，方便快捷。
13. **Last.fm Scrobble 支持**：记录用户的听歌历史，方便管理和分享。
14. **音乐云盘**：支持上传和播放用户自己的音乐文件。
15. **自定义快捷键和全局快捷键**：用户可以根据自己的习惯设置快捷键，提高操作效率。
16. **Mpris 支持**：与 Linux 系统的媒体控制接口集成，方便用户通过系统快捷键控制音乐播放。

#### 如何快速开始

要快速开始使用 YesPlayMusic，用户可以按照以下步骤进行安装和配置：

1. **下载安装包**：
   - 访问 [YesPlayMusic 的 GitHub Releases 页面](https://github.com/qier222/YesPlayMusic/releases)，下载适合自己操作系统的安装包。
   - macOS 用户可以通过 Homebrew 安装：
     ```bash
     brew install --cask yesplaymusic
     ```
   - Windows 用户可以通过 Scoop 安装：
     ```bash
     scoop install extras/yesplaymusic
     ```

2. **运行 YesPlayMusic**：
   - 安装完成后，运行 YesPlayMusic，使用网易云账号登录。
   - 登录后，用户可以浏览自己的音乐库、播放列表、每日推荐等内容。

3. **配置 UnblockNeteaseMusic**：
   - 如果用户希望解锁变灰歌曲，可以配置 UnblockNeteaseMusic。需要注意的是，网页版不支持此功能。
   - 用户可以参考 [UnblockNeteaseMusic 的 GitHub 页面](https://github.com/nondanee/UnblockNeteaseMusic) 获取详细的配置方法。

4. **部署到 Vercel**：
   - 除了下载安装包使用，用户还可以将 YesPlayMusic 部署到 Vercel 或自己的服务器上。
   - 部署网易云 API，详情参见 [Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)。
   - 克隆 YesPlayMusic 仓库：
     ```bash
     git clone --recursive https://github.com/qier222/YesPlayMusic.git
     ```
   - 安装依赖：
     ```bash
     yarn install
     ```
   - 复制 `.env.example` 文件为 `.env`，并修改 `VUE_APP_NETEASE_API_URL` 的值为网易云 API 地址。
   - 编译打包：
     ```bash
     yarn run build
     ```
   - 将 `/dist` 目录下的文件上传到 Web 服务器。

通过以上步骤，用户可以快速开始使用 YesPlayMusic，享受高质量的音乐播放体验。YesPlayMusic 不仅功能丰富，还提供了多种个性化设置，满足不同用户的需求。无论是日常听歌还是专业音乐管理，YesPlayMusic 都是一个值得推荐的选择。

