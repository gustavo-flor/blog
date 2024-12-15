- **Classificação**: Comportamental

O padrão de projeto **Interpreter** provê uma forma dinâmica e clara de transformar em ações determinadas linguagens ou expressões.

Em outras palavras, permite receber uma entrada — comumente textual — e interpretá-la em forma de objetos.

## O problema

Imagine um cenário onde você está criando o software de um *chatbot* para algum serviço de mensagem, esse *chatbot* deve ser capaz de receber comandos do usuário através de mensagens. 

Estes comandos são escritos em linguagem natural (humana), tais como “Liste os usuários administradores e apresente um gráfico de suas atividades”.

Como você implementaria seu *chatbot* para receber esses comandos?

## A solução

O padrão se baseia na estrutura de dados árvore e contém 4 principais elementos, são eles:

- **Abstract Interpreter**: Este elemento representa a interface dos interpretadores, contém o método `interpret(Context)` que será responsável por fazer o *parse* da expressão recebida e será implementada por todos os nós (nodes).
- **Non-Terminal Interpreter**: Representa um nó com filhos, ou seja, com base em algumas regras passa a responsabilidade para um dos filhos interpretar a expressão.
- **Terminal Interpreter**: Representa um nó final (*leaf*), é responsável por interpretar a expressão (ou parte dela) e se necessário encaminhar a interpretação para a raiz novamente.
- **Context**: Este elemento é responsável por armazenar informações globais que devem ser utilizadas durante todo o fluxo de interpretação de uma expressão.

## Para ir mais fundo

- <https://sourcemaking.com/design_patterns/interpreter>