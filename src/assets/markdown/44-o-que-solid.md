SOLID é um acrônimo para cinco princípios da programação orientada a objetos que visam a produção de um software sólido (🥸), robusto e manutenível. 

## Em detalhes

Estes princípios foram introduzidos por Robert C. Martin — [Uncle Bob](http://cleancoder.com/products) — e tem como principal objetivo fornecer boas práticas que guiam nós desenvolvedores a projetar aplicações fáceis de entender, manter e evoluir.

### Single Responsibility Principle — SRP

- 🇧🇷: Princípio da Responsabilidade Única — PRU

O **Princípio da Responsabilidade Única**  afirma que uma classe deve ter apenas uma razão para mudar, ou seja, ela deve ter apenas uma responsabilidade. 

Este princípio ajuda a manter as classes focadas, tornando-as mais fáceis de entender, manter e estender.

### Open/Close Principle — OCP

- 🇧🇷: Princípio de Aberto e Fechado — PAF

O **Princípio Aberto/Fechado** afirma que as entidades de software (classes, módulos, funções, etc.) devem estar abertas para extensão, mas fechadas para modificação. 

Isso significa que você deve poder adicionar nova funcionalidade a um sistema sem alterar o código existente. 

Esse princípio promove a robustez e facilita a manutenção e escalabilidade.

### Liskov Substitution Principle — LSP

- 🇧🇷: Princípio da Substituição de Liskov — PSL

O **Princípio da Substituição de Liskov** afirma que objetos de uma superclasse devem poder ser substituídos por objetos de suas subclasses sem afetar a correção do programa. 

Isso garante que um programa possa usar uma classe derivada onde uma classe base é esperada, sem causar erros.

### Interface Segregation Principle — ISP

- 🇧🇷: Princípio da Segregação de Interfaces — PSI

O **Princípio da Segregação de Interfaces** afirma que um cliente não deve ser forçado a depender de interfaces que ele não utiliza. 

Esse princípio incentiva a criação de interfaces menores e mais específicas em vez de interfaces grandes e monolíticas, o que ajuda a reduzir o impacto das mudanças e a manter o sistema mais fácil de manter.

### Dependency Inversion Principle — DIP

- 🇧🇷: Princípio da Inversão de Dependências — PID

O **Princípio da Inversão de Dependência** afirma que módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. Além disso, abstrações não devem depender de detalhes. Detalhes devem depender de abstrações. 

Este princípio ajuda a reduzir o acoplamento entre módulos e permite mais flexibilidade e testes mais fáceis.

## Moral da história

Os princípios apresentados formam um guia para a criação de sistemas de software flexíveis, extensíveis e fáceis de manter. 

Eles incentivam a separação das responsabilidades, a criação de código coeso e modular, e a redução do acoplamento entre os componentes do sistema. 

## Para ir mais fundo

A seguir uma aula de [Uncle Bob](http://cleancoder.com/products) sobre os princípios SOLID (e um pouco de química).

- <https://www.youtube.com/watch?v=zHiWqnTWsn4>