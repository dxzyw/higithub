<img src="/assets/image/230828-python in excel-2.png" style="max-width: 70%; height: auto;">
<small>是的！excel中可以使用python了！</small>


在8月22日，微软通过官方博客发布将与anaconda展开合作，简而言之就是excel将支持python，可以在表格中直接利用python就行数据分析，可以在表格中直接运行python了。


![可以看到右下角的anaconda](/assets/image/230828-python in excel-1.png)

## 如何理解excel+anaconda？

对python不是特别熟悉的可能不了解anaconda是什么？

Anaconda是一个开源的Python科学计算和数据分析的发行版,主要具有以下特点:

1. 包含数据科学常用的Python库,如NumPy、Pandas、SciPy、matplotlib等,可以直接使用,免去手动安装的麻烦。

2. 提供conda包和虚拟环境管理器,可以轻松安装、升级和管理Python包及其依赖项。

3. 包含Jupyter Notebook等流行的Python IDE和数据可视化工具。

4. 可以免费使用,有丰富的社区资源和文档支持。

5. 支持Windows、Linux和macOS多平台。

6. 包含预先构建好的Python二进制包,使得在不同平台上都能使用相同的Python环境。

7. 提供Anaconda Cloud集成,可以发布和共享自己的conda包。

8. 支持conda env功能,可轻松导出或共享Python环境配置。

9. 可以通过conda或pip安装第三方包,软件生态丰富。

excel与之合作，可以想象到后面对于数据分析、处理将会很便利。还有一个点值得关注，就是运算过程是在云端进行的，所以不需要你在本地预先安装环境，对新手很友好。

由于 Excel 中的 Python 计算在云中运行，因此需要使用 Internet 访问才能使用该功能。  

## 如何获取支持python的excel？

不过目前新的版本还没有发布，需要先加入Microsoft 365 Insider 计划。然后去获取 Beta 新版 Excel。

![](/assets/image/230828-python in excel-2.png)

## python in excel 初体验

若要在 Excel 中开始使用 Python，请选择一个单元格，转到功能区中的 “公式 ”，然后选择“ 插入 Python”。 这会告知 Excel 你想要在所选单元格中编写 Python 公式。 

![](/assets/image/230828-python in excel-3.png)
或者在单元格中使用函数 =PY 来启用 Python。 在单元格中输入 =PY 后，使用向下键和 Tab 键从函数“自动完成”菜单中选择“PY”，或向函数添加左括号： =PY (。 现在，可以直接在单元格中输入 Python 代码。 以下屏幕截图显示了“自动完成”菜单，其中选择了 PY 函数。


![](/assets/image/230828-python in excel-4.png)

使用编辑栏进行类似代码的编辑行为，例如使用 Enter 键创建新行。 使用向下箭头图标展开编辑栏，一次查看多行代码。 还可以使用键盘快捷方式 Ctrl+Shift+you 展开编辑栏。 以下屏幕截图显示了在展开它以查看多行 Python 代码之前和之后的编辑栏。

展开编辑栏之前：

![](/assets/image/230828-python in excel-5.png)
展开编辑栏后：

![](/assets/image/230828-python in excel-6.png)

### Excel DataFrames 中的 Python 

数据帧是计算机编程语言中的二维数据结构，类似于 Excel 表。在 Python 中，DataFrame 是 panda 库中的一个对象。

pandas 库是 Python 在 Excel 中使用的主库，DataFrame 对象是使用 Python 在 Excel 中解析数据的关键结构。

![](/assets/image/230828-python in excel-7.png)

