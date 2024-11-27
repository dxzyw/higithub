<img src="/assets/image/231012-windterm补充介绍-1.png" style="max-width: 70%; height: auto;">
<small>windterm真的是火到停不下来，最近去出差，竟然也看到有同事在使用，star数也是一路上涨；</small>



![](/assets/image/231012-windterm补充介绍-1.png)

但是在使用上有些配置需要特殊处理，还有一些特殊的用法，今天这篇文章，就来整理下。



## windterm登陆堡垒机

手头目前有齐治堡垒机、jumpserver堡垒机、移动云堡垒机，试下来都没有问题，二次验证齐治、jumpserver都是OTP码，移动云是通过短信验证码。

下面是具体使用截图：

移动云堡垒机密码登录：

![](/assets/image/231012-windterm补充介绍-2.png)

移动云堡垒机二次验证：
![](/assets/image/231012-windterm补充介绍-3.png)

齐治堡垒机二次验证：

![](/assets/image/231012-windterm补充介绍-4.png)

jumpserver二次验证：


![](/assets/image/231012-windterm补充介绍-5.png)

jumpserver在使用的时候其实有点问题：

![](/assets/image/231012-windterm补充介绍-6.png)

需要把通过键盘交互认证打开：

![](/assets/image/231012-windterm补充介绍-7.png)

## 查看使用历史命令

windterm可以记录历史命令，默认最大记录10000条，通过!可以使用：

![](/assets/image/231012-windterm补充介绍-8.gif)


## 通过拖动文本输入
可以拖动终端界面内容，也可以拖动外部的内容直接过来

![](https://kingtoolbox.github.io/img/tips_input_by_dragging_and_dropping_text.gif)

##  最新发布的版本新增了触发器功能、onekey功能

### onekey功能

如果你有大量的主机，登录的配置也一致的话，可以直接配置这个参数，后面修改的话，也可以统一修改：

![](https://kingtoolbox.github.io/img/onekey_ssh_onekey.gif)

也可以通过交互的模式去完成一些操作：

![](https://kingtoolbox.github.io/img/onekey_expect_onekey.gif)

