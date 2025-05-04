- **Classificação**: Estrutural

O Design Pattern **Decorator** permite customizar os comportamentos de seus objetos sem sobrescrevê-los, em outras palavras, possibilita a modificação de um comportamento sem utilizar herança.

## O problema

Imagine que você precisa adicionar um novo comportamento a um método de sua classe, porém, você não pode estender essa classe — os motivos para não conseguir estender sua classe são diversos: a classe é de uma biblioteca, é uma classe final, você quer garantir que todas as classes filhas compartilhem esse novo comportamento, etc.

Como resolver este problema?

## A solução

A ideia aqui é criar uma classe envólucro (_wrapper_) que irá conter, como uma dependência, a classe que você deseja modificar — utilizando o conceito de agregação. 

Essa classe deve disponibilizar um método que irá coordenar a customização do comportamento e a chamada para a classe dependente, garantindo assim a modificação sem extensão.

```java
public class Person {

  public void sayHi() {
    say("Hi!");
  }

  public void say(String message) {
    System.out.println(message);
  }

}

public class PersonDecorator {

  private final Person person;

  public PersonDecorator(Person person) {
    this.person = person;
  }

  public void sayHiAndBye() {
    person.sayHi();
    person.say("Bye!");
  }

}
```

> [Código Fonte](https://github.com/gustavo-flor/design-patterns-hands-on/tree/main/src/main/java/com/github/gustavoflor/dpho/structural/decorator)

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/decorator>
- <https://sourcemaking.com/design_patterns/decorator>