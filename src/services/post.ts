interface Author {
  name: string;
  href: string;
}

interface Cover {
  href: string;
  author: Author;
}

export interface Post {
  cover?: Cover;
  title: string;
  description: string;
  slug: string;
  tags: string[];
  fileName: string;
  createdAt: Date;
  origin?: URL;
}

const bridgeDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1552071379-041b32707fed',
    author: {
      name: 'Dušan veverkolog',
      href: 'https://unsplash.com/@veverkolog'
    }
  },
  title: '🌉 Design Patterns em 1 minuto: Bridge #18', 
  description: 'O padrão de projeto Bridge propõe a separação das responsabilidades de uma classe em duas camadas: abstração e implementação...',
  slug: 'design-patterns-em-1-minuto-bridge',
  tags: ['designpatterns', 'softwaredevelopment'],
  fileName: '33-bridge-design-pattern',
  createdAt: new Date(2024, 0, 26, 6, 0)
}

const iteratorDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1634609243366-ddd646c1b241',
    author: {
      name: 'Joshua J. Cotten',
      href: 'https://unsplash.com/@jcotten'
    }
  },
  title: '🔄 Design Patterns em 1 minuto: Iterator #17', 
  description: 'O padrão de projeto Iterator permite percorrer uma coleção de elementos sem precisar expor sua implementação...',
  slug: 'design-patterns-em-1-minuto-iterator',
  tags: ['designpatterns', 'softwaredevelopment'],
  fileName: '32-iterator-design-pattern',
  createdAt: new Date(2024, 0, 25, 6, 0)
}

const visitorDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1601247387326-f8bcb5a234d4',
    author: {
      name: 'Joshua J. Cotten',
      href: 'https://unsplash.com/@jcotten'
    }
  },
  title: '🚶 Design Patterns em 1 minuto: Visitor #16', 
  description: 'O Design Pattern Visitor permite separar o comportamento do objeto em que é executado, aumentando assim a modularidade e adaptabilidade da sua aplicação...',
  slug: 'design-patterns-em-1-minuto-visitor',
  tags: ['designpatterns', 'softwaredevelopment'],
  fileName: '31-visitor-design-pattern',
  createdAt: new Date(2024, 0, 24, 6, 0)
}

const compositeDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1503951164464-cfc904b89299',
    author: {
      name: 'Samuel Foster',
      href: 'https://unsplash.com/@samuelfoster_co_uk'
    }
  },
  title: '🌳 Design Patterns em 1 minuto: Composite #15', 
  description: 'O padrão de projeto Composite propõe que conjuntos de objetos sejam compostos em estruturas de árvore e que cada objeto agrupador delegue o comportamento para seus nós...',
  slug: 'design-patterns-em-1-minuto-composite',
  tags: ['designpatterns', 'softwaredevelopment'],
  fileName: '30-composite-design-pattern',
  createdAt: new Date(2024, 0, 23, 6, 0)
}

const abstractFactoryDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1502083896352-259ab9e342d7',
    author: {
      name: 'Caleb Woods',
      href: 'https://unsplash.com/@caleb_woods'
    }
  },
  title: '🏭 Design Patterns em 1 minuto: Abstract Factory #14', 
  description: 'O Abstract Factory é um padrão de projeto que permite desacoplar a criação de famílias de objetos relacionados e/ou dependentes sem especificar suas classes concretas...',
  slug: 'design-patterns-em-1-minuto-abstract-factory',
  tags: ['designpatterns', 'softwaredevelopment'],
  fileName: '29-abstract-factory-design-pattern',
  createdAt: new Date(2024, 0, 22, 6, 0)
}

const mementoDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1514373941175-0a141072bbc8',
    author: {
      name: 'Ron Fung',
      href: 'https://unsplash.com/@oriz'
    }
  },
  title: '📃 Design Patterns em 1 minuto: Memento #13', 
  description: 'O padrão de projeto Memento permite que você restaure estados passados do seu objeto de forma prática sem revelar sua estrutura interna...',
  slug: 'design-patterns-em-1-minuto-memento',
  tags: ['designpatterns', 'softwaredevelopment'],
  fileName: '28-memento-design-pattern',
  createdAt: new Date(2024, 0, 21, 6, 0)
}

const proxyDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1511694009171-3cdddf4484ff',
    author: {
      name: 'Chunli Ju',
      href: 'https://unsplash.com/@chunlea'
    }
  },
  title: '🎩 Design Patterns em 1 minuto: Proxy #12', 
  description: 'O Design Pattern Proxy provê uma camada de controle de acesso a um objeto. Essa camada pode ser utilizada para evitar...',
  slug: 'design-patterns-em-1-minuto-proxy',
  tags: ['designpatterns', 'softwaredevelopment'],
  fileName: '27-proxy-design-pattern',
  createdAt: new Date(2024, 0, 20, 6, 0)
}

const stateDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1537151641189-e685b67326c5',
    author: {
      name: 'Alvan Nee',
      href: 'https://unsplash.com/@alvannee'
    }
  },
  title: '🧑‍🔬 Design Patterns em 1 minuto: State #11', 
  description: 'O padrão de projeto State permite que seu objeto mude os comportamentos quando altera seu estado interno...',
  slug: 'design-patterns-em-1-minuto-state',
  tags: ['designpatterns', 'softwaredevelopment'],
  fileName: '26-state-design-pattern',
  createdAt: new Date(2024, 0, 19, 6, 0)
}

const strategyDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1494913148647-353ae514b35e',
    author: {
      name: 'Alvan Nee',
      href: 'https://unsplash.com/@alvannee'
    }
  },
  title: '🛣️ Design Patterns em 1 minuto: Strategy #10', 
  description: 'O padrão de projeto Strategy permite definir o comportamento de um algoritmo durante a execução da aplicação...',
  slug: 'design-patterns-em-1-minuto-strategy',
  tags: ['designpatterns', 'softwaredevelopment'],
  fileName: '25-strategy-design-pattern',
  createdAt: new Date(2024, 0, 18, 6, 0)
}

const facadeDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1542665093852-744c79500d45',
    author: {
      name: 'Tomas Tuma',
      href: 'https://unsplash.com/@tomastuma'
    }
  },
  title: '🏛️ Design Patterns em 1 minuto: Facade #9', 
  description: 'O padrão de projeto Facade provê uma interface de uso simplificada para uma biblioteca, framework ou qualquer outro conjunto complexo de classes...',
  slug: 'design-patterns-em-1-minuto-facade',
  tags: ['designpatterns', 'softwaredevelopment'],
  fileName: '24-facade-design-pattern',
  createdAt: new Date(2024, 0, 17, 6, 0)
}

const prototypeDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83',
    author: {
      name: 'Jari Hytönen',
      href: 'https://unsplash.com/@jarispics'
    }
  },
  title: '🤖 Design Patterns em 1 minuto: Prototype / Clone #8', 
  description: 'Prototype (também conhecido por Clone) é o padrão de projeto que permite a clonagem de um objeto...',
  slug: 'design-patterns-em-1-minuto-prototype',
  tags: ['designpatterns', 'softwaredevelopment'],
  fileName: '23-prototype-design-pattern',
  createdAt: new Date(2024, 0, 16, 6, 0)
}

const commandDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1492376791813-ee6dbb35caa3',
    author: {
      name: 'Bradley Pisney',
      href: 'https://unsplash.com/@bradleypisney'
    }
  },
  title: '📮 Design Patterns em 1 minuto: Command #7', 
  description: 'O padrão de projeto Command possibilita que você agrupe todos os dados de sua requisição em um único objeto...',
  slug: 'design-patterns-em-1-minuto-command',
  tags: ['designpatterns', 'softwaredevelopment'],
  fileName: '22-command-design-pattern',
  createdAt: new Date(2024, 0, 15, 6, 0)
}

const decoratorDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1466921583968-f07aa80c526e',
    author: {
      name: 'Braydon Anderson',
      href: 'https://unsplash.com/@braydona'
    }
  },
  title: '🪆 Design Patterns em 1 minuto: Decorator #6', 
  description: 'O Design Pattern Decorator permite customizar os comportamentos de seus objetos sem sobrescrevê-los...',
  slug: 'design-patterns-em-1-minuto-decorator',
  tags: ['designpatterns', 'softwaredevelopment'],
  fileName: '21-decorator-design-pattern',
  createdAt: new Date(2024, 0, 14, 6, 0)
}

const chainOfResponsibilityDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1555008872-f03b347ffb53',
    author: {
      name: 'Hannah Reding',
      href: 'https://unsplash.com/@hannahrdg'
    }
  },
  title: '🔗 Design Patterns em 1 minuto: Chain of Responsibility #5', 
  description: 'O Chain of Responsibility é um padrão de projeto que permite desacoplar o controle do fluxo de código repassando a responsabilidade para uma cadeia que...',
  slug: 'design-patterns-em-1-minuto-chain-of-responsibility',
  tags: ['designpatterns', 'softwaredevelopment'],
  fileName: '20-chain-of-responsibility-design-pattern',
  createdAt: new Date(2024, 0, 13, 5, 0)
}

const singletonDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1673439782481-c02fd9688391',
    author: {
      name: 'Dominik Kempf',
      href: 'https://unsplash.com/@dominik_kempf'
    }
  },
  title: '🔮 Design Patterns em 1 minuto: Singleton #4', 
  description: 'O Design Pattern Singleton garante que uma classe possua uma única (single) instância compartilhada por toda a aplicação...',
  slug: 'design-patterns-em-1-minuto-singleton',
  tags: ['designpatterns', 'softwaredevelopment'],
  fileName: '19-singleton-design-pattern',
  createdAt: new Date(2024, 0, 12, 6, 0)
}

const adapterDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1550782674-fa597ecc1bfd',
    author: {
      name: 'Kyle Johnson',
      href: 'https://unsplash.com/@kylejeffreys'
    }
  },
  title: '🧬 Design Patterns em 1 minuto: Adapter #3', 
  description: 'O Adapter é um Design Pattern que permite que interfaces incompatíveis trabalhem juntas adequadamente...',
  slug: 'design-patterns-em-1-minuto-adapter',
  tags: ['designpatterns', 'softwaredevelopment'],
  fileName: '18-adapter-design-pattern',
  createdAt: new Date(2024, 0, 11, 6, 0)
}

const observerDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1516222338250-863216ce01ea',
    author: {
      name: 'Josh Rakower',
      href: 'https://unsplash.com/@joshrako'
    }
  },
  title: '👀 Design Patterns em 1 minuto: Observer #2', 
  description: 'O Design Pattern Observer permite criar um mecanismo — pub/sub — de processamento orientado a eventos...',
  slug: 'design-patterns-em-1-minuto-observer',
  tags: ['designpatterns', 'softwaredevelopment'],
  fileName: '17-observer-design-pattern',
  createdAt: new Date(2024, 0, 10, 5, 30)
}

const builderDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d',
    author: {
      name: 'James Barker',
      href: 'https://unsplash.com/@barkernotbaker'
    }
  },
  title: '👷 Design Patterns em 1 minuto: Builder #1', 
  description: 'Builder é o padrão de projeto que tem como objetivo principal permitir a criação de objetos complexos de maneira simplificada e estruturada...',
  slug: 'design-patterns-em-1-minuto-builder',
  tags: ['designpatterns', 'softwaredevelopment'],
  fileName: '16-builder-design-pattern',
  createdAt: new Date(2024, 0, 9, 7, 30)
}

const designPatterns: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a',
    author: {
      name: 'Jamie Street',
      href: 'https://unsplash.com/@jamie452'
    }
  },
  title: '🥷 Design Patterns em 1 minuto', 
  description: 'Os padrões de projeto são uma forma padronizada de solucionar um problema comum existente no desenvolvimento de software...',
  slug: 'design-patterns-em-1-minuto',
  tags: ['designpatterns', 'softwaredevelopment'],
  fileName: '15-design-patterns',
  createdAt: new Date(2024, 0, 8, 6, 0)
}

const distributedTracing: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8',
    author: {
      name: 'Jamie Street',
      href: 'https://unsplash.com/@jamie452'
    }
  },
  title: '🧶 Coisas que você deveria saber sobre sistemas distribuídos: Distributed Tracing', 
  description: 'Distributed Tracing, em tradução livre rastreamento distribuído, é um padrão arquitetural de microserviços utilizado para facilitar e otimizar a observabilidade em sistemas distribuídos.',
  slug: 'distributed-tracing',
  tags: ['distributedsystems', 'observability'],
  fileName: '14-distributed-tracing',
  createdAt: new Date(2024, 0, 4, 6, 0)
}

const howSpringProvidesDependencyInjection: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1581888227599-779811939961',
    author: {
      name: 'Jamie Street',
      href: 'https://unsplash.com/@jamie452'
    }
  },
  title: '🍃 Como o Spring provê a injeção de dependências?', 
  description: 'Que a injeção “automágica” de dependências do Spring proporciona agilidade e simplicidade na escrita de aplicações todos nós já sabemos, mas você sabe como o Spring gerencia e provê essa funcionalidade para nós desenvolvedores?',
  slug: 'como-o-spring-prove-a-injecao-de-dependencias',
  tags: ['softwaredevelopment'],
  fileName: '13-how-spring-provides-di',
  createdAt: new Date(2024, 0, 1, 5, 30)
}

const inversionOfControl: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1616093875201-cc5b7a6e9c8a',
    author: {
      name: 'Franz Hajak',
      href: 'https://unsplash.com/@riofranz'
    }
  },
  title: '🕺 O que é IoC?', 
  description: 'IoC, acrônimo de Inversion of Control (Inversão de Controle), é um princípio da engenharia de software que incentiva a inversão do controle do fluxo da aplicação, mas o que significa isso?',
  slug: 'o-que-e-ioc',
  tags: ['softwaredevelopment'],
  fileName: '12-inversion-of-control',
  createdAt: new Date(2023, 11, 28, 6, 0)
}

const queuesAndStacks: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1506774518161-b710d10e2733',
    author: {
      name: 'Michał Parzuchowski',
      href: 'https://unsplash.com/@mparzuchowski'
    }
  },
  title: '🦉 Filas e pilhas', 
  description: 'Filas e pilhas são estruturas de dados muito utilizadas quando precisamos encadear elementos em uma coleção, são muito semelhantes a filas encadeadas, porém, mais restritas e específicas para seus casos de uso, vamos entender…',
  slug: 'filas-e-pilhas',
  tags: ['datastructures', 'softwaredevelopment'],
  fileName: '11-queues-and-stacks',
  createdAt: new Date(2023, 11, 25, 6, 0)
}

const arraysAndLinkedLists: Post = { 
  cover: {
    href: 'https://images.unsplash.com/photo-1682448169828-039868860001',
    author: {
      name: 'Lakindu Sepala',
      href: 'https://unsplash.com/@lakindu_sepala'
    }
  },
  title: '☀️ Arrays e listas encadeadas', 
  description: 'Arrays e listas encadeadas (linked lists) são estruturas de dados que armazenam coleções de elementos, mas fazem isso de diferentes formas, com suas respectivas vantagens e desvantagens.',
  slug: 'arrays-e-listas-encadeadas',
  tags: ['datastructures', 'softwaredevelopment'],
  fileName: '10-arrays-and-linked-lists',
  createdAt: new Date(2023, 11, 21, 6, 0)
}

const ideasToPracticeProgramming: Post = { 
  cover: {
    href: 'https://images.unsplash.com/photo-1605379399642-870262d3d051',
    author: {
      name: 'Fotis Fotopoulos',
      href: 'https://unsplash.com/@ffstop'
    }
  },
  title: '💡 6 ideias para praticar programação', 
  description: 'Escrito por um programador e para programadores ou interessados, este texto oferece formas e estratégias para pôr em prática a escrita de código, desde desafios de codificação até projetos colaborativos.',
  slug: 'ideias-para-praticar-programacao',
  tags: ['beginners', 'community'],
  fileName: '9-ideas-to-practice-programming',
  createdAt: new Date(2023, 11, 18, 5, 30)
}

const gitCommands: Post = { 
  cover: {
    href: 'https://images.unsplash.com/photo-1595511890410-3b8dc237a537',
    author: {
      name: 'Dietmar Ludmann',
      href: 'https://unsplash.com/@d13n'
    }
  },
  title: '😸 Git: Comandos chave para devs', 
  description: 'Para desenvolvedores modernos, o Git é uma ferramenta indispensável. Dominar seus comandos é essencial para otimizar o fluxo de trabalho. Esta leitura contém algum dos comandos que mais utilizo durante meu fluxo de desenvolvimento.',
  slug: 'git-commands',
  tags: ['softwaredevelopment'],
  fileName: '8-git-commands',
  createdAt: new Date(2023, 11, 15, 18, 30)
}

const avoidExceptions = { 
  cover: {
    href: 'https://images.unsplash.com/photo-1606011334315-025e4baab810',
    author: {
      name: 'Roberto Huczek',
      href: 'https://unsplash.com/@tamoio'
    }
  },
  title: '🚫 PARE de usar exceções para controle de fluxo', 
  description: 'As exceções podem estar causando impacto de performance desnecessário na sua aplicação — se você as utiliza para controle de fluxo. Entenda...',
  slug: 'avoid-exceptions-as-control-flow',
  tags: ['softwaredevelopment'],
  fileName: '7-avoid-exceptions',
  createdAt: new Date(2023, 11, 11, 6, 0)
}

const codeReview: Post = { 
  cover: {
    href: 'https://images.unsplash.com/photo-1600232943169-3fe49a6f4071',
    author: {
      name: 'Nicolas Noonan',
      href: 'https://unsplash.com/@nikolasnoonan'
    }
  },
  title: '🤝 Revisão de código: criando um ambiente de colaboração e aprendizado contínuo', 
  description: 'A revisão de código é uma parte crucial do processo de desenvolvimento de software, é o momento onde desenvolvedores examinam o código fonte de outros desenvolvedores com objetivo de prover sugestões sobre as alterações analisadas e...',
  slug: 'code-review-best-practices',
  tags: ['softwaredevelopment'],
  fileName: '6-code-review',
  createdAt: new Date(2023, 11, 4, 5, 2)
}

const helloWorld: Post = { 
  cover: {
    href: 'https://images.unsplash.com/photo-1596276122653-651a3898309f',
    author: {
      name: 'Artem Bryzgalov',
      href: 'https://unsplash.com/@abrizgalov'
    }
  },
  title: '👋 Olá, eu sou o Flôr', 
  description: 'Este é o lugar em que escrevo o que gostaria de ler, falo sobre o que estou estudando e publico devaneios sobre sistemas que você utiliza todos os dias.',
  slug: 'hello-world',
  tags: ['hello'],
  fileName: '5-hello-world',
  createdAt: new Date(2023, 10, 27, 6)
}

const hateoas = { 
  cover: {
    href: 'https://images.unsplash.com/photo-1519098901909-b1553a1190af',
    author: {
      name: 'Florencia Potter',
      href: 'https://unsplash.com/@florenciapotter'
    }
  },
  title: '🥏 O que é HATEOAS e qual sua relação com REST?', 
  description: 'Falamos recentemente sobre REST, o que é e quais suas principais características, porém, um tema ficou em aberto para conversarmos, e chegou o momento de fazer isto, vamos falar sobre o que é HATEOAS…',
  slug: 'o-que-e-hateoas',
  tags: ['rest'],
  fileName: '4-o-que-e-hateoas',
  createdAt: new Date(2023, 10, 23, 6),
  origin: new URL('https://gustavoflor.medium.com/o-que-e-hateoas-eddf9b093155')
}

const capTheorem: Post = { 
  title: '🌀 Coisas que você deveria saber sobre sistemas distribuídos: Teorema CAP', 
  description: 'O teorema CAP, também conhecido como teorema de Brewer, é um dos princípios fundamentais dos sistemas distribuídos. A premissa do teorema é que nenhum sistema com distribuição de dados pela rede…',
  slug: 'teorema-cap',
  tags: ['distributedsystems'],
  fileName: '3-teorema-cap',
  createdAt: new Date(2023, 10, 20, 6),
  origin: new URL('https://gustavoflor.medium.com/coisas-que-voc%C3%AA-deveria-saber-sobre-sistemas-distribu%C3%ADdos-teorema-cap-39db9e0adf8d')
}

const json: Post = { 
  cover: {
    href: 'https://images.unsplash.com/photo-1522346513757-54c552451fdc',
    author: {
      name: 'Nik',
      href: 'https://unsplash.com/@helloimnik'
    }
  },
  title: 'O que é JSON? 🏒', 
  description: 'O acrônimo JSON vem de JavaScript Object Notation, é um formato leve de gravar e transportar dados, é utilizado comumente na comunicação entre aplicações cliente-servidor, é "auto descritivo" e fácil de entender.',
  slug: 'o-que-e-json',
  tags: ['json'],
  fileName: '2-o-que-e-json',
  createdAt: new Date(2023, 10, 11, 6),
  origin: new URL('https://gustavoflor.medium.com/o-que-e-json-02782fa508df')
}

const rest: Post = { 
  cover: {
    href: 'https://images.unsplash.com/photo-1541188495357-ad2dc89487f4',
    author: {
      name: 'Aleksandar Cvetanovic',
      href: 'https://unsplash.com/@lemonzandtea'
    }
  },
  title: 'O que é REST? 😴', 
  description: 'Se você pensou em descanso, lamento ter que informar, porém não será o tema do artigo de hoje, na verdade vamos falar sobre um estilo de arquitetura de software, em algumas literaturas também chamado…',
  slug: 'o-que-e-rest',
  tags: ['rest', 'distributedsystems'],
  fileName: '1-o-que-e-rest',
  createdAt: new Date(2023, 10, 5, 6),
  origin: new URL('https://gustavoflor.medium.com/o-que-e-rest-8383ac3261cd')
}

const posts: Post[] = [
  bridgeDesignPattern,
  iteratorDesignPattern,
  visitorDesignPattern,
  compositeDesignPattern,
  abstractFactoryDesignPattern,
  mementoDesignPattern,
  proxyDesignPattern,
  stateDesignPattern,
  strategyDesignPattern,
  facadeDesignPattern,
  prototypeDesignPattern,
  commandDesignPattern,
  decoratorDesignPattern,
  chainOfResponsibilityDesignPattern,
  singletonDesignPattern,
  adapterDesignPattern,
  observerDesignPattern,
  builderDesignPattern,
  designPatterns,
  distributedTracing,
  howSpringProvidesDependencyInjection,
  inversionOfControl,
  queuesAndStacks,
  arraysAndLinkedLists,
  ideasToPracticeProgramming,
  gitCommands,
  avoidExceptions,
  codeReview,
  helloWorld,
  hateoas,
  capTheorem,
  json,
  rest
];

const highlight = howSpringProvidesDependencyInjection;

export const findAll = (): Post[] => {
  return posts;
}

export const findAllByTag = (tag: string): Post[] => {
  return posts.filter(it => it.tags.includes(tag));
} 

export const findBySlug = (slug: string): Post | undefined => {
  return posts.find(it => it.slug === slug);
}

export const getHighlight = (): Post => {
  return highlight;
}

const isToday = (date: Date): boolean => {
  return new Date().toDateString() == date.toDateString();
}

const isRecent = (date: Date): boolean => {
  return new Date().getHours() - date.getHours() < 3;
}

export const getPublishedAt = (post: Post): string => {
  if (isToday(post.createdAt)) {
    return isRecent(post.createdAt) ? 'Agora mesmo' : 'Hoje';
  }
  return post.createdAt.toLocaleDateString('pt-BR');
}

export const getNumberOfWords = (text: string) => {
  return text.split(/\s/g).length;
}

export const getReadTime = (text: string) => {
  const wordsPerMinute = 265;
  const numberOfWords = getNumberOfWords(text);
  const minutes = numberOfWords / wordsPerMinute;
  return Math.ceil(minutes);
}
