# Relational Norms

How to judge whether a relation model is "good"?

How to make a relation model "good"?



## Some Pitfalls & Solution of E.R model

+ Avoid redundant data
    + decompose a relation $R$ into $R_1, \cdots, R_n$
+ Avoid anomalies of insert, delete and update
    + facilitate the checking of modifications for violation of database integrity constraints


    
## First Normal Form

Domain is atomic if its elements are considered to be indivisible units.

### Decomposition using functional dependency


$R$ is a relation schema, $\alpha, \beta \subseteq R$

$t_1[\alpha] = t_2[\alpha] \Longrightarrow t_1[\beta] = t_2[\beta]$ for all tuples $t_1,t_2$

for every legal $r(R)$

### Clousure of ...

Use $(\cdot)^+$ to denote clousure

+ Functional Dependency
+ Attribute Set

### Armstrong rules 

For functional dependency: 

+ reflexivity rule
+ augmentation rule
+ transitivity rule 

Other rules:

+ Union rule
+ Decomposition rule
+ Pseudotransitivity rule


### Extraneous Attributes

Extraneous: we can remove any attributes from a functional dependency.

### Canonical Cover

$F_c$ is the Canonical Cover of $F$ if:

+ $F_c$ implies all functional dependency in $F$ (also reversely)
+ no functional dependency is extraneous
+ no functional dependency share same left hand side


### Dependency preservation 

$F_i$ is the restriction of $F$ to $R_i$:

all functional dependencies in $F^+$ that include only attributes of $R_i$

dependency-preserving decomposition:

$F' = \bigcup F_i$, $F^+ = F'^+$

## Decomposition

!!!definition "Loseless Decomposition"
    Decompose $R$ into $R_1$ and $R_2$, then it is **loseless** if and only if $\prod_{R_1}(r) \Join \prod_{R_2}(r) = R$ 。

!!!theorem
    If $R_1 \cap R_2$ forms a superkey for **either** $R_1$ **or** $R_2$, then this decomposition is loseless.


## Decomposition Algorithm

### BCNF

![](relational_norm.assets/2022-04-18-12-49-51.png)

### 3NF



