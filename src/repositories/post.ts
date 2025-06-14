import Slug from '@/enums/slug'
import Tag from '@/enums/tag'
import { IPage } from '@/schemas/page'
import { IPost } from '@/schemas/post'
import { LanguageCode } from '@/services/lang'

export const getNumberOfWords = (content: string) => {
  return content.split(/\s/g).length
}

export const getReadTime = (numberOfWords: number) => {
  const wordsPerMinute = 265
  const minutes = numberOfWords / wordsPerMinute
  return Math.ceil(minutes)
}

const scalabilityAndElasticity: IPost = {
  icon: '🪀',
  title: 'Escalabilidade e Elasticidade',
  description: 'Vamos falar sobre escalabilidade e elasticidade — conceitos relacionados, porém distintos, que muitas vezes são utilizados de forma incorreta como sinônimos....',
  cover: {
    href: 'https://images.unsplash.com/photo-1515073883629-5e2924e3e106',
    author: {
      name: 'Lodewijk Hertog',
      href: 'https://unsplash.com/@lue101'
    }
  },
  tags: [Tag.CLOUD, Tag.DISTRIBUTED_SYSTEMS],
  slug: Slug.SCALABILITY_AND_ELASTICITY,
  publishedAt: new Date(2024, 9, 26, 18, 30),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const loadTests: IPost = {
  icon: '🚚',
  title: 'O que é teste de carga?',
  description: 'Simulando diferentes cargas de uso em um sistema, os testes de carga nos ajudam a identificar possíveis gargalos antes mesmo que eles ocorram em produção...',
  cover: {
    href: 'https://images.unsplash.com/photo-1535696588143-945e1379f1b0',
    author: {
      name: 'riis riiiis',
      href: 'https://unsplash.com/@riiiis'
    }
  },
  tags: [Tag.TEST],
  slug: Slug.WHAT_IS_LOAD_TEST,
  publishedAt: new Date(2024, 6, 15, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const webhook: IPost = {
  icon: '📟',
  title: 'O que é webhook?',
  description: 'Webhook é uma forma de comunicação entre sistemas através de callbacks...',
  cover: {
    href: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97',
    author: {
      name: 'Erda Estremera',
      href: 'https://unsplash.com/@erdaest'
    }
  },
  tags: [Tag.DISTRIBUTED_SYSTEMS, Tag.REST],
  slug: Slug.WHAT_IS_WEBHOOK,
  publishedAt: new Date(2024, 6, 1, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const idempotentApi: IPost = {
  icon: '🧦',
  title: 'Idempotência em sua API',
  description: 'Idempotência é um termo utilizado na computação para definir operações que, de acordo com o input inicial, são executadas múltiplas vezes sem alterar seu resultado final. Entenda...',
  cover: {
    href: 'https://images.unsplash.com/photo-1516446589542-81d7ca527b82',
    author: {
      name: 'Danny Trujillo',
      href: 'https://unsplash.com/@panoramablack'
    }
  },
  tags: [Tag.DISTRIBUTED_SYSTEMS, Tag.REST],
  slug: Slug.IDEMPOTENT_API,
  publishedAt: new Date(2024, 5, 17, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const backpressure: IPost = {
  icon: '🦀',
  title: 'Gerenciamento de fluxo e recursos com backpressure',
  description: 'Backpressure é uma técnica para garantir o funcionamento correto de um software ao processar um fluxo de dados. Ela permite que a aplicação gerencie...',
  cover: {
    href: 'https://images.unsplash.com/photo-1631472608403-2c8d6f61a08e',
    author: {
      name: 'aisvri',
      href: 'https://unsplash.com/@aisvri'
    }
  },
  tags: [Tag.DISTRIBUTED_SYSTEMS],
  slug: Slug.BACKPRESSURE,
  publishedAt: new Date(2024, 5, 3, 10, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const kotlinIntroduction: IPost = {
  icon: '🧚‍♀️',
  title: 'Kotlin: Vantagens, mitos, dicas e conceitos fundamentais',
  description: 'Vamos falar sobre Kotlin! Neste texto, quero compartilhar algumas coisas que aprendi nas últimas semanas, desvendar alguns mitos sobre a linguagem e fornecer exemplos práticos para quem está começando...',
  cover: {
    href: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac',
    author: {
      name: 'Mikhail Vasilyev',
      href: 'https://unsplash.com/@miklevasilyev'
    }
  },
  tags: [Tag.KOTLIN, Tag.BEGINNERS],
  slug: Slug.KOTLIN_INTRODUCTION,
  publishedAt: new Date(2024, 4, 27, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const circuitBreaker: IPost = {
  icon: '🎒',
  title: 'Como utilizar Circuit Breaker para tornar seu serviço mais resiliente',
  description: 'O padrão Circuit Breaker, na arquitetura de microsserviços, possibilita que uma aplicação consiga se manter de pé, evitando falhas em cascata, ao enfretar problemas de comunicação com chamadas remotas...',
  cover: {
    href: 'https://images.unsplash.com/photo-1560948799-e17458123a9a',
    author: {
      name: 'Azat Kilinç',
      href: 'https://unsplash.com/@kilincazat'
    }
  },
  tags: [Tag.BEST_PRACTICES, Tag.DISTRIBUTED_SYSTEMS],
  slug: Slug.CIRCUIT_BREAKER,
  publishedAt: new Date(2024, 4, 13, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const sdkman: IPost = {
  icon: '🧑‍💼',
  title: 'SDKMan: Ferramenta para gerenciamento de SDKs',
  description: 'Vamos falar sobre o SDKMan, o que é a essa ferramenta e suas vantagem de utilizar. SDKMan é um gerenciador de SDKs...',
  cover: {
    href: 'https://images.unsplash.com/photo-1547270785-e11cb938d594',
    author: {
      name: 'nrd',
      href: 'https://unsplash.com/@nicotitto'
    }
  },
  tags: [Tag.TOOLS, Tag.BEGINNERS],
  slug: Slug.SDKMAN,
  publishedAt: new Date(2024, 3, 22, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const springAndOpenAPI: IPost = {
  icon: '📝',
  title: 'Spring: Documentando sua API HTTP com OpenAPI',
  description: 'O OpenAPI, também conhecido como Swagger, é uma forma de especificar e documentar sua API HTTP. É uma forma padronizada e agnóstica à linguagem que permite expor os padrões e comportamentos de um serviço...',
  cover: {
    href: 'https://images.unsplash.com/photo-1671900599250-5f6a1ff85762',
    author: {
      name: 'Felicia Montenegro',
      href: 'https://unsplash.com/@feliciamontenegro'
    }
  },
  tags: [Tag.JAVA, Tag.SPRING, Tag.BEGINNERS],
  slug: Slug.SPRING_AND_OPENAPI,
  publishedAt: new Date(2024, 3, 15, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const springMail: IPost = {
  icon: '📮',
  title: 'Envio de e-mails com Spring Mail',
  description: 'O envio de e-mails é um aspecto crucial para diversas aplicações, sendo utilizado para enviar notificações, alertas ou comunicações para os usuários.',
  cover: {
    href: 'https://images.unsplash.com/photo-1618230305526-48435ece521f',
    author: {
      name: 'Oscar Fickel',
      href: 'https://unsplash.com/@oscarfickel3'
    }
  },
  tags: [Tag.JAVA, Tag.SPRING, Tag.BEGINNERS],
  slug: Slug.SPRING_MAIL,
  publishedAt: new Date(2024, 3, 8, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const concurrencyAndParallelism: IPost = {
  icon: '🏎️',
  title: 'Concorrência e Paralelismo',
  description: 'Concorrência e paralelismo são conceitos relacionados na computação, frequentemente utilizados como sinônimos. No entanto, eles têm significados diferentes. Entender essa diferença pode ser crucial no design eficiente de um software.',
  cover: {
    href: 'https://images.unsplash.com/photo-1604398907654-ec2bf7108b4a',
    author: {
      name: 'Kelly',
      href: 'https://unsplash.com/@kelly104'
    }
  },
  tags: [Tag.SOFTWARE_DEVELOPMENT, Tag.BEGINNERS],
  slug: Slug.CONCURRENCY_AND_PARALLELISM,
  publishedAt: new Date(2024, 2, 25, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const acidTransactions: IPost = {
  icon: '🕯️',
  title: 'O que são transações ACID?',
  description: 'Em um sistema de banco de dados, uma transação representa uma unidade de trabalho (operação lógica)...',
  cover: {
    href: 'https://images.unsplash.com/photo-1497910091122-9f8a7746eb33',
    author: {
      name: 'Nathan Riley',
      href: 'https://unsplash.com/@nrly'
    }
  },
  tags: [Tag.DATABASE_SYSTEMS],
  slug: Slug.ACID_TRANSACTIONS,
  publishedAt: new Date(2024, 2, 18, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const solid: IPost = {
  icon: '🧱',
  title: 'O que é SOLID?',
  description: 'SOLID é um acrônimo para cinco princípios da programação orientada a objetos que visam a produção de um software sólido (🥸)...',
  cover: {
    href: 'https://images.unsplash.com/photo-1591867833879-1285ba2b206d',
    author: {
      name: 'Quentin Grignet',
      href: 'https://unsplash.com/@qgrignet'
    }
  },
  tags: [Tag.BEGINNERS, Tag.SOFTWARE_DEVELOPMENT, Tag.BEST_PRACTICES],
  slug: Slug.WHAT_IS_SOLID,
  publishedAt: new Date(2024, 2, 11, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const trailingCommaJava: IPost = {
  icon: '☕️',
  title: 'Vantagens da vírgula no fim de expressões multilinha',
  description: 'Neste texto, pretendo apresentar os motivos pelos quais a vírgula ao final de expressões multilinha é mais do que apenas uma convenção de estilo...',
  cover: {
    href: 'https://images.unsplash.com/photo-1644270489776-217a353eb842',
    author: {
      name: 'Luca Dugaro',
      href: 'https://unsplash.com/@lucadgr'
    }
  },
  tags: [Tag.JAVA, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.TRAILING_COMMA_JAVA,
  publishedAt: new Date(2024, 2, 4, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const testcontainers: IPost = {
  icon: '🪢',
  title: 'O que é Testcontainers?',
  description: 'Testcontainers é uma biblioteca de código aberto, que disponibiliza instâncias de qualquer aplicação que possa ser executada em um container...',
  cover: {
    href: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55',
    author: {
      name: 'Kate Stone Matheson',
      href: 'https://unsplash.com/@kstonematheson'
    }
  },
  tags: [Tag.DISTRIBUTED_SYSTEMS, Tag.TEST],
  slug: Slug.TESTCONTAINERS,
  publishedAt: new Date(2024, 1, 26, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const quicksort: IPost = {
  icon: '⛵️',
  title: 'Algoritmos: Quicksort',
  description: 'O Quicksort é um eficiente algoritmo de ordenação, baseia-se em dividir o problema em partes menores, para resolver esta tarefa...',
  cover: {
    href: 'https://images.unsplash.com/photo-1494947665470-20322015e3a8',
    author: {
      name: 'Matt Nelson',
      href: 'https://unsplash.com/@mnelson'
    }
  },
  tags: [Tag.ALGORITHMS],
  slug: Slug.QUICKSORT,
  publishedAt: new Date(2024, 1, 19, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const aggregationAndComposition: IPost = {
  icon: '☕️',
  title: 'Agregação e Composição',
  description: 'Agregação e composição são dois tipos de relacionamento da programação orientada a objetos (POO). Ambos representam associações de propriedade entre objetos, porém...',
  cover: {
    href: 'https://images.unsplash.com/photo-1619017236031-6f55d516f49a',
    author: {
      name: 'Federico Di Dio',
      href: 'https://unsplash.com/@didiofederico_photographer'
    }
  },
  tags: [Tag.OBJECT_ORIENTED_PROGRAMMING],
  slug: Slug.AGGREGATION_AND_COMPOSITION,
  publishedAt: new Date(2024, 1, 12, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const javaEncapsulation: IPost = {
  icon: '🎯',
  title: 'Java: Encapsulamento',
  description: 'Encapsulamento é um dos pilares da Programação Orientada a Objetos (POO). Refere-se à ação de agrupar dados (atributos) e comportamentos (métodos) em uma única unidade, denominada objeto...',
  cover: {
    href: 'https://images.unsplash.com/photo-1597250388001-fc5a96b307eb',
    author: {
      name: 'Zach Zook',
      href: 'https://unsplash.com/@zachzook'
    }
  },
  tags: [Tag.OBJECT_ORIENTED_PROGRAMMING],
  slug: Slug.JAVA_ENCAPSULATION,
  publishedAt: new Date(2024, 1, 5, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
} 

const interpreterDesignPattern: IPost = {
  icon: '🤹',
  title: 'Design Patterns em 1 minuto: Interpreter #23',
  description: 'O padrão de projeto Interpreter provê uma forma dinâmica e clara de transformar em ações determinadas linguagens ou expressões...',
  cover: {
    href: 'https://images.unsplash.com/photo-1518443855757-dfadac7101ae',
    author: {
      name: 'Grégoire Bertaud',
      href: 'https://unsplash.com/@sirtook'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.INTERPRETER_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 31, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const mediatorDesignPattern: IPost = {
  icon: '🚦',
  title: 'Design Patterns em 1 minuto: Mediator #22',
  description: 'O Mediator é um padrão de projeto que ajuda a reduzir a complexidade entre a comunicação de múltiplos objetos...',
  cover: {
    href: 'https://images.unsplash.com/photo-1598188306155-25e400eb5078',
    author: {
      name: 'Malek Dridi',
      href: 'https://unsplash.com/@malek_dridi'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.MEDIATOR_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 30, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const flyweightDesignPattern: IPost = {
  icon: '🏗️',
  title: 'Design Patterns em 1 minuto: Flyweight #21',
  description: 'O Design Pattern Flyweight permite otimizar o uso de memória em casos onde nossa aplicação precisa disponibilizar uma grande quantidade de objetos contendo conteúdos semelhantes...',
  cover: {
    href: 'https://images.unsplash.com/photo-1598223456174-1215efd9adbe',
    author: {
      name: 'Brent Olson',
      href: 'https://unsplash.com/@helixgames'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.FLYWEIGHT_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 29, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const factoryMethodDesignPattern: IPost = {
  icon: '🛋️',
  title: 'Design Patterns em 1 minuto: Factory Method #20',
  description: 'O padrão de projeto Factory Method provê um meio de criação de objetos que permite que classes filhas possam definir o tipo do objeto que será criado em um método definido na classe pai...',
  cover: {
    href: 'https://images.unsplash.com/photo-1595374322552-c464f0e8125e',
    author: {
      name: 'Clayton Manche',
      href: 'https://unsplash.com/@claymanche'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.FACTORY_METHOD_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 28, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const templateMethodDesignPattern: IPost = {
  icon: '🍽️',
  title: 'Design Patterns em 1 minuto: Template Method #19',
  description: 'O Template Method é o padrão de projeto que propõe que subclasses possam sobrescrever etapas de um comportamento da superclasse de forma estruturada e adaptável...',
  cover: {
    href: 'https://images.unsplash.com/photo-1531220847861-69e336daffa0',
    author: {
      name: 'Malcolm Lightbody',
      href: 'https://unsplash.com/@mlightbody'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.TEMPLATE_METHOD_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 27, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const bridgeDesignPattern: IPost = {
  icon: '🌉',
  title: 'Design Patterns em 1 minuto: Bridge #18',
  description: 'O padrão de projeto Bridge propõe a separação das responsabilidades de uma classe em duas camadas: abstração e implementação...',
  cover: {
    href: 'https://images.unsplash.com/photo-1552071379-041b32707fed',
    author: {
      name: 'Dušan veverkolog',
      href: 'https://unsplash.com/@veverkolog'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.BRIDGE_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 26, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const iteratorDesignPattern: IPost = {
  icon: '🔄',
  title: 'Design Patterns em 1 minuto: Iterator #17',
  description: 'O padrão de projeto Iterator permite percorrer uma coleção de elementos sem precisar expor sua implementação...',
  cover: {
    href: 'https://images.unsplash.com/photo-1634609243366-ddd646c1b241',
    author: {
      name: 'Joshua J. Cotten',
      href: 'https://unsplash.com/@jcotten'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.ITERATOR_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 25, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const visitorDesignPattern: IPost = {
  icon: '🚶',
  title: 'Design Patterns em 1 minuto: Visitor #16',
  description: 'O Design Pattern Visitor permite separar o comportamento do objeto em que é executado, aumentando assim a modularidade e adaptabilidade da sua aplicação...',
  cover: {
    href: 'https://images.unsplash.com/photo-1601247387326-f8bcb5a234d4',
    author: {
      name: 'Joshua J. Cotten',
      href: 'https://unsplash.com/@jcotten'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.VISITOR_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 24, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const compositeDesignPattern: IPost = {
  icon: '🌳',
  title: 'Design Patterns em 1 minuto: Composite #15',
  description: 'O padrão de projeto Composite propõe que conjuntos de objetos sejam compostos em estruturas de árvore e que cada objeto agrupador delegue o comportamento para seus nós...',
  cover: {
    href: 'https://images.unsplash.com/photo-1503951164464-cfc904b89299',
    author: {
      name: 'Samuel Foster',
      href: 'https://unsplash.com/@samuelfoster_co_uk'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.COMPOSITE_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 23, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const abstractFactoryDesignPattern: IPost = {
  icon: '🏭',
  title: 'Design Patterns em 1 minuto: Abstract Factory #14',
  description: 'O Abstract Factory é um padrão de projeto que permite desacoplar a criação de famílias de objetos relacionados e/ou dependentes sem especificar suas classes concretas...',
  cover: {
    href: 'https://images.unsplash.com/photo-1502083896352-259ab9e342d7',
    author: {
      name: 'Caleb Woods',
      href: 'https://unsplash.com/@caleb_woods'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.ABSTRACT_FACTORY_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 22, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const mementoDesignPattern: IPost = {
  icon: '📃',
  title: 'Design Patterns em 1 minuto: Memento #13',
  description: 'O padrão de projeto Memento permite que você restaure estados passados do seu objeto de forma prática sem revelar sua estrutura interna...',
  cover: {
    href: 'https://images.unsplash.com/photo-1514373941175-0a141072bbc8',
    author: {
      name: 'Ron Fung',
      href: 'https://unsplash.com/@oriz'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.MEMENTO_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 21, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const proxyDesignPattern: IPost = {
  icon: '🎩',
  title: 'Design Patterns em 1 minuto: Proxy #12',
  description: 'O Design Pattern Proxy provê uma camada de controle de acesso a um objeto. Essa camada pode ser utilizada para evitar...',
  cover: {
    href: 'https://images.unsplash.com/photo-1511694009171-3cdddf4484ff',
    author: {
      name: 'Chunli Ju',
      href: 'https://unsplash.com/@chunlea'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.PROXY_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 20, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const stateDesignPattern: IPost = {
  icon: '🧑‍🔬',
  title: 'Design Patterns em 1 minuto: State #11',
  description: 'O padrão de projeto State permite que seu objeto mude os comportamentos quando altera seu estado interno...',
  cover: {
    href: 'https://images.unsplash.com/photo-1537151641189-e685b67326c5',
    author: {
      name: 'Alvan Nee',
      href: 'https://unsplash.com/@alvannee'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.STATE_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 19, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const strategyDesignPattern: IPost = {
  icon: '🛣️',
  title: 'Design Patterns em 1 minuto: Strategy #10',
  description: 'O padrão de projeto Strategy permite definir o comportamento de um algoritmo durante a execução da aplicação...', 
  cover: {
    href: 'https://images.unsplash.com/photo-1494913148647-353ae514b35e',
    author: {
      name: 'Alvan Nee',
      href: 'https://unsplash.com/@alvannee'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.STRATEGY_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 18, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const facadeDesignPattern: IPost = {
  icon: '🏛️',
  title: 'Design Patterns em 1 minuto: Facade #9',
  description: 'O padrão de projeto Facade provê uma interface de uso simplificada para uma biblioteca, framework ou qualquer outro conjunto complexo de classes...',
  cover: {
    href: 'https://images.unsplash.com/photo-1542665093852-744c79500d45',
    author: {
      name: 'Tomas Tuma',
      href: 'https://unsplash.com/@tomastuma'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.FACADE_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 17, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const prototypeDesignPattern: IPost = {
  icon: '🤖',
  title: 'Design Patterns em 1 minuto: Prototype / Clone #8',
  description: 'Prototype (também conhecido por Clone) é o padrão de projeto que permite a clonagem de um objeto...',
  cover: {
    href: 'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83',
    author: {
      name: 'Jari Hytönen',
      href: 'https://unsplash.com/@jarispics'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.PROTOTYPE_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 16, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const commandDesignPattern: IPost = {
  icon: '📮',
  title: 'Design Patterns em 1 minuto: Command #7',
  description: 'O padrão de projeto Command possibilita que você agrupe todos os dados de sua requisição em um único objeto...',
  cover: {
    href: 'https://images.unsplash.com/photo-1492376791813-ee6dbb35caa3',
    author: {
      name: 'Bradley Pisney',
      href: 'https://unsplash.com/@bradleypisney'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.COMMAND_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 15, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const decoratorDesignPattern: IPost = {
  icon: '🪆',
  title: 'Design Patterns em 1 minuto: Decorator #6',
  description: 'O Design Pattern Decorator permite customizar os comportamentos de seus objetos sem sobrescrevê-los...',
  cover: {
    href: 'https://images.unsplash.com/photo-1466921583968-f07aa80c526e',
    author: {
      name: 'Braydon Anderson',
      href: 'https://unsplash.com/@braydona'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.DECORATOR_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 14, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const chainOfResponsibilityDesignPattern: IPost = {
  icon: '🔗',
  title: 'Design Patterns em 1 minuto: Chain of Responsibility #5',
  description: 'O Chain of Responsibility é um padrão de projeto que permite desacoplar o controle do fluxo de código repassando a responsabilidade para uma cadeia que...',
  cover: {
    href: 'https://images.unsplash.com/photo-1555008872-f03b347ffb53',
    author: {
      name: 'Hannah Reding',
      href: 'https://unsplash.com/@hannahrdg'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.CHAIN_OF_RESPONSIBILITY_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 13, 5, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const singletonDesignPattern: IPost = {
  icon: '🔮',
  title: 'Design Patterns em 1 minuto: Singleton #4',
  description: 'O Design Pattern Singleton garante que uma classe possua uma única (single) instância compartilhada por toda a aplicação...',
  cover: {
    href: 'https://images.unsplash.com/photo-1673439782481-c02fd9688391',
    author: {
      name: 'Dominik Kempf',
      href: 'https://unsplash.com/@dominik_kempf'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.SINGLETON_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 12, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const adapterDesignPattern: IPost = {
  icon: '🧬',
  title: 'Design Patterns em 1 minuto: Adapter #3',
  description: 'O Adapter é um Design Pattern que permite que interfaces incompatíveis trabalhem juntas adequadamente...',
  cover: {
    href: 'https://images.unsplash.com/photo-1550782674-fa597ecc1bfd',
    author: {
      name: 'Kyle Johnson',
      href: 'https://unsplash.com/@kylejeffreys'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.ADAPTER_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 11, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const observerDesignPattern: IPost = {
  icon: '👀',
  title: 'Design Patterns em 1 minuto: Observer #2',
  description: 'O Design Pattern Observer permite criar um mecanismo — pub/sub — de processamento orientado a eventos...',
  cover: {
    href: 'https://images.unsplash.com/photo-1516222338250-863216ce01ea',
    author: {
      name: 'Josh Rakower',
      href: 'https://unsplash.com/@joshrako'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.OBSERVER_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 10, 5, 30),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const builderDesignPattern: IPost = {
  icon: '👷',
  title: 'Design Patterns em 1 minuto: Builder #1',
  description: 'Builder é o padrão de projeto que tem como objetivo principal permitir a criação de objetos complexos de maneira simplificada e estruturada...',
  cover: {
    href: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d',
    author: {
      name: 'James Barker',
      href: 'https://unsplash.com/@barkernotbaker'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.BUILDER_DESIGN_PATTERN,
  publishedAt: new Date(2024, 0, 9, 7, 30),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const designPatterns: IPost = {
  icon: '🥷',
  title: 'Design Patterns em 1 minuto',
  description: 'Os padrões de projeto são uma forma padronizada de solucionar um problema comum existente no desenvolvimento de software...',
  cover: {
    href: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a',
    author: {
      name: 'Jamie Street',
      href: 'https://unsplash.com/@jamie452'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.DESIGN_PATTERNS,
  publishedAt: new Date(2024, 0, 8, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const distributedTracing: IPost = {
  icon: '🧶',
  title: 'Coisas que você deveria saber sobre sistemas distribuídos: Distributed Tracing',
  description: 'Distributed Tracing, em tradução livre rastreamento distribuído, é um padrão arquitetural de microserviços utilizado para facilitar e otimizar a observabilidade em sistemas distribuídos.',
  cover: {
    href: 'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8',
    author: {
      name: 'Jamie Street',
      href: 'https://unsplash.com/@jamie452'
    }
  },
  tags: [Tag.DISTRIBUTED_SYSTEMS, Tag.OBSERVABILITY],
  slug: Slug.DISTRIBUTED_TRACING,
  publishedAt: new Date(2024, 0, 4, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const howSpringProvidesDependencyInjection: IPost = {
  icon: '🍃',
  title: 'Como o Spring provê a injeção de dependências?',
  description: 'Que a injeção “automágica” de dependências do Spring proporciona agilidade e simplicidade na escrita de aplicações todos nós já sabemos, mas você sabe como o Spring gerencia e provê essa funcionalidade para nós desenvolvedores?',
  cover: {
    href: 'https://images.unsplash.com/photo-1581888227599-779811939961',
    author: {
      name: 'Jamie Street',
      href: 'https://unsplash.com/@jamie452'
    }
  },
  tags: [Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.HOW_SPRING_PROVIDES_DI,
  publishedAt: new Date(2024, 0, 1, 5, 30),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const inversionOfControl: IPost = {
  icon: '🕺',
  title: 'O que é IoC?',
  description: 'IoC, acrônimo de Inversion of Control (Inversão de Controle), é um princípio da engenharia de software que incentiva a inversão do controle do fluxo da aplicação, mas o que significa isso?',
  cover: {
    href: 'https://images.unsplash.com/photo-1616093875201-cc5b7a6e9c8a',
    author: {
      name: 'Franz Hajak',
      href: 'https://unsplash.com/@riofranz'
    }
  },
  tags: [Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.INVERSION_OF_CONTROL,
  publishedAt: new Date(2023, 11, 28, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const queuesAndStacks: IPost = {
  icon: '🦉',
  title: 'Filas e pilhas',
  description: 'Filas e pilhas são estruturas de dados muito utilizadas quando precisamos encadear elementos em uma coleção, são muito semelhantes a filas encadeadas, porém, mais restritas e específicas para seus casos de uso, vamos entender…',
  cover: {
    href: 'https://images.unsplash.com/photo-1506774518161-b710d10e2733',
    author: {
      name: 'Michał Parzuchowski',
      href: 'https://unsplash.com/@mparzuchowski'
    }
  },
  tags: [Tag.DATA_STRUCTURES, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.QUEUES_AND_STACKS,
  publishedAt: new Date(2023, 11, 25, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const arraysAndLinkedLists: IPost = { 
  icon: '☀️',
  title: 'Arrays e listas encadeadas',
  description: 'Arrays e listas encadeadas (linked lists) são estruturas de dados que armazenam coleções de elementos, mas fazem isso de diferentes formas, com suas respectivas vantagens e desvantagens.',
  cover: {
    href: 'https://images.unsplash.com/photo-1682448169828-039868860001',
    author: {
      name: 'Lakindu Sepala',
      href: 'https://unsplash.com/@lakindu_sepala'
    }
  },
  tags: [Tag.DATA_STRUCTURES, Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.ARRAYS_AND_LINKED_LISTS,
  publishedAt: new Date(2023, 11, 21, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const ideasToPracticeProgramming: IPost = { 
  icon: '💡',
  title: '6 ideias para praticar programação',
  description: 'Escrito por um programador e para programadores ou interessados, este texto oferece formas e estratégias para pôr em prática a escrita de código, desde desafios de codificação até projetos colaborativos.',
  cover: {
    href: 'https://images.unsplash.com/photo-1605379399642-870262d3d051',
    author: {
      name: 'Fotis Fotopoulos',
      href: 'https://unsplash.com/@ffstop'
    }
  },
  tags: [Tag.BEGINNERS, Tag.COMMUNITY],
  slug: Slug.IDEAS_TO_PRACTICE_PROGRAMMING,
  publishedAt: new Date(2023, 11, 18, 5, 30),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const gitCommands: IPost = { 
  icon: '😸',
  title: 'Git: Comandos chave para devs',
  description: 'Para desenvolvedores modernos, o Git é uma ferramenta indispensável. Dominar seus comandos é essencial para otimizar o fluxo de trabalho. Esta leitura contém algum dos comandos que mais utilizo durante meu fluxo de desenvolvimento.',
  cover: {
    href: 'https://images.unsplash.com/photo-1595511890410-3b8dc237a537',
    author: {
      name: 'Dietmar Ludmann',
      href: 'https://unsplash.com/@d13n'
    }
  },
  tags: [Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.GIT_COMMANDS,
  publishedAt: new Date(2023, 11, 15, 18, 30),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const avoidExceptions: IPost = { 
  icon: '🚫',
  title: 'PARE de usar exceções para controle de fluxo',
  description: 'As exceções podem estar causando impacto de performance desnecessário na sua aplicação — se você as utiliza para controle de fluxo. Entenda...',
  cover: {
    href: 'https://images.unsplash.com/photo-1606011334315-025e4baab810',
    author: {
      name: 'Roberto Huczek',
      href: 'https://unsplash.com/@tamoio'
    }
  },
  tags: [Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.AVOID_EXCEPTIONS,
  publishedAt: new Date(2023, 11, 11, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const codeReview: IPost = { 
  icon: '🤝',
  title: 'Revisão de código: criando um ambiente de colaboração e aprendizado contínuo',
  description: 'A revisão de código é uma parte crucial do processo de desenvolvimento de software, é o momento onde desenvolvedores examinam o código fonte de outros desenvolvedores com objetivo de prover sugestões sobre as alterações analisadas e...',
  cover: {
    href: 'https://images.unsplash.com/photo-1600232943169-3fe49a6f4071',
    author: {
      name: 'Nicolas Noonan',
      href: 'https://unsplash.com/@nikolasnoonan'
    }
  },
  tags: [Tag.SOFTWARE_DEVELOPMENT],
  slug: Slug.CODE_REVIEW,
  publishedAt: new Date(2023, 11, 4, 5, 2),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const helloWorld: IPost = { 
  icon: '👋',
  title: 'Olá, eu sou o Flôr',
  description: 'Este é o lugar em que escrevo o que gostaria de ler, falo sobre o que estou estudando e publico devaneios sobre sistemas que você utiliza todos os dias.',
  cover: {
    href: 'https://images.unsplash.com/photo-1596276122653-651a3898309f',
    author: {
      name: 'Artem Bryzgalov',
      href: 'https://unsplash.com/@abrizgalov'
    }
  },
  tags: [Tag.HELLO, Tag.COMMUNITY],
  slug: Slug.HELLO_WORLD,
  publishedAt: new Date(2023, 10, 27, 6),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const hateoas: IPost = { 
  icon: '🥏',
  title: 'O que é HATEOAS e qual sua relação com REST?',
  description: 'Falamos recentemente sobre REST, o que é e quais suas principais características, porém, um tema ficou em aberto para conversarmos, e chegou o momento de fazer isto, vamos falar sobre o que é HATEOAS…',
  cover: {
    href: 'https://images.unsplash.com/photo-1519098901909-b1553a1190af',
    author: {
      name: 'Florencia Potter',
      href: 'https://unsplash.com/@florenciapotter'
    }
  },
  tags: [Tag.REST],
  slug: Slug.WHAT_IS_HATEOAS,
  publishedAt: new Date(2023, 10, 23, 6),
  origin: new URL('https://gustavoflor.medium.com/o-que-e-hateoas-eddf9b093155'),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const capTheorem: IPost = {
  icon: '🌀',
  title: 'Coisas que você deveria saber sobre sistemas distribuídos: Teorema CAP',
  description: 'O teorema CAP, também conhecido como teorema de Brewer, é um dos princípios fundamentais dos sistemas distribuídos. A premissa do teorema é que nenhum sistema com distribuição de dados pela rede…',
  cover: {
    href: 'https://images.unsplash.com/photo-1569449047196-cebeecbc6b6b',
    author: {
      name: 'Yuriy Chemerys',
      href: 'https://unsplash.com/@ychemerys'
    }
  },
  tags: [Tag.DISTRIBUTED_SYSTEMS],
  slug: Slug.CAP_THEOREM,
  publishedAt: new Date(2023, 10, 20, 6),
  origin: new URL('https://gustavoflor.medium.com/coisas-que-voc%C3%AA-deveria-saber-sobre-sistemas-distribu%C3%ADdos-teorema-cap-39db9e0adf8d'),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const json: IPost = {
  icon: '🏒',
  title: 'O que é JSON?',
  description: 'O acrônimo JSON vem de JavaScript Object Notation, é um formato leve de gravar e transportar dados, é utilizado comumente na comunicação entre aplicações cliente-servidor, é "auto descritivo" e fácil de entender.',
  cover: {
    href: 'https://images.unsplash.com/photo-1522346513757-54c552451fdc',
    author: {
      name: 'Nik',
      href: 'https://unsplash.com/@helloimnik'
    }
  },
  tags: [Tag.JSON],
  slug: Slug.WHAT_IS_JSON,
  publishedAt: new Date(2023, 10, 11, 6),
  origin: new URL('https://gustavoflor.medium.com/o-que-e-json-02782fa508df'),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const rest: IPost = {
  icon: '😴',
  title: 'O que é REST?',
  description: 'Se você pensou em descanso, lamento ter que informar, porém não será o tema do artigo de hoje, na verdade vamos falar sobre um estilo de arquitetura de software, em algumas literaturas também chamado…',
  cover: {
    href: 'https://images.unsplash.com/photo-1541188495357-ad2dc89487f4',
    author: {
      name: 'Aleksandar Cvetanovic',
      href: 'https://unsplash.com/@lemonzandtea'
    }
  },
  tags: [Tag.REST, Tag.DISTRIBUTED_SYSTEMS],
  slug: Slug.WHAT_IS_REST,
  publishedAt: new Date(2023, 10, 5, 6),
  origin: new URL('https://gustavoflor.medium.com/o-que-e-rest-8383ac3261cd'),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

export const posts: IPost[] = [
  scalabilityAndElasticity,
  loadTests,
  webhook,
  idempotentApi,
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
]

const postsBySlug = posts.reduce((posts, post) => {
  posts[post.slug] = post
  return posts
}, {} as Record<string, IPost>)

export const highlight = scalabilityAndElasticity

const paginate = (posts: IPost[], page: number = 1, size: number = 6): IPage<IPost> => {
  const offset = size * (page - 1)
  const totalPages = Math.ceil(posts.length / size)
  const paginatedItems = posts.slice(offset, size * page)

  return {
    previousPage: page - 1 ? page - 1 : null,
    nextPage: (totalPages > page) ? page + 1 : null,
    total: posts.length,
    totalPages: totalPages,
    items: paginatedItems
  }
}

const listedPosts = posts.filter(it => it.listed)

export const findAll = (page?: number, size?: number): IPage<IPost> => {
  return paginate(listedPosts, page, size)
}

export const findAllByTag = (tag: string, page?: number, size?: number): IPage<IPost> => {
  const filteredPosts = listedPosts.filter(it => it.tags.includes(tag))
  return paginate(filteredPosts, page, size)
}

export const findBySlug = (slug: string): IPost | undefined => {
  return postsBySlug[slug]
}

export const getHighlight = (): IPost => {
  return highlight
}
