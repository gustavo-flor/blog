- **Classificação**: Estrutural

O padrão de projeto **Composite** propõe que conjuntos de objetos sejam compostos em estruturas de árvore (*grafos* não circulares) e que cada objeto agrupador delegue o comportamento para seus nós (*nodes*).

## O problema

Imagine uma situação em que você possui um cômodo cheio de caixas e você precisa calcular o preço dos itens dentro dessas caixas, porém, cada caixa pode conter mais caixas dentro dela, como você faria isso?

No mundo real basta pegar todas as caixas e procurar em cada uma delas os itens e seus respectivos preços, se você abrir uma caixa e existir outra dentro, você irá abrir ela também e irá repetir o processo até calcular o preço total.

Porém, como resolver isso no código? Qual estrutura utilizar?

## A solução

O padrão apresenta 3 elementos chave:

- **Component**: Esse elemento representa o nível mais básico dos seus objetos, é nele em que serão disponibilizados os comportamentos comuns aos grupos e objetos individuais. 
- **Composite**: Esse elemento representa o agrupador, ele é responsável por armazenar objetos individuais ou outros agrupadores. Além disso, deve implementar a interface **Component**.
- **Leaf**: Esse elemento representa o objeto individual e não deve agrupar mais nenhum outro objeto. A **Leaf** também deve implementar a interface **Component**. 

Com os elementos criados, basta iterar sobre os objetos em mais alto nível utilizando o método disponibilizado pela interface **Component**, e então o **Composite** irá delegar seu comportamento para seus nós (*nodes*).

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/composite>
- <https://sourcemaking.com/design_patterns/composite>
