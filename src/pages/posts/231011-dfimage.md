<img src="/assets/image/231011-dfimage-1.png" style="max-width: 70%; height: auto;">
<small>推荐一款实用、强大的小工具，已开源</small>


对于一些历史docker服务，如果没有了dockerfile，你会怎么解决呢？今天推荐的这款工具就是一款可以通过现有的docker镜像然后反推出dockerfile。


![](/assets/image/231011-dfimage-1.png)


## 关于dfimage

dfimage是一款用于从Docker镜像反向生成Dockerfile的开源工具，它是由LanikSJ公司开发的，使用Python语言编写。

它可以通过访问Docker API，获取每个镜像层的元数据，然后根据元数据重建出大致的Dockerfile。

它可以帮助用户了解和复制一个Docker镜像是如何构建的，特别是当用户没有原始的Dockerfile或者无法访问源代码仓库时。

开源项目地址：**https://github.com/LanikSJ/dfimage**
参考文档地址：**https://laniksj.github.io/dfimage/**

## dfimage 使用示例：

### 安装下载dfimage


```
#使用docker pull命令从远程仓库下载ruby:latest和dfimage:latest两个镜像到本地仓库。

$ docker pull ruby:latest
latest: Pulling from library/ruby
...
Status: Downloaded newer image for ruby:latest

$ docker pull ghcr.io/laniksj/dfimage
Using default tag: latest
latest: Pulling from dfimage
...
Status: Downloaded newer image for dfimage:latest

# 使用alias命令为docker run命令设置一个简单的别名，方便后续使用。

$ alias dfimage="docker run -v /var/run/docker.sock:/var/run/docker.sock --rm ghcr.io/laniksj/dfimage"

#使用dfimage命令（即docker run命令）执行Python脚本，传入ruby:latest作为参数，输出该镜像的大致Dockerfile。

$ dfimage ruby:latest
FROM buildpack-deps:latest
RUN useradd -g users user
RUN apt-get update && apt-get install -y bison procps
RUN apt-get update && apt-get install -y ruby
ADD dir:03090a5fdc5feb8b4f1d6a69214c37b5f6d653f5185cddb6bf7fd71e6ded561c in /usr/src/ruby
WORKDIR /usr/src/ruby
RUN chown -R user:users .
USER user
RUN autoconf && ./configure --disable-install-doc
RUN make -j"$(nproc)"
RUN make check
USER root
RUN apt-get purge -y ruby
RUN make install
RUN echo 'gem: --no-rdoc --no-ri' >> /.gemrc
RUN gem install bundler
ONBUILD ADD . /usr/src/app
ONBUILD WORKDIR /usr/src/app
ONBUILD RUN [ ! -e Gemfile ] || bundle install --system
      
```

## dfimage 原理

该工具和docker history命令类似，都是通过访问Docker API，获取每个镜像层的元数据，然后根据元数据重建出大致的Dockerfile。

- **遍历镜像层**：Python脚本会从最后一层开始，逐层遍历镜像中包含的所有层，获取每一层的元数据，其中包括生成该层的Dockerfile指令。

- **遇到标签层停止**：当Python脚本遇到第一个有标签的镜像层时，它会停止遍历，并输出一个FROM指令，指定该标签作为基础镜像。它假设一个有标签的镜像层代表了一个独立的镜像，有自己的Dockerfile，不需要继续反向生成。

- **COPY或ADD指令不精确**：如果原始的Dockerfile中使用了COPY或ADD指令，Python脚本生成的Dockerfile不会完全匹配。因为我们无法访问原始的docker build命令时使用的构建上下文，我们只能看到一些目录或文件被复制到了镜像的文件系统中（你会看到文件/目录的校验和和复制的目标路径）。

## dfimage亮点整理

- **反向生成Dockerfile**：dfimage是一款用于从Docker镜像反向生成Dockerfile的开源工具，它可以帮助用户了解和复制一个Docker镜像是如何构建的，特别是当用户没有原始的Dockerfile或者无法访问源代码仓库时。

- **使用Python语言编写**：dfimage是使用Python语言编写的，它可以方便地与其他Python库和工具集成，比如pandas、dataframe-image等。

- **支持多种后端和格式**：dfimage支持使用不同的后端库来转换数据表格为图像，比如browser、matplotlib、playwright、html2image、selenium和chrome等¹。它还支持导出不同的图像格式，比如png、svg等。

- **提供多种用法**：dfimage提供了多种用法，比如可以在Python脚本中直接导出普通或样式化的数据表格为图像，也可以在Jupyter Notebook中将数据表格嵌入到pdf或markdown文件中，或者从一个Docker镜像中提取一个文件等。

总之，dfimage是一款功能强大且易用的工具，它可以让用户更方便地处理和展示数据表格和Docker镜像。



