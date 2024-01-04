**Distributed** **Tracing**, em tradução livre **rastreamento** **distribuído**, é um padrão arquitetural de microserviços utilizado para facilitar e otimizar a observabilidade em sistemas distribuídos.

Esse padrão permite o acompanhamento otimizado das requisições que viajam por múltiplos sistemas de uma aplicação.

Apesar de o conceito ser simples, seu impacto é — no mínimo — importante, por isso este tema está cada vez mais presente quando falamos de observabilidade em sistemas distribuídos.

Vamos entender seus principais conceitos e necessidades...

## Traces e Spans

Traces e spans são os principais termos desse padrão, o **trace** (rastro) representa todo o caminho de uma requisição, e o **span** representa uma (das muitas) operações de uma requisição, ou seja, os **spans** representam toda a trajetória de um **trace**.

## Propagação de contexto

O **contexto** nada mais é que o objeto que contém as informações do serviço que está realizando a comunicação e do serviço que está recebendo a comunicação, dessa forma será possível correlacionar os **spans** associados a um **trace**.

Sabendo disso, **propagação de contexto** é o mecanismo que dissemina/gerencia esse objeto através dos serviços, garantindo assim que os traces sejam distribuídos, e agora entendemos a motivação do nome _distributed tracing_.

## Agregador de traces

Basicamente, o agregador de **traces** é um componente/ferramenta responsável por agrupar, armazenar e organizar os traces de vários serviços em um sistema distribuído.

Algumas ferramentas de código aberto disponíveis no mercado:

- [Jaeger](https://www.jaegertracing.io/)
- [Zipkin](https://zipkin.io/)

É importante destacar que também existem softwares pagos que disponibilizam essa funcionalidade _on-demand_, alguns exemplos são [Datadog](https://www.datadoghq.com/), [Dynatrace](https://www.dynatrace.com/) e [New Relic](https://newrelic.com/).

## Casos de uso

A capacidade de visualizar os dados das requisições de um sistema distribuído pode ser muito útil para identificar como nossos serviços funcionam.

Alguns dos principais usos para os traces distribuídos são:

1. Verificação e identificação de erros
2. Análise de performance
3. Tracking de dependências entre os sistemas
4. Análise de segurança

## Moral da história

É evidente que com o aumento da maturidade sobre sistemas distribuídos e, em especial, arquitetura de microserviços, o tema observabilidade vem sendo cada vez mais discutido e ampliado devido à necessidade de entendermos profundamente o que acontece nos fluxos dos nossos sistemas.

O padrão arquitetural *Distributed Tracing* vem exatamente para suprir essa necessidade, permitindo uma visualização completa de todo o fluxo do seu sistema de ponta a ponta.

Se você ainda não utiliza, recomendo fortemente a implementação de uma prova de conceito e, se os resultados fizerem sentido para suas necessidades, replique-o para todo seu sistema.

## Para ir mais fundo

- <https://gethelios.dev/distributed-tracing>
- <https://w3c.github.io/trace-context>