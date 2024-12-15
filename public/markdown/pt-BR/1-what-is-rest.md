Se você pensou em descanso, lamento ter que informar, porém não será o tema do artigo de hoje, na verdade vamos falar sobre um estilo de arquitetura de software, em algumas literaturas também chamado de padrão arquitetural, e não vamos confundir com padrões de projeto (Design Patterns), um estilo arquitetural nada mais é que um guia de princípios/restrições que um software precisa contemplar para atingir determinado objetivo, agora vamos entender melhor o que é REST…

## Introdução

REST é um acrônimo para REpresentational State Transfer, em uma tradução livre transferência de estado representacional, o termo foi apresentado por Roy Fielding nos anos 2000, é um estilo arquitetural para sistemas distribuídos de hipermídia (distributed hypermedia systems), melhor dizendo, REST é um estilo arquitetural híbrido, é uma combinação de diversos outros estilos arquiteturais de software baseados em comunicação via rede, e agregados com algumas regras e critérios que então unidos formam um contrato homogêneo para arquitetura de um software para a web moderna.

Talvez você tenha ficado confuso com o termo hipermídia (hypermedia), apesar do termo não ser muito comum e utilizado na atualidade, nada mais é do que a capacidade de conseguirmos conectar informações em diferentes lugares da web através de links e/ou outras formas de redirecionamento, por exemplo o HTML (tecnologia presente em todos os sites da web) é uma HyperText Markup Language (linguagem de marcação de hipertexto), quando falamos de hipermídia, estamos dizendo que vamos além do texto apenas, tratando de imagens, documentos, etc.

## Princípios fundamentais

Serviços que seguem estes princípios (em sua totalidade) são denominados RESTful, e um serviço aplica estes 6 princípios está propenso a melhorar sua performance, confiabilidade (reliability) e a re-usabilidade, pois seus componentes podem ser modificados de forma incremental sem afetar o sistema como um todo.


### 1. Client-Server

Este princípio dita que precisamos desacoplar o consumidor do serviço do fornecedor do serviço em duas diferentes entidades, chamadas respectivamente de client (cliente) e server (servidor), separando essas responsabilidades conseguimos garantir que cada entidade consegue evoluir de forma independente, sem precisar conhecer do contexto da outra entidade.

O client é responsável pela interface do usuário e sua experiência, tendo como objetivo principal lidar com a apresentação dos dados para o usuário e manipular as ações solicitadas pelo usuário.

O server é responsável pelas regras de negócio, por persistir os dados, gerenciar como o dado será criado e alterado, e principalmente disponibilizar uma interface para que o client consiga realizar operações nos dados armazenados.

### 2. Stateless

Em um serviço RESTful, toda requisição (partindo do client) deve conter todas as informações que o servidor precisa para completar a operação requisitada, sem que o servidor precise de qualquer estado guardado em memória, ou seja, o servidor não vai armazenar nada sobre as requisições que já foram feitas, toda requisição é vista como uma nova requisição, nenhuma informação de sessão fica retida no servidor.

Este princípio garante que cada requisição pode ser entendida e executada isoladamente, o que permite que a aplicação se torne escalável (scalability) e confiável (reliability).

É importante notar que, como qualquer outra escolha arquitetural, temos um trade-off ao escolher um serviço stateless, ganhamos em escalabilidade, porém temos a desvantagem que diminuir a performance na conexão com a rede, pois precisamos enviar dados repetidos em diversos momentos (pois este dado não pode ficar do lado do servidor em um contexto compartilhado).

### 3. Cache

Para melhorar a eficiência no uso de rede, REST diz que os clientes podem realizar o cache das respostas, porém, é importante notar que as respostas devem ser implícita ou explicitamente identificadas como cacheaveis (cacheable) ou não cacheaveis (non-cacheable). Se a reposta for cacheável, o cliente pode (note que não é um dever) re-utilizar a mesma resposta para solicitações semelhantes no futuro, com o cache conseguimos eliminar algumas interações entre as camadas cliente-servidor, ou seja, melhoramos performance e escalabilidade.

O trade-off é que o cache pode diminuir a confiabilidade (reliability) da aplicação caso o cache não seja bem gerenciado, ou seja, o estado da resposta armazenada em memória é muito diferente do estado caso fosse feita uma nova requisição, por isto, é uma boa prática invalidar o cache após um determinado período, este período pode ser informado pelo servidor ou escolhido de forma lógica pelo próprio cliente.

### 4. Uniform Interface

Este é um dos princípios centrais da arquitetura de qualquer sistema RESTful. Com ele desacoplamos ainda mais os componentes cliente e servidor, transformando ainda mais em entidades independentes, basicamente a ideia aqui é definirmos contratos padronizados e específicos para nossas operações, se aqui conseguirmos estruturar um contrato uniforme em que ambas as partes conseguem se comunicar e se entender, conseguimos garantir que funcionem de forma cada vez mais independente.

O trade-off deste princípio é que alguns contratos podem diminuir a eficiência das comunicações de rede, pois ao invés de transferirmos o dado da forma mais adequada para a operação, vamos transferir o dado de acordo com o contrato estabelecido.

Vamos falar mais a frente sobre os elementos de dados que os contratos devem contemplar.

### 5. Layered Systems

Este princípio permite que a arquitetura tenha diversas camadas entre os componentes de cliente e servidor, porém, de forma que o cliente não consiga ter visibilidade que não está conversando diretamente com o servidor, ou seja, as camadas devem ser transparentes e respeitarem o mesmo contrato do servidor, estas camadas adicionais podem ser proxies, load balancers, gateways, serviços de autenticação, etc. Com este princípio conseguimos garantir ainda mais desacoplamento entre as camadas e além disso recebermos benefícios como escalabilidade, confiabilidade e disponibilidade.

### 6. Code-On-Demand (Opcional)

De todos os princípios no mundo atual este é o menos utilizado, basicamente permite que o servidor transfira um código executável para o cliente, este é o único princípio opcional do REST. Este princípio pode simplificar o escopo de um cliente, já que pode receber partes de uma funcionalidade vinda diretamente do servidor, esse código pode ser passado através de scripts executáveis do lado do cliente.

#### Elementos de dados

##### Resources

Os recursos (resources) são a principal abstração de uma informação no REST, eles são qualquer tipo de informação que possa ser nomeada: um documento, uma imagem, uma coleção de outros recursos, etc. Em outras palavras, qualquer conceito que possa ser referenciado pode ser definido com um recurso. No REST cada recurso deve ter um identificador único para que possa ser identificado durante a interação entre os componentes da arquitetura.

##### Resource representations

A representação de um recurso, nada mais é do que o estado atual ou desejado de um determinado recurso, esta representação deve ser transferida entre cliente e servidor, cada representação pode ter um formato específico: JSON, XML, etc. Por exemplo, posso representar o recurso animal através de um JSON que inclua os campos raça, nome, tamanho e seu identificador.

O que é JSON? [Clique aqui e entenda](./2-what-is-json.md).

##### Metadata

Os metadados (metadata) são informações no formato chave-valor, onde podem ser passadas informações adicionais sobre o recurso ou sua representação, por exemplo, podemos informar nos metadados o formato da representação de um recurso, links referentes ao recurso (conectado a ideia de HATEOAS), etc.

##### Control Data

Define o objetivo da requisição entre os componentes, como qual a operação esta sendo solicitada e qual o significado da resposta. Também pode ser utilizado para parametrizar a requisição e sobreescrever os comportamentos padrões, por exemplo, o comportamento de cache, rate limit, etc.

O dados de controle (control data) podem parecer semelhantes aos metadados, porém uma divisão fácil e clara que podemos fazer é, metadados dizem sobre o recurso e/ou sua representação, os dados de controle dizem sobre a ação que será executada e seus comportamentos.

## Conclusão

Para fecharmos esse tema, como dito no ínicio REST é um estilo arquitetural híbrido, é uma evolução de outros modelos arquiteturais e carrega consigo principalmente a ideia de escalabilidade, confiabilidade e disponibilidade de uma aplicação baseada em comunicação de rede considerando suas principais as necessidades.

O que REST não é?

- Bala de prata
- HTTP + JSON
- Padrão de projeto (Design Pattern)

O que REST é?

- Estilo arquitetural
- Adaptável
- Modelo para comunicação entre sistemas distribuídos

## Referências

- <https://ics.uci.edu/~fielding/pubs/dissertation/top.htm>
- <https://restfulapi.net/>
- <https://medium.com/@alexandre.highrollers/restful-api-for-distributed-hypermedia-system-78dbfb8a58b9>