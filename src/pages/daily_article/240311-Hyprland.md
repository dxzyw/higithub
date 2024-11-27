<img src="/assets/image/240311-Hyprland-1.png" style="max-width: 70%; height: auto;">
<small>15.2k star，推荐一个酷炫、支持自定义的linux桌面环境项目</small>


文章正式开始之前可以先来看下效果，开源地址及官网地址在文末：

![](/assets/image/240311-Hyprland-1.png)

![](/assets/image/240311-Hyprland-2.png)

![](/assets/image/240311-Hyprland-3.png)

![](/assets/image/240311-Hyprland-4.png)

![](/assets/image/240311-Hyprland-5.png)

## 关于Wayland
Wayland 是一个新的 Linux 显示服务器协议，区别于我们熟知的X，Wayland 由合成器直接管理窗口的输入和输出。

简答来讲，wayland效率更高，更加安全，资源利用率更高。

今天介绍的这个项目，就是一个开源的wayland的实现

## Hyprland

Hyprland是一个基于 wlroots 的动态平铺 Wayland 合成器，它不牺牲外观而提供了最新的 Wayland 功能。

## Hyprland特点

- **高度可定制**：您可以使用一种叫 hyprlang 的语言来编写您的配置文件，调整各种参数和选项，比如窗口的外观、动画效果、插件设置等。您也可以在保存修改后立即重新加载您的配置，无需重启合成器。
- **所有的眼睛糖果**：它支持多种视觉效果，比如渐变边框、模糊、动画、阴影等，让您的桌面更加美观和动态。它还有两种内置的设计风格，以及更多可作为插件的设计风格。
- **强大的插件支持**：它内置了插件管理器，您可以轻松地安装、卸载、启用、禁用各种插件，比如不同的窗口布局、窗口规则、输入法、输入面板等。您也可以在 GitHub 上查看可用的插件列表，或者自己编写插件。
- **简单的 IPC**：它提供了一个基于套接字的 IPC 接口，您可以使用 hyprctl 命令或其他工具来与合成器进行通信，执行各种操作，比如切换工作区、移动窗口、调整布局等。
- **更多的 QoL 功能**：它比其他基于 wlroots 的合成器提供了更多的生活质量功能，比如全屏模式、特殊工作区（划痕板）、窗口分组（标签模式）、全局快捷键、撕裂支持等。

## hall of fame

在官网上还展示了近几年在Discord举办的一些桌面美化比赛的优胜者，每次比赛都有一个主题，比如太空、夏天、冬天等，参赛者需要使用 Hyprland 来设计和装饰自己的桌面环境，然后提交截图和配置文件。

比赛的评委和观众会根据美观、创意、主题契合度等标准来评选出前三名，并给予奖励和荣誉。

如下为23年太空：


![](/assets/image/240311-Hyprland-6.png)


![夏天](/assets/image/240311-Hyprland-7.png)



**开源地址：https://github.com/hyprwm/Hyprland**

**官网地址：https://hyprland.org/**