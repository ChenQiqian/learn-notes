# 数据库

https://15445.courses.cs.cmu.edu/fall2021/

## 关系

感性理解 = table。

## 关系代数

大体和集合比较类似。

### Select

$\sigma_{\text{predicate}}(R)$ 就是根据 predicate 去 filter 整个的 relation ，取出一些行。

### Projection

$\pi_{A_1,A_2, \cdots, A_n}(R)$ 就是只取若干个 attribute（列） 。

### Join

$R \Join S$ ，就是在乘之后，只保留那些共同的 attribute 对应的值相同的行。

### Union, Intersection, Difference, Product

这些都和集合一样，分别是 $\cup, \cap, -, \times$ 。


