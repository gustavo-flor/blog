- **Classificação**: Criacional

**Prototype** (também conhecido por **Clone**) é o padrão de projeto que permite a clonagem — 🥸 — de um objeto, em outras palavras, possibilita instanciar um novo objeto na memória se baseando nas informações de um objeto já existente.

## O problema

Imagine que você está criando uma aplicação que gerencia tarefas em um quadro (semelhante ao Jira), e uma das funcionalidades do seu sistema é permitir que o seu usuário duplique uma tarefa ou mais tarefas. 

Duplicar essa tarefa significa não só copiar o seu conteúdo, mas o conteúdo de todas as subtarefas, anexos, links, etc.

Como resolver este problema?

## A solução

Apesar de o problema parecer complexo, a solução no fim é bem simples: 

A ideia é criar uma interface chamada `Prototype` com um método `clone` (você pode nomear como preferir a interface e seu método). 

Com a interface criada, basta implementar nas classes que necessitam ser clonadas e implementar a lógica de cópia para cada objeto.

<aside class="callout">
  <div class="icon">🚩</div>
  <div class="content">
    <strong>Tome cuidado com as referências circulares.</strong>
    </br>
    <p>Se sua classe clonada possui outro objeto dentro dela, é necessário garantir que esse objeto também seja clonado; se não, as referências serão compartilhadas entre ambos os objetos.</p>
  </div>
</aside>

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/prototype>
- <https://sourcemaking.com/design_patterns/prototype>