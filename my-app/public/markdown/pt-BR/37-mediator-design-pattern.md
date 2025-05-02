- **Classificação**: Comportamental

O Mediator é um padrão de projeto que ajuda a reduzir a complexidade entre a comunicação de múltiplos objetos.

Esse padrão busca reduzir o acoplamento e dependência entre alguns objetos, deixando o código e sua estrutura mais limpa e independente.

## O problema

A interação entre múltiplas classes — em um sistema robusto — pode se tornar complexa, difícil de gerenciar e entender. 

Quando esse tipo de situação acontece é comum que até mesmo a mudança em uma classe pode afetar muitas outras classes, diminuindo assim a confiabilidade do software.

Como resolver esse problema?

## A solução

Os nossos principais elementos são:

- **Component**: Essa interface representa um objeto do nosso grupo e através de agregação deve conter uma instância de **Mediator**.
- **Mediator**: Este elemento é responsável por gerenciar todas as comunicações entre o grupo de objetos, definimos aqui uma classe que receberá as notificações dos eventos de cada componente via um método `notify(Component)`. Ao receber a notificação, pode verificar qual comunicação deve ser realizada de acordo com cada componente.

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p>O <b>Mediator</b> pode se tornar rapidamente uma classe complexa. Se a comunicação envolver diferentes comportamentos, opte por criar uma interface que represente o mediador e, após isso, implemente uma classe concreta para cada comportamento.</p>
  </div>
</aside>

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/mediator>
- <https://sourcemaking.com/design_patterns/mediator>