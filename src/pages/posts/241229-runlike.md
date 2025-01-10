    <img src="/assets/image/241229-runlike.png" />

    <small>2.2k star,一条命令，查看你docker启动的原始命令</small>

    在实际场景中，有时候一些老旧的项目，用docker启动的，但是如何启动的没有留下文档，也可以历史命令可以查看。

    但现在必须要做变更，你能想到什么办法？

    今天推荐一款开源小工具就可以解决这个问题的。

    ## Runlike简介

    Runlike 是一个开源的 Docker 工具，它允许用户通过一个命令来查看和重现 Docker 容器的启动命令。这对于管理和维护 Docker 容器非常有用，尤其是在需要查看和复制容器启动命令时。

    Runlike 支持多种 Docker 版本，包括 Docker 1.13 及以上版本。它通过分析 Docker 容器的配置文件和日志，生成一个完整的启动命令，用户可以复制并直接使用该命令来启动容器。

    Runlike 的主要功能包括：

    1. **查看容器启动命令**：用户可以通过 Runlike 查看 Docker 容器的启动命令，包括容器的名称、镜像、端口映射、环境变量等。
    2. **重现容器启动**：用户可以使用 Runlike 生成的命令来重现 Docker 容器的启动过程，方便进行调试和问题排查。
    3. **支持多种 Docker 版本**：Runlike 支持 Docker 1.13 及以上版本，兼容大多数常见的 Docker 环境。
    4. **简单易用**：Runlike 的使用非常简单，只需提供一个容器名称，它就会输出运行该容器副本所需的完整命令行，包括所有必要的选项，如端口、链接、卷等。
    5. **高效**：通过自动生成命令行，Runlike 大大减少了手动输入命令的时间和错误率。对于那些需要频繁复制容器的用户来说，这无疑是一个高效的解决方案。
    6. **灵活**：Runlike 支持多种 Docker 选项，包括环境变量、端口映射、卷挂载等。用户可以根据需要自定义生成的命令行，以满足不同的需求。
    7. **兼容性强**：Runlike 可以与 Docker 的 inspect 命令结合使用，从而生成更详细的命令行。此外，它还支持通过 Docker 镜像运行，无需安装额外的软件。

    ## 快速开始

    要快速开始使用 Runlike，可以按照以下步骤进行：

    1. **安装 Runlike**：首先，你需要安装 Python 环境。然后，通过以下命令安装 Runlike：
    ```bash
    pip install runlike
    ```

    2. **运行 Runlike**：在终端中运行以下命令，生成指定容器的命令行：
    ```bash
    runlike <container-name>
    ```

    3. **执行生成的命令行**：你可以直接执行生成的命令行，启动一个与指定容器相同的副本。例如：
    ```bash
    $(runlike container-name)
    ```

    4. **使用 Docker 镜像运行**：如果你不想安装 Runlike，可以通过 Docker 镜像运行它：
    ```bash
    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock assaflavie/runlike <container-name>
    ```

    5. **创建别名**：为了方便使用，你可以在 `~/.profile` 或 `~/.bashrc` 文件中添加以下内容，将 Runlike 作为本地命令使用：
    ```bash
    alias runlike="docker run --rm -v /var/run/docker.sock:/var/run/docker.sock assaflavie/runlike"
    ```



    ### 结语
    Runlike 是一个非常实用的 Docker 工具，通过查看和重现容器启动命令，用户可以轻松管理和维护 Docker 容器，提高工作效率。赶快下载并体验这一强大的工具吧！
