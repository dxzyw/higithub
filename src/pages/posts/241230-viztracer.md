    <img src="/assets/image/241230-viztracer.png" />

    <small>5.5k star,可视化python代码执行过程</small>

    VizTracer 是一个用于可视化 Python 代码执行过程的工具。它通过在代码中插入追踪点，记录函数调用、变量值、返回值等信息，并生成可视化报告，帮助开发者理解和优化代码执行过程。

    VizTracer 的主要功能包括：

    1. **可视化函数调用**：通过可视化函数调用关系，展示代码的执行流程。
    2. **记录变量值**：记录函数调用过程中的变量值，帮助理解变量变化。
    3. **生成可视化报告**：生成可视化报告，包括函数调用关系、变量值变化等。
    4. **支持多种输出格式**：支持多种输出格式，包括 HTML、JSON 等。
    5. **易于使用**：使用简单，只需在代码中插入追踪点，即可自动生成可视化报告。

    viztracer 的安装也非常简单，只需要一条命令：

    ```bash
    pip install viztracer
    ```

    安装完成后，你可以在代码中插入追踪点，然后运行代码，即可生成可视化报告。

    ```python
    import viztracer

    viztracer.start()
    ```

    也可以在vscode中使用插件，安装后，在vscode中右键点击，选择`Run with VizTracer`，即可生成可视化报告。

    <img src="/assets/image/241230-viztracer-vscode.png" />

    更多关于viztracer的介绍，可以查看官方文档：viztracer.readthedocs.io/en/latest/

    该工具支持多线程、多进程、异步，还可以生成火焰图，非常强大。

    推荐给大家，希望对你有帮助。

    关于该工具的性能支持，官方有具体的介绍

    VizTracer 投入了大量精力来实现低开销。实际性能影响在很大程度上取决于您的应用程序。对于典型的代码库，开销预计低于 1 倍。如果您的代码具有不频繁的函数调用，则开销可能很小。