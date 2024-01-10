- **Classificação**: Estrutural

O **Adapter** é um Design Pattern que permite que *interfaces* incompatíveis trabalhem juntas adequadamente.

Note que _interface_ aqui é qualquer abstração (classe) disponível no seu sistema.

## O problema

Imagine que você recebe na sua aplicação dados no formato XML e precisa comunicar esses dados a um serviço parceiro utilizando uma biblioteca externa em que os métodos de envio dos dados esperam o formato JSON.

Como resolver este problema?

## A solução

Seguindo o exemplo citado anteriormente, como você não pode alterar a classe de envio — pois é proveniente de uma _lib_ — a ideia aqui é criar uma classe envólucro (_wrapper_), essa classe deve disponibilizar um método que receba os dados no formato XML e transforme para JSON, e então chame o método de envio da biblioteca.

Em outras palavras, a ideia é criar uma classe que adapte — por isso nome do padrão de projeto — o uso de outras classes que não são compatíveis entre si.

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p><strong>Curiosidade</strong>: utilizamos esse Design Pattern até mesmo no mundo real, as tomadas e seus encaixes podem ter diferentes padrões, e com um adaptador conseguimos faze-los funcionar em conjunto.</p>
  </div>
</aside>

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/adapter>