<h1>Wronskiano</h1>

Seja
$$y^{'''} - y^{''} + y^{'} - y = e^{-t}sen(t)$$
  
Uma Equação Diferencial Ordinária de Ordem Superior.
Primeiro vamos escrever a equação homogênea asssociada:

$$y^{'''} - y^{''} + y^{'} - y = 0$$

Agora escrevemos o polinômio caracteristico da equação homogênea associada:

$$r^{3} - r^{2} + r - 1 = 0$$

Possíveis raizes (divisores comuns da nossa constante do polinômio): ±1

Para r = 1:

$$1^{3} - 1^{2} + 1 - 1 = 0 $$

$$0 = 0$$

Ou seja, r = 1 é raíz.

Usando o método de redução de ordem de Briott-Ruffini temos:

$$r^{3} - r^{2} + r - 1 = (r - 1)(r^{2} + 1)$$

$$r^{2} + 1 = 0 => r = ±i$$

$$Raizes: r1: 1, r2: i, r3: -i$$

### Solução Geral da Equação Homogênea Associada:

$$y(t) = C1e^{t} + C2cos(t) + C3sen(t) + P(t)$$

Determinando a equação particular por variações de parâmetros.

Sendo 

$$y1 = e^{t}$$

$$y2 = cos(t)$$

$$y3 = sen(t)$$

Aplicando o Wronskiano:

$$
W[y1, y2, y3] = det \begin{bmatrix}
e^{t} & cos(t) & sen(t)\\
e^{t} & -sen(t) & cos(t)\\
e^{t} & -cos(t) & -sen(t)
\end{bmatrix} = 2e^{t}(sen^{2}(t) + cos^{2}(t)) = 2e^{t} ≠ 0$$

Ou seja, ela nunca se anula.

Sendo 

$$g(t) = e^{-t}sen(t)$$
Iremos determinar w1.

$$
W1(t) = det \begin{bmatrix}
0 & cos(t) & sen(t)\\
0 & -sen(t) & cos(t)\\
e^{-t}sen(t) & -cos(t) & -sen(t)
\end{bmatrix} = e^{-t}sen(t)cos^{2}(t) + e^{-t}sen^{3}(t)
$$

$$W1(t) = e^{-t}sen(t)(cos^{2}(t) + sen^{2}(t))$$

$$W1(t) = e^{-t}sen(t)$$

