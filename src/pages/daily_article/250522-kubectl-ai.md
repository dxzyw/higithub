<img src="/assets/image/250522-kubectl-ai.png"/> 

<small>5.3k star,谷歌开源，k8s的AI工具</small>


假如你是一名 Kubernetes 用户，你可能时常在复杂的命令行操作、繁琐的资源管理以及各种技术细节之间苦苦挣扎。你需要执行一系列精确的指令来管理集群，但稍有不慎，可能就会导致错误甚至影响生产环境。面对这些挑战，难道没有一种更直观、更智能的方式来简化 Kubernetes 的使用吗？这正是 **kubectl-ai** 诞生的意义——一个基于 AI 的 Kubernetes 助手，它可以让 Kubernetes 操作更高效、更人性化。

## **kubectl-ai 简介**
**kubectl-ai** 是一个智能化的 Kubernetes 命令行助手，它能够理解用户意图，并将其转化为精准的 Kubernetes 操作，从而让 Kubernetes 的管理变得更加简单和高效。借助 AI 的强大能力，kubectl-ai 能够帮助用户执行查询、分析日志、管理集群资源，并且支持多种 AI 模型，包括 Gemini、Vertex AI、Azure OpenAI、OpenAI 以及本地 LLM 方案（如 Ollama 和 Llama.cpp）。无论你是 Kubernetes 初学者还是高级用户，kubectl-ai 都能为你提供便捷的操作体验。

## **功能特点**
### **1. AI 驱动的 Kubernetes 管理**
kubectl-ai 通过 AI 模型理解用户输入的自然语言，并自动转换为 Kubernetes 相关的命令。例如，你可以直接输入“检查 hello 命名空间中的 nginx 应用日志”，kubectl-ai 便会自动生成适当的 `kubectl` 指令并执行。

### **2. 支持多种 AI 模型**
除了默认的 Gemini AI 之外，kubectl-ai 还支持多种 AI 计算平台，包括 OpenAI、Azure OpenAI 以及本地 LLM 解决方案。用户可以根据需求选择最合适的 AI 模型来优化交互体验。

### **3. 交互模式**
kubectl-ai 允许用户通过交互模式连续对话并保持上下文，你可以在会话中进行多轮查询，而不必重复输入详细的命令。例如：
```
kubectl-ai
```
进入交互模式后，用户可以输入各种 Kubernetes 相关的查询，kubectl-ai 会持续跟踪对话，并提供准确的建议和执行命令。

### **4. 强大的工具支持**
kubectl-ai 除了 `kubectl` 指令，还内置了 `bash` 和 `trivy` 等工具，同时支持用户自定义工具，以便扩展功能。例如，用户可以在 `~/.config/kubectl-ai/tools.yaml` 文件中定义自己的命令工具，使 kubectl-ai 更符合个人需求。

### **5. 与其他命令结合**
kubectl-ai 允许将自然语言查询与其他 Unix 命令结合使用。例如：
```
kubectl-ai < query.txt
echo "列出默认命名空间中的 pod" | kubectl-ai
```
甚至可以结合标准输入：
```
cat error.log | kubectl-ai "解释这个错误"
```

## **如何快速开始**
### **安装**
首先，请确保你的环境已安装并配置 `kubectl`。然后，你可以使用以下命令快速安装 kubectl-ai（支持 Linux 和 MacOS）：
```
curl -sSL https://raw.githubusercontent.com/GoogleCloudPlatform/kubectl-ai/main/install.sh | bash
```
如果需要其他安装方式，可以参考官方文档。

### **使用 Gemini 模型（默认）**
安装完成后，设置 Gemini API 密钥：
```
export GEMINI_API_KEY=your_api_key_here
```
然后启动 kubectl-ai：
```
kubectl-ai
```
或者指定不同的模型：
```
kubectl-ai --model gemini-2.5-pro-exp-03-25
```
如果需要更快的响应，可以使用 Flash 版本：
```
kubectl-ai --quiet --model gemini-2.5-flash-preview-04-17
```

## **总结**
kubectl-ai 作为一个 AI 驱动的 Kubernetes 助手，让 Kubernetes 的管理不再是枯燥的命令输入，而是更自然的交互体验。无论是日志分析、资源管理还是执行复杂任务，kubectl-ai 都能成为你得力的助手。赶快安装并尝试吧，让 Kubernetes 管理更加智能化！