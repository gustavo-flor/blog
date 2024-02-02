Encapsulamento é um dos pilares da Programação Orientada a Objetos (POO). Refere-se à ação de agrupar dados (atributos) e comportamentos (métodos) em uma única unidade, denominada objeto.

Esta abordagem permite ao desenvolvedor **restringir o acesso direto a determinados dados e comportamentos de um objeto**, criando e disponibilizando interfaces públicas que irão manipular os dados restritos.

## Panorama Geral

Um exemplo muito comum para ilustrar esta ideia é um controle remoto. 

Nele, temos os botões (métodos) que operam o estado da TV, mas não temos acesso direto aos dados internos da televisão (atributos). 

Veja um exemplo de código:

```java
public class RemoteControl {
	
  private Battery battery;
  private Television television;

  public void turnOnOrOff() {
    if (isOn()) {
      turnOff();
    } else {
      turnOn();
    }
  }

  protected void turnOn() {
    television.turnOn();
  }

  protected void turnOff() {
    television.turnOff();
  }

  boolean isOn() {
    return television.isOn()
  }

  boolean hasBattery() {
    return battery.hasPower();
  }

}
```

## Em detalhes

No exemplo anterior — ao definir a classe `RemoteControl` — utilizei algumas palavras-chave do Java, que denominamos como modificadores de acesso: `public`, `private`, `protected`.

Os modificadores de acesso são a principal ferramenta de controle de acesso relacionada ao conceito de encapsulamento, sendo eles os responsáveis por definir quem pode ou não acessar determinado recurso (classe, método, atributo, etc.)

Vamos entender o funcionamento de cada um dos modificadores de acesso disponíveis no Java:

### Public

- **Palavra-chave**: `public`

Este modificador de acesso define que o recurso pode ser acessado por qualquer outra classe, independente do seu pacote. 

Em outras palavras, é o modificador de acesso mais permissivo, dando total liberdade de manipulação a outras classes.

### Private

- **Palavra-chave**: `private`

Este é o modificador de acesso mais restritivo do Java, define que apenas a própria classe pode acessar estes recursos.

Ou seja, nenhuma classe — nem mesmo através de herança — pode acessar os recursos declarados com esse modificador de acesso.

### Protected

- **Palavra-chave**: `protected`

Este modificador define que seus recursos podem ser acessados por qualquer classe dentro do mesmo pacote ou através de suas classes filhas.

### Default (Package Private)

- **Não possui palavra-chave**

Dos 4 modificadores de acesso existentes, este é o único que não possui palavra-chave, e por isso é chamado de _default_ (padrão) — também conhecido como _package private_.

> Se ficou na dúvida sobre como utilizar esse modificador, dê uma olhada no método `isOn` da classe `RemoteControl` no exemplo anterior.

Este modificador concede acesso total aos recursos para as classes do mesmo pacote.

Podemos pensar que ele tem um comportamento semelhante ao `public`, porém, está restrito apenas ao mesmo pacote.

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p>Não confunda com a palavra-chave <code>default</code>. Esta palavra-chave representa, na verdade, métodos com comportamento públicos em uma interface.</p>
  </div>
</aside>

## Como funcionaria

- Acessos no **mesmo pacote**:

|              | public | private | protected | default |
| ------------ | ------ | ------- | --------- | ------- |
| Classe       | ✅     | ✅      | ✅        | ✅      |
| Subclasse    | ✅     | ❌      | ✅        | ✅      |
| Outra classe | ✅     | ❌      | ✅        | ✅      |

- Acessos em **pacotes diferentes**:

|              | public | private | protected | default |
| ------------ | ------ | ------- | --------- | ------- |
| Subclasse    | ✅     | ❌      | ✅        | ❌      |
| Outra classe | ✅     | ❌      | ❌        | ❌      |

## Moral da história

Agora que conhecemos mais sobre o pilar de encapsulamento, conseguimos entender as diversas vantagens que esse princípio disponibiliza para a programação orientada a objetos (POO). 

Através dele conseguimos reduzir complexidade, garantir o controle dos dados, reduzir riscos de segurança ao restringir o acesso aos dados e muito mais.

Muito obrigado pela leitura até aqui e até a próxima! 👋

## Para ir mais fundo

Criei um repositório com cada um dos casos de uso, fique a vontade para se aventurar por lá:

- [🐱 java-encapsulation-sample](https://github.com/gustavo-flor/java-encapsulation-sample)