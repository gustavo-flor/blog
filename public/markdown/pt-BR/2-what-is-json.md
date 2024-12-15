Hoje vamos falar de JSON, uma tecnologia mainstream quando falamos de comunicação entre sistemas baseados em comunicação por rede, o objetivo é entendermos suas características e principalmente os motivadores para ser tão utilizado.

Vem comigo…

---

O acrônimo JSON vem de JavaScript Object Notation, é um formato leve para gravar e transportar dados, é utilizado comumente na comunicação entre aplicações cliente-servidor, é “auto descritivo” e fácil de entender.

Aqui um simples exemplo:

```json
{
 "filmes": [
  {
   "nome": "Os Oito Odiados",
   "dirigidoPor": "Quentin Tarantino",
   "elenco": ["Samuel L. Jackson", "Jennifer Jason Leigh"],
   "ano": 2015,
   "premiado": false
  },
  {
   "nome": "Bastardos Inglórios",
   "dirigidoPor": "Quentin Tarantino",
   "elenco": ["Brad Pitt", "Christoph Waltz"],
   "ano": 2009,
   "premiado": true
  }
 ]
}
```

Como pode notar, sem muita dificuldade é possível identificar que estamos recebendo uma representação de uma lista de filmes do diretor Quentin Tarantino.

## Sintaxe

- Os dados são escritos em pares no formato chave-valor
- **Chave**: Deve definir o nome do atributo, precisa ser escrito com aspas duplas
- **Valor**: Pode ser uma _string_, _boolean_, _number_, _array_, _object_ ou até mesmo _null_
- Os dados são separados por vírgulas
- As chaves (`{` e `}`) definem um _object_
- Os colchetes (`[` e `]`) definem um _array_

## Características

### Fácil de entender

JSON é simples para nós humanos lermos e escrevermos, o que faz dele uma escolha popular para arquivos de configuração e transporte de dados entre diferentes serviços.

### Agnóstico a linguagem

JSON não é atrelado a nenhuma linguagem de programação e é suportado por uma enorme gama de linguagens, o que torna ele super adaptável.

### Leve

JSON é leve considerando que não carrega consigo informações “desnecessárias” para representar um dado, o que faz dele eficiente para ser utilizado na comunicação entre sistemas.

## Conclusão

JSON é um formato bem similar a criar objetos no JavaScript, com algumas pequenas diferenças, por exemplo a obrigação de utilizar aspas duplas no nome dos atributos

Comumente utilizado no estilo arquitetural REST, em conjunto do HTTP, não sabe o que é REST? [Clique aqui e saiba mais](./1-what-is-rest.md).

Mesmo com a similaridade com o JavaScript, qualquer linguagem de programação pode ler e escrever JSON, e essa sem dúvida é uma das principais razões da popularidade dessa tecnologia, em conjunto com a ideia de ser fácil de entender e ser auto descritivo, que ajuda muito também.

## Referências

- <https://www.w3schools.com/whatis/whatis_json.asp>
- <https://restfulapi.net/json/>