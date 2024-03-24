Concorrência e paralelismo são conceitos relacionados na computação, frequentemente utilizados como sinônimos. No entanto, eles têm significados diferentes. Entender essa diferença pode ser crucial no design eficiente de um software.

## Concorrência

Concorrência refere-se a habilidade de um sistema em executar múltiplas tarefas, não necessariamente de forma simultânea. Essas **tarefas podem ser inicializadas, executadas e finalizadas em períodos sobrepostos**. 

Para exemplificar, imagine uma partida de xadrez. Podemos dizer que o jogo acontece de forma concorrente, pois enquanto uma pessoa realiza sua jogada (executa uma tarefa), a outro deve aguardar sua vez de jogar. Ou seja, ambos estão jogando, porém não ao mesmo tempo.

Uma forma interessante de associar é pensar que as tarefas estão concorrendo pela sua execução.

## Paralelismo

Paralelismo, por outro lado, refere-se à habilidade de um sistema em **executar múltiplas tarefas simultaneamente**. Em um sistema paralelo, as tarefas podem ser executadas ao mesmo tempo, o que só é possível graças aos múltiplos processadores ou *cores* do sistema.

Para exemplificar, imagine agora uma partida de futebol. Todas as pessoas em campo estão jogando, e, diferentemente do xadrez, os jogadores não precisam esperar a jogada do outro para realizar a sua.

Paralelismo implica concorrência, pois temos múltiplas tarefas sendo executadas, e não o oposto.

## Moral da história

Em resumo, concorrência é sobre gerenciar a execução de múltiplas tarefas e permitir que todas possam ser executadas da melhor forma, compartilhando os mesmos recursos, enquanto paralelismo é sobre executar múltiplas tarefas de forma simultânea.

## Para ir mais fundo

- <https://www.studysmarter.co.uk/explanations/computer-science/computer-programming/concurrency-vs-parallelism>
- <https://www.youtube.com/watch?v=cx1ULv4wYxM>
- <https://matheuskiel.medium.com/paralelismo-x-concorrência-3939376766b3>