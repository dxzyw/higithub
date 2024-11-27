<img src="/assets/image/240924-kali-linux-1.png" style="max-width: 70%; height: auto;">
<small>黑客或者安全在用的kali linux是怎样，安装</small>

 
 ## kali Linux的历史

Kali Linux由Offensive Security公司维护,可以追溯到BackTrack Linux这个著名的渗透测试发行版。BackTrack于2006年首次发布,基于Knoppix,集成了许多安全工具。它因功能强大而深受安全研究人员的喜爱。

后来,BackTrack的开发团队决定对其进行重构,于2012年发布了Kali Linux的第一个版本。Kali Linux基于Debian,对各种安全工具进行了优化集成,使其成为新一代完备的渗透测试系统。

直到今天,Kali Linux已经发展成为网络安全领域最流行和强大的Linux发行版之一。它拥有超过600种预装的安全工具,覆盖了漏洞评估、逆向工程等方面的需求。每年都会发布新的版本,不断优化和增强功能。



**不建议个人用户使用，仅仅建议用作测试，实际它自身带有攻击性，但不具备防御性**


## 简要介绍几个Kali Linux的主要特点:

1. 预装了大量网络安全工具软件,覆盖信息收集、漏洞扫描、密码破解、无线测试等方面,非常全面。

2. 基于Debian,系统稳定性好。并针对安全工具做了优化,如内核补丁等。

3. 默认禁用了对新用户不友好的功能,比如root账户SSH远程登录。可以减少安全风险。

4. 提供了方便的工具管理功能,可以快速安装/删除工具。并有Metapackages将相关工具分类打包。

5. 界面设计友好,自带一些方便的小工具。还可以切换到经典的KDE桌面。

6. 硬件兼容性好,支持主流的无线网卡芯片,可用于无痕渗透。

7. 专为安全研究人员和pentester设计,但也可作为日常使用的Linux发行版。

8. 有专门的Kali NetHunter版本,可安装在手机等移动设备上,进行移动渗透测试。

9. 社区活跃,定期更新版本,作为专业渗透测试系统值得信赖。


1. ## 虚拟机安装

1. 创建新的虚拟机

![](/assets/image/240924-kali-linux-1.png)


2. 新建虚拟机向导选择自定义
![](/assets/image/240924-kali-linux-2.png)

3. 直接点击下一步

![](/assets/image/240924-kali-linux-3.png)

4. 操作系统选择稍后安装操作系统


![](/assets/image/240924-kali-linux-4.png)


5. 选择linux系统，系统版本选择debian10.x就好


![](/assets/image/240924-kali-linux-5.png)

6. 

![](/assets/image/240924-kali-linux-6.png)

7. 设置处理器配置，可以默认，后面还是可以调整的


![](/assets/image/240924-kali-linux-7.png)


8. 虚拟机的内存同理


![](/assets/image/240924-kali-linux-8.png)


9. 网络类型建议选择nat网络模式，可以直接复用主机的网络


![](/assets/image/240924-kali-linux-9.png)


10. 根据默认选择就好


![](/assets/image/240924-kali-linux-10.png)


11. 根据默认选择就好

![](/assets/image/240924-kali-linux-11.png)


12. 创建新的虚拟磁盘


![](/assets/image/240924-kali-linux-12.png)


13. 可以根据需要配置需要的磁盘大小，默认20G，建议选择40G，不然安装软件会失败


![](/assets/image/240924-kali-linux-13.png)

14. 直接点击下一步就好



![](/assets/image/240924-kali-linux-14.png)


15. 到这步基本的配置就结束了



![](/assets/image/240924-kali-linux-15.png)


16. 如有需要调整的，可以点击配置



![](/assets/image/240924-kali-linux-16.png)



17. 在DVD可以修改iso镜像地址的路径


![](/assets/image/240924-kali-linux-17.png)



18. 到这步就可以点击开启虚拟机了


![](/assets/image/240924-kali-linux-18.png)

## 安装debian

1. graphical install有图行安装，install无图形安装。

![](/assets/image/240924-kali-linux-19.png)

2. 选择中文简体
![](/assets/image/240924-kali-linux-20.png)

3. 根据需要选择即可，继续

![](/assets/image/240924-kali-linux-21.png)
4. 这里选择汉语，可以根据需要选择

![](/assets/image/240924-kali-linux-22.png)
5. 开始探测挂载安装介质

![](/assets/image/240924-kali-linux-23.png)
6. 配置网络

![](/assets/image/240924-kali-linux-24.png)
7. 设置主机名，根据需要就好

![](/assets/image/240924-kali-linux-25.png)

8. 忽略，不需要操作
![](/assets/image/240924-kali-linux-26.png)

9. 设置用户和密码

![](/assets/image/240924-kali-linux-27.png)

10. 配置时钟

![](/assets/image/240924-kali-linux-28.png)
11. 磁盘分区设置，一路继续即可

![](/assets/image/240924-kali-linux-29.png)


![](/assets/image/240924-kali-linux-30.png)


![](/assets/image/240924-kali-linux-31.png)


![](/assets/image/240924-kali-linux-32.png)


![](/assets/image/240924-kali-linux-33.png)



![](/assets/image/240924-kali-linux-31.png)
12.  选中要安装的软件
![](/assets/image/240924-kali-linux-35.png)

13. 系统安装中

![](/assets/image/240924-kali-linux-36.png)


14. 如果遇到如下报错，有可能是需要调整apt源，如下方式调整


![](/assets/image/240924-kali-linux-37.png)

15. 进入shell

![](/assets/image/240924-kali-linux-38.png)

16. 

![](/assets/image/240924-kali-linux-39.png)

```
chroot /target
nano /etc/apt/sources.list

```

可以使用如下源：

```
deb http://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
deb-src http://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
```


![](/assets/image/240924-kali-linux-40.png)


使用ctrl+o 保存 然后回车 ，按ctrl+x 退出

重新选择安装软件，继续安装，还有一种可能是没有空间了，建议最开始选择40G


17. 安装grub引导


![](/assets/image/240924-kali-linux-41.png)
 
![](/assets/image/240924-kali-linux-42.png)

18. 安装完成


![](/assets/image/240924-kali-linux-43.png)


## 系统启动


![](/assets/image/240924-kali-linux-44.png)

输入前面新建的普通用户


![](/assets/image/240924-kali-linux-45.png)

系统界面


![](/assets/image/240924-kali-linux-46.png)

可以看到自带了很多安全工具 


![](/assets/image/240924-kali-linux-47.png)

终端看起来也是很舒服的


![](/assets/image/240924-kali-linux-48.png)

自带了一些酷炫的桌面


![](/assets/image/240924-kali-linux-49.png)


![](/assets/image/240924-kali-linux-50.png)

