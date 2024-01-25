- **Classificação**: Comportamental

O padrão de projeto **Iterator** permite percorrer uma coleção de elementos sem precisar expor sua implementação, ou seja, você não precisa conhecer se sua coleção é uma lista, fila, pilha, grafo, etc.

## O problema

As coleções são uma das estruturas de dados mais utilizadas na programação, porém, a tarefa de iterar sobre elas pode se tornar complexa de acordo com a especialização de cada estrutura de dados.

Imagine, percorrer uma lista é uma tarefa simples, pois basta criar um loop e acessar cada índice até chegar ao fim da coleção. Entretanto, pense em estruturas mais complexas, como os grafos, árvores e pilhas, como você iria percorrer essas coleções? 

De fato é possível percorrer todas essas estruturas, porém, o seu código acabaria precisando ficar acoplado a cada tipo, perdendo assim adaptabilidade. 

Como resolver esse problema?

## A solução

A ideia aqui é simples, cada coleção deve disponibilizar um **Iterator**:

- **Iterator**: Interface que define como a coleção deve ser percorrida, disponibilizando o método de acesso ao próximo elemento da coleção — denominado `getNext`.
- **Iterable**: Interface que representa uma coleção que pode ser percorrida, deve disponibilizar um método retornando qual seu **Iterator** — denominado `iterator()`.

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p>Note que as linguagens de programação mais robustas já disponibilizam essas interfaces e suas implementações nativamente.</p>
  </div>
</aside>

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/iterator>