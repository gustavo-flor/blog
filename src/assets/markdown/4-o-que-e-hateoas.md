Falamos recentemente sobre REST, o que é e quais suas principais características, porém, um tema ficou em aberto para conversarmos, e chegou o momento de fazer isto, vamos falar sobre o que é HATEOAS e qual sua relação com REST…

## Introdução

_HATEOAS_ é um acrônimo para _Hypermedia as the Engine of Application State_, podemos traduzir para **Hipermídia como o Mecanismo de Estado da Aplicação**, em alguns artigos é traduzido para "motor" ao invés de "mecanismo", porém mecanismo parece se encaixar melhor (na minha visão), vamos ver mais sobre esse mecanismo no próximo tópico.

## O mecanismo

A proposta de hipermídia como mecanismo de estado da aplicação, nada mais é do que a possibilidade de um REST client conseguir navegar pela nossa aplicação através de links, links estes providos pelo próprio sistemas ao retornar um determinado recurso, não ficou claro? Aqui vai um exemplo:

```json
{
  "movies": [
    {
      "name": "The Hateful Eight",
      "directedBy": "Quentin Tarantino",
      "cast": ["Samuel L. Jackson", "Jennifer Jason Leigh"],
      "year": 2015,
      "awarded": false,
      "_links": [
        {
          "rel": "self"
          "href": "http://localhost:8080/movies/1"
        },
        {
          "rel": "awards"
          "href": "http://localhost:8080/movies/1/awards"
        },
        {
          "rel": "parent"
          "href": "http://localhost:8080/movies"
        }
      ]
    },
    ...
  ],
  "_links": [
    {
      "rel": "self"
      "href": "http://localhost:8080/movies"
    }
  ]
}
```

No exemplo acima temos o retorno de uma lista de filmes (utilizando JSON), para fins didáticos a lista contém apenas 1 filme.

Não sabe o que é JSON? [Leia aqui](./o-que-e-json)

Vamos focar nas propriedades `_links` presentes nesse retorno, note que interessante, cada objeto existente dentro dessa propriedade representa uma possível navegação para aquele determinado recurso, ou seja, o _REST client_ que receber esta resposta consegue saber quais outras possíveis navegações são permitidas a partir de um recurso.

Entendeu a ideia agora? Imagine as possibilidades, o mecanismo de estado da aplicação é isto, agora o próprio servidor pode dizer ao cliente o que ele pode ou não acessar de acordo com o estado de cada recurso.

**Disclaimer**: Existem **N** formas de implementar _HATEOAS_, não fique preso ao exemplo acima, você pode retornar os links no corpo da resposta, no cabeçalho, dentro de um campo específico, etc. Fica a seu critério a forma de implementar, o ponto mais importante aqui é manter um contrato que seja respeitado entre cliente e servidor.

## E qual a relação de _HATEOAS_ com REST?

_HATEOAS_ está diretamente relacionado a ideia de Uniform Interfaces (Interfaces Uniformes), ou seja, é um dos atributos que devem definir um contrato de comunicação entre cliente e servidor.
Roy Fielding cita _HATEOAS_ em seu artigo ao falar sobre os elementos de dados, além disso comenta sobre ser uma opção interessante utilizar os metadados para enviar informações úteis referentes ao recurso.
É obrigatório implementar _HATEOAS_ na minha aplicação REST?
Se você pretende ter uma aplicação RESTful: sim (já que faz parte de um dos requisitos da Uniform Interface), mas talvez a pergunta aqui seja outra…

## Você precisa ter uma aplicação RESTful?

Na maioria das vezes a resposta é: **NÃO**

Se seus _clients_ não precisam e/ou não vão utilizar os links providos por você, por que implementar? Apenas para seguir um padrão? Devemos implementar o que faz sentido para cada sistema e não ficar presos em determinados padrões de arquitetura, os padrões estão aqui para guiar, eles não são regras, ou seja, **se você não precisa, não faça**.

## Conclusão

Apesar do nome mega estranho, _HATEOAS_ é um conceito bem simples, e se engane, apesar de sua simplicidade é possível perceber o impacto que podemos causar com essa funcionalidade, podemos criar interações totalmente dinâmicas com nossos REST clients permitindo criar navegações fluídas através de nossas respostas.

Novamente, vamos manter o bom senso, **se sua aplicação não precisa, não faça**, agora se a sua aplicação precisa, utilize-o, sem dúvida alguma você vai tirar uma vantagem enorme desse mecanismo.

Muito obrigado!

## Referências

- <https://ics.uci.edu/~fielding/pubs/dissertation/top.htm>
- <https://restfulapi.net/>
- <https://medium.com/@alexandre.highrollers/restful-api-for-distributed-hypermedia-system-78dbfb8a58b9>