<img src="/assets/image/231011-KeymouseGo-1.png" style="max-width: 70%; height: auto;">
<small>很强！4.7k star，推荐一款python写的小工具，可实现自动化操作！！！</small>


这个小工具是一款类似按键精灵的软件，但是完全开源免费，支持对鼠标或者键盘操作的录制及后续的自动化操作，界面很简单，如下：

![](/assets/image/231011-KeymouseGo-1.png)

工具支持跨平台，支持win、mac、linux，**软件获取在文末**

## 关于KeymouseGo 

KeymouseGo是一款类似按键精灵的鼠标键盘录制和自动化操作的小工具，可以帮助用户实现重复性的工作，提高效率和准确性。KeymouseGo的主要功能有：

- 可以录制鼠标点击、移动、滚轮和键盘输入等事件，并保存为脚本文件。
- 可以在软件中编辑、重命名、删除和运行脚本文件。
- 可以设置启动热键和终止热键，方便快速地执行和停止脚本。
- 可以在脚本文件中使用//进行注释，方便理解和修改。
- 可以在脚本文件中使用input语句来输入变量，方便自定义和扩展¹。
- 可以在脚本文件中使用扩展函数来实现更多的功能，如打开网页、发送邮件、截图等。
- 可以在命令行模式下运行脚本文件，方便批量处理和调用¹。

KeymouseGo是一款开源的软件，使用Python语言编写，基于PySide2框架开发。KeymouseGo目前只支持Windows系统，不支持MacOS和Linux系统。KeymouseGo是一款绿色软件，无需安装，下载即用。KeymouseGo的最新版本是v5.1.1，发布于2023年2月10日。



## 如何使用？


桌面模式
- 点击 录制 按钮，开始记录鼠标点击、移动、滚轮和键盘输入等操作。
- 点击 结束 按钮，保存操作为脚本文件。
- 点击 启动 按钮，自动重复执行脚本文件中的操作。


命令行模式
- 直接运行指定脚本：`> ./KeymouseGo scripts/0314_1452.txt`¹
- 设置脚本重复执行的次数（默认为1）：`-rt` 或 `--runtimes` 参数，如 `> ./KeymouseGo scripts/0314_1452.txt -rt 3`
- 设置脚本执行的速度（默认为100%）：`-sp` 或 `--speed` 参数，如 `> ./KeymouseGo scripts/0314_1452.txt -sp 200`³
- 加载自定义扩展模块运行指定脚本：`-m` 或 `--module` 参数，如 `> ./KeymouseGo scripts/0314_1452.txt -m MyExtension`

## 如何安装？

如果没有python环境的话，建议直接用打包的软件，文末有

也可以通过源码来打包使用：

KeymouseGo是一款用Python语言编写的鼠标键盘录制和自动化操作的软件，可以直接下载可执行文件运行，无需安装Python环境。如果您想从源码打包可执行文件，您可以参考以下步骤：

- Windows系统
    - 安装Python3
    - 在命令行中输入`pip install -r requirements-windows.txt`安装依赖库
    - 在命令行中输入`pip install pyinstaller`安装打包工具
    - 在命令行中输入`pyinstaller -F -w --add-data "./assets;assets" KeymouseGo.py`打包源码为可执行文件¹
- Linux或Mac系统
    - 安装Python3
    - 在命令行中输入`pip3 install -r requirements-universal.txt`安装依赖库²
    - 在命令行中输入`pip3 install pyinstaller`安装打包工具
    - 在命令行中输入`pyinstaller -F -w --add-data "./assets:assets" KeymouseGo.py`打包源码为可执行文件

打包完成后，您可以在dist目录下找到KeymouseGo的可执行文件，双击即可运行。

## KeymouseGo的特点

KeymouseGo是一款类似按键精灵的鼠标键盘录制和自动化操作的小工具，它有以下一些优点：

- 它可以帮助用户实现重复性的工作，提高效率和准确性。
- 它可以在软件中编辑、重命名、删除和运行脚本文件，方便管理和修改。
- 它可以设置启动热键和终止热键，方便快速地执行和停止脚本。
- 它可以在脚本文件中使用注释、变量和扩展函数，方便理解和扩展。
- 它可以在命令行模式下运行脚本文件，方便批量处理和调用。
- 它是一款开源的软件，使用Python语言编写，基于PySide2框架开发。
- 它是一款绿色软件，无需安装，下载即用。
- 它支持Windows、Linux和Mac系统。
.


回复关键字**KeymouseGo**获取

