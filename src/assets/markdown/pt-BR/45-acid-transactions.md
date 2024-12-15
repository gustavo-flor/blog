Em um sistema de banco de dados, uma transação representa uma unidade de trabalho (operação lógica). 

Esta operação deve ser executada de forma atômica, ou seja, tudo deve ser executado (*commitada*) ou nada deve ser executado (*revertida*).

Para exemplificar, podemos pensar na operação de retirada de dinheiro em um caixa eletrônico. Independente do que aconteça, não existe estado intermediário; o dinheiro é ou não sacado. Em outras palavras, a operação é executada de forma total.

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p>As transações consistem basicamente na composição de uma ou mais operações de banco de dados, como operações de leitura (<code>SELECT</code>), escrita (<code>INSERT</code>, <code>UPDATE</code> e <code>DELETE</code>), etc.</p>
  </div>
</aside>

## Em detalhes

Transações ACID são um conjunto de características que garantem que a confiabilidade das operações processadas em um banco de dados.

O acrônimo ACID significa **Atomicidade**, **Consistência**, **Isolamento** e **Durabilidade**. 

![Imagem com cada letra da palavra ACID e sua definição. A: Atomidade, C: Consistência, I: Isolamento e D: Durabilidade](/acid-transactions/banner.png)

Agora vamos entender o que cada característica representa:

- **Atomicidade**: Refere-se ao fato de toda transação ser “tudo ou nada”; ou seja, se uma parte das operações falhar, a transação deve falhar por completo, e, por consequência, o estado do banco de dados não deve sofrer alterações.

- **Consistência**: Garante que a transação não pode violar as regras de consistência do banco de dados. Ou seja, se alguma operação deixar o banco de dados em um estado inválido, a transação é revertida.

- **Isolamento**: Assegura que múltiplas transações possam ocorrer de forma concorrente sem interferir uma na outra. Cada transação opera de forma independente, como se fosse a única transação sendo executada no banco de dados. Os níveis de isolamento definem em qual grau as transações estão isoladas umas das outras.

- **Durabilidade**: Garante que, após uma transação ser executada (*commitada*), suas alterações serão permanentes, ou seja, devem sobreviver a falhas no sistema. É importante notar que as alterações são permanentes até que uma nova operação de alteração seja executada.

## Moral da história

Em resumo as transações ACID são essenciais para garantir integridade, confiabilidade e consistência em nossos sistemas de banco de dados. 

Ao assegurar que as operações sejam atômicas, consistentes, isoladas e duráveis, essas transações fornecem a base para um processamento confiável, mesmo em ambientes complexos, proporcionando assim um sistema de banco de dados robusto e tolerante a falhas.

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p>Apesar de transações ACID serem amplamente utilizadas em bancos de dados relacionais, não se engane, alguns bancos de dados não relacionais também apresentam suas próprias implementações ACID.</p>
  </div>
</aside>

## Para ir mais fundo

- <https://www.databricks.com/br/glossary/acid-transactions>
- <https://www.mongodb.com/basics/acid-transactions>
- <https://medium.com/opensanca/o-que-%C3%A9-acid-59b11a81e2c6>