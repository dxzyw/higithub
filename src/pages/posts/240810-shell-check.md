<img src="/assets/image/240810-shell-check-1.png" style="max-width: 70%; height: auto;">
<small>32.6k star，后悔没有早点知道这个开源工具--shellcheck</small>



## 1 shellcheck 简介
今天发现的一款神器，如果你日常会接触到shell脚本，或者说自己需要写一些shell脚本，那么强烈建议你用下这个工具。

shellcheck一个静态的shell脚本分析工具，可以判断脚本哪里有异常，哪里可以优化，并且会给出对应的解决办法。几年前我咋没发现这个，后悔。。。

一个简单的示例：

![](/assets/image/240810-shell-check-1.png)

这款工具不仅适用于初学者，对于中高级使用者帮助更大。


## 2 安装

github可以访问的直接到如下链接去下载就可以，目前支持多个终端，也有web可访问

**https://github.com/koalaman/shellcheck**

github如果无法访问的话，可以后台直接私信

web访问地址：
**https://www.shellcheck.net/**

使用方式：

![](/assets/image/240810-shell-check-2.png)


## 3 shell脚本中的一些常见错误

1. 常见错误引用
```
echo $1                           # Unquoted variables
find . -name *.ogg                # Unquoted find/grep patterns
rm "~/my file.txt"                # Quoted tilde expansion
v='--verbose="true"'; cmd $v      # Literal quotes in variables
for f in "*.ogg"                  # Incorrectly quoted 'for' loops
touch $@                          # Unquoted $@
echo 'Don't forget to restart!'   # Singlequote closed by apostrophe
echo 'Don\'t try this at home'    # Attempting to escape ' in ''
echo 'Path is $PATH'              # Variables in single quotes
trap "echo Took ${SECONDS}s" 0    # Prematurely expanded trap
unset var[i]                      # Array index treated as glob
```
2. 常见错误条件语句
```
[[ n != 0 ]]                      # Constant test expressions
[[ -e *.mpg ]]                    # Existence checks of globs
[[ $foo==0 ]]                     # Always true due to missing spaces
[[ -n "$foo " ]]                  # Always true due to literals
[[ $foo =~ "fo+" ]]               # Quoted regex in =~
[ foo =~ re ]                     # Unsupported [ ] operators
[ $1 -eq "shellcheck" ]           # Numerical comparison of strings
[ $n && $m ]                      # && in [ .. ]
[ grep -q foo file ]              # Command without $(..)
[[ "$$file" == *.jpg ]]           # Comparisons that can't succeed
(( 1 -lt 2 ))                     # Using test operators in ((..))
[ x ] & [ y ] | [ z ]             # Accidental backgrounding and piping
```

3. 误用的命令
```
grep '*foo*' file                 # Globs in regex contexts
find . -exec foo {} && bar {} \;  # Prematurely terminated find -exec
sudo echo 'Var=42' > /etc/profile # Redirecting sudo
time --format=%s sleep 10         # Passing time(1) flags to time builtin
while read h; do ssh "$h" uptime  # Commands eating while loop input
alias archive='mv $1 /backup'     # Defining aliases with arguments
tr -cd '[a-zA-Z0-9]'              # [] around ranges in tr
exec foo; echo "Done!"            # Misused 'exec'
find -name \*.bak -o -name \*~ -delete  # Implicit precedence in find
# find . -exec foo > bar \;       # Redirections in find
f() { whoami; }; sudo f           # External use of internal functions
```
4. 初学者常见错误
```
var = 42                          # Spaces around = in assignments
$foo=42                           # $ in assignments
for $var in *; do ...             # $ in for loop variables
var$n="Hello"                     # Wrong indirect assignment
echo ${var$n}                     # Wrong indirect reference
var=(1, 2, 3)                     # Comma separated arrays
array=( [index] = value )         # Incorrect index initialization
echo $var[14]                     # Missing {} in array references
echo "Argument 10 is $10"         # Positional parameter misreference
if $(myfunction); then ..; fi     # Wrapping commands in $()
else if othercondition; then ..   # Using 'else if'
f; f() { echo "hello world; }     # Using function before definition
[ false ]                         # 'false' being true
if ( -f file )                    # Using (..) instead of test
```
>注：如需转载，须保留文首公众号名片，其它行为一律视为非授权转载。