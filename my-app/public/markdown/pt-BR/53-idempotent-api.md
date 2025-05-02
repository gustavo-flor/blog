Idempotência é um termo utilizado na computação para definir operações que, de acordo com o input inicial, são executadas múltiplas vezes sem alterar seu resultado final. 

<aside class="callout">
  <div class="icon">❓</div>
  <div class="content">
    <p>A palavra Idempotência deriva do Latim “idem”, que significa “o mesmo”, e da palavra “potens”, que significa poderoso.</p>
  </div>
</aside>

Sabemos que re-tentativas, para erros não esperados, são uma prática comum em sistemas distribuídos.

Entretanto, tais ações podem introduzir outros problemas se não garantirmos que o resultado final permaneça o mesmo.

Acho que você começou a entender onde quero chegar…

## Panorama geral

Imagine um sistema de entrega de comidas, semelhante ao iFood, Uber Eats, Rappi, etc. 

Neste cenário, a aplicação ao receber um novo pedido deve solicitar um débito ao provedor de pagamentos.

Porém, devido a um problema na rede, a aplicação não recebe a resposta do provedor confirmando ou não o débito, sendo necessário realizar uma re-tentativa.

E então, em um sistema não idempotente, podemos acabar realizando uma cobrança indevida ao cliente.

<aside class="callout">
  <div class="icon">📌</div>
  <div class="content">
    <p>É possível argumentar que bastaria a aplicação não realizar a re-tentativa, porém, neste caso não teríamos conhecimento do status do pagamento. Logo, seria necessário negar o pedido do cliente.</p>
  </div>
</aside>

Entretanto, este cenário não aconteceria em um sistema idempotente, pois teríamos a garantia que o resultado das operações seria o mesmo.

## Em detalhes

Agora que entendemos o que é idempotência e por que ela é importante, vamos entender como implementá-la.

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p>Note que podemos garantir este comportamento de diversas maneiras, neste texto vou abordar a solução que se encaixa na maioria dos cenários.</p>
  </div>
</aside>

Inicialmente, devemos definir um identificador único para cada requisição. 

Este valor será o principal responsável por determinar se a operação deve ou não executada. Normalmente, esse identificador é armazenado em um *header* chamado `X-Idempotency-Key`.

Agora, o sistema ao receber a requisição, deve capturar o identificador enviado pelo *client*, executar a operação e persistir o identificador atrelado ao resultado.

É comum, nestes casos, que a persistência seja realizada em uma camada de cache distribuído, pois na grande maioria das vezes só vamos precisar desses valores por determinados períodos de tempo. 

Porém, é importante entender o seu cenário. Em casos mais específicos podemos precisar armazenar esses dados em um banco de dados.

## Moral da história

Neste texto, foi possível perceber que a idempotência, em sistemas distribuídos, é um comportamento essencial para garantir a integridade das operações realizadas.

Além disso, ficou claro que com simples alterações em nossa aplicação podemos implementá-la, aumentando assim a confiabilidade de nossos sistemas.

Agradeço a leitura e recomendo que veja o impacto que um sistema não idempotente causou no Uber Eats, [clique aqui e veja](https://www.youtube.com/watch?v=PVzcWBmN2L0).

Muito obrigado e até mais! 👋

## Para ir mais fundo

- <https://mavericknyk.medium.com/idempotent-rest-apis-eb186c386117>
- <https://medium.com/@shoaibahmd/rest-api-idempotency-building-robust-apis-for-seamless-web-interactions-838241418dcb>
- <https://medium.com/@hamidrezakhaleghi67/idempotency-in-rest-architecture-79568955d6d4>