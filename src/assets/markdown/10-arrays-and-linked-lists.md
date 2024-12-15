Arrays e listas encadeadas (*linked lists*) são estruturas de dados que armazenam coleções de elementos, mas fazem isso de diferentes formas, com suas respectivas vantagens e desvantagens.  

## Arrays

Uma das principais características dos arrays é a sua forma de armazenar os dados, **guardando os elementos contiguamente** (lado a lado) na memória.

### Em detalhes

Esse comportamento afeta diretamente a inserção de valores na coleção, pois se ao adicionar um novo elemento não existir espaço na memória adjacente ao array, será necessário solicitar ao computador uma localização diferente na memória onde todos os valores do array possam ser alocados lado a lado.

Com essa abordagem conseguimos garantir uma leitura rápida dos elementos, já que todos os dados estão guardados nas proximidades.

Lembre que apesar da leitura ser rápida, a escrita (inserção, atualização e exclusão) pode ser lenta, pois em certos casos será necessário realocar sua coleção na memória. 

### Para ir mais fundo

Ao criar um array, é possível reservar espaços na memória para evitar que seus dados sejam realocados. No entanto, surgem problemas: 

- Talvez você não precise de todos os espaços que reservou e por consequência a memória será desperdiçada;
- Se for necessário adicionar mais itens do que o tamanho reservado você ainda irá precisar realocar sua coleção na memória.

Se ainda tem dúvidas, estive lendo recentemente o livro “*Entendendo Algoritmos: um guia ilustrado para programadores e outros curiosos*” — aliás, esse foi o motivo de estar escrevendo e este texto. O autor, através de ilustrações, conseguiu explicar de forma super didática. Por isso, recomendo fortemente a leitura; para mais detalhes, [clique aqui e veja a página 24](https://edu.anarcho-copy.org/Algorithm/grokking-algorithms-illustrated-programmers-curious.pdf).

## Listas encadeadas

Diferentemente dos arrays, as listas encadeadas não precisam ter seus dados guardados contiguamente, o armazenamento é feito de forma que **cada elemento tenha a referência da localização do próximo elemento na memória** criando assim uma espécie de corrente, por isso o termo encadeado.

Ilustração retirada do livro “*Entendendo Algoritmos*”, demonstrando o comportamento de uma lista encadeada na memória:

![image](/arrays-and-linked-lists/linked-lists-on-memory.png)

### Em detalhes

Ao inserir um novo elemento na lista o último elemento existente recebe a localização do novo elemento na memória e o novo elemento passa a ser o último na lista.

- Este comportamento garante velocidade na escrita (inserção, alteração e exclusão), pois se quero adicionar um novo elemento no ínicio, meio ou fim da lista, basta alterar a referência de um dos elementos e pronto.
- Porém, em contrapartida, a leitura é afetada. Já que não temos os elementos armazenados na vizinhança, para localizar um elemento intermediário, será necessário percorrer a coleção até encontrá-lo, o que pode ser desafiador dependendo do tamanho da sua coleção.

### Para ir mais fundo

É importante notar que a velocidade de escrita só não é impactada quando temos acesso ao elemento que queremos realizar a ação. Portanto, é uma prática comum ter sempre em mãos o primeiro e último item da lista.

## Como isso funciona

É importante notar que nada disso que expliquei acima precisa ser criado, todas as linguagens (ou a maioria delas) já disponibiliza para você a implementação dessas estruturas de dados.

Dê um Google e você vai descobrir como utilizar cada uma dessas estruturas na sua linguagem de programação favorita.

## Moral da história

Sabendo de tudo que lemos até aqui podemos concluir que não existe uma única opção correta na escolha, tudo vai depender do contexto de uso.

- Se você precisa de algo que vai ter acesso aleatório (pode precisar acessar o início, meio ou fim da lista a qualquer momento), talvez faça sentido utilizar arrays.
- Se você precisa conectar elementos e/ou pretende realizar a leitura deles de forma ordenada, talvez faça sentido utilizar listas encadeadas.

A escolha vai depender do seu contexto, e lembre-se você pode mesclar as estruturas para se encaixar melhor no seu caso de uso. 

Muito obrigado por ler até aqui!

## Para ir mais fundo

- https://edu.anarcho-copy.org/Algorithm/grokking-algorithms-illustrated-programmers-curious.pdf