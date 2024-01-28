- **Classificação**: Comportamental

O padrão de projeto **Command** possibilita que você agrupe todos os dados de sua requisição em um único objeto — denominamos esse objeto de comando. 

Esse comando pode ser enviado através dos argumentos de um método, enfileirado para uma execução futura da requisição, etc.

## O problema

Imagine que você esteja construindo um jogo de plataforma, sua tarefa atual é receber e tratar os inputs do seu usuário, permitindo assim que o jogador possa se movimentar, pular, girar, etc.

Como você faria isto?

A forma mais comum, que possivelmente você, eu e qualquer outra pessoa pensaria, é: criamos uma classe abstrata chamada `Button` e estendemos essa classe para cada ação possível do jogador (`JumpButton`, `MoveLeftButton`, `MoveRightButton`, `CrouchButton`, etc.).

Sem dúvidas, essa abordagem funciona; porém, note que facilmente podemos atingir uma grande quantidade de subclasses extendidas de Button. E, nesse caso, se precisarmos ajustar a classe base, poderemos quebrar e/ou precisar refatorar todas as demais classes, o que torna isso, no mínimo, trabalhoso.

Como resolver este problema?

## A solução

A ideia aqui é transformar todas as nossas ações em um comando. 

Para isso, criamos uma interface funcional base que represente o comando e implementamos uma classe concreta para cada comando. 

A nossa classe `Button` continua existindo; porém, ela não mais implementa a lógica do comando, e sim o agrega. Portanto, garantimos o desacoplamento do _core_ de nossa aplicação do _input_ do usuário.

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/command>
- <https://sourcemaking.com/design_patterns/command>