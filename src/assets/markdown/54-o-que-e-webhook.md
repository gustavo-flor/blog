Webhook é uma forma de comunicação entre sistemas através de *callbacks*. 

Esses *callbacks* que são endpoints HTTP disponibilizados por uma aplicação, que atuam como event *listeners*.

Possibilitando assim a comunicação em tempo real entre sistemas sem a necessidade de polling.

## Em detalhes

Imagine um cenário onde uma determinada aplicação deseja ser notificada sempre que uma compra for realizada em uma plataforma de e-commerce.

Para que essa comunicação seja realizada através de webhooks, será necessário que:

1. A plataforma de e-commerce disponibilize um endpoint (ou qualquer outro meio) para que a aplicação consiga informar uma URL para ser utilizada como webhook.

2. A aplicação configure a URL do webhook (endpoint que será chamado ao acontecer o evento).

3. O e-commece, ao processar uma compra com sucesso, utilize a URL informada para enviar uma requisição HTTP com os dados da nova compra.

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    É comum que o método HTTP utilizado na requisição seja o `POST`. Entretanto, este verbo pode variar de acordo com a implementação.
  </div>
</aside>

## Panorama geral

Vamos supor que a plataforma de e-commerce disponibilize o seguinte endpoint para configuração de webhooks: 

- `https://ecommerce.com/v1/webhooks/register`. 

A aplicação cliente pode enviar uma requisição POST para este endpoint com a URL do webhook, como mostrado abaixo:

```shell
POST /v1/webhooks/register HTTP/1.1
Host: ecommerce.com
Content-Type: application/json

{
  "webhook_url": "https://aplicacao.com/v1/new-purchase"
}
```

Quando uma compra for realizada, a plataforma de e-commerce enviará uma requisição para a URL configurada:

```shell
POST /v1/new-purchase HTTP/1.1
Host: aplicacao.com
Content-Type: application/json
Authorization: Bearer x.y.z

{
  "event": {
    "id": "54520505-be85-40c8-a575-0ec33908f1a8",
    "value": 50.75
  }
  "date": "2024-06-30T12:34:56Z"
}
```

## Fique de olho

É importante implementar autenticação e validação dos dados recebidos para garantir a segurança da comunicação via webhooks.

É comum que ao enviar um webhook a aplicação espere receber algumas camadas de proteção.

Por exemplo, um token nos headers da requisição com a assinatura do payload enviado, garantido a confiabilidade entre a fonte e o destino.

## Moral da história

Com o texto foi possível notar que, apesar de um conceito simples, webhook é uma estratégia poderosa para notificação entre aplicações em tempo real, economizando recursos e reduzindo a complexidade das comunicações.

Muito obrigado pela leitura, até breve! 👋

## Para ir mais fundo

- <https://www.redhat.com/en/topics/automation/what-is-a-webhook>
- <https://progrium.github.io/blog/2007/05/03/web-hooks-to-revolutionize-the-web>