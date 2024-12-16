O teorema CAP, também conhecido como teorema de Brewer, é um dos princípios fundamentais dos sistemas distribuídos. A premissa do teorema é que nenhum sistema com distribuição de dados pela rede consegue garantir simultaneamente todas as 3 características do teorema, os pilares do teorema são:

1. **C**onsistency (Consistência)
2. **A**vailability (Disponibilidade)
3. **P**artition Tolerance (Tolerância de partição)

Note que CAP é um "acrônimo" das 3 características do teorema.

## Características

Vamos dar uma olhada em cada uma das características e o que é esperado de cada uma delas…

### Consistency (Consistência)

Toda leitura (consulta de dado) deve receber a escrita (alteração / persistência de dado) mais recente ou um erro. Em um sistema consistente **todos os nós** (_nodes_) **devem visualizar o mesmo dado no mesmo momento**, ou seja, consistência está relacionado a ter um ponto focal com o dado mais atualizado possível.

Consistência é sobre garantir que todos os nós visualizam o dado no mesmo estado.

**Disclaimer**: Quando falamos sobre nós (_nodes_), estamos explicitamente falando de sistemas distribuídos, ou seja, um sistema distribuído contém múltiplos nós conectados através da rede, cada nó pode executar o processamento total ou parcial de uma ação da aplicação. Se você ainda tem dúvida sobre isso, recomendo dar um google no assunto.

### Availability (Disponibilidade)

Toda consulta (requisição) deve receber uma resposta (que não seja de erro) - é importante notar que aqui não precisamos garantir que a resposta contém o dado mais atualizado. Em um sistema com alta disponibilidade, **toda requisição feita ao sistema deve resultar em uma resposta de sucesso mesmo se algum nó estiver indisponível**, porém está resposta não necessariamente precisa ser da versão mais atualizada do dado.

Disponibilidade é sobre sempre estar pronto para responder.

### Partition Tolerance (Tolerância de partição)

Diferente das outras características, esta não tem um nome tão concreto e declarativo, basicamente, um sistema deve continuar operando normalmente mesmo com problema na comunicação entre os nós, seja este problema uma falha ou até mesmo lentidão, a palavra partição denota exatamente este tipo de problema, ou seja, o sistema precisa ser tolerante a partição.

Tolerância de partição é sobre saber lidar com falhas na comunicação entre os nós.

Quando ocorre uma partição, precisamos necessariamente escolher se vamos garantir consistência ou disponibilidade. Segue algumas ilustrações para exemplificar:

![image](/images/cap-theorem/partition-tolerance.jpg)

Considere uma situação semelhante a apresentada na imagem acima, temos 1 cluster com 3 nós, as setas representam suas conexões de rede (em vermelho a partição), neste cenário, temos duas possibilidades.

A primeira é escolher garantir consistência, neste cenário indisponibilidade todas as escritas no sistema, ou seja, como não podemos garantir que todos os nós tenham a mesma informação atualizada, vamos impedir que seja possível publicar novas versões de um dado. Note que essa escolha fere a característica de disponibilidade (já que as respostas de escrita deverão retornar erro).

![image](/images/cap-theorem/partition-tolerance-consistency.jpg)

Por outro lado, podemos também optar por garantir disponibilidade, permitindo assim que escrita e leitura ocorram normalmente, porém, neste caso não conseguimos garantir consistência, já que a atualização feita em um dos nós não poderá ser replicada nos demais.

![image](/images/cap-theorem/partition-tolerance-availability.jpg)

## Trade-offs: Ganhos e consequências de cada escolha

Agora que já sabemos o que cada característica representa, vamos dar uma olhada quais são trade-offs (ganho/consequência) de cada escolha.

- **CP (Consistency e Partition Tolerance)**: Essa seleção é interessante para sistemas onde a precisão nos dados é crucial, porém uma taxa de indisponibilidade é aceitável.
- **AP (Availability e Partition Tolerance)**: Geralmente é escolhido para sistemas onde a disponibilidade do serviço é crítica e é tolerável que diferentes nós tenham versões de dados diferentes por um tempo.
- **CA (Consistency e Availability)**: Este cenário é escolhido quando consistência e disponibilidade são fatores essenciais no sistema, porém, é importante notar que se nosso sistema não é tolerante a partições, no momento que ocorrer alguma falha na comunicação entre os nós não vamos conseguir garantir ambas as características (conforme explicado anteriormente), ou seja, em sistemas distribuídos com comunicação em rede este cenário é inviável, já que falha de rede é um problema comumente enfrentado no mundo real.

## Conclusão

Sistemas modernos distribuídos comumente usam uma combinação de estratégias para prover um nível adequado (com base no escopo do sistema) de garantias para cada uma dessas características, ou seja, você não precisa excluir ou deixar de lado nenhuma das características, esse teorema apenas visa apresentar o problema de lidar com sistemas distribuídos.

Em resumo, o teorema CAP prove uma série de fundamentos para entendermos as limitações e consequências de determinadas escolhas durante o desenvolvimento de uma sistema distribuído, porém, é importante notar que no mundo real estes cenários são ainda mais complexos e envolvem o uso de não uma mais várias estratégias para abordar todos os requisitos do sistema.

Em outras palavras, o teorema CAP é um bom ponto de partida para termos visão dos impactos da escolha de nosso system design, principalmente considerando as falhas de rede (partição), entretanto, é importante notar que este é apenas o ponto de partida da discussão, podemos (e vamos) nos aprofundar mais nos próximos artigos, por agora, isto é tudo!

## Referências

- <https://edisciplinas.usp.br/pluginfile.php/2541318/mod_resource/content/1/TeoremaDeBrewer.pdf>
- <https://softwareengineeringdaily.com/2023/05/12/cap-theorem-23-years-later>
- <https://www.ibm.com/topics/cap-theorem>
- <https://www.cs.ubc.ca/~bestchai/teaching/cs416_2020w2/lectures/lecture-mar23.pdf>
- <https://www.geeksforgeeks.org/the-cap-theorem-in-dbms/>
- <https://www.educative.io/blog/what-is-cap-theorem>
- <https://www.youtube.com/watch?v=eWMgsk7mpFc>
- <https://www.youtube.com/watch?v=BHqjEjzAicA>
