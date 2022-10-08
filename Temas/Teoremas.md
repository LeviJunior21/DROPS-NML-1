<h1>Teorema de Rouche Capelli</h1>

### 1 - Se o Posto da Matriz dos Coeficientes for igual ao Posto da Matriz Ampliada e for igual ao número de incógnitas, então esse sistema admite unica solução.
### 2 - Se o Posto da Matriz dos Coeficientes for igual ao Posto da Matriz Ampliada e for menor que número de incógnitas, então esse sistema admite infinitas soluções.
### 3 - Se o Posto da Matriz dos Coeficientes for diferente do Posto da Matriz Ampliada, então esse sistema não admite solução.

Lembrando que o posto de uma matriz são as linhas não nulas.

<h1>Método de Briott - Ruffini</h1>

Seja o sistema a seguir

$$f(x) = {a^{n} + b^{n-1} + ... + c = 0}$$

Um dos métodos mais rápidos de determinar a raíz da função de qualquer grau é o método de Briott - Ruffini

### Como se usa o método

Para usar o método de Briott - Ruffini, você deve analisar a constante da nossa função, que no nosso caso é representada pela letra "c".
Os divisores comuns de c são os possíveis candidatos a serem raízes da nossa equação de grau "n".

Suponha o polinômio 

$$f(x) = {x^{4} - 10x^{3} +35x^{2} - 50x + 24}$$

Observe a constante 24, seus divisores são $${±1, ±2, ±3, ±4, ±6, ±8, ± 12, ±24}$$

Ou seja, temos 16 candidatos a seream as raízes do polinômio característico

### Usando o método

Pegue um dos candidatos as raízes. Para esse exemplo eu vou começar com -1:

$${f(-1) = (-1)^{4} - 10(-1)^{3} +35(-1)^{2} - 50(-1) + 24}$$
$${=> f(-1) = 1 + 10 + 35 + 50 + 24}$$
$${=> f(-1) = 120}$$

Assim, x = -1, não é raíz

Para x = 1 temos,
$${f(1) = (1)^{4} - 10(1)^{3} +35(1)^{2} - 50(1) + 24}$$
$${=> f(1) = 1 - 10 + 35 - 50 + 24}$$
$${=> f(-1) = 0}$$

Portanto, x = -1 é raíz da nossa função de ordem superior (maior que grau 2).

Sabendo uma das raízes, vamos reduzir o grau no polinômio









