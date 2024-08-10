Nos dias de hoje, a performance de uma aplicação é um aspecto crítico para garantir a usabilidade de um sistema.

Imagine lançar uma nova funcionalidade ou produto e, então, seu sistema simplesmente quebrar por conta da quantidade de tráfego que está recebendo.

Esse tipo de situação pode causar uma má impressão do seu sistema e até mesmo frustrar seus usuários, fazendo com que inúmeras oportunidades com esses clientes sejam perdidas.

É neste cenário que os testes de carga surgem, vamos entender o que são testes de carga…

## Em detalhes

Simulando diferentes cargas de uso em um sistema, os testes de carga nos ajudam a identificar possíveis gargalos antes mesmo que eles ocorram em produção.

Essa abordagem permite garantir que seu sistema gerencie de forma eficiente a execução das tarefas, mesmo sob alta demanda.

Para garantir que os cenários dos ambientes produtivos sejam simulados com maestria, os testes de carga se dividem em diferentes tipos, cada um focando em uma determinada carga e duração, vamos entender…

### Tipos de teste de carga

![Gráfico com tipos de teste de carga e suas respectivas durações](/load-tests/types-of-load-test.png)

A lista a seguir apresenta os 6 tipos de testes de carga mais comuns e o objetivo de cada um deles:

- **Smoke test**

É um tipo de teste que tem como objetivo principal garantir que a aplicação consegue lidar bem com uma carga leve de requisições. 

Normalmente, é utilizado como pré-teste para outros tipos de testes de carga.

- **Load test**

Em resumo, este teste tem como objetivo principal assegurar que a aplicação consegue suportar a carga média de uso do sistema. 

A duração deste teste é de aproximadamente 5 a 10 minutos.

- **Stress test**

Verifica a funcionalidade do sistema sob uma carga superior à média esperada; sua duração é semelhante à do **load** **test**.

- **Spike tes**t

Tem como objetivo principal entender como o sistema se comporta com uma alta taxa de requisições em um curto período de tempo, testando volumes muito acima da média esperada em um período de alguns segundos.

- **Soak test**

A ideia principal aqui é identificar possíveis vazamentos de memória ou problemas de performance, portanto, o teste é executado durante um longo período com carga média de uso.

- **Breakpoint test**

Seu principal objetivo é identificar a carga máxima na qual o sistema falha (*break point* = ponto de quebra). 

Diferente dos demais, não possui uma carga específica; a ideia é aumentar gradualmente a carga do sistema até que ele comece a falhar.

## Moral da história

Como é possível perceber, com ações proativas é possível identificar problemas antes mesmo que ocorram em produção, garantindo assim que gargalos sejam identificados e estratégias de gerenciamento de carga possam ser utilizadas para garantir a melhor usabilidade do sistema.

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p>Se está se perguntando sobre uma ferramenta de testes de carga, de uma olhada em <a href="https://k6.io" target="_blank">k6.io</a>.</p>
  </div>
</aside>

Espero que tenha gostado da leitura e até breve! 👋

## Para ir mais fundo

- <https://grafana.com/load-testing/types-of-load-testing>
