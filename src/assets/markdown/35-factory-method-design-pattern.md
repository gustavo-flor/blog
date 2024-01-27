- **Classificação**: Criacional

O padrão de projeto **Factory Method** provê um meio de criação de objetos que permite que classes filhas possam definir o tipo do objeto que será criado em um método definido na classe pai.

## O problema

Imagine um cenário em que você está criando um software para arquitetura de interiores. 

Sua aplicação permite que o usuário selecione alguns móveis e seu estilo; e então seu software baseado nas escolhas retorna alguns layouts padrões com as mobílias selecionadas.

- Note que o layout é sempre o mesmo, o que vai variar ai são os móveis e o estilo principal deles.
- Em outras palavras, o comportamento segue o mesmo, entretanto, as famílias das classes que serão instanciadas são dinâmicas, como você resolveria isso?

## A solução

A ideia aqui é simples, vamos disponibilizar uma interface ou classe abstrata que provê um método de criação do nosso objeto base. 

Com essa interface criada, vamos disponibilizar para que classes concretas possam implementar a criação do objeto com base em suas necessidades.

Voltando para o nosso exemplo, imagine uma classe base `Furniture` (mobília) e suas especialidades (estilos), `OfficeFurniture`, `TechFurniture`, etc.

Vamos disponibilizar uma classe chamada `FurnitureFactory` com os métodos `createChair()` e `createCouch()`, cada uma das classes especializadas deve prover uma extensão para `FurnitureFactory` e seus métodos.

> [Código Fonte](https://github.com/gustavo-flor/design-patterns-hands-on/tree/1ebb1acd4972a5a3a53c508d53f302968ff9ec09/src/main/java/com/github/gustavoflor/dpho/creational/factorymethod)

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/factory-method>
- <https://sourcemaking.com/design_patterns/factory_method>