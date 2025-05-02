- **Classificação**: Estrutural

O Design Pattern **Flyweight** — também conhecido como *Cache* — permite otimizar o uso de memória em casos onde nossa aplicação precisa disponibilizar uma grande quantidade de objetos contendo conteúdos semelhantes.

## O problema

Imagine um cenário em que sua aplicação precisa instanciar diversos objetos, os quais podem carregar um conteúdo (estado) em comum. 

Nessa situação, se o conteúdo compartilhado for leve e/ou máquina que executará o software for robusta, você não enfrentará problemas. 

No entanto, considere um caso em que os objetos têm um alto custo de memória; ou imagine um cenário em que precisa instanciar milhões de objetos. Pense, ainda, em uma situação onde a máquina disponível possui recursos computacionais muito limitados. 

Como otimizar o uso da memória para esses casos?

## A solução

Temos 3 componentes chave:

- **Flyweight**: Este componente é responsável por armazenar os dados que se repetem e/ou são custosos para seu software.
- **Flyweight Factory**: Este componente é responsável por gerenciar a criação do Flyweight. Quando solicitada uma nova instância, ele deve verificar se o objeto já existe em memória. Se não existir, deve criar e armazenar em sua memória interna; em seguida, retornar o objeto.
- **Context**: Este componente é responsável por armazenar os dados distintos/únicos e deve associar-se a um Flyweight através de composição. Se necessário, solicita a criação do Flyweight via Flyweight Factory.

> [Código Fonte](https://github.com/gustavo-flor/design-patterns-hands-on/tree/main/src/main/java/com/github/gustavoflor/dpho/structural/flyweight)

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/flyweight>
- <https://sourcemaking.com/design_patterns/flyweight>