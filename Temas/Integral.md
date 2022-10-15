<h1>Integrais Trigonometricas</h1>

### Métodos mais eficientes de se encontrar uma solução.

<h1><li>Grau ímpar:</li></h1>
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

Mas, u = cos(x). Assim, 

$$\int sen^{2}(x)sen(x)\ = -cos(x) + \int u^{2} du = -cos(x) + \frac{cos^{3}(x)}{3} + C$$





<h1><li>Grau Par:</li></h1>
Suponha a seguinte integral trigonometrica de grau par:

$$\int sen^{8}(x) dx$$

Para resolver uma integral de grau par teremos que reduzir que usar algumas propriedades trigonometricas.

Além disso, podemos reescrever a integral como sendo:
$$\int sen^{2}(x)sen^{2}(x)sen^{2}(x)sen^{2}(x) dx$$

Sabe-se que 
$$sen^{2}(x) = \frac{1 - cos(2x)}{2}$$

Substituindo

$$\int \frac{(1 - cos(2x))}{2}\frac{(1 - cos(2x))}{2}\frac{(1 - cos(2x))}{2}\frac{(1 - cos(2x))}{2} dx =$$

$$\frac{1}{16}\int (1 - cos(2x))(1 - cos(2x))(1 - cos(2x))(1 - cos(2x)) dx = $$

Chame 

$$u = 2x$$

$$\frac{du}{2} = dx$$

Assim, 

$$\frac{1}{32}\int (1 - cos(u))(1 - cos(u))(1 - cos(u))(1 - cos(u)) du = $$

$$\frac{1}{32}\int (1 - 2cos(u) + cos^{2})(1 - 2cos(u) + cos^{2}(u)) du= $$

$$\frac{1}{32}\int (1 - 2cos(u) + cos^{2})(1 - 2cos(u) + cos^{2}(u)) = $$

$$\frac {1}{32} \int [cos^{4}(u) - 4cos^{3}(u) + 6cos^{2}(u) -4cos(u) + 1] du$$

Sabe-se que $$cos^{2}(u) = \frac{(1 + cos(2u))}{2}$$

$$\frac {1}{32} \int [(\frac{(1 + cos(2u))}{2})^{2} - 4(1 - sen^{2}(u))cos(u) + 6\frac{(1 + cos(2u))}{2} -4cos(u) + 1] du$$

Digamos que 
$$Q = \int (\frac{(1 + cos(2u))}{2})^{2}) du$$

$$R = \int -4(1 - sen^{2}(u))cos(u) du$$

$$S =  \int 6\frac{(1 + cos(2u))}{2} du$$

$$T = \int -4cos(u) + 1 du$$

$$\int sen^{8}{x} = \frac{1}{32} ( Q + R + S + T ) + C$$

<li>Vamos resolver Q primeiro.</li>

$$Q = \int (\frac{(1 + cos(2u))}{2})^{2}) du$$

$$Q = \int \frac{(1 + 2cos(2u) + cos^{2}(2u))}{4} du = $$

$$Q = \frac{u}{4} + \frac{1}{4}\int (2cos(2u) + cos^{2}(2u)) du = $$

Chame 

$$n = 2u$$

$$\frac{dn}{2} = u$$

$$Q = \frac{u}{4} + \frac{1}{4}\int \frac{(2cos(n) + cos^{2}(n))}{2} dn = $$

$$Q = \frac{u}{4} + \frac{1}{8}\int (2cos(n) + cos^{2}(n)) dn = $$

$$Q = \frac{u}{4} + \frac{1}{8}(2sen(n) + \int \frac{(1 + cos(2n)}{2})) dn = $$

$$Q = \frac{u}{4} + \frac{1}{8}(2sen(n) + \frac{n}{2} + \int \frac{cos(2n)}{2}) dn = $$

$$g = 2n$$

$$\frac{dg}{2} = n$$

$$Q = \frac{u}{4} + \frac{1}{8}(2sen(n) + \frac{n}{2} + \frac{1}{4}\int cos(g) dg) = $$

$$Q = \frac{u}{4} + \frac{1}{8}(2sen(n) + \frac{n}{2} + \frac{1}{4} sen(g)) = $$
