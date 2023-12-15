Para desenvolvedores modernos, o Git é uma ferramenta indispensável. Dominar seus comandos é essencial para otimizar o fluxo de trabalho. Esta leitura contém algum dos comandos que mais utilizo durante meu fluxo de desenvolvimento.

## 1. Criar e acessar uma branch

Sem dúvidas é um dos comandos que mais utilizo durante meu desenvolvimento, se preciso criar uma nova branch e acessá-la, basta utilizar:

```bash
git checkout -b branchName
```

Esse comando unifica dois outros comandos do git, são eles:

```bash
git branch branchName
```

```bash
git checkout branchName
```

## 2. Excluir uma branch

Se você precisa excluir uma branch, pode fazer isso utilizando `git branch -d` ou `git branch -D`. A diferença entre as duas abordagens é que, ao usar `-d`, o Git verifica se a branch já foi mergeada antes de excluí-la. Com `-D`, não há verificação alguma; a branch será excluída mesmo se houver alterações não mergeadas.

- **Safe delete**

```bash
git branch -d branchName
```

- **Non-safe delete**

```bash
git branch -D branchName
```

#### Em detalhes: 

- [**Git Branch Delete Option Docs.**](https://git-scm.com/docs/git-branch#Documentation/git-branch.txt--d)

## 3. Renomear uma branch

Gostaria de renomear uma de suas branches e não sabe como? Basta utilizar:

```bash
git branch -m oldBranchName newBranchName
```

Ou, se precisa alterar a branch atual, é possível realizar com:

```bash
git branch -m newBranchName
```

## 4. Commitar todas suas alterações

Gostaria de enviar para *stage* suas modificações e já commitá-las? Execute:

```bash
git commit -am "commit message"
```

Semelhante ao primeiro item da lista, esse comando também unifica dois outros comandos do git, são eles:

```bash
git add *
```

```bash
git commit -m "commit message"
```

## 5. Arquive suas modificações

Quer dar uma pausa no desenvolvimento, mas não quer perder suas alterações? Utilize:

```bash
git stash
```

Esse comando vai arquivar todas as modificações '*non-staged*' do seu projeto, esse arquivamento é feito em pilha, ou seja, toda vez que executa esse comando você adiciona uma nova camada na pilha de arquivamento.

Se precisar desarquivar alguma modificação, basta executar:

```bash
git stash pop
```

Esse comando desarquiva a última modificação enviada para o arquivamento e a remove da pilha.

Se você pretende utilizar o '*stash*' múltiplas vezes, recomendo dar uma olhada na documentação que deixei a seguir.

#### Em detalhes: 

- [**Git Stash Docs.**](https://git-scm.com/docs/git-stash)

## 6.  Reverter um commit

Se você precisar reverter um commit, execute:

```bash
git revert commitHash
```

Esse comando desfaz as modificações do commit em questão removê-lo do histórico de commits do Git.

É possível consultar o hash de um commit através do comando `git reflog`.

Uma curiosidade é que você pode executar o comando utilizando apenas os 6 primeiros caracteres do hash do commit.

#### Em detalhes: 

- [**Git Revert Docs.**](https://git-scm.com/docs/git-revert)

## Moral da história

Vi um texto muito parecido em inglês e resolvi escrever a minha versão sobre ele. A ideia desse texto foi tentar repassar um pouquinho do que sei/uso sobre alguns comandos Git que ajudam na eficiência do nosso trabalho.

Fica de nota mental revisitar esse texto de tempos em tempos, adicionando novos comandos.

## Para ir mais fundo

- <https://git-scm.com/docs>
- <https://levelup.gitconnected.com/10-must-know-git-commands-for-software-engineers-ffc6687d6dfd>