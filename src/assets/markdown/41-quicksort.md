O **Quicksort**, um eficiente algoritmo de ordenação, baseia-se em dividir o problema em partes menores — técnica conhecida por _Dividir e Conquistar_ ou _DC_ — utilizando da recursão para resolver esta tarefa.

## Panorama geral

Antes de nos aprofundarmos no **Quicksort**, é importante entendermos seus conceitos base:

- **Dividir e Conquistar (DC)**:  

  É a estratégia de **separar o problema em partes menores** (dividir) e então resolvê-los (conquistar).
    
- **Recursão**:  

  **É quando uma função chama a si mesma**; Uma função recursiva é dividida em duas partes principais: caso recursivo e caso base. O caso recursivo refere-se ao ato de a função chamar a si mesma, e o caso base é a condição que encerra essa chamada recursiva, evitando assim um _loop_ infinito.
    

## Em detalhes

Agora voltamos ao **Quicksort**, o algoritmo de ordenação utiliza essencialmente uma estratégia denominada particionamento para resolver esse problema, entenda:

### Particionamento

Particionar refere-se ao ato de selecionar um número qualquer presente no _array_ — denominamos esse número de pivô (_pivot_) — e então posicionar o pivô de modo que todos os números à sua esquerda sejam menores do que ele e todos os números à sua direita sejam maiores do que ele.

<aside class="callout">
  <div class="icon">🎯</div>
  <div class="content">
    <p>Apesar dos números à esquerda serem menores e os números à direita maiores, isso não significa necessariamente que os elementos estarão ordenados. Mas podemos garantir que o pivô está na posição correta; ou seja, agora precisamos apenas ordenar os números à esquerda e à direita do pivô.</p>
  </div>
</aside>

#### Como funcionaria

- Vamos particionar o seguinte _array_: [3, 7, 4, 2, 0].

Existem diversas formas de selecionar o pivô, porém, agora quero focar apenas em entendermos o que é o particionamento. Em um segundo momento neste texto, vamos nos aprofundar na escolha do pivô. 

Neste exemplo, o nosso pivô sempre será o primeiro número do _array_.

- Antes do particionamento: [<span style="color: red">3</span>, 7, 4, 2, 0].
- Depois do particionamento: [2, 0] + [<span style="color: red">3</span>] + [7, 4].

---

Agora que sabemos o que é particionamento, vamos entender como ordenamos um _array_ utilizando essa estratégia…

#### Como utilizar

Continuando de onde paramos: [2, 0] + [3] + [7, 4].

Note que nessa representação temos dois _arrays_ não ordenados ([2, 0] e [7, 4]), sendo assim podemos particioná-los também. Lembra da estratégia DC e recursão? É isso que estamos fazendo aqui, dividindo o problema de ordenação em partes menores de forma recursiva.

- Antes do particionamento: [<span style="color: blue">2</span>, 0] e [<span style="color: green">7</span>, 4].
- Depois do particionamento: [0, <span style="color: blue">2</span>] e [4, <span style="color: green">7</span>].

Agora temos a representação do nosso _array_ como: [0, 2] + [3] + [4, 7] = [0, 2, 3, 4, 7].

Perceba que nesse exemplo o _array_ já está ordenado, porém, imagine um cenário onde ainda reste _arrays_ não ordenados à esquerda ou à direita do seu pivô, a estratégia deve ser sempre a mesma: seguimos particionando até não sobrar nenhum caso.

<aside class="callout">
  <div class="icon">🤹</div>
  <div class="content">
    <p>Existem diversas formas de realizar a ordenação dos números no momento do particionamento. As duas abordagens mais utilizadas são <i>Lomuto</i> e <i>Hoare</i>, ambas estratégias serão abordadas em um próximo texto individualmente, apresentando seus pontos positivos e negativos.</p>
    </br>
    <p>Você pode dar uma espiada nas implementações através do código fonte disponibilizado ao fim do texto.</p>
  </div>
</aside>

---

### Selecionando um pivô

O ato de definir um pivô é uma das ações mais importantes do **Quicksort**, ao selecionar uma sequência ruim de pivôs afetamos diretamente a performance do algoritmo. 

Vamos entender o que é um pivô ruim:

#### O que é um pivô ruim?

Como sabemos, o objetivo de um pivô é ser a divisão entre dois agrupamentos: números maiores e números menores que ele. 

Consideramos um pivô ruim quando o número selecionado resulta em um de seus lados não preenchidos. Se frequentemente selecionamos um pivô ruim, isso significa que nosso algoritmo aumentará sua pilha de execução recursiva, aumentando assim sua complexidade e uso de memória.

Peguemos o primeiro _array_ de exemplo: [3, 7, 4, 2, 0]. 

Imagine agora que nosso pivô será **sempre** o último número do _array_, começando pelo número 0.

- Antes do particionamento:  [3, 7, 4, 2, <span style="color: orange">0</span>]
- Depois do particionamento: [] + [<span style="color: orange">0</span>] + [3, 7, 4, 2]

Agora vamos particionar o _array_ à direita:

- Antes do particionamento: [3, 7, 4, <span style="color: purple">2</span>]
- Depois do particionamento: [] + [<span style="color: purple">2</span>] + [3, 7, 4]

Note que tivemos diversas vezes o caso em que o _array_ à esquerda (de números menores que o pivô) estava vazio. Casos como esse evidênciam escolhas ruins de pivô. 

Isso acontece pois não estamos dividindo o problema no menor tamanho possível, deixando assim nosso algoritmo menos performático, pois irá executar um maior número de passos.

#### Como escolher um pivô

Temos diversas formas de selecionar um pivô, entretanto, cada uma delas possui seus prós e contras:

- **Constante**: Essa forma é a mais simples, porém, é a mais provável de cair em um cenário de pivô ruim. Aqui, definimos algum índice constante para o pivô, por exemplo, sempre o primeiro, sempre o último, sempre o do meio, etc.
- **Aleatória**: Essa é uma ótima forma para evitar a escolha de um pivô ruim. Selecionamos um número aleatório dentro do _array_. Assim, a chance de cair números sequenciais em que possam gerar casos ruins já diminui bastante. Se você precisa implementar o algoritmo quicksort e não quer perder muito tempo, essa é uma ótima opção.
- **Mediana**: Essa forma é a mais complexa das 3 apresentadas. Consiste basicamente em calcular a mediana entre o primeiro elemento, o elemento do meio e o último elemento do _array_; com a mediana calculada, basta encontrar o número mais próximo presente no _array_, esse será seu pivô. Como pode perceber, essa é a forma mais complexa. Entretanto, dependendo do tamanho do _array_ que precisa ordenar, talvez valha a pena o esforço.

<aside class="callout">
  <div class="icon">💡</div> 
  <div class="content">
    <p>Não vou me aprofundar nesse texto sobre o <i>Big O notation</i>, porém, a título de curiosidade, uma má escolha do pivô pode levar a uma degradação do desempenho do algoritmo para O(n²) no pior caso, enquanto uma boa escolha tende a manter a eficiência média esperada de O(n log n).</p>
    </br>
    <p>Se você não conhece <i>Big O notation</i>, fique tranquilo, abordarei esse tema em um futuro próximo.</p>
  </div>
</aside>

## Moral da história

Como pode perceber, não abordei o código em si do algoritmo **Quicksort** neste texto. 

A ideia de fato aqui é entender o seu funcionamento e objetivo, até porque atualmente todas as grandes linguagens de programação já possuem sua implementação própria do algoritmo. 

Portanto, não precisamos reinventar a roda e sim utilizar as implementações nativas. 

Se mesmo assim você deseja visualizar a implementação desse algoritmo, segue abaixo o repositório com o código fonte:

- [🐱 Java Quicksort Sample](https://github.com/gustavo-flor/java-quicksort)

---

Muito obrigado pela leitura! 🍻

## Para ir mais fundo

Fica a disposição para consumo alguns materiais que utilizei como referência para o texto. 🎨

- <https://edu.anarcho-copy.org/Algorithm/grokking-algorithms-illustrated-programmers-curious.pdf>
- <https://www.geeksforgeeks.org/quick-sort>
- <https://joaoarthurbm.github.io/eda/posts/quick-sort>
- <https://www.youtube.com/watch?v=NuQYFXmLUrM>
- <https://www.youtube.com/watch?v=86WSheyr8cM>