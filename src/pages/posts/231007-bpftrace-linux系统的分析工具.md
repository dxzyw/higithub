<img src="/assets/image/231007-bpftrace-linux系统的分析工具-1.png" style="max-width: 70%; height: auto;">
<small>7.2k star，好用强大的linux性能追踪工具</small>



![](/assets/image/231007-bpftrace-linux系统的分析工具-1.png)

官方给出了很多现成的性能工具可以直接用：




**bpftrace: Linux eBPF 的高级跟踪语言**

在现代Linux内核（4.x及以上版本）中，我们遇到了一种强大的高级跟踪语言，它就是bpftrace。这个工具基于Linux增强伯克利数据包过滤器（eBPF）技术，为Linux系统提供了更高级别的跟踪和分析能力。

bpftrace使用LLVM作为后端，将脚本编译为BPF字节码，并利用BCC与Linux BPF系统进行交互，同时还整合了现有的Linux跟踪能力：内核动态跟踪（kprobes）、用户级动态跟踪（uprobes）和tracepoints。

bpftrace的语法受到awk和C的启发，并且借鉴了前身跟踪工具如DTrace和SystemTap的设计思想。这个强大的工具是由Alastair Robertson创建的。



### **bpftrace的特色功能**

#### **1. eBPF技术的完美结合**
bpftrace不仅仅是一个跟踪语言，它还结合了eBPF技术，这是Linux内核中的一项先进功能，可以实现高效的网络分析和性能优化。

#### **2. 灵感源自经典**
bpftrace的语法灵感来自于经典的编程语言awk和C，这意味着熟悉这些语言的开发者能够迅速上手。同时，它还借鉴了DTrace和SystemTap等先前的跟踪工具，保留了传统工具的便捷性。

#### **3. 强大的动态跟踪**
通过kprobes、uprobes和tracepoints等跟踪机制，bpftrace能够捕获并分析内核和用户空间的活动。这意味着你可以精确地观察系统的内部运行情况，从而更好地理解程序的性能和行为。

#### **4. 灵活的编程和扩展性**
bpftrace的灵活性体现在它的可编程性和可扩展性上。你可以编写自定义的脚本来捕获特定事件，也可以利用已有的模块来扩展其功能，满足各种不同的需求。

#### **5. 社区支持和持续发展**
作为一个开源项目，bpftrace拥有一个活跃的社区。这意味着你可以得到来自世界各地开发者的支持，并且它将持续不断地发展和改进，以应对不断变化的技术需求。

### **结语**

bpftrace的出现为Linux系统的跟踪和分析提供了全新的可能性。无论你是系统管理员、开发者还是网络工程师，都可以通过bpftrace更好地了解和优化你的系统。它的灵活性和强大功能使其成为Linux系统性能分析的得力助手。赶快体验bpftrace吧，掌握系统内部的奥秘，让你的工作更上一层楼！