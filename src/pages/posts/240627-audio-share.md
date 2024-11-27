<img src="/assets/image/240627-audio-share-1.png">
<small>推荐一个超牛的小工具</small>

这个工具在部分场景下，还是很有用的，在你不需要购买扬声器的情况在，在局域网下通过安卓手机播放声音。

![audio-share](/assets/image/240627-audio-share-1.png)

## 软件简介
Audio Share是一个开源项目，允许用户将Windows或Linux计算机的音频通过网络分享到Android手机上¹。这意味着您的手机可以变成电脑的扬声器，无需购买新的硬件设备。该软件支持多种操作系统和设备，使其成为一个灵活且实用的解决方案。

**功能特点**
- **跨平台支持**：Audio Share支持Windows和Linux操作系统作为服务器，以及Android 6.0及以上版本作为客户端。
- **简易设置**：用户可以通过简单的图形界面或命令行界面快速启动服务，并连接到手机。
- **高度兼容性**：软件要求PC端的音频播放器能够正常工作，即有声卡且音频终端处于可用状态。
- **防火墙配置**：Linux用户需要手动配置防火墙规则，以允许音频数据的传输。

![setting](/assets/image/240627-audio-share-2.png)

**快速使用指南**
1. **Windows图形界面使用**：
   - 从最新发布中下载APK文件和AudioShareServer.exe。
   - 打开AudioShareServer.exe，检查“Host”部分，通常是局域网地址，如192.168.3.2。
   - 确保手机能够通过此IP地址连接到计算机，然后点击“Start Server”按钮。
   - 安装APK到手机并打开，修改“Host”部分，确保与前一步骤相同，点击“▶”按钮，享受音频。

![install](/assets/image/240627-audio-share-3.png)

2. **Windows/Linux命令行使用**：
   - 下载对应操作系统的压缩包并解压。
   - 查找计算机的局域网地址，如192.168.3.2，然后运行as-cmd -b 192.168.3.2来启动服务器。
   - Windows会自动请求添加防火墙规则，而Linux则需要手动配置。

**注意事项**
- 当前版本的应用不支持自动重新连接功能。如果应用被杀死或由于Android省电功能断开连接，音频播放将停止。
- 建议将应用添加到省电功能的白名单中。为此，您可以在应用的设置中按“Request Ignore Battery Optimizations”。

**结语**
Audio Share提供了一种创新的方式，将您的手机转变为电脑的音箱。它的开源性质和跨平台支持使其成为一个值得尝试的工具。无论您是想在家中的不同房间享受音乐，还是在办公室共享演示音频，Audio Share都能提供一个简单而有效的解决方案。


>开源地址：https://github.com/mkckr0/audio-share

![github-star](/assets/image/240627-audio-share.png)