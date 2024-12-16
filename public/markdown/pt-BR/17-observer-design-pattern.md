- **Classificação**: Comportamental

O Design Pattern **Observer** permite criar um mecanismo — _pub/sub_ — de processamento orientado a eventos, ou seja, permite que _o subscriber_ (o inscrito) fique sabendo sobre uma mudança sem precisar ficar checando constantemente _o publisher_ (a fonte).

## O problema

Imagine que você mora em um apartamento e está esperando uma encomenda, a toda hora você desce até a portaria (a fonte) e verifica com o porteiro se sua encomenda chegou, imagine como essa situação pode ser frustrante e morosa, você pode passar dias fazendo uma ação repetida até que o evento esperado tenha acontecido (recebimento da encomenda).

Como resolver este problema?

## A solução

Seguindo o problema apresentado anteriormente, uma solução é inverter a responsabilidade sobre a verificação do evento (recebimento da encomenda), ao invés de todos os dias verificar na portaria se sua encomenda chegou, que tal combinar com o porteiro para ele interfonar para seu apartamento quando a encomenda chegar?

Dessa forma você evita gastar tempo indo de forma desnecessária verificar se o evento aconteceu e o porteiro (_subscriber_) te notifica quando necessário.

Essa é a principal ideia do **Observer**, um objeto fonte permite que outros objetos se tornem inscritos seus, e a cada novo evento o objeto fonte notifica todos os seus inscritos sobre uma determinada alteração.

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/observer>
- <https://sourcemaking.com/design_patterns/observer>