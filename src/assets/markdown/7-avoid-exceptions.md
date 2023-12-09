As exceções podem estar causando **impacto de performance desnecessário** na sua aplicação — se você as utiliza para controle de fluxo.

## Como funciona

Por padrão, quando uma exceção é instanciada, é necessário capturar a *stack trace* de execução.

Capturar a *stack trace* envolve inspecionar a *thread* atual e registrar informações sobre seu estado, como quais os métodos chamados, nome dos métodos, número da linha em que a exceção ocorreu.

Esse processo de captura pode ser significativo, especialmente se a *stack* for profunda, consumindo CPU e memória, por consequência causando impacto de performance.

## Em detalhes

Quando lançamos uma exceção, inicia-se a busca por um mecanismo para manipulação do erro (`try-catch`).

Essa busca pode ser custosa, principalmente se a exceção precisar passar por múltiplas camadas na *stack*.

Além disso, mecanismos de manipulação de erro podem dificultar a legibilidade e entendimento do fluxo.

Esses mecanismos estão distribuídos em diversas camadas da aplicação — em grande maioria — fazendo com que tenhamos que navegar através de diversas classes para entender seu comportamento. 

## Dicas e truques

1. **Evite utilizar exceções para controle de fluxo.**
Opte por exceções para condições inesperadas, semelhantes a erro.
2. **Desabilite a captura da *stack trace*.**
Se você não utiliza [e sua linguagem permite], desabilite a captura.
3. **Mantenha o `try-catch` próximo.**
Trate os erros nas camadas próximas de onde a exceção é lançada.

## Os números

Abaixo segue a lista dos resultados que obtive ao testar cada abordagem.

| Cenário                              | Execuções  | Duração |
| ------------------------------------ | ---------- | ------- |
| **Sem lançar exceção**               | 100 mil    | 1ms     |
| **Lançando exceção sem stack trace** | 100 mil    | 2.4ms   |
| **Lançando exceção com stack trace** | 100 mil    | 43.4ms  |
| **Sem lançar exceção**               | 10 milhões | 17ms    |
| **Lançando exceção sem stack trace** | 10 milhões | 72.2ms  |
| **Lançando exceção com stack trace** | 10 milhões | 3720ms  |

Incentivo fortemente que execute os testes por conta própria, altere-os e crie outros cenários. 

- [Acesse o código fonte clicando aqui](https://github.com/gustavo-flor/avoid-exceptions-demo).

## Moral da história

Exceções são uma ferramenta poderosa para tratamento de erros e não foram criadas para serem utilizadas como mecanismo de controle de fluxo.

Utilizá-las para isso pode causar problemas de performance, diminuir a legibilidade do código e ferir princípios de algumas linguagens de programação.

Em resumo, opte sempre por utilizar as ferramentas de controle de fluxo que sua linguagem oferece (`if-else`, `switch`, `break`, etc), utilize exceções para casos realmente inesperados.

## Para ir mais fundo

- <https://medium.com/appsflyerengineering/railway-oriented-programming-clojure-and-exception-handling-why-and-how-89d75cc94c58>
- <https://blog.logrocket.com/what-is-railway-oriented-programming/>
- <https://dzone.com/articles/exceptions-as-controlflow-in-java>
- <https://www.youtube.com/watch?v=WCCkEe_Hy2Y>
- <https://www.youtube.com/watch?v=fYo3LN9Vf_M>