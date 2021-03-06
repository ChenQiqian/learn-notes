# 数字电子技术基础

https://www.xuetangx.com/course/THU08081000386/7754495

## 组合逻辑电路

### 定义

任意时刻的输出仅取决于该时刻的输入——不含有记忆（存储原件）

### 表示

1. 框图：输入线 |方框| 输出线

2. 逻辑函数式 $Y = F(A)$

### 分析方法

电路的物理组成 --> 电路的逻辑功能

1. 表达成逻辑函数形式
2. 进行逻辑函数式的化简和变换
3. 有的时候写出真值表可以使功能更加直观


### 设计方法

实际逻辑功能 --> 电路的物理组成

最简的目标：器件**数量**最少；器件**种类**最少；器件之间的**连线**最少；==> 成本/可靠性



1. 对实际问题进行逻辑抽象（输入输出的意义）
2. 列出真值表、写出函数式
3. 选定器件类型
4. 根据所选器件
   1. 化简（门）、变换（中规模）、描述（PLD）
5. 画出逻辑电路图

### 若干组合逻辑电路

#### 编码器

输入的**许多**高低电平信号编成**一个**二进制代码

##### 普通编码器

任何时刻**只允许**输入一个编码信号【`00010000 --> 011` （8线-3线编码器）】

##### 优先编码器

可以允许输入多个信号，但只会对最高优先级的一个信号进行编码 

例：`00100001 --> 111` （8线-3线优先编码器，74HC138）

“有效”输入输出都是低电平——低电平更加稳定，不容易受到干扰

附加控制端——其他的控制作用

+ 选通信号：$S’$ 是低电平时，电路正常工作；$S'$ 是高电平时，电路输出 $Y'$ 一定是高电平
+ 附加输出信号：$Y_S'$  和 $Y_{EX}'$ 
  + $Y_S'$    为低表示电路正常工作但没有输入
  + $Y_{EX}'$ 为低表示电路正常工作且有输入

##### （优先）编码器的扩展

原则：把附加控制端连接到一起

例：用 2 片 8线-3线 实现 16线-4线优先编码器