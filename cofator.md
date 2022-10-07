---
<h1>Cofator</h1>
---

Embora esse conteúdo deixe algumas dúvidas sobre a sua aplicação na Álgebra Linear, o cofator tem aplicação direta para realização do cálculo de determinates de matrizes pelo método de Laplace.

Seja a matriz A, a matriz dos coeficientes:

$$A = \begin{bmatrix}
Δ11 & Δ12 & Δ13\\
Δ21 & Δ22 & Δ23\\
Δ31 & Δ32 & Δ33
\end{bmatrix}$$

Para se calcular a matriz dos cofatores, você deve-se calcular os cofatores de todos elementos da matriz, se você tiver uma matriz (NxN), então voce terá que calcular (NxN) cofatores.

Suponha a matriz acima e que queremos verificar a matriz dos cofatores de A.
A matriz dos cofatores de A será da seguinte forma:

$$Cof(A)= \begin{bmatrix}
a11 & a12 & a13\\
a21 & a22 & a23\\
a31 & a32 & a33
\end{bmatrix}$$

Para cada elemento da matriz dos cofatores valerá a seguinte relação:

$$Δ11 = (-1)x<sup>(1+1)</sup> det
\begin{bmatrix}
a11 & a12 & a13\\
a21 & a22 & a23\\
a31 & a32 & a33
\end{bmatrix}$$
