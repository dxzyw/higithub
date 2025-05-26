<img src="/assets/image/250530-LinuxMirrors.png"/> 

<small>4.3k star,牛逼！开发者效率工具</small>

**假如你是一位GNU/Linux用户，你是否曾遇到过软件源访问缓慢、下载失败甚至无法更新系统的困扰？**这些问题不仅影响你的工作效率，还可能导致系统安全风险。面对这些挑战，该如何高效、可靠地解决呢？这就是SuperManito的**LinuxMirrors**项目可以帮助你的地方。

## **简介**
LinuxMirrors是一个专为GNU/Linux用户打造的开源脚本项目，旨在帮助用户更换系统软件源以及安装、换源Docker，以优化软件包的下载速度和稳定性。该项目支持多个Linux发行版，包括Debian、Ubuntu、Kali Linux、Linux Mint、Deepin、Red Hat Enterprise Linux、Fedora、CentOS、Arch Linux、Alpine Linux等，涵盖范围广泛，几乎可以满足所有主流Linux用户的需求。

## **有哪些功能特点？**
1. **多系统支持**：适配多个主流Linux发行版，确保不同系统的用户都能顺利使用该脚本。
2. **一键换源**：无需手动查找、编辑软件源配置文件，只需运行脚本即可完成更换操作，减少繁琐的步骤，提高效率。
3. **稳定性优化**：优选国内外高质量镜像源，确保用户能够获得更快、更稳定的下载体验。
4. **自动匹配最优源**：根据不同的Linux发行版和地区，自动选择适合的镜像源，减少用户自行配置的麻烦。
5. **支持Docker安装与换源**：提供专门的Docker安装及换源脚本，方便容器环境用户快速配置镜像源，提高容器内软件的获取速度。
6. **开源项目**：完全开放代码，允许用户查看、修改、贡献代码，使项目更具透明性和可拓展性。

## **如何快速开始？**
使用LinuxMirrors非常简单，你只需在终端中执行以下命令，即可开始换源操作：

### **更换系统软件源**
```bash
bash <( curl -sSL https://linuxmirrors.cn/main.sh )
```

### **Docker安装脚本**
```bash
bash <( curl -sSL https://linuxmirrors.cn/docker.sh )
```

官方项目网站还集成了AI聊天与搜索功能，提供更多详细的使用指南，用户可前往[LinuxMirrors官方网站](https://linuxmirrors.cn)获取更多帮助。

## **总结**
LinuxMirrors项目提供了一种高效、可靠的方式来解决Linux用户换源慢、不稳定的痛点。它不仅支持多种发行版，还具备一键换源、优化下载速度、自动匹配最优源等功能，使软件更新和安装更加快捷。无论你是个人用户还是企业运维人员，都可以借助LinuxMirrors提升系统软件管理的效率。如果你觉得这个项目对你有帮助，别忘了在GitHub上点亮**Star**，分享给更多需要的朋友！