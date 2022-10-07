---
<h1>Regra de Crammer</h1>
---

### O que é a Regra de Crammer?

A Regra de Crammer é uma das formas de achar os valores dos coeficeintes em um sistema linear usando determinantes.

### Como é utilizado?

Considere o sistema de equações a seguir:

$$
\begin{cases} `a11x+a12y+a13z=u\\\\a21x+a22y-a23z=v\\\\a31x+a32y+a33z=w` \end{cases}
$$

Dado o sistema, iremos chamar a <r>**matriz dos coeficientes**</r> de A:

$$A = \begin{bmatrix}
a11 & a12 & a13\\
a21 & a22 & a23\\
a31 & a32 & a33
\end{bmatrix}$$

E seja a matriz dos termos indepedentes:

$$A = \begin{bmatrix}
u\\
v\\
w
\end{bmatrix}$$

### Primeiro, devemos fazer o determinante da Matriz dos coeficientes:
Seja Δ o determinante da matriz A.

$$Δ = det\begin{vmatrix}
a11 & a12 & a13\\
a21 & a22 & a23\\
a31 & a32 & a33
\end{vmatrix} = a11 * a22 * a33 + a12 * a23 * a31 + a13 * a21 * a32 - (a31 * a22 * a13 + a32 * a23 * a11 + a33 * a21 * a12)$$

Ao determinar o valor de Δ através do determinante da matriz dos coeficientes, vaamos fazer a seguinte operação:

Substitua a matriz dos termos independentes na primeira coluna da matriz dos coeficientes e em seguida, calcule o determinante.
Seja Δx 

$$Δx = det\begin{vmatrix}
u & a12 & a13\\
v & a22 & a23\\
w & a32 & a33
\end{vmatrix} = u * a22 * a33 + a12 * a23 * w + a13 * v * a32 - (w * a22 * a13 + a32 * a23 * u + a33 * v * a12)$$

x_{1,2} = \frac{-b \pm \sqrt{b^2-4ac}}{2b
