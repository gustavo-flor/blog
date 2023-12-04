A revisão de código é uma parte crucial do processo de desenvolvimento de software, é o momento onde desenvolvedores examinam o código fonte de outros desenvolvedores com objetivo de prover sugestões/_feedbacks_ sobre as alterações realizadas, com essa prática conseguimos aumentar a qualidade do código, diminuir a ocorrência de **_bugs_** e melhorar a manutenabilidade do código.

Além dos pontos destacados, a revisão de código tem forte impacto na criação de um ambiente colaborativo e de aprendizado contínuo, pois os desenvolvedores podem compartilhar suas experiências com outros desenvolvedores — muitas vezes menos experientes — o objetivo desse texto é repassar algumas dicas e boas práticas que aprendi durante esses anos em que escrevi código.

## Quais são os benefícios dessa prática?

Como já comentado anteriormente, a prática da revisão de código traz inúmeros benefícios para o processo de desenvolvimento de software, portanto, separei alguns dos que entendo como principais benefícios dessa atividade para compartilhar com vocês, são eles:

### Melhorar a qualidade do código

Através da análise continua em busca de potenciais erros, problemas de performance e implementações que fogem das boas práticas, a revisão de código ajuda a mantermos um alto nível de qualidade e manutenabilidade do código fonte, garantido assim que novos desenvolvedores consigam incrementar e modificar os comportamentos existentes de forma simples, fácil e escalável.

### Prevenção contra *bugs*

O quanto antes um problema for identificado, melhor — ou seja — encontrar **bugs** no momento da revisão de código vai consequentemente economizar tempo e recurso que seriam gastos na resolução deste problema se fosse feito em uma etapa posterior, além disso prevenimos o impacto no cliente final do nosso produto.

### Compartilhar conhecimento

Os **desenvolvedores podem aprender com as experiências já vividas por outros desenvolvedores**, ou seja, conseguimos agregar por vezes **anos de conhecimento** com alguns comentários em uma revisão de código.

No fim deste texto vou contar uma breve história de como isso me impactou positivamente quando estava iniciando na área de programação.

---

🌀 Além dos benefícios citados, a revisão de código mitiga riscos, melhora a eficiência do desenvolvimento, promovê colaboração entre os desenvolvedores, garante consistência no código, etc.

## Boas práticas para quem executa a revisão de código

Acredito que conseguimos notar que a revisão de código traz inúmeros benefícios para o processo de desenvolvimento de software, sabendo disso separei então algumas coisas que não devem faltar no seu _checklist_ na hora de realizar revisão código.

### 1. Saiba qual o estado atual do projeto/produto

Uma coisa muito importante no momento de revisar o código é entender qual é a situação atual do projeto/produto em que aquele código está sendo escrito, o projeto é maduro e estável? o projeto esta no seu ínicio? o produto sabe para onde está indo?

Inicialmente pode parecer que o estado atual do projeto não deveria ter relação com a revisão do código, pois — na teoria — sempre é preciso revisar o código de forma eficaz e mantendo a barra alta, correto?

O pensamento está certo, porém, é importante notar que em projetos não tão maduros, talvez não devemos focar tanto em como a regra de negócio esta implementada ou se tudo foi implementado da forma mais escalável possível, pois talvez, na próxima semana tudo mude e o projeto simplesmente precise ser reescrito.

Por outro lado, em um projeto já estável e maduro vamos precisar ter mais foco na manutenabilidade do código, impactos de performance e segurança, ou seja, vamos gastar mais tempo na revisão de código de um projeto já maduro. Não estou dizendo que em um projeto menos maduro não vamos olhar para performance, segurança e manutenabilidade do código, o fato aqui é que quanto mais maduro o projeto, mais atenção vamos dar para esses detalhes.

### 2. Defina um escopo de revisão

Aqui a ideia é entender quais serão os pontos que vamos revisar no código, se o código está seguindo o code style do projeto, se esta cumprindo os requisitos para cumprir o seu objetivo, quais são efeitos colaterais, se as variáveis foram bem nomeadas, se as boas práticas estão sendo seguidas, se os combinados internos foram implementados, entre inúmeros outros pontos que podemos selecionar para revisar.

Portanto, identifique quais são os itens necessários para sua revisão, agora com um escopo bem definido fica simples saber o que procurar no código e quais pontos dar mais atenção. 

### 3. Dê feedback e compartilhe experiência

Com seu escopo em mãos, sempre que encontrar algo que foge do esperado (ou cause alguma dúvida) não deixe de comentar no código sobre isso, questione o autor sobre o motivo da implementação e descreva o por que você acha que aquela implementação fere algum dos itens no seu checklist, deixe seu feedback sobre cada ponto no código que foge do esperado (na sua visão).

Além disso, compartilhe experiência, se você vê algum ponto que pode causar algum comportamento inesperado (_bug_), ou alguma implementação que pode ser feita de forma mais simples, não deixe pra depois, compartilhe o que você sabe e ajude o desenvolvedor a melhorar esse código. 

É importante ressaltar, o código não é seu e muito menos de quem escreveu, o código é da equipe que trabalha nesse produto, portanto, todos deve zelar por ele.

Se for possível **sempre** deixe links e referências sobre o que você esta falando, mostre exemplos e etc. Isso facilita para o autor entender o que você esta pensando e além disso facilita na correção do problema (se for o caso).

### 4. Utilize emotes 🤟

Sabemos que não devemos levar nenhum feedback no nosso código para o coração, porém, seres humanos naturalmente ficam incomodados com críticas (sejam elas qual for), poratnto, continue dando seu feedback e compartilhando experiência, mas se quiser deixar isso mais leve, que tal usar algum emote? 

Confesso que uso bastante, deixa a discussão mais leve e deixa claro que não estou atacando ninguém, mas sim levantando questionamentos sobre algum ponto nebuloso no código.

**Agora uma dica extra…**

### [Extra] 5. Elogie

Já revisou aquele código que o autor fez uma refactor muito massa? Ou aquele código que segue as melhores práticas, esta bem descrito e facilita sua revisão? 

Aproveite e deixe um elogio para o autor nesses casos, pode parecer algo bobo e que apenas vai massagear o ego de alguém, porém, se o código foi tão bem escrito, por que não incentivar esse tipo de atitude? Vai lá sem medo e elogie, tenho certeza que esse desenvolvedor vai se esforçar para fazer ainda mais daquilo. 

Essa ação é benéfica para todos, o autor ganha pois teve seu trabalho e esforços reconhecidos e você ganha nas próximas revisões, pois um código bem escrito é sempre mais simples de revisar.

## Boas práticas para quem solicita a revisão de código

Agora que já sabemos algumas boas práticas da revisão de código, vamos falar sobre as boas práticas para quem solicita a revisão de código, pois, só conseguimos permitir que os revisores atinjam um nível exceptional de revisão quando provemos um ambiente excepcional para revisão, aqui estão algumas boas práticas para fazer na hora de pedir para darem uma olhada no seu código.

### 1. Revise antes de todos

Antes de sair solicitando que outros revisem seu código, que tal **revisar por conta própria antes de todos**? 

Pode até parecer não fazer sentido já que você que escreveu o código, porém, enquanto estamos imersos escrevendo a implementação, podemos deixar passar batido algumas boas práticas, podemos acabar commitando alguma parte do código que colamos apenas para um “teste rápido”, quem nunca acabou deixando passar um `log("test")` sem perceber? 

Por esses motivos é importante que você faça a revisão antes de todos. 

Assim você salva tempo dos revisores, fazendo com que eles gastem menos tempo e possam focar nos pontos cruciais do código.

### 2. Garanta que você entende toda sua implementação

Nada pode ser mais constrangedor que não saber explicar o próprio código que escreveu e quais suas motivações, portanto, garanta que você entende **toda** sua implementação.

E o qual a relação de entender sua implementação com a revisão de código?

Se o autor do código não consegue entender sua implementação, imagine os revisores; Portanto, garanta que seu código esta escrito de forma clara e auto explanatória, e que não fique dúvidas para quem revisa o código. 

Além disso, um outro ponto positivo de entender sua implementação, é que caso algum revisor questione algo sobre sua implementação, você tem total capacidade de defender sua ideia e motivação.

### 3. Escreva uma boa descrição

Seu código deve explicar **o que faz**, sua descrição deve explicar **o por que faz**, ou seja, enquanto seu código deve ser auto explicativo, a descrição deve explicar as nuancias e motivações da alteração, estamos modificando o código para corrigir um bug? estamos adicionando uma nova funcionalidade? qual o impacto esperado dessa funcionalidade, etc. 

Essas informações em primeiro momento podem parecer desnecessárias, porém elas ajudam o revisor a entender quais são os possíveis efeitos colaterais da alteração e entender se todos os requisitos estão sendo cobertos conforme o esperado. 

### 4. Selecione os revisores e envie uma mensagem descrevendo brevemente sua alteração

Se todos os itens anteriores foram feitos corretamente, chegou a hora de mandar seu código para os outros desenvolvedores revisarem.

Selecione os revisores que tenham conhecimento suficiente para analisar seu código, capriche na escrita de uma breve mensagem explicando sua alteração e envie para os revisores selecionados (pode ser enviado de forma individual ou em algum grupo com toda a galera).

**Agora uma dica extra…**

### [Extra] 5. Revise o código dos seus colegas

Essa é minha dica extra para quem busca ter seu código revisado mais rapidamente e de forma eficaz: revise o código dos outros, revisando código de outras pessoas você aprende formas de melhorar o seu próprio código. 

Além disso demonstra aos outros desenvolvedores sua atenção ao código deles, seres humanos dão muito valor a atenção, ou seja, os desenvolvedores vão desejar retribuir sua ação revisando também seu código.

É importante notar que a ideia é manter a revisão com uma barra alta, ou seja, não busque por trocas de **aprovação**, mas sim trocas de **revisão** e **experiência**.

## Compartilhando uma experiência

Fazendo jus ao texto, vou compartilhar uma experiência que passei com revisão de código que demonstra bem a ideia coberta nesse post, no meu primeiro trabalho, uma das minhas primeiras tarefas era manipular uma *String* concatenando uma série de valores que recebiamos através de um **loop**, segue uma visualização de como meu código se parecia (não vou abordar qualquer lógica de negócio aqui, a ideia é visualizar apenas a situação):

```java
public String handleLoop() {
	String value = "";
	for (int i = 0; i < N; i++) {
		value += i;
	}
	return value;
}
```

Você vê algum possível problema no código acima? Se não, segue a linha de raciocínio e vamos entender juntos o que pode acontecer nesse código…

Sabemos que a String é uma classe imutável, ou seja, todas as vezes que alteramos o seu valor, na verdade estamos criando uma nova instância de uma String na memória, no código acima temos uma constante com valor não informado, a constante `N`, se essa constante tiver um valor pequeno, talvez o impacto é mínimo, porém se essa constante tiver um valor grande (e no meu caso era um loop **bizarramente** grande) podemos ter um impacto de performance, e eu como júnior na época não fazia ideia desse problema, um desenvolvedor mais experiente comentou no código me explicando o problema e comentando a possível solução (utilizando `StringBuilder`).

Para os curiosos, foi algo nesse estilo a solução:

```java
public String handleLoop() {
	final var value = new StringBuilder();
	for (int i = 0; i < N; i++) {
		value.append(i);
	}
	return value.toString();
}
```

E essa é a maravilha da revisão de código, naquele momento com minha experiência não consegui ver essa possibilidade de problema, porém, um desenvolvedor mais experiente e que já tinha passado outras vezes por esse cenário conseguiu compartilhar isso comigo e de forma muito simples e rápida mitigamos um possível problema de performance que teríamos no futuro.

## Conclusão

Podemos concluir que a revisão de código é um processo importantíssimo no fluxo de desenvolvimento de software, com esse texto tentei repassar algumas dicas e boas práticas que aprendi durante esses anos que trabalho na área. 

Espero que você consiga aplicar algum dos itens que comentei acima e que eles melhorem o seu fluxo de revisão de código.

Com gratidão sincera, muito obrigado por ler até aqui, se ficou com dúvida e/ou tem alguma sugestão de melhoria para o post, entre em contato comigo `@gustavoflor_` no Instagram/Twitter.

## Referências

- <https://medium.com/@alexandragrosu03/the-art-of-code-review-building-a-collaborative-and-quality-focused-development-culture-5b10dc0ecbc7>
- <https://blog.stackademic.com/4-things-to-keep-in-mind-when-undergoing-a-code-review-63f858205648>
- <https://blog.stackademic.com/are-you-doing-the-vcode-review-88ff05a2694b>