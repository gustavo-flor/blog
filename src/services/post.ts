interface Author {
  name: string;
  href: string;
}

interface Cover {
  href: string;
  author: Author;
}

export interface Post {
  cover: Cover;
  title: string;
  description: string;
  slug: string;
  tags: string[];
  fileName: string;
  createdAt: Date;
  origin?: URL;
  listed: boolean;
}

interface Page<I> {
  previousPage: number | null;
  nextPage: number | null;
  total: number;
  totalPages: number;
  items: I[];
}

export enum Tags {
  DESIGN_PATTERNS = "designpatterns",
  SOFTWARE_DEVELOPMENT = "softwaredevelopment",
  DISTRIBUTED_SYSTEMS = "distributedsystems",
  REST = "rest",
  JSON = "json",
  HELLO = "hello",
  DATA_STRUCTURES = "datastructures",
  ALGORITHMS = "algorithms",
  BEGINNERS = "beginners",
  COMMUNITY = "community",
  OBSERVABILITY = "observability",
  OBJECT_ORIENTED_PROGRAMMING = "oop",
  TEST = "test",
  KOTLIN = "kotlin",
  JAVA = "java",
  SPRING = "spring",
  BEST_PRACTICES = "bestpractices",
  DATABASE_SYSTEMS = "databasesystems",
  TOOLS = "tools",
}

const backpressure: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1631472608403-2c8d6f61a08e',
    author: {
      name: 'aisvri',
      href: 'https://unsplash.com/@aisvri'
    }
  },
  title: '🦀 Controle de fluxo de dados e gerenciamento de recursos com backpressure', 
  description: 'Backpressure é uma técnica para garantir o funcionamento correto de um software ao processar um fluxo de dados. Ela permite que a aplicação gerencie...',
  slug: 'o-que-e-backpressure',
  tags: [Tags.SOFTWARE_DEVELOPMENT, Tags.DISTRIBUTED_SYSTEMS],
  fileName: '52-backpressure',
  createdAt: new Date(2024, 5, 3, 6, 0),
  listed: true
}

const kotlinIntroduction: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac',
    author: {
      name: 'Mikhail Vasilyev',
      href: 'https://unsplash.com/@miklevasilyev'
    }
  },
  title: '🧚‍♀️ Kotlin: Vantagens, mitos, dicas e conceitos fundamentais', 
  description: 'Vamos falar sobre Kotlin! Neste texto, quero compartilhar algumas coisas que aprendi nas últimas semanas, desvendar alguns mitos sobre a linguagem e fornecer exemplos práticos para quem está começando...',
  slug: 'kotlin-vantagens-mitos-dicas-e-conceitos-fundamentais',
  tags: [Tags.KOTLIN, Tags.BEGINNERS],
  fileName: '51-kotlin-introduction',
  createdAt: new Date(2024, 4, 27, 6, 0),
  listed: true
}

const circuitBreaker: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1560948799-e17458123a9a',
    author: {
      name: 'Azat Kilinç',
      href: 'https://unsplash.com/@kilincazat'
    }
  },
  title: '🎒 Como utilizar Circuit Breaker para tornar seu serviço mais resiliente', 
  description: 'O padrão Circuit Breaker, na arquitetura de microsserviços, possibilita que uma aplicação consiga se manter de pé, evitando falhas em cascata, ao enfretar problemas de comunicação com chamadas remotas...',
  slug: 'como-utilizar-circuit-breaker-para-tornar-seu-servico-resiliente',
  tags: [Tags.BEST_PRACTICES, Tags.DISTRIBUTED_SYSTEMS],
  fileName: '50-circuit-breaker',
  createdAt: new Date(2024, 4, 13, 6, 0),
  listed: true
}

const sdkman: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1547270785-e11cb938d594',
    author: {
      name: 'nrd',
      href: 'https://unsplash.com/@nicotitto'
    }
  },
  title: '🧑‍💼 SDKMan: Ferramenta para gerenciamento de SDKs', 
  description: 'Vamos falar sobre o SDKMan, o que é a essa ferramenta e suas vantagem de utilizar. SDKMan é um gerenciador de SDKs...',
  slug: 'sdkman',
  tags: [Tags.TOOLS, Tags.BEGINNERS],
  fileName: '49-sdkman',
  createdAt: new Date(2024, 3, 22, 6, 0),
  listed: true
}

const springAndOpenAPI: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1671900599250-5f6a1ff85762',
    author: {
      name: 'Felicia Montenegro',
      href: 'https://unsplash.com/@feliciamontenegro'
    }
  },
  title: '📝 Spring: Documentando sua API HTTP com OpenAPI', 
  description: 'O OpenAPI, também conhecido como Swagger, é uma forma de especificar e documentar sua API HTTP. É uma forma padronizada e agnóstica à linguagem que permite expor os padrões e comportamentos de um serviço...',
  slug: 'documentando-sua-app-spring-com-open-api',
  tags: [Tags.JAVA, Tags.SPRING, Tags.BEGINNERS],
  fileName: '48-spring-and-openapi',
  createdAt: new Date(2024, 3, 15, 6, 0),
  listed: true
}

const springMail: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1618230305526-48435ece521f',
    author: {
      name: 'Oscar Fickel',
      href: 'https://unsplash.com/@oscarfickel3'
    }
  },
  title: '📮 Envio de e-mails com Spring Mail', 
  description: 'O envio de e-mails é um aspecto crucial para diversas aplicações, sendo utilizado para enviar notificações, alertas ou comunicações para os usuários.',
  slug: 'envio-de-emails-com-spring-mail',
  tags: [Tags.JAVA, Tags.SPRING, Tags.BEGINNERS],
  fileName: '47-spring-mail',
  createdAt: new Date(2024, 3, 8, 6, 0),
  listed: true
}

const concurrencyAndParallelism: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1604398907654-ec2bf7108b4a',
    author: {
      name: 'Kelly',
      href: 'https://unsplash.com/@kelly104'
    }
  },
  title: '🏎️ Concorrência e Paralelismo', 
  description: 'Concorrência e paralelismo são conceitos relacionados na computação, frequentemente utilizados como sinônimos. No entanto, eles têm significados diferentes. Entender essa diferença pode ser crucial no design eficiente de um software.',
  slug: 'concorrencia-e-paralelismo',
  tags: [Tags.SOFTWARE_DEVELOPMENT, Tags.BEGINNERS],
  fileName: '46-concurrency-and-parallelism',
  createdAt: new Date(2024, 2, 25, 6, 0),
  listed: true
}

const acidTransactions: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1497910091122-9f8a7746eb33',
    author: {
      name: 'Nathan Riley',
      href: 'https://unsplash.com/@nrly'
    }
  },
  title: '🕯️ O que são transações ACID?', 
  description: 'Em um sistema de banco de dados, uma transação representa uma unidade de trabalho (operação lógica)...',
  slug: 'o-que-sao-transacoes-acid',
  tags: [Tags.DATABASE_SYSTEMS],
  fileName: '45-acid-transactions',
  createdAt: new Date(2024, 2, 18, 6, 0),
  listed: true
}

const solid: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1591867833879-1285ba2b206d',
    author: {
      name: 'Quentin Grignet',
      href: 'https://unsplash.com/@qgrignet'
    }
  },
  title: '🧱 O que é SOLID?', 
  description: 'SOLID é um acrônimo para cinco princípios da programação orientada a objetos que visam a produção de um software sólido (🥸)...',
  slug: 'o-que-solid',
  tags: [Tags.BEGINNERS, Tags.SOFTWARE_DEVELOPMENT, Tags.BEST_PRACTICES],
  fileName: '44-o-que-solid',
  createdAt: new Date(2024, 2, 11, 6, 0),
  listed: true
}

const trailingCommaJava: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1644270489776-217a353eb842',
    author: {
      name: 'Luca Dugaro',
      href: 'https://unsplash.com/@lucadgr'
    }
  },
  title: '☕️ Vantagens da vírgula no fim de expressões multilinha', 
  description: 'Neste texto, pretendo apresentar os motivos pelos quais a vírgula ao final de expressões multilinha é mais do que apenas uma convenção de estilo...',
  slug: 'java-beneficios-virgula-em-expressoes-multilinha',
  tags: [Tags.JAVA, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '43-trailing-comma-java',
  createdAt: new Date(2024, 2, 4, 6, 0),
  listed: true
}

const testcontainers: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55',
    author: {
      name: 'Kate Stone Matheson',
      href: 'https://unsplash.com/@kstonematheson'
    }
  },
  title: '🪢 O que é Testcontainers?', 
  description: 'Testcontainers é uma biblioteca de código aberto, que disponibiliza instâncias de qualquer aplicação que possa ser executada em um container...',
  slug: 'o-que-e-testcontainers',
  tags: [Tags.DISTRIBUTED_SYSTEMS, Tags.TEST],
  fileName: '42-testcontainers',
  createdAt: new Date(2024, 1, 26, 6, 0),
  listed: true
}

const quicksort: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1494947665470-20322015e3a8',
    author: {
      name: 'Matt Nelson',
      href: 'https://unsplash.com/@mnelson'
    }
  },
  title: '⛵️ Algoritmos: Quicksort', 
  description: 'O Quicksort é um eficiente algoritmo de ordenação, baseia-se em dividir o problema em partes menores, para resolver esta tarefa...',
  slug: 'algoritmos-quicksort',
  tags: [Tags.ALGORITHMS],
  fileName: '41-quicksort',
  createdAt: new Date(2024, 1, 19, 6, 0),
  listed: true
}

const aggregationAndComposition: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1619017236031-6f55d516f49a',
    author: {
      name: 'Federico Di Dio',
      href: 'https://unsplash.com/@didiofederico_photographer'
    }
  },
  title: '☕️ Agregação e Composição', 
  description: 'Agregação e composição são dois tipos de relacionamento da programação orientada a objetos (POO). Ambos representam associações de propriedade entre objetos, porém...',
  slug: 'agregacao-e-composicao',
  tags: [Tags.OBJECT_ORIENTED_PROGRAMMING],
  fileName: '40-aggregation-and-composition',
  createdAt: new Date(2024, 1, 12, 6, 0),
  listed: true
}

const javaEncapsulation: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1597250388001-fc5a96b307eb',
    author: {
      name: 'Zach Zook',
      href: 'https://unsplash.com/@zachzook'
    }
  },
  title: '🎯 Java: Encapsulamento', 
  description: 'Encapsulamento é um dos pilares da Programação Orientada a Objetos (POO). Refere-se à ação de agrupar dados (atributos) e comportamentos (métodos) em uma única unidade, denominada objeto...',
  slug: 'java-encapsulamento',
  tags: [Tags.OBJECT_ORIENTED_PROGRAMMING],
  fileName: '39-java-encapsulation',
  createdAt: new Date(2024, 1, 5, 6, 0),
  listed: true
} 

const interpreterDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1518443855757-dfadac7101ae',
    author: {
      name: 'Grégoire Bertaud',
      href: 'https://unsplash.com/@sirtook'
    }
  },
  title: '🤹 Design Patterns em 1 minuto: Interpreter #23', 
  description: 'O padrão de projeto Interpreter provê uma forma dinâmica e clara de transformar em ações determinadas linguagens ou expressões...',
  slug: 'design-patterns-em-1-minuto-interpreter',
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '38-interpreter-design-pattern',
  createdAt: new Date(2024, 0, 31, 6, 0),
  listed: false
}

const mediatorDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1598188306155-25e400eb5078',
    author: {
      name: 'Malek Dridi',
      href: 'https://unsplash.com/@malek_dridi'
    }
  },
  title: '🚦 Design Patterns em 1 minuto: Mediator #22', 
  description: 'O Mediator é um padrão de projeto que ajuda a reduzir a complexidade entre a comunicação de múltiplos objetos...',
  slug: 'design-patterns-em-1-minuto-mediator',
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '37-mediator-design-pattern',
  createdAt: new Date(2024, 0, 30, 6, 0),
  listed: false
}

const flyweightDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1598223456174-1215efd9adbe',
    author: {
      name: 'Brent Olson',
      href: 'https://unsplash.com/@helixgames'
    }
  },
  title: '🏗️ Design Patterns em 1 minuto: Flyweight #21', 
  description: 'O Design Pattern Flyweight permite otimizar o uso de memória em casos onde nossa aplicação precisa disponibilizar uma grande quantidade de objetos contendo conteúdos semelhantes...',
  slug: 'design-patterns-em-1-minuto-flyweight',
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '36-flyweight-design-pattern',
  createdAt: new Date(2024, 0, 29, 6, 0),
  listed: false
}

const factoryMethodDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1595374322552-c464f0e8125e',
    author: {
      name: 'Clayton Manche',
      href: 'https://unsplash.com/@claymanche'
    }
  },
  title: '🛋️ Design Patterns em 1 minuto: Factory Method #20', 
  description: 'O padrão de projeto Factory Method provê um meio de criação de objetos que permite que classes filhas possam definir o tipo do objeto que será criado em um método definido na classe pai...',
  slug: 'design-patterns-em-1-minuto-factory-method',
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '35-factory-method-design-pattern',
  createdAt: new Date(2024, 0, 28, 6, 0),
  listed: false
}

const templateMethodDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1531220847861-69e336daffa0',
    author: {
      name: 'Malcolm Lightbody',
      href: 'https://unsplash.com/@mlightbody'
    }
  },
  title: '🍽️ Design Patterns em 1 minuto: Template Method #19', 
  description: 'O Template Method é o padrão de projeto que propõe que subclasses possam sobrescrever etapas de um comportamento da superclasse de forma estruturada e adaptável...',
  slug: 'design-patterns-em-1-minuto-template-method',
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '34-template-method-design-pattern',
  createdAt: new Date(2024, 0, 27, 6, 0),
  listed: false
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
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '33-bridge-design-pattern',
  createdAt: new Date(2024, 0, 26, 6, 0),
  listed: false
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
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '32-iterator-design-pattern',
  createdAt: new Date(2024, 0, 25, 6, 0),
  listed: false
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
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '31-visitor-design-pattern',
  createdAt: new Date(2024, 0, 24, 6, 0),
  listed: false
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
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '30-composite-design-pattern',
  createdAt: new Date(2024, 0, 23, 6, 0),
  listed: false
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
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '29-abstract-factory-design-pattern',
  createdAt: new Date(2024, 0, 22, 6, 0),
  listed: false
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
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '28-memento-design-pattern',
  createdAt: new Date(2024, 0, 21, 6, 0),
  listed: false
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
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '27-proxy-design-pattern',
  createdAt: new Date(2024, 0, 20, 6, 0),
  listed: false
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
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '26-state-design-pattern',
  createdAt: new Date(2024, 0, 19, 6, 0),
  listed: false
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
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '25-strategy-design-pattern',
  createdAt: new Date(2024, 0, 18, 6, 0),
  listed: false
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
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '24-facade-design-pattern',
  createdAt: new Date(2024, 0, 17, 6, 0),
  listed: false
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
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '23-prototype-design-pattern',
  createdAt: new Date(2024, 0, 16, 6, 0),
  listed: false
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
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '22-command-design-pattern',
  createdAt: new Date(2024, 0, 15, 6, 0),
  listed: false
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
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '21-decorator-design-pattern',
  createdAt: new Date(2024, 0, 14, 6, 0),
  listed: false
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
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '20-chain-of-responsibility-design-pattern',
  createdAt: new Date(2024, 0, 13, 5, 0),
  listed: false
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
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '19-singleton-design-pattern',
  createdAt: new Date(2024, 0, 12, 6, 0),
  listed: false
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
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '18-adapter-design-pattern',
  createdAt: new Date(2024, 0, 11, 6, 0),
  listed: false
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
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '17-observer-design-pattern',
  createdAt: new Date(2024, 0, 10, 5, 30),
  listed: false
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
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '16-builder-design-pattern',
  createdAt: new Date(2024, 0, 9, 7, 30),
  listed: false
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
  tags: [Tags.DESIGN_PATTERNS, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '15-design-patterns',
  createdAt: new Date(2024, 0, 8, 6, 0),
  listed: true
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
  tags: [Tags.DISTRIBUTED_SYSTEMS, Tags.OBSERVABILITY],
  fileName: '14-distributed-tracing',
  createdAt: new Date(2024, 0, 4, 6, 0),
  listed: true
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
  tags: [Tags.SOFTWARE_DEVELOPMENT],
  fileName: '13-how-spring-provides-di',
  createdAt: new Date(2024, 0, 1, 5, 30),
  listed: true
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
  tags: [Tags.SOFTWARE_DEVELOPMENT],
  fileName: '12-inversion-of-control',
  createdAt: new Date(2023, 11, 28, 6, 0),
  listed: true
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
  tags: [Tags.DATA_STRUCTURES, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '11-queues-and-stacks',
  createdAt: new Date(2023, 11, 25, 6, 0),
  listed: true
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
  tags: [Tags.DATA_STRUCTURES, Tags.SOFTWARE_DEVELOPMENT],
  fileName: '10-arrays-and-linked-lists',
  createdAt: new Date(2023, 11, 21, 6, 0),
  listed: true
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
  tags: [Tags.BEGINNERS, Tags.COMMUNITY],
  fileName: '9-ideas-to-practice-programming',
  createdAt: new Date(2023, 11, 18, 5, 30),
  listed: true
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
  tags: [Tags.SOFTWARE_DEVELOPMENT],
  fileName: '8-git-commands',
  createdAt: new Date(2023, 11, 15, 18, 30),
  listed: true
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
  tags: [Tags.SOFTWARE_DEVELOPMENT],
  fileName: '7-avoid-exceptions',
  createdAt: new Date(2023, 11, 11, 6, 0),
  listed: true
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
  tags: [Tags.SOFTWARE_DEVELOPMENT],
  fileName: '6-code-review',
  createdAt: new Date(2023, 11, 4, 5, 2),
  listed: true
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
  tags: [Tags.HELLO, Tags.COMMUNITY],
  fileName: '5-hello-world',
  createdAt: new Date(2023, 10, 27, 6),
  listed: true
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
  tags: [Tags.REST],
  fileName: '4-o-que-e-hateoas',
  createdAt: new Date(2023, 10, 23, 6),
  origin: new URL('https://gustavoflor.medium.com/o-que-e-hateoas-eddf9b093155'),
  listed: true
}

const capTheorem: Post = { 
  cover: {
    href: 'https://images.unsplash.com/photo-1569449047196-cebeecbc6b6b',
    author: {
      name: 'Yuriy Chemerys',
      href: 'https://unsplash.com/@ychemerys'
    }
  },
  title: '🌀 Coisas que você deveria saber sobre sistemas distribuídos: Teorema CAP', 
  description: 'O teorema CAP, também conhecido como teorema de Brewer, é um dos princípios fundamentais dos sistemas distribuídos. A premissa do teorema é que nenhum sistema com distribuição de dados pela rede…',
  slug: 'teorema-cap',
  tags: [Tags.DISTRIBUTED_SYSTEMS],
  fileName: '3-teorema-cap',
  createdAt: new Date(2023, 10, 20, 6),
  origin: new URL('https://gustavoflor.medium.com/coisas-que-voc%C3%AA-deveria-saber-sobre-sistemas-distribu%C3%ADdos-teorema-cap-39db9e0adf8d'),
  listed: true
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
  tags: [Tags.JSON],
  fileName: '2-o-que-e-json',
  createdAt: new Date(2023, 10, 11, 6),
  origin: new URL('https://gustavoflor.medium.com/o-que-e-json-02782fa508df'),
  listed: true
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
  tags: [Tags.REST, Tags.DISTRIBUTED_SYSTEMS],
  fileName: '1-o-que-e-rest',
  createdAt: new Date(2023, 10, 5, 6),
  origin: new URL('https://gustavoflor.medium.com/o-que-e-rest-8383ac3261cd'),
  listed: true
}

const posts: Post[] = [
  backpressure,
  kotlinIntroduction,
  circuitBreaker,
  sdkman,
  springAndOpenAPI,
  springMail,
  concurrencyAndParallelism,
  acidTransactions,
  solid,
  trailingCommaJava,
  testcontainers,
  quicksort,
  aggregationAndComposition,
  javaEncapsulation,
  interpreterDesignPattern,
  mediatorDesignPattern,
  flyweightDesignPattern,
  factoryMethodDesignPattern,
  templateMethodDesignPattern,
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

const highlight = backpressure;

const paginate = (posts: Post[], page: number = 1, size: number = 6): Page<Post> => {
  const offset = size * (page - 1);
  const totalPages = Math.ceil(posts.length / size);
  const paginatedItems = posts.slice(offset, size * page);

  return {
    previousPage: page - 1 ? page - 1 : null,
    nextPage: (totalPages > page) ? page + 1 : null,
    total: posts.length,
    totalPages: totalPages,
    items: paginatedItems
  };
}

const listedPosts = posts.filter(it => it.listed);

export const findAll = (page?: number, size?: number): Page<Post> => {
  return paginate(listedPosts, page, size);
}

export const findAllByTag = (tag: string, page?: number, size?: number): Page<Post> => {
  const filteredPosts = listedPosts.filter(it => it.tags.includes(tag));
  return paginate(filteredPosts, page, size);
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
