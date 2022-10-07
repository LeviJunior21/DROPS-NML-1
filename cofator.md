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
Suponha que queremos descobrir o elemento Δ31. Assim, iremos fazer a seguinte relação: (-1)x<sup>(3+1)</sup> vezes o determinte da matriz A mas excluindo a primeira linha e terceira coluna.

$$Δ11 = {(-1)x^(1+1)} det
\begin{bmatrix}
a21 & a22\\
a31 & a32
\end{bmatrix}$$

Por definição, a base é (-1) mas o expoente sempre muda. O expoente é a soma dos índices de cada elemento da matriz, o primeiro índice significa o número da primeira linha da matriz e o segundo indice significa o número da coluna da matriz.
Assim,

(1 + 1) seria a primeira linha e segunda coluna.
(1 + 2) seria a primeira linha e segunda coluna.
(3 + 1) seria a terceira linha e primeira coluna.


