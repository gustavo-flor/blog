- **Classificação**: Comportamental

O padrão de projeto **Memento** permite que você restaure estados passados do seu objeto de forma prática sem revelar sua estrutura interna (violar seu encapsulamento).

## O problema

O Memento é muito utilizado em cenários onde é necessário desfazer alguma ação sobre seu objeto ou realizar algum tipo de *rollback* semelhante. 

Porém, como gerenciar os estados que seu objeto já passou sem expor seus atributos, deixá-los públicos?

## A solução

Basicamente, a ideia consiste em 3 elementos chave:

- **Originator**: Esse elemento representa o objeto que precisa ter seu estado salvo, ele é o responsável por criar um **Memento** contendo uma fotografia do estado interno atual.
- **Memento**: Esse elemento é responsável por guardar o estado interno do seu **Originator**, ele é um objeto simples que não realiza nenhum comportamento além de armazenar os dados de forma privada.
- **Caretaker**: Esse elemento gerencia o ciclo de vida do **Originator**, armazenando todos seus **Mementos** e realizando o *rollback* quando necessário.

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/memento>
- <https://sourcemaking.com/design_patterns/memento>