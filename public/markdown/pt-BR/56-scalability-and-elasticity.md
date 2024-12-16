Hoje, vamos falar sobre **escalabilidade** e **elasticidade** — conceitos relacionados, porém distintos, que muitas vezes são utilizados de forma incorreta como sinônimos.

Neste texto, esperamos que, ao final, você seja capaz de diferenciar e entender os detalhes de cada um desses conceitos, distinguindo-as de acordo com o cenário apresentado.

## Em detalhes

Agora, vamos explorar as principais definições e diferenças entre **escalabilidade** e **elasticidade**.

### Escalabilidade

Escalabilidade é definida como a **capacidade de uma aplicação crescer** verticalmente e/ou horizontalmente.

- **Escalabilidade vertical** ocorre quando adicionamos mais recursos a uma única máquina, como memória e CPU.
- **Escalabilidade horizontal** acontece quando adicionamos mais máquinas (pods, containers, nodes, etc.).

Vale destacar que é possível escalar tanto vertical quanto horizontalmente, ou optar por apenas uma abordagem, dependendo da necessidade.

<aside class="callout">
    <div class="icon">💡</div>
    <div class="content">
        <p>Arquiteturas de <strong>microserviços</strong>, em particular, se beneficiam da escalabilidade horizontal. Isso porque permitem que partes específicas do sistema sejam escaladas individualmente, aumentando a eficiência e otimizando recursos.</p>
    </div>
</aside>

Em resumo, a **escalabilidade** é um requisito planejado com antecedência, baseado em previsões de demanda. O processo é geralmente manual, aumentando a capacidade da aplicação antes que a carga cresça, garantindo que o sistema esteja preparado para suportar o volume esperado.

Quanto aos **custos**, eles aumentam proporcionalmente ao crescimento previsto da carga do sistema. À medida que a demanda por recursos aumenta – seja por processamento, armazenamento ou outros fatores – torna-se necessário escalar bancos de dados e sistemas, o que eleva os custos de escalabilidade.

### Elasticidade

Elasticidade é a capacidade de uma aplicação em **se adaptar automaticamente a variações na carga de trabalho**, utilizando escalabilidade para manter a performance e a usabilidade em picos de uso.

Ela também evita que recursos fiquem ociosos em momentos de baixa demanda, otimizando a utilização do sistema.

Ao contrário da escalabilidade, a elasticidade é automática, reativa e "não planejada". Ao invés de definir exatamente o quanto a aplicação deve escalar, você estabelece parâmetros para que o ajuste aconteça de forma dinâmica e sob demanda.

Os **custos** são proporcionais ao uso real do sistema – você paga apenas pelo que consome. No entanto, na _cloud_, o uso sob demanda costuma ser mais caro, pois os provedores não conseguem planejar com exatidão a alocação de recursos antecipadamente.

## Análise Comparativa

A seguir, apresento uma tabela simples com as principais características e diferenças entre **escalabilidade** e **elasticidade**:

|               | Escalabilidade                                                        | Elasticidade                                                        |
| ------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Definição** | Capacidade de a aplicação crescer verticalmente ou horizontalmente.   | Capacidade de a aplicação se adaptar a diferentes volumes de carga. |
| **Uso**       | **Planejado**: Aplicado quando a carga de trabalho é previsível.      | **On-Demand**: Aplicado quando a carga é variável e imprevisível.   |
| **Custo**     | **Pay-as-you-grow**: Paga conforme cresce.                            | **Pay-as-you-use**: Paga conforme usa.                              |

Como podemos ver, a **escalabilidade** é essencial para garantir a **performance e disponibilidade** de uma aplicação em cenários com previsibilidade de uso. Ela permite que o sistema se prepare antecipadamente, ajustando sua capacidade de forma planejada.

Por outro lado, a **elasticidade** é uma "adaptação" da escalabilidade, ideal para situações em que a carga é variável e imprevisível. Ela garante que a aplicação se adapte de forma inteligente, evitando desperdícios com recursos ociosos.

## Moral da história

É importante encontrar um **equilíbrio entre escalabilidade e elasticidade** para otimizar custos e desempenho. 

Planejar parte da capacidade com antecedência pode reduzir gastos ao evitar custos elevados de recursos sob demanda, enquanto a elasticidade garante que o sistema esteja preparado para picos inesperados sem comprometer a experiência do usuário.

Com este conteúdo, espero ter ajudado você a entender e diferenciar escalabilidade e elasticidade, e como esses conceitos impactam o desempenho e custo das aplicações. 

---

**Obrigado por acompanhar até aqui!** 

Se precisar de mais informações, confira os links abaixo. Até a próxima! 👋

## Para ir mais fundo

- <https://www.wrike.com/blog/scalability-vs-elasticity/>
- <https://www.couchbase.com/blog/scalability-vs-elasticity/>
- <https://middleware.io/blog/elasticity-vs-scalability/>
- <https://www.geeksforgeeks.org/scalability-and-elasticity-in-cloud-computing/>
- <https://www.outsystems.com/tech-hub/cloud-dev/cloud-scalability-vs-elasticity/>
