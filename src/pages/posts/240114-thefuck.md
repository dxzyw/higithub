<img src="https://raw.githubusercontent.com/nvbn/thefuck/master/example.gif" style="max-width: 70%; height: auto;">
<small>80.4k star,命令行开源利器，使用这个爽多了！</small>


可以看下这个图了解下，开源地址在文末：

![](https://raw.githubusercontent.com/nvbn/thefuck/master/example.gif)

- **thefuck**：
一个能够自动纠正命令行输入错误的工具，它可以根据你输入的错误命令，给出正确的建议，并让你用一个简单的命令（fuck）来执行它。


- **如何使用**：当你在命令行中输入了一个错误的命令，比如`git brnch`，你可以直接输入`fuck`，它会自动修正为`git branch`并执行。你也可以用`fuck`来修正一些常见的错误，比如拼写错误、权限问题、缺少参数等。你还可以用`fuck`来执行一些常用的操作，比如`git push`、`sudo`等。

- **特点介绍**

- 它支持多种操作系统，如Linux，macOS，Windows等。
- 它支持多种shell，如bash，zsh，fish等。
- 它可以根据您的历史命令和配置文件，智能地推荐最合适的修正方案。
- 它可以通过简单的按键或者说出“fuck”来触发修正操作。
- 它可以自定义规则和别名，以适应您的个性化需求。


- **如何安装**：你可以用不同的方式来安装thefuck，比如用pip、brew、apt等。你也可以从源码安装，或者用docker来运行。安装后，你需要在你的shell配置文件中添加一些代码，以便让thefuck生效。

- **使用示例**

```
➜ git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master


➜ fuck
git push --set-upstream origin master [enter/↑/↓/ctrl+c]
Counting objects: 9, done.
...
```

```
➜ lein rpl
'rpl' is not a task. See 'lein help'.

Did you mean this?
         repl

➜ fuck
lein repl [enter/↑/↓/ctrl+c]
nREPL server started on port 54848 on host 127.0.0.1 - nrepl://127.0.0.1:54848
REPL-y 0.3.1

```


- **类似产品**：thefuck并不是唯一一个能够自动纠正命令行错误的工具，还有一些其他的选择，比如：
    - **fuck-you**：一个用Ruby写的工具，它可以根据你输入的错误命令，给出一些幽默的回复，并提供正确的命令。你可以用`fuck-you`来替代`fuck`来执行它。
    - **thefuck-alias**：一个用Python写的工具，它可以让你用自定义的别名来替代`fuck`，比如`oops`、`please`等。你可以在你的shell配置文件中设置你喜欢的别名。
    - **fuckit.py**：一个用Python写的工具，它可以让你用`fuckit`来忽略任何Python代码中的错误，并强制运行。它可以帮助你快速测试一些代码，或者用于一些不太重要的场景。
    
    
- **总结**：thefuck是一个非常实用和有趣的工具，它可以帮助你节省时间和精力，避免因为一些小错误而打断你的工作流程。它也可以让你的命令行体验更加愉快和有趣。如果你经常使用命令行，那么你一定要试试thefuck，它会让你爱不释手。

开源地址：https://github.com/nvbn/thefuck