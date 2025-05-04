**IoC**, acrônimo de *Inversion of Control* (Inversão de Controle), é um princípio da engenharia de software que incentiva a inversão do controle do fluxo da aplicação, mas o que significa isso? 

Vamos entender…

## O princípo Hollywoodiano

A ideia central seria conseguirmos **passar a responsabilidade das chamadas do seu código para uma camada superior**, essa camada superior na maior parte das vezes será um _**framework**_ ou alguma camada de controle semelhante, onde você escreve seu código seguindo alguns templates e **o _framework_ se encarrega de chamar seu código conforme a necessidade**.

Sabendo disso, a ideia “Inversão de Controle” começa fazer mais sentido, já que estamos invertendo o controle do fluxo de nossa aplicação, passando a responsabilidade do controle para um código diferente do *core* da aplicação.

<aside class="callout">
  <span class="icon">💡</span>
  <div class="content">
    <p>IoC também é conhecido como o <strong>princípio de Hollywood</strong> — “não nos chame, nós iremos chamar você”.</p>
  </div>
</aside>

### Em detalhes

Temos diversas formas distintas de aplicar o IoC, neste texto resolvi trazer algumas das mais utilizadas e conhecidas para nos aprofundarmos.

**Disclaimer:** O objetivo aqui é identificar o uso do IoC no nosso código, ou seja, a ideia aqui não é explicar o que está sendo feito no detalhe (particularidade de alguma linguagem ou biblioteca), parto do princípio que você tem conhecimento suficiente para entender ou pesquisar sobre.

- **Event-Driven**

```html
<!DOCTYPE html>
<html>
<body>
  <button class="hello-button">Clique aqui!</button>
  <script>
    const helloButton = document.querySelector('.hello-button');
    const sayHello = () => print('Olá!');

    helloButton.addEventListener('click', sayHello);
  </script>
</body>
</html>
```

Neste exemplo temos a implementação de uma simples página HTML em que ao clicar no botão presente nela será apresentado uma mensagem de “Olá”. 

Note que definimos um comportamento no método `sayHello` e após isso configuramos um _**event listener**_ de clique no botão presente na página.

Perceba que em momento algum executamos o comportamento de fato, na verdade, o que fazemos é passar o controle de execução para a camada superior, quem irá executar esse comportamento é o _**event listener**_ ao perceber um clique no botão, ou seja, passamos o controle de execução do fluxo para uma camada superior, separando assim nosso comportamento da execução.

- **Framework Template**

```java
@RestController
@RequestMapping("/v1/taxes")
@RequiredArgsConstructor
public class TaxController {
  @GetMapping("/{currency}")
  public Map<Currency, BigDecimal> getTaxesByCurrency(@PathVariable Currency currency) {
    return switch (currency) {
      case USD -> Map.of(BRL, 5.00, EUR, 0.75, SOL, 4.30);
      case BRL -> Map.of(USD, 0.20, SOL, 1.50);
      case EUR -> Map.of(USD, 1.25);
      default -> Map.of();
    }
  }
}
```

O código acima é referente à implementação de um endpoint HTTP utilizando o *framework* Spring que retorna as taxas de conversão de uma moeda por outra (a lógica é puramente didática).

Note que estamos apenas implementando a lógica de conversão, presente no método `getTaxesByCurrency`, porém, semelhante ao exemplo anterior, não estamos chamando esse método em lugar nenhum, essa responsabilidade fica por conta do _**framework**_, ou seja, novamente estamos passando a responsabilidade para uma camada superior.

- **Dependency Injection (DI)**

```java
public class Car {
  private Engine engine;

  public Car(Engine engine) {
    this.engine = engine;
  }

  public void run() {
    engine.run();
  }
}

public interface Engine {
  void run();
}

public class ElectricalEngine implements Engine {
  @Override
  public void run() {
    // do electrical stuffs
  }
}

public class CombustionEngine implements Engine {
  @Override
  public void run() {
    // do combustion stuffs
  }
}

public class Application {
  public static void main(String[] args) {
    final var engine = new CombustionEngine(); 
    final var car = new Car(engine);

    car.run();
  }
}
```

Neste exemplo ao utilizar da injeção de dependências na classe `Car` garantimos que a classe se torne independente da classe `Engine`, note que aqui também estamos passando o controle para a camada superior — e diferente dos outros — aqui o controle não é necessariamente da execução de um método/comportamento, mas sim o controle da criação do objeto.

## O que é IoC container?

O **IoC container** é todo e qualquer tipo de componente que se responsabiliza pelo gerenciamento de objetos, essa ação consiste em ter controle da criação (instânciação) dos objetos e suas dependências.

No exemplo anterior apresentei a aplicação de IoC através do uso de DI (Injeção de dependências), a utilização do DI é uma prática comum para que o IoC container possa gerenciar a criação dos objetos e suas dependências.

Utilizando o exemplo anterior de DI, segue uma demonstração de um simples IoC container:

```java
public enum EngineType {
  ELECTRICAL, COMBUSTION
}

// Classe que representa um IoC container
public class CarFactory {
  private final EngineType engineType;

  public CarFactory(final EngineType engineType) {
    this.engineType = engineType;
  }

  public Car car() {
    final var engine = engine(); 
    return new Car(engine);
  }

  public Engine engine() {
    return switch (engineType) {
      case ELECTRICAL -> new ElectricalEngine();
      case COMBUSTION -> new CombustionEngine();
      default -> throw new UnknownEngineType(engineType);
    }
  }
}

public class Application {
  private static final CarFactory CAR_FACTORY = new CarFactory(EngineType.ELECTRICAL);

  public static void main(String[] args) {
    final var car = CAR_FACTORY.car(); // Utilização do IoC container

    car.run();
  }
}
```

**Disclaimer:** Note que este é um exemplo simplificado de um IoC container, apenas para fins didáticos.

Além disso, é comum que IoC containers disponibilizem formas de configuração apartadas do código principal (através de arquivos `.xml`, `.yml` e outros), essas configurações permitem alterar o comportamento da aplicação sem modificar o código fonte.

## Moral da história

Semelhante a outros conceitos da engenharia de software, IoC é um termo difícil para uma ideia simples e muito útil.

Na prática, se você trabalha com programação provavelmente você já utiliza IoC e nem percebeu, agora que você sabe o que é, fica ainda mais simples de aplicar e entender as suas vantagens.

<aside class="callout">
  <span class="icon">🔄</span>
  <div class="content">
    <strong>Fechando o ciclo…</strong>
    </br>
    <p>O IoC é uma das principais características que divergem um <i><strong>framework</strong></i> de uma <i><strong>library</strong></i>.
    Quando utilizamos uma <i><strong>library</strong></i>, o nosso código tem controle sobre o código da biblioteca; já quando usamos um <i><strong>framework</strong></i>, o código do <i><strong>framework</strong></i> tem controle sobre o nosso código, invertendo assim o controle.</p>
  </div>
</aside>

## Últimas palavras

Se ainda tem dúvidas ou gostaria de entender mais, tenho duas sugestões:

1. Se aprofunde com os links da seção “Para ir mais fundo”
2. Tente aplicar no seu código, brinque e veja a diferença entre  utilizar ou não IoC.

## Para ir mais fundo

- <http://www.laputan.org/drc/drc.html>
- <https://martinfowler.com/bliki/InversionOfControl.html>
- <https://martinfowler.com/articles/injection.html#InversionOfControl>
- <https://www.codecademy.com/resources/blog/what-is-a-framework/>