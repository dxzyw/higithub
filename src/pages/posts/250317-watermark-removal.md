<img src="/assets/image/250317-watermark-removal.png"/>

<small>3k star，神奇！超厉害的水印消除术</small>

您是否曾遇到图片上恼人的水印，阻碍了视觉享受？又或者在进行项目或创作时，需要去除水印，但始终找不到可靠且高效的方法？别担心，这个工具可以帮您轻松解决这一难题！

### 简介
Watermark-Removal 是一个开源项目，采用基于机器学习的图像修复方法，能够智能地去除图片上的水印，使其效果几乎与原图无异。该项目受到 Contextual Attention（CVPR 2018）和 Gated Convolution（ICCV 2019 Oral）论文的启发，由 Chimzuruoke Okafor 开发并发布。

### 功能特点
- **高效去水印**：利用先进的深度学习算法，自动去除图片上的水印，使得去除效果与原图难以区分。
- **支持多种水印类型**：可处理多种常见水印类型，如 istock 水印等。
- **开源项目**：代码和模型全部开源，用户可以根据需要进行调整和改进。
- **易于集成**：可以轻松地与其他项目进行集成，提供便捷的图片处理解决方案。

### 如何开始
1. **克隆项目**：首先，克隆该仓库。
   ```shell
   !git clone https://github.com/zuruoke/watermark-removal
   ```

2. **切换到项目目录**：进入克隆下来的项目目录。
   ```shell
   !cd watermark-removal
   ```

3. **降级 Tensorflow**：由于该项目使用 Tensorflow 1.15.0 版本，需要将 Google Colab 中的 Tensorflow 降级到相应版本，并重新启动运行环境。
   ```shell
   !pip install tensorflow==1.15.0
   ```

4. **安装 Tensorflow 工具包 neuralgym**：
   ```shell
   !pip install git+https://github.com/JiahuiYu/neuralgym
   ```

5. **下载模型目录**：通过链接下载模型目录，并将其放入 model/ 文件夹中（注意：有时 Google Drive 会自动在文件名后添加 .txt 后缀，请将 checkpoint.txt 重命名为 checkpoint）。
   
6. **运行主程序**：现在您可以通过运行 main.py 文件去除图片上的水印。
   ```shell
   !python main.py --image path-to-input-image --output path-to-output-image --checkpoint_dir model/ --watermark_type istock
   ```

### 结论
Watermark-Removal 工具有效解决了图片水印问题，为您提供高质量的图像去水印效果。如果您经常需要处理图片水印，不妨试试这个强大且方便的工具吧！

开源地址：github.com/zuruoke/watermark-removal

