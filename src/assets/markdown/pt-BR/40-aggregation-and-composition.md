Agregação e composição são dois tipos de relacionamento da programação orientada a objetos (POO). 

Ambos representam associações de propriedade entre objetos, porém, com diferentes níveis e aspectos sobre os componentes e seus ciclos de vida.

## 🤝 Agregação

Agregação é uma forma de relacionamento entre um **objeto principal** (agregado) e um **objeto parte** (componente), baseando-se na ideia de que o **objeto parte** não é dependente do **objeto principal**, ou seja, o agregado possui um acoplamento fraco com o componente.

## Em detalhes

- **Dependência fraca**: O componente pode existir independentemente do agregado. O agregado não tem controle do ciclo de vida do componente.
- **Ciclo de vida**: Os componentes e agregados podem ser criados e destruídos em diferentes momentos sem dependência entre eles.
- **Exemplo**: Podemos considerar os objetos “Biblioteca” e “Livro”. Uma biblioteca possui livros, entretanto, os livros não dependem da biblioteca para existir, ou seja, os livros são componentes agregados à biblioteca.

## 👏 Composição

Na composição, o **objeto parte** (componente) é criado pelo próprio **objeto principal** (agregado) e não recebido de fontes externas, indicando assim um forte acoplamento entre os objetos.

## Em detalhes

- **Dependência forte**: O componente é criado pelo agregado, via construtor ou através de algum método.
- **Ciclo de vida**: O ciclo de vida do componente está ligado diretamente ao ciclo de vida do agregado; em outras palavras, o componente tem dependência de existência com o agregado.
- **Exemplo**: Podemos considerar os objetos “Casa” e “Cômodo”. Neste cenário uma casa possui cômodos, porém, diferente do caso apresentado anteriormente, o objeto cômodo só pode existir se o objeto casa também existir, ou seja, temos um relacionamento de composição.

## Moral da história

Conceitualmente agregação e composição definem a semântica dos relacionamentos dos objetos, ou seja, conseguimos entender quais objetos dependem ou não de outros para existir. 

Note que, aqui, o entendimento é apenas conceitual; na prática, os detalhes de implementação desses dois tipos de relacionamentos não possuem grandes diferenças.

Em outras palavras, no código, uma agregação e composição podem ser escritas de diversas formas, pois lidamos com conceitos mais abrangentes que apenas o relacionamento dos objetos; na realidade, precisamos pensar em performance, re-utilização e desacoplamento de classes.

Muito obrigado pela leitura! 👋
