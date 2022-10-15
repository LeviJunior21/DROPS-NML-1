<h1>Integrais Trigonometricas</h1>

### Métodos mais eficientes de se encontrar uma solução.

<li>Grau ímpar:</li>
Suponha a seguinte integral trigonometrica de grau ímpar:

$$\int sen^{3}(x) dx\$$

Um dos métodos de conseguir resolver essa integral é fazendo o seno de grau par, por um seno de grau ímpar

$$\int sen^{2}(x)sen(x) dx\$$

Perceba que nada foi alterado

Além disso, sabemos que 
$$sen^{2}(x) + cos^{2}(x) = 1$$
Então
$$sen^{2}(x) = 1 -  cos^{2}(x)$$

$$\int sen^{2}(x)sen(x)\ = \int (1 -  cos^{2}(x))sen(x) dx = \int sen(x) - \int cos^{2}(x)sen(x)dx$$

Chame 
$$u = cos(x)$$
$$du = -sen(x) dx$$
$$-du = sen(x) dx$$

Assim,

$$\int sen^{2}(x)sen(x)\ = -cos(x) + \int u^{2} du = -cos(x) + \frac{u^3}{3}$$

Mas, u = cos(x)
Assim, 

$$\int sen^{2}(x)sen(x)\ = -cos(x) + \int u^{2} du = -cos(x) + \frac{cos^{3}(x)}{3} + C$$







