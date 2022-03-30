# Properities of Regular Language

## 基本问题

### 问题 1

判断字符串 $w$ 是否在正则语言 $L$ 中?

1. 如果我们有 $L$ 的 DFA 表示：$w \in L \Longleftrightarrow$ $w$ 被 DFA 接收。时间复杂度为 $O(|w|)$
2. 如果我们有 $L$ 的 NFA 表示：转化为等价的 DFA 之后，转化为问题 1。时间复杂度为 $O(|w| s^2)$ ，其中 $s$ 为 DFA 的状态数。
3. 如果我们有 $L$ 的正则语言表示：转换为等价的 NFA 之后，转化为问题 2 。

### 问题 2

如何判断一个正则语言 $L$ 是否为空？

1. 如果我们有 $L$ 的 DFA 表示：$L$ 非空 $\Longleftrightarrow$ *某一个*终态可达。判定复杂度为 $O(n^2)$ 。（事实上可以 naive 地优化到 $O(n)$）
2. 如果我们有 $L$ 的正则语言表示：使用归纳法。$L(\emptyset) = \emptyset, L(a) \neq \emptyset, L(\varepsilon) \neq \emptyset$，然后对运算 $R = R_1 + R_2$, $R = R_1R_2$, $R = R_1^*$, $R = (R_1)$ 进行归纳。

### 问题 3

如何判断两个正则语言 $L_1$ 和 $L_2$ 相等？

1. 将各种表示转化为 DFA，下面判断两个 DFA 是否等价。
2. 将两个 DFA 并起来，构造新的 DFA 。
3. 如果在两个 DFA 中初态不可区分，那么两个 DFA 就是等价的。

【没看懂】

### 问题 4

如何判断一个正则语言 $L$ 是否是无限的。

1. 将各种表示转换为 DFA。
2. 自动机中初态和终态的路径上，有可达的环 $\Longleftrightarrow$ $L$ 是无限的。


## 正则语言的判定问题

!!!theorem "鸽巢原理"
    $n$ 只鸽子，$m$ 个鸽巢，若 $n > m$，则至少有一个鸽巢中有多只鸽子。

直觉：对于一个字符串 $|w|$ 来说，如果 $|w| > n$，其中 $n$ 为 DFA 的状态数，则 $w$ 的路径中，一定有重复出现的状态（顶点）。

### 泵引理

给定一个*无限*[^1]正则语言 $L$，存在正整数 $m$，使得 $\forall w \in L, |w| \geq m$，都存在字符串 $x,y,z$，满足$|xy| \leq m$ [^2] 且 $|y| \geq 1$，使得：

$$
w_i = xy^iz \in L \;\; , i = 0,1,2, \cdots
$$

[^1] : 有限语言一定是正则的。

[^2] : 这里我们仅考虑第一次出现重复的位置，因此有这样的式子。

形式化的表示：

$$
\exists m \forall w \exists (x,y,z) \forall k (w \in L \wedge |w| > m \to w = xyz \wedge y \neq \varepsilon \wedge |xy| \leq m \wedge (k \geq 0 \to (xy^kz \in L)))
$$

否定的形式化

$$
\forall m \exists w \forall(x,y,z) \exists k (w \in L \wedge |w| \geq m \wedge (w = xyz \wedge y \neq \varepsilon \wedge |xy| \leq m \to k \geq 0 \wedge xy^kz \notin L))
$$


### 应用

应用1：证明语言 $L$ 不是正则的。【对上述定理的否定的应用】

1. 对任意的 $m$：
    1. **找到**一个长度**至少**为 $m$ 的串 $w \in L$ 。
    2. **任意**分割 $w = xyz$，满足 $y \neq \varepsilon$ 且 $|xy| \leq m$ 。
    3. **找到**一个 $k \geq 0$，使得 $xy^kz \notin L$
 
!!!example "例1"
    证明 $L_{01} = \{0^n 1^n \mid n \geq 1\}$ 不是正则的。

!!!example "例2"
    证明 $L = \{v v^R \mid v \in \Sigma^{*}\}$ 不是正则的。

!!!example "例3"
    证明 $L = \{a^n b^l c^{n+l} \mid n,l \geq 0\}$ 不是正则的。

!!!example "例4"
    证明 $L = \{0^{n !} \mid n \geq 1\}$ 不是正则的。

!!!example "例5"
    证明 $L = \{0^p \mid p \text{ is a prime}\}$ 不是正则的。

!!!hint
    并非所有非正则语言都不满足泵引理。

    反例：

    $L = \{a^ib^jc^k \mid i,j,k \geq 0, \text{if } i = 1 \text{ then } j = k\}$





