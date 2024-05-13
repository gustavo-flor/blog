O padrão Circuit Breaker, na arquitetura de microsserviços, possibilita que uma aplicação consiga se manter de pé, evitando falhas em cascata, ao enfretar problemas de comunicação com chamadas remotas.

![Título do artigo "Circuit Breaker" com os seus 3 estados (Close, Open e Half-Open)](/circuit-breaker/banner.png)

## Panorama geral

Este padrão utiliza o conceito de disjuntor em um circuito elétrico para lidar com os problemas de comunicação em um sistema distribuído.

Semelhante ao componente em nossa casa que, ao perceber uma falha, evita que os demais componentes elétricos queimem. 

Temos um componente responsável por monitorar as chamadas entre os serviços, e ao detectar uma anomalia evita a realização das futuras chamadas, prevenindo que o sistema sobrecarregue e até mesmo que o problema cascateie para outros serviços.

## Em detalhes

Antes de começar, vamos definir algumas nomenclaturas que iremos utilizar: 

- **Circuit Breaker**/Disjuntor: Componente responsável por monitor e gerenciar as chamadas remotas de uma aplicação.
- **Circuito**: Refere-se a integração da aplicação com o serviço remoto.

Sabendo disso, o Circuit Breaker consegue gerenciar os comportamentos de um **circuito** através de seus três possíveis estados:

### Estados do circuito

#### **Closed** (Fechado)

![Ilustração representando o circuito em estado Fechado (Closed)](/circuit-breaker/closed-state.png)

Este é o estado onde o sistema opera normalmente, permitindo a comunicação entre os serviços.

Neste estado assumimos que a saúde das aplicações está ok e apenas monitoramos os comportamentos das requisições, verificando a taxa de erro e latência.

Caso a aplicação ultrapasse os limites desejados de taxa de erro ou latência, o disjuntor deve abrir o circuito. Em outras palavras, devemos alterar o estado do circuito para **Open**.

#### **Open** (Aberto)

![Ilustração representando o circuito em estado Aberto (Open)](/circuit-breaker/open-state.png)

Este é o estado em que o disjuntor detectou uma falha na integração que estava monitorando e então abriu o circuito, e por consequência, as requisições foram paradas temporariamente.

Quando o circuito está aberto, ele previni que requisições sejam realizadas para um serviço em falha, isso pode ajudar o serviço a não sobrecarregar ou até cascatear as falhas para seus *clients*.

Durante este estado, o Circuit Breaker normalmente entra em um período de timeout, aguardando assim um determinado período de tempo para que o serviço remoto se estabilize novamente, após este período o disjuntor irá alterar o estado do circuito para **Half-Open**.

#### **Half-Open** (Meio Aberto)

![Ilustração representando o circuito em estado Meio Aberto (Half-Open)](/circuit-breaker/half-open-state.png)

Este é o estado em que vamos verificar se as chamadas podem voltar a acontecer normalmente. Quando um circuito está em **Half-Open**, ele permite que um número limitado de requisições sejam encaminhados para o serviço externo para checar se o serviço conseguiu se recuperar.

Após a realização de algumas requisições, é verificado novamente se a taxa de erro e/ou tempo de resposta continua acima do esperado, se o problema persistir o circuito volta para **Open** e passa por mais um período de timeout, se o problema tiver sido resolvido o circuito é alterado para **Closed**.

### Tipos de Circuit Breaker

Existem 2 possíveis tipos de Circuit Breaker, que em resumo definem como será considerado o período para alterar entre os estados **Closed** e **Open**, são eles:

- **Count Based:** Define que o circuito terá seu estado alterado de Closed para Open se as últimas *N* requisições atingirem o limite de taxa de falha ou tempo de resposta.
- **Time Based**: Define que o circuito terá seu estado alterado de Closed para Open se as chamadas realizadas nos útimos *N* segundos atingirem o limite de taxa de falha ou tempo de resposta.

## Mão na massa

> “Talk is cheap. Show me the code” — Linus Torvalds

Neste texto vou apresentar como implementar e configurar o Circuit Breaker através da biblioteca [Resilience4J](https://resilience4j.readme.io/) em conjunto com o *framework* [Spring](https://spring.io/) (Java / Kotlin).

<aside>
    <div class="icon">💡</div>
    <div class="content">
        <p>Se você utiliza outra linguagem ou <i>framework</i>, a ideia geral de configuração será muito parecida, a maior diferença será na sintaxe e formas de configuração da biblioteca que escolher, neste caso recomendo a leitura da documentação da biblioteca.</p>
    </div>
</aside>

### 1. Instalando o Resilience4J

Conforme os exemplos abaixo, adicione a dependência no arquivo de configuração do seu projeto:

- **Gradle (build.gradle)**

```groovy
implementation 'org.springframework.cloud:spring-cloud-starter-circuitbreaker-resilience4j'
```

- **Maven (pom.xml)**

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-circuitbreaker-resilience4j</artifactId>
</dependency>
```

### 2. Entendendo as configurações

Após a instalação do Resilience4J, antes de qualquer código ao nosso projeto, vamos começar entendendo as principais configurações a biblioteca.

```yaml
resilience4j:
  circuitbreaker:
    instances:
      NOME_DO_SEU_CIRCUIT_BREAKER:
        sliding-window-type: COUNT_BASED
        sliding-window-size: 100
        failure-rate-threshold: 80
        slow-call-rate-threshold: 100
        slow-call-duration-threshold: 30000 # millis
        minimum-number-of-calls: 10
        permitted-number-of-calls-in-half-open-state: 10
        max-wait-duration-in-half-open-state: 0s
        wait-duration-in-open-state: 60s
        automatic-transition-from-open-to-half-open-enabled: false
        ignore-exceptions:
          - feign.FeignException.NotFound
          - feign.FeignException.Conflict
```

Para configurar nosso Circuit Breaker devemos adicionar algumas propriedades em `resilience4j.circuitbreaker.instances.NOME_DO_SEU_CIRCUIT_BREAKER`.

<aside class="callout">
    <div class="icon">🗝️</div>
    <div class="content">
        <p>Note que será necessário modificar o <code>NOME_DO_SEU_CIRCUIT_BREAKER</code> para o valor que for configurado em sua aplicação (vou relembrar você disso no futuro).</p>
    </div>
</aside>

Agora vamos entender o objetivo de cada uma das configurações apresentadas.

- `sliding-window-type`: Esta é a configuração responsável por definir qual o tipo de CIrcuit Breaker será utilizado, as opções disponíveis são: **COUNT_BASED** e **TIME_BASED**.
- `sliding-window-size`: Define o tamanho de *N* utilizado pelo tipo de Circuit Breaker.
- `failure-rate-threshold`: Limite máximo de taxa de erro para circuito permanecer no estado **Closed**.
- `slow-call-rate-threshold`: Limite máximo de taxa de lentidão para circuito permanecer no estado **Closed**.
- `slod-call-duration-threshold`: Tempo (em milissegundos) para definir se uma chamada deve ser considerada lenta ou não.
- `minimum-number-of-calls`: Quantidade mínima de chamadas realizadas para começar a calcular as taxas de erro e lentidão.
- `permitted-number-of-calls-in-half-open-state`: Quantidade de chamadas permitdas no estado **Half-Open**.
- `max-wait-duration-in-half-open-state`: Tempo máximo de espera (sem chamadas) no estado **Half-Open** até que o estado seja alterado automaticamente para **Closed**. Se configurado como `0s` significa que alteração só será realizado após uma chamada.
- `wait-duration-in-open-state`: Tempo de espera no estado **Open** até a transição para o estado **Half-Open**.
- `automatic-transition-from-open-to-half-open-enabled`: Após o tempo de espera, o Circuit Breaker irá automaticamente alterar o estado de **Open** para **Half-Open**. Se configurado como `false`, alteração do estado só será realizada após uma chamada. É importante notar que ao deixar ativado (`true`) estamos criando uma nova thread para gerenciar este estado.
- `ignore-exception`: Lista de exceções que não devem ser consideradas como “falha” para cálculo da taxa de erros.

### 3. Codando

Agora, para fazer tudo funcionar, basta acessar a classe que você gostaria de utilizar o Circuit Breaker e adicionar a anotação `@CircuitBreaker`, veja o exemplo abaixo:

```java
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MyService {
    private final MyClient myClient;
	
    @CircuitBreaker(name = "my-circuit-breaker")
    public String doSomething() {
        return myClient.doSomething();
    }
}
```

É importante notar que a partir de agora, ao chamar este método, caso o circuito esteja aberto (**Open**) será lançada a exceção `CallNotPermittedException`.

Se quiser adicionar um comportamento de *fallback* nos casos de estado aberto, basta realizar a seguinte alteração:

```java
import io.github.resilience4j.circuitbreaker.CallNotPermittedException;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MyService {
    private final MyClient myClient;
	
    @CircuitBreaker(name = "my-circuit-breaker", fallbackMethod = "doSomethingFallback")
    public String doSomething() {
        return myClient.doSomething();
    }
	
    protected String doSomethingFallback(final CallNotPermittedException exception) {
        return "fallback";
    } 
}
```

<aside class="callout">
    <div class="icon">💡</div>
    <div class="content">
        <p>É importante notar que o método de fallback deve ter a mesma assinatura do método inicial, ou seja, mesmo tipo de retorno e argumentos, apenas recebendo como último parâmetro a exceção de <code>CallNotPermittedException</code>.</p>
    </div>
</aside>

- Se ficou com dúvida, [veja outro exemplo aqui](https://github.com/gustavo-flor/spring-breaker-hands-on).

## Moral da história

Em resumo, foi possível entender que adicionar um padrão de Circuit Breaker em sua aplicação pode aumentar de forma significativa a resiliência do seu sistema, tratando erros e prevenindo falhas em cascata.

É importante ressaltar que tais padrões aumentam a complexidade do seu código e projeto, portanto, utilize-o com sabedoria e apenas quando necessário.

Muito obrigado pela leitura! 👋

## Para ir mais fundo

- <https://microservices.io/patterns/reliability/circuit-breaker.html>
- <https://resilience4j.readme.io/docs/circuitbreaker>
- <https://reflectoring.io/circuitbreaker-with-resilience4j>
- <https://medium.com/@truongbui95/circuit-breaker-pattern-in-spring-boot-d2d258b75042>