- **Classificação**: Estrutural

O padrão de projeto **Facade** provê uma interface de uso simplificada para uma biblioteca, framework ou qualquer outro conjunto complexo de classes. 

Em outras palavras, é uma forma de abstrair a complexidade de alguma classe ou conjunto de classes.

## O problema

Imagine que você precisa lidar, no seu código, com um conjunto de objetos complexos que pertencem a uma biblioteca externa. Você precisa inicializar esses objetos e suas dependências, modificar parâmetros, tratar possíveis exceções, etc.

Sabendo disso, é fácil imaginar que a sua lógica de negócio (o _core_ da sua aplicação) começa a se misturar com elementos da biblioteca, criando um acoplamento que dificulta a legibilidade, entendimento e manutenabilidade do código.

Como resolver este problema?

## A solução

A ideia aqui é criar uma camada, denominada fachada (**facade**). 

Essa camada será responsável por abstrair toda a complexidade dessa biblioteca, framework ou conjunto de classes, fazendo com que o _core_ da sua aplicação apenas precise conhecer a fachada e não os seus detalhes de implementação. 

Isso diminui o acoplamento e aumenta a manutenabilidade e legibilidade do código.

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/facade>