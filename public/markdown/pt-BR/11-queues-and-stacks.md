Seguindo a linha da última publicação, hoje vamos falar de outras duas estruturas de dados que lidam com uma coleção de elementos.

Filas e pilhas são estruturas de dados muito utilizadas quando precisamos encadear elementos em uma coleção, são muito semelhantes a filas encadeadas, porém, mais restritas e específicas para seus casos de uso, vamos entender…

## Filas

As filas ou queues são estruturas de dados que seguem o princípio **FIFO** (First In, First Out); em português seria algo como PEPS (Primeiro a Entrar, Primeiro a Sair).

A ideia aqui é que o primeiro elemento adicionado na fila seja também o primeiro elemento que será removido.

### Em detalhes

As operações de uma fila consistem basicamente em:

- **Enqueue**: Adicionar um elemento ao fim da coleção
- **Dequeue**: Consultar e remover um elemento do início da coleção

![image](/images/queues-and-stacks/queue.png)

Casos onde precisamos processar elementos em ordem são comuns na utilização de filas. Se preciso executar uma sequência de tarefas, posso guardá-las em uma fila e executar um loop sobre essa coleção.

## Pilhas

As pilhas ou stacks são estruturas que seguem o princípio **LIFO** (Last In, First Out); em português UEPS (Último a Entrar, Primeiro a Sair).

Basicamente, o último elemento adicionado à pilha será o primeiro que será removido.

### Em detalhes

As operações de uma pilha consistem basicamente em:

- **Push**: Adicionar um elemento ao topo da pilha
- **Pop**: Consultar e remover o último elemento adicionado

![image](/images/queues-and-stacks/stack.png)

É comum sua utilização em casos onde precisamos processar elementos em ordem reversa, por exemplo a funcionalidade de desfazer uma alteração em um documento de texto: as mudanças são adicionadas em uma pilha e a cada ação de desfazer remover a última edição da pilha.

## Moral da história

Podemos perceber que cada uma dessas estruturas de dados trata seus elementos de forma ordenada, porém, cada uma com suas respectivas características. 

Concluímos assim que as filas são ideais para processamentos ordenados e sequenciais, já as pilhas são necessárias para cenários onde precisamos de algum tipo de processamento reverso, ou no mínimo, acessar o último elemento adicionado.

## Para ir mais fundo

- <https://www.andrew.cmu.edu/course/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html>
- <https://guides.codepath.com/compsci/Stacks-and-Queues>
- <https://web.mit.edu/javadev/packages/jgl_2_0/doc/user/Queues.html>
- <https://medium.com/@elfrmkr98/getting-started-with-stacks-and-queues-a-practical-guide-with-examples-d92ab09fdf62>