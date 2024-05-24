Iniciar uma jornada para aprender uma nova linguagem de programação é sempre uma mistura de sentimentos curiosidade, animação e desafio.

Recentemente, precisei me aprofundar em Kotlin, uma linguagem de programação moderna que está ganhando cada vez mais espaço no desenvolvimento de software.

Neste texto, quero compartilhar algumas coisas que aprendi nas últimas semanas, desvendar alguns mitos sobre a linguagem e fornecer exemplos práticos para quem está começando.

## Em detalhes

Kotlin é uma linguagem com tipagem estática, desenvolvida pela JetBrains, que rapidamente se tornou a queridinha no desenvolvimento de software, principalmente para o desenvolvimento de aplicações Android.

Entretanto, não se engane: a linguagem não se limita ao desenvolvimento mobile e atualmente já é amplamente utilizada no desenvolvimento de aplicações backend, sendo adotada principalmente por times com conhecimento em Java devido à sua similaridade de ambiente e sintaxe.

É interessante notar que, apesar de semelhantes, Kotlin se destaca por sua concisão, reduzindo boilerplate e permitindo que o desenvolvedor foque no que é realmente prioritário.

### Conceitos fundamentais

- ***Null Safety*** (NullPointerException nunca mais):

No Kotlin, é permitido que o desenvolvedor diferencie variáveis que podem ser nulas das não nulas, reduzindo os erros causados por valores nulos (NPE).

```kotlin
val name: String = "Gustavo Flôr" // Non-nullable
val email: String? = null // Nullable

println("Name: $name")
println("E-mail: ${email ?: "Não informado!"}")
```

- **Extensão de classes**:

Kotlin permite que classes tenham novas funcionalidades sem modificar diretamente suas assinaturas, possibilitando modularidade e simplicidade na hora de adicionar um novo comportamento.

```kotlin
fun Int.isOdd() = this % 2 == 0 // Extensão da classe Int

println(3.isOdd()) // false
println(8.isOdd()) // true
```

- ***Smart Cast***:

Kotlin executa automaticamente o *type casting* de um objeto quando consegue garantir o tipo da variável, reduzindo assim a necessidade de realizar explicitamente o cast, tornando seu código mais simples e legível.

```kotlin
fun printLength(obj: Any) {
    if (obj is String) {
        println(obj.length) // Smart cast para String
    }
    // ...
}
```

- ***Coroutines***:

Kotlin fornece suporte nativo para escrever código assíncrono não bloqueante, também conhecido como reativo.

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p><i>Coroutines</i> serão aprofundadas em um próximo texto...</p>
  </div>
</aside>

### Vantagens

- **Concisão**:

A sintaxe da linguagem foi pensada para reduzir a escrita de código boilerplate, facilitando a leitura, compreensão e manutenção do código, e permitindo que o desenvolvedor foque no que é realmente importante.

- **Imutabilidade**:

Kotlin encoraja a utilização de imutabilidade ao disponibilizar coleções imutáveis e ao introduzir a palavra-chave `val`, que garante que uma variável seja constante após sua declaração. Isso permite que o código seja mais previsível, reduzindo a chance de possíveis bugs.

```kotlin
val numbers = listOf(2, 3, 7) // Lista imutável
```

- **Interoperabilidade**:

Kotlin permite a interoperabilidade com código Java, ou seja, permite o uso de classes Java em classes Kotlin sem nenhum problema.

- **Inferência de tipos**:

Apesar de ser uma linguagem tipada, Kotlin trabalha com inferência de tipos, permitindo que em alguns cenários não seja necessário explicitar o tipo da variável.

```kotlin
val firstName: String = "Gustavo" // Sem inferência
val lastName = "Flôr" // Com inferência
```

### Mitos

- **Kotlin é somente para desenvolvimento Android?**

Não, pois é possível gerar um arquivo `.jar` dos projetos Kotlin, ou seja, de forma simplificada, tudo o que você pode fazer com Java, também pode fazer com Kotlin.

- **Kotlin segue apenas o paradigma de orientação a objetos?**

Não! Como desenvolvedor, você tem a autonomia de definir se vai seguir o paradigma orientado a objetos, funcional, ou até mesmo um mix de ambos. Você decide.

- **Kotlin é mais lento que Java?**

Algumas pessoas acabam pensando que Kotlin pode ser mais lento que Java devido às suas funcionalidades adicionais. No entanto, o código Kotlin também é compilado para um arquivo `.jar` e roda na JVM, portanto, sua performance geral é semelhante à do Java.

### Dicas

- ***Named Arguments***:

Kotlin permite que o desenvolvedor nomeie cada parâmetro do método que está sendo chamado, o que flexibiliza a chamada dos métodos.

```kotlin
fun greet(name: String, greeting: String) {
    println("$greeting, $name!")
}

greet("gustavoflor.dev", "Olá")  // Escreve "Olá, gustavoflor.dev!"
greet(greeting = "Olá", name = "Canela")  // Escreve "Olá, Canela!"
```

- **Argumentos com valor padrão**:

Kotlin suporta nativamente que seja definido um valor padrão para determinado parâmetro.

```kotlin
fun greet(name: String, greeting: String = "Olá") {
    println("$greeting, $name!")
}

greet("gustavoflor.dev")  // Escreve "Olá, gustavoflor.dev!"
greet("Canela", "Oi")  // Escreve "Oi, Canela!"
```

- ***Data Classes***:

*Data Class* é uma forma concisa de criar uma classe no Kotlin que já tenha automaticamente os métodos `equals`, `hashCode`, `toString` e `copy` implementados.

```kotlin
data class Person(
	val name: String, 
	val age: Int
)

val person = Person("Gustavo Flôr", 22)

println(person.toString())
```

- **Desestruturação**:

No Kotlin, é possível desestruturar objetos em múltiplas variáveis. É importante notar que a desestruturação segue a ordem do construtor padrão.

```kotlin
val person = Person("Gustavo Flôr", 22)
val (name, age) = person
```

## Moral da história

Como foi possível perceber, Kotlin provê um conjunto robusto e versátil de ferramentas para construir software.

Kotlin se baseia nos pontos positivos do Java, porém os melhora, trazendo uma sintaxe mais simples. 

Além disso, incorpora conceitos de outras linguagens modernas, como tratamento de nulos, programação funcional, etc.

Espero que tenha gostado do texto, agradeço a leitura e até breve. 👋

## Para ir mais fundo

- <https://kotlinlang.org/>