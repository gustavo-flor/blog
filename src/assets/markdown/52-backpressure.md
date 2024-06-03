Backpressure é uma técnica para garantir o funcionamento correto de um software ao processar um fluxo de dados. 

Ela permite que a aplicação gerencie a quantidade esperada de requisições sem sobrecarregar o sistema ou prejudicar seu desempenho.

## Em detalhes

Imagine que temos um componente produzindo dados e outro consumindo-os, e que ambos estão trabalhando em conjunto sem nenhum problema.

Porém, em determinado momento, a quantidade de mensagens que o consumidor consegue processar, em um dado período, começa a alcançar seu limite.

O que devemos fazer nesse caso para evitar que o limite seja ultrapassado, impactando na performance do serviço e até mesmo causando instabilidade e, por fim, queda do sistema?

---

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p>É importante notar que os componentes apresentados podem estar em qualquer nível de abstração da sua arquitetura. Isso significa, o produtor e o consumidor podem representar um API Gateway e um microserviço, um message broker e um listener, componentes internos de um serviço, etc.</p>
  </div>
</aside>

---

É aqui que o backpressure entra na jogada. Ele serve como um mecanismo de feedback para informar ao produtor que o consumidor está chegando ao seu limite e que a produção de dados deve ser reduzida até que os dados possam ser novamente consumidos.

Em outras palavras, o backpressure serve para balancear a produção e o consumo dos dados, garantindo que ambos os componentes funcionem corretamente e de forma eficiente.

## Na prática

Imagine que tenhamos um componente, chamado coletor, responsável por buscar dados de uma determina API. 

O coletor busca novos registros a cada dez segundos e envia os dados para outro componente chamado executor. 

O executor pode processar no máximo `X` execuções de forma simultânea e disponibiliza uma fila que pode armazenar até `Y` dados a serem processados.

Para garantir que o executor não atinja seu limite, precisamos de um mecanismo que informe ao coletor qual a capacidade restante do executor.

Desta forma, o coletor pode saber se deve ou não buscar mais dados. Veja um exemplo de implementação do mecanismo:

- **Executor**: Componente responsável por processar os dados

```kotlin
package com.github.gustavoflor.backpressure

class Executor {
    fun execute(word: String) {
        println("Executing word: $word")
        Thread.sleep(8000) // faking a slow process
        println("Executed word: $word")
    }
}
```

- **Backpressure**: Mecanismo de controle de fluxo

```kotlin
package com.github.gustavoflor.backpressure

import java.util.concurrent.ThreadPoolExecutor

class Backpressure(
  private val threadPoolExecutor: ThreadPoolExecutor
) {
  fun shouldWait(): Boolean {
    val queue = threadPoolExecutor.queue
    val remainingCapacity = queue.remainingCapacity()
    println("Reaching capacity: $remainingCapacity")
    val shouldWait = remainingCapacity == 0
    if (shouldWait) {
      println("Waiting for the next process...")
    }
    return shouldWait
  }
}
```

- **Coletor**: Componente por buscar os dados e enviar para o executor

```kotlin
package com.github.gustavoflor.backpressure

import java.util.concurrent.ThreadPoolExecutor

class Collector(
  private val threadPoolExecutor: ThreadPoolExecutor,
  private val backpressure: Backpressure,
  private val executor: Executor
) {
  private var counter = 0;

  fun collect() {
    if (backpressure.shouldWait()) {
      return
    }
    execute(loadWord())
  }

  private fun loadWord(): String {
    // faking load words...
    println("Loading word...")
    counter++
    return "hello-$counter"
  }

  private fun execute(word: String) {
    threadPoolExecutor.execute { executor.execute(word) }
  }
}
```

- **Orquestrador**: Componente responsável por linkar o mecanismo de backpressure com o executor o coletor.

```kotlin
package com.github.gustavoflor.backpressure

import java.util.concurrent.Executors
import java.util.concurrent.LinkedBlockingQueue
import java.util.concurrent.ThreadPoolExecutor
import java.util.concurrent.TimeUnit

fun threadPoolExecutor() = 

fun main() {
  val workQueue = LinkedBlockingQueue(3)
  val threadPool = ThreadPoolExecutor(2, 2, 0L, TimeUnit.SECONDS, workQueue)
  val backpressure = ReachCapacityBackpressure(threadPool)
  val executor = Executor()
  val collector = Collector(threadPool, backpressure, executor)

  Executors.newScheduledThreadPool(1)
    .scheduleWithFixedDelay({
      collector.collect()
    }, 0, 1, TimeUnit.SECONDS)
}
```

Acesse o código fonte em: [github.com/gustavo-flor/backpressure-hands-on](https://github.com/gustavo-flor/backpressure-hands-on)

## Moral da história

Acredito que nesse texto tenhamos conseguido ver uma forma simples de garantir a eficiência de nossa aplicação, evitando a exaustão dos recursos no cenário de consumo de fluxo de dados.

Agradeço seu tempo e até breve! 👋

## Para ir mais fundo

Se ficou curioso e quer saber mais, leia também:

- <https://www.c-sharpcorner.com/article/backpressure-pattern-design-principle/>
- <https://medium.com/@jayphelps/backpressure-explained-the-flow-of-data-through-software-2350b3e77ce7>
- <https://clearmeasure.com/backpressure-in-message-based-systems/>
- <https://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html>
