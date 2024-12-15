Que a injeção “automágica” de dependências do Spring proporciona agilidade e simplicidade na escrita de aplicações todos nós já sabemos, mas você sabe como o Spring gerencia e provê essa funcionalidade para nós desenvolvedores? 

O objetivo principal desse texto é atingir o coração do tema injeção de dependências com Spring, ao final desse mergulho é esperado que tenhamos conhecimento sobre o que são Beans, para que serve o *IoC container*, como funciona o ciclo de vida de um Bean e muito mais.

## O que são Beans?

Para definir o que são Beans, gostaria de iniciar com a definição a seguir que consta na própria [documentação do Spring](https://docs.spring.io/spring-framework/reference/core/beans/introduction.html) (traduzida livremente para português):

> […] os objetos que formam a espinha dorsal de sua aplicação e são gerenciados pelo _Spring IoC container_ são denominados **Beans**. […] é apenas um dos muitos objetos presentes na sua aplicação. […]

A definição apresentada é simples e certeira, porém, acredito que podemos sintetizar ainda mais a definição para algo como: 

> Beans são objetos presentes na sua aplicação gerenciados pelo *IoC container*.

Ok, acredito que agora sabemos o que são Beans, porém surgiu uma novo ponto de dúvida, o que é o *IoC container*? Vamos entender…

## O que é o Spring IoC container?

Vimos anteriormente que o Spring gerencia suas Beans através de um componente chamado Spring *IoC container.*

<aside class="callout">
  <span class="icon">💡</span>
  <div class="content">
    <p>Se você não sabe o que é <strong>IoC</strong>, <a href="./o-que-e-ioc">clique aqui</a> e entenda.</p>
  </div>
</aside>

O Spring IoC container nada mais é que a **representação do IoC container no _framework_ Spring**, por baixo dos panos a interface `ApplicationContext` é quem caracteriza esse componente.

Sendo assim, o _Spring IoC container_ é responsável por instânciar, disponibilizar, injetar e destruir os Beans de nossa aplicação.

Sabemos que o _Spring IoC container_ é o responsável por gerenciar os Beans da aplicação, porém, como configuramos um Bean?

## Como configurar um Bean?

Existem diversas maneiras de transformar sua classe em um Bean que será gerenciado pelo Spring, desde configurações através de arquivos XML até utilização de anotações nas classes Java.

Neste texto, vou focar nas mais utilizadas e modernas formas de configurar um Bean, são elas:

### 1. Annotation-Based

Essa é a forma mais comum e simples de criar um Bean no Spring; basta anotar sua classe com alguma anotação considerada um *stereotype* para o Spring.

Alguns exemplos são:

- `@Component`: Esse é *stereotype* mais genérico do Spring
- `@Service`: Essa é uma especialização da anotação `@Component`, e semanticamente representa um componente que contém regras de negócio
- `@Repository`: Essa é uma especialização da anotação `@Component`, e semanticamente representa um componente que manipula dados na aplicação
- `@Controller`: Essa é uma especialização da anotação `@Component`, e semanticamente representa um componente que será utilizado como ponto de entrada para requisições web.

Note que todas as especializações listadas tem **diferença apenas semântica** se comparado a anotação `@Component`.

```java
import org.springframework.stereotype.Component;

@Component
public class MyComponent {
  // Atributos e métodos
}
```

**Disclaimer:** É importante garantir que sua classe esteja localizada em um pacote que possa ser encontrado pelo `@ComponentScan`, não sabe o que é? Veja a seguir…

#### Para que serve a anotação `@ComponentScan`?

Essa anotação é responsável por informar para o Spring quais os pacotes devem ser varridos durante a inicialização da aplicação para localizar os respectivos componentes anotados com _stereotypes_.

Muitas pessoas podem trabalhar com Spring e nunca terem batido de frente com essa anotação, porém todos a utilizam e o motivo é simples, essa anotação está presente dentro de `@SpringBootApplication`, e por padrão localiza todos os componentes presentes no pacote raiz ou em níveis inferiores.

#### Vantagens

- Configuração simplificada, diminuindo código boilerplate.
- Objetivo claro, a semântica que os _stereotypes_ fornecem dá clareza ao código.

#### Quando utilizar?

- Se precisar configurar um Bean para um componente simples, que não possui inúmeras regras e configurações, opte pela configuração baseada em anotações.

#### Pontos relevantes

- Se sua classe possui mais de um construtor, será necessário explicitar qual o Spring deverá utilizar com a anotação `@Autowired`.
- Todas as dependências de sua classe devem ser um Bean do Spring.

### 2. Java-Based

Gosto de pensar que essa abordagem é uma evolução da **annotation-based**, se você precisa criar um componente mais complexo, que possui mais configurações provavelmente é essa que você irá utilizar.

Basicamente, a ideia aqui é criar um componente de configuração que terá os métodos responsáveis por instanciar suas Beans complexas, veja o exemplo:

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MyConfiguration {

  @Bean
  public MyComponent myComponent() {
    // Aqui você pode injetar propriedades e configurações
    return new MyComponent();
  }

}
```

Note que aqui a anotação `@Configuration` transforma a classe `MyConfiguration` em um Bean do Spring; Apesar de não ter mencionado no tópico anterior, essa também é uma especialização do `@Component`, ou seja, é muito importante que essa classe esteja em um pacote visível para o `@ComponentScan`.

Todos os métodos anotados com `@Bean` serão utilizados pelo Spring para instanciar seus componentes e gerenciá-los. 

#### Vantagens

- Clareza na definição do componente, as classes de configuração deixam explícita a configuração de um Bean, o que evita a percepção de comportamentos “mágicos”.

#### Quando utilizar?

- Se você precisa configurar múltiplos tipos de Beans para uma interface em comum ou precisa configurar uma classe mais complexa, opte por essa abordagem.

#### Pontos relevantes

- Diferente da abordagem baseada em anotações, essa abordagem não se importa com a quantidade de construtores presentes na classe, o construtor que será utilizado será o presente no método.
- É importante notar que se for definido mais de um método com mesmo tipo de retorno e anotado com `@Bean`, será necessário adicionar uma configuração explicitando qual configuração deve ser executada em cada caso, esse é um tema mais complexo e não pretendo abordar este tema nesse texto, se você precisar de algo agora pesquise por “_Spring Conditional Beans_” no Google.

## Formas de injetar um Bean

A injeção de um Bean no Spring pode ser feita de diversas formas. Listarei algumas a seguir, e o ideal é que você utilize conforme sua necessidade. Aqui estão algumas das principais formas:

### 1. Pelo construtor (Constructor Injection)

Essa é uma das formas mais simples e eficientes de injetar suas Beans, diretamente através do construtor da classe. 

```java
import org.springframework.stereotype.Service;

@Service
public class MyService {
  private final MyDependency dependency;

  public MyService(MyDependency dependency) {
    this.dependency = dependency;
  }
}
```

Note que **se sua classe possuir mais de um construtor**, será necessário utilizar a anotação `@Autowired` para referenciar qual o construtor o Spring deve utilizar.

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MyService {
  private final MyDependency dependency;

  public MyService() {
    this.dependency = null;
  }

  @Autowired
  public MyService(MyDependency dependency) {
    this.dependency = dependency;
  }
}
```

- É importante **garantir que as classes injetadas são Beans** do Spring.

### 2. Por método (Method Injection)

Se você tem alguma dependência que não é obrigatória, ou seja, pode ou não estar presente no seu componente, você pode optar pela injeção através de um método, basta criar um método que defina essa dependência e anotar com `@Autowired`.

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MyService {
  private MyDependency dependency;

  @Autowired
  public void setup(MyDependency dependency) {
    this.dependency = dependency;
  }
}
```

- Note que utilizei o nome do método como `setup`, porém, não existe nenhuma obrigatoriedade aqui, você pode definir o nome do método da forma que melhor achar adequado.
- Você pode criar um método que receba múltiplas dependências, basta garantir que todas elas são Beans gerenciados pelo Spring.

### 3. Por propriedade (Field Injection)

Atualmente, **a utilização de injeção por reflection (diretamente na propriedade)** **não é recomendada**; as motivações são diversas:

- Dificuldade em mockar as classes nos testes.
- Quebra de encapsulamento; a injeção é feita através de reflection, o que acaba quebrando a ideia de encapsulamento da classe.
- Não conseguimos garantir a imutabilidade das dependências.
- Facilidade em criar dependências circulares.
- Facilidade em adicionar muitas dependências, o que pode acarretar em uma classe que executa diversos comportamentos e fere o princípio da responsabilidade única.

Portanto, use com sabedoria esse tipo de injeção e só em casos realmente necessários. 

Basta adicionar a anotação `@Autowired` na sua propriedade e o Spring irá se encarregar de injetar sua dependência, segue o exemplo:

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MyService {
  @Autowired
  private MyDependency dependency;
}
```

## O ciclo de vida de um Bean

Entender o ciclo de vida de um Bean no Spring pode ser crucial para entender como de fato sua aplicação se comporta e como cada componente conversa entre si. 

Além disso, é essencial entender esse processo complexo para evitar problemas como métodos _non thread safe_, dependências cíclicas, lock de conexões, etc.

Sabendo que é um processo complexo, não pretendo abordar todos os pontos nesse texto; porém, a ideia aqui é dar os primeiros passos nesse tema para, em um futuro próximo, mergulharmos de cabeça nele.

### Primeiros passos

Podemos dividir o ciclo de vida de um Bean nas seguintes etapas:

#### 1. Definição de um Bean (Bean Definition)

Essa etapa corresponde ao tópico de configuração de um Bean, já abordado anteriormente, representa todo o processo de definição de um Bean, em outras palavras, é o processo de configurar nossa classe através de anotações ou classes de configuração.

#### 2. Instanciação de um Bean (Bean Instantiation)

Esse é o momento onde o Spring, através do `@ComponentScan`, varre os pacotes da sua aplicação, encontra e instancia cada Bean configurado. 

Aqui já é utilizado o _Spring IoC container_, em outras palavras, o _ApplicationContext_.

#### 3. Injeção de dependências (Dependency Injection)

Estou separando essa etapa da etapa anterior, mas é importante notar que, em alguns casos, a criação do objeto e a injeção de dependências é feita no mesmo momento, devido ao uso dos construtores. 

No entanto, se a injeção de dependência no seu componente é realizada através de métodos (Method Injection), ela acontece em uma etapa posterior, logo após a instanciação do Bean.

#### 4. Conheça seu nome (Bean Name Awareness)

Nessa etapa o Spring repassa, para os Beans que implementam a interface `BeanNameAware`, o seu nome/identificador. 

Esta é uma etapa bem específica e a maioria de nossos componentes não precisa passar por aqui, mas se por algum motivo seu componente precisa conhecer qual o identificador do Bean no Spring, é nesse ponto que é possível receber isso.

#### 5. Conheça seu criador (Bean Factory Awareness)

Semelhante a etapa anterior, o Spring repassa, para os Beans que implementam a interface `BeanFactoryAware`, a referência do `BeanFactory` que instanciou o componente. 

Não comentei anteriormente, porém a interface `ApplicationContext` extende a interface `BeanFactory`, ou seja, você recebe o _Spring IoC container_ através dessa interface.

É importante notar que semelhante ao caso anterior, esse é um cenário super específico, se seu componente por algum motivo precisa conhecer quem o instânciou, aqui é o lugar, do contrário, seu componente nunca passa por essa etapa.

#### 6. Pré-inicialização (Bean Post Processor Before Initialization)

Nessa etapa, o Spring chama o método `postProcessBeforeInitialization()` de todos os Beans que implementam a interface `BeanPostProcessor`. Nesse momento é possível customizar seu componente antes de sua inicialização.

#### 7. Inicialização (Initializing Bean)

Nessa etapa, o Spring chama o método `afterPropertiesSet()` de todos os Beans que implementam a interface `InitializingBean`. Nesse momento é possível customizar a inicialização de seu Bean.

#### 8. Pós-inicialização (Bean Post Processor After Initialization)

Nessa etapa, o Spring chama o método `postProcessAfterInitialization()` de todos os Beans que implementam a interface `BeanPostProcessor`. Nesse momento é possível customizar seu componente após sua inicialização.

#### 9. Utilização (Bean Usage)

Esse é o momento onde sua Bean está disponível para utilização, podendo ser manipulada conforme necessidade.

#### 10. Destruição (Bean Destruction)

Essa etapa é chamada — por padrão — no momento em que o Spring é desligado, nesse momento é iniciada a etapa de destruição, para as Beans que implementam a interface `DisposableBean`.

Essa é uma ótima etapa para ser utilizada caso sua aplicação tenha componentes que façam *lock* de algum recurso, por exemplo, se seu componente faz *lock* de conexões com o banco de dados, no momento de destruição você pode liberar essas conexões.

### Em detalhes

Agora que conhecemos o básico de todas as etapas do ciclo de vida de um Bean, é importante sabermos que essas etapas podem acontecer em momentos diferentes dos citados. 

Isso acontece por causa do **escopo** de sua Bean, o escopo define como e quando um Bean deve ser instânciado e/ou destruído.

Nesse texto não irei me aprofundar em todos os escopos de um Bean, porém, saiba que por padrão o escopo é **Singleton**, ou seja, seu componente é criado apenas uma vez pelo _Spring IoC container_, e segue com ele até o seu encerramento.

## Moral da história

É perceptível que o Spring provê uma ferramenta de injeção de dependências que apesar de complexa, se mostra simples de ser utilizada por nós desenvolvedores. 

Sei que esse é um tema profundo e complexo, com várias vertentes (escopos, ciclo de vida e etc.), mas acredito que foi possível conhecer mais do coração do Spring.

Agradeço sua leitura e um feliz ano novo [seja lá quando você esteja lendo isso]!

## Para ir mais fundo

- <https://docs.spring.io/spring-framework/reference/core/beans.html>