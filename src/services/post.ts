import { translate } from './i18n';
import { getPreferredLanguage, LanguageCode } from "./lang";

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
  tags: string[];
  fileName: string;
  createdAt: Date;
  origin?: URL;
  listed: boolean;
  availableLanguages: LanguageCode[];
}

interface Page<I> {
  previousPage: number | null;
  nextPage: number | null;
  total: number;
  totalPages: number;
  items: I[];
}

export enum Tag {
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
  CLOUD = "cloud",
}

const scalabilityAndElasticity: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1515073883629-5e2924e3e106',
    author: {
      name: 'Lodewijk Hertog',
      href: 'https://unsplash.com/@lue101'
    }
  },
  tags: [Tag.CLOUD, Tag.DISTRIBUTED_SYSTEMS],
  fileName: '56-scalability-and-elasticity',
  createdAt: new Date(2024, 9, 26, 18, 30),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR]
}

const loadTests: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1535696588143-945e1379f1b0',
    author: {
      name: 'riis riiiis',
      href: 'https://unsplash.com/@riiiis'
    }
  },
  tags: [Tag.TEST],
  fileName: '55-what-is-load-test',
  createdAt: new Date(2024, 6, 15, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR]
}

const webhook: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97',
    author: {
      name: 'Erda Estremera',
      href: 'https://unsplash.com/@erdaest'
    }
  },
  tags: [Tag.DISTRIBUTED_SYSTEMS, Tag.REST],
  fileName: '54-what-is-webhook',
  createdAt: new Date(2024, 6, 1, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR]
}

const idempotentApi: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1516446589542-81d7ca527b82',
    author: {
      name: 'Danny Trujillo',
      href: 'https://unsplash.com/@panoramablack'
    }
  },
  tags: [Tag.DISTRIBUTED_SYSTEMS, Tag.REST],
  fileName: '53-idempotent-api',
  createdAt: new Date(2024, 5, 17, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR]
}

const backpressure: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1631472608403-2c8d6f61a08e',
    author: {
      name: 'aisvri',
      href: 'https://unsplash.com/@aisvri'
    }
  },
  tags: [Tag.DISTRIBUTED_SYSTEMS],
  fileName: '52-backpressure',
  createdAt: new Date(2024, 5, 3, 10, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR]
}

const kotlinIntroduction: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac',
    author: {
      name: 'Mikhail Vasilyev',
      href: 'https://unsplash.com/@miklevasilyev'
    }
  },
  tags: [Tag.KOTLIN, Tag.BEGINNERS],
  fileName: '51-kotlin-introduction',
  createdAt: new Date(2024, 4, 27, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR]
}

const circuitBreaker: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1560948799-e17458123a9a',
    author: {
      name: 'Azat Kilinç',
      href: 'https://unsplash.com/@kilincazat'
    }
  },
  tags: [Tag.BEST_PRACTICES, Tag.DISTRIBUTED_SYSTEMS],
  fileName: '50-circuit-breaker',
  createdAt: new Date(2024, 4, 13, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR]
}

const sdkman: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1547270785-e11cb938d594',
    author: {
      name: 'nrd',
      href: 'https://unsplash.com/@nicotitto'
    }
  },
  tags: [Tag.TOOLS, Tag.BEGINNERS],
  fileName: '49-sdkman',
  createdAt: new Date(2024, 3, 22, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR]
}

const springAndOpenAPI: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1671900599250-5f6a1ff85762',
    author: {
      name: 'Felicia Montenegro',
      href: 'https://unsplash.com/@feliciamontenegro'
    }
  },
  tags: [Tag.JAVA, Tag.SPRING, Tag.BEGINNERS],
  fileName: '48-spring-and-openapi',
  createdAt: new Date(2024, 3, 15, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR]
}

const springMail: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1618230305526-48435ece521f',
    author: {
      name: 'Oscar Fickel',
      href: 'https://unsplash.com/@oscarfickel3'
    }
  },
  tags: [Tag.JAVA, Tag.SPRING, Tag.BEGINNERS],
  fileName: '47-spring-mail',
  createdAt: new Date(2024, 3, 8, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR]
}

const concurrencyAndParallelism: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1604398907654-ec2bf7108b4a',
    author: {
      name: 'Kelly',
      href: 'https://unsplash.com/@kelly104'
    }
  },
  tags: [Tag.SOFTWARE_DEVELOPMENT, Tag.BEGINNERS],
  fileName: '46-concurrency-and-parallelism',
  createdAt: new Date(2024, 2, 25, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR]
}

const acidTransactions: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1497910091122-9f8a7746eb33',
    author: {
      name: 'Nathan Riley',
      href: 'https://unsplash.com/@nrly'
    }
  },
  tags: [Tag.DATABASE_SYSTEMS],
  fileName: '45-acid-transactions',
  createdAt: new Date(2024, 2, 18, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR]
}

const solid: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1591867833879-1285ba2b206d',
    author: {
      name: 'Quentin Grignet',
      href: 'https://unsplash.com/@qgrignet'
    }
  },
  tags: [Tag.BEGINNERS, Tag.SOFTWARE_DEVELOPMENT, Tag.BEST_PRACTICES],
  fileName: '44-what-is-solid',
  createdAt: new Date(2024, 2, 11, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR]
}

const trailingCommaJava: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1644270489776-217a353eb842',
    author: {
      name: 'Luca Dugaro',
      href: 'https://unsplash.com/@lucadgr'
    }
  },
  tags: [Tag.JAVA, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '43-trailing-comma-java',
  createdAt: new Date(2024, 2, 4, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR]
}

const testcontainers: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55',
    author: {
      name: 'Kate Stone Matheson',
      href: 'https://unsplash.com/@kstonematheson'
    }
  },
  tags: [Tag.DISTRIBUTED_SYSTEMS, Tag.TEST],
  fileName: '42-testcontainers',
  createdAt: new Date(2024, 1, 26, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR]
}

const quicksort: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1494947665470-20322015e3a8',
    author: {
      name: 'Matt Nelson',
      href: 'https://unsplash.com/@mnelson'
    }
  },
  tags: [Tag.ALGORITHMS],
  fileName: '41-quicksort',
  createdAt: new Date(2024, 1, 19, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const aggregationAndComposition: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1619017236031-6f55d516f49a',
    author: {
      name: 'Federico Di Dio',
      href: 'https://unsplash.com/@didiofederico_photographer'
    }
  },
  tags: [Tag.OBJECT_ORIENTED_PROGRAMMING],
  fileName: '40-aggregation-and-composition',
  createdAt: new Date(2024, 1, 12, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const javaEncapsulation: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1597250388001-fc5a96b307eb',
    author: {
      name: 'Zach Zook',
      href: 'https://unsplash.com/@zachzook'
    }
  },
  tags: [Tag.OBJECT_ORIENTED_PROGRAMMING],
  fileName: '39-java-encapsulation',
  createdAt: new Date(2024, 1, 5, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
} 

const interpreterDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1518443855757-dfadac7101ae',
    author: {
      name: 'Grégoire Bertaud',
      href: 'https://unsplash.com/@sirtook'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '38-interpreter-design-pattern',
  createdAt: new Date(2024, 0, 31, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const mediatorDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1598188306155-25e400eb5078',
    author: {
      name: 'Malek Dridi',
      href: 'https://unsplash.com/@malek_dridi'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '37-mediator-design-pattern',
  createdAt: new Date(2024, 0, 30, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const flyweightDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1598223456174-1215efd9adbe',
    author: {
      name: 'Brent Olson',
      href: 'https://unsplash.com/@helixgames'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '36-flyweight-design-pattern',
  createdAt: new Date(2024, 0, 29, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const factoryMethodDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1595374322552-c464f0e8125e',
    author: {
      name: 'Clayton Manche',
      href: 'https://unsplash.com/@claymanche'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '35-factory-method-design-pattern',
  createdAt: new Date(2024, 0, 28, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const templateMethodDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1531220847861-69e336daffa0',
    author: {
      name: 'Malcolm Lightbody',
      href: 'https://unsplash.com/@mlightbody'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '34-template-method-design-pattern',
  createdAt: new Date(2024, 0, 27, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const bridgeDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1552071379-041b32707fed',
    author: {
      name: 'Dušan veverkolog',
      href: 'https://unsplash.com/@veverkolog'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '33-bridge-design-pattern',
  createdAt: new Date(2024, 0, 26, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const iteratorDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1634609243366-ddd646c1b241',
    author: {
      name: 'Joshua J. Cotten',
      href: 'https://unsplash.com/@jcotten'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '32-iterator-design-pattern',
  createdAt: new Date(2024, 0, 25, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const visitorDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1601247387326-f8bcb5a234d4',
    author: {
      name: 'Joshua J. Cotten',
      href: 'https://unsplash.com/@jcotten'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '31-visitor-design-pattern',
  createdAt: new Date(2024, 0, 24, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const compositeDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1503951164464-cfc904b89299',
    author: {
      name: 'Samuel Foster',
      href: 'https://unsplash.com/@samuelfoster_co_uk'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '30-composite-design-pattern',
  createdAt: new Date(2024, 0, 23, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const abstractFactoryDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1502083896352-259ab9e342d7',
    author: {
      name: 'Caleb Woods',
      href: 'https://unsplash.com/@caleb_woods'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '29-abstract-factory-design-pattern',
  createdAt: new Date(2024, 0, 22, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const mementoDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1514373941175-0a141072bbc8',
    author: {
      name: 'Ron Fung',
      href: 'https://unsplash.com/@oriz'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '28-memento-design-pattern',
  createdAt: new Date(2024, 0, 21, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const proxyDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1511694009171-3cdddf4484ff',
    author: {
      name: 'Chunli Ju',
      href: 'https://unsplash.com/@chunlea'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '27-proxy-design-pattern',
  createdAt: new Date(2024, 0, 20, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const stateDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1537151641189-e685b67326c5',
    author: {
      name: 'Alvan Nee',
      href: 'https://unsplash.com/@alvannee'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '26-state-design-pattern',
  createdAt: new Date(2024, 0, 19, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const strategyDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1494913148647-353ae514b35e',
    author: {
      name: 'Alvan Nee',
      href: 'https://unsplash.com/@alvannee'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '25-strategy-design-pattern',
  createdAt: new Date(2024, 0, 18, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const facadeDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1542665093852-744c79500d45',
    author: {
      name: 'Tomas Tuma',
      href: 'https://unsplash.com/@tomastuma'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '24-facade-design-pattern',
  createdAt: new Date(2024, 0, 17, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const prototypeDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83',
    author: {
      name: 'Jari Hytönen',
      href: 'https://unsplash.com/@jarispics'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '23-prototype-design-pattern',
  createdAt: new Date(2024, 0, 16, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const commandDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1492376791813-ee6dbb35caa3',
    author: {
      name: 'Bradley Pisney',
      href: 'https://unsplash.com/@bradleypisney'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '22-command-design-pattern',
  createdAt: new Date(2024, 0, 15, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const decoratorDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1466921583968-f07aa80c526e',
    author: {
      name: 'Braydon Anderson',
      href: 'https://unsplash.com/@braydona'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '21-decorator-design-pattern',
  createdAt: new Date(2024, 0, 14, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const chainOfResponsibilityDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1555008872-f03b347ffb53',
    author: {
      name: 'Hannah Reding',
      href: 'https://unsplash.com/@hannahrdg'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '20-chain-of-responsibility-design-pattern',
  createdAt: new Date(2024, 0, 13, 5, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const singletonDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1673439782481-c02fd9688391',
    author: {
      name: 'Dominik Kempf',
      href: 'https://unsplash.com/@dominik_kempf'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '19-singleton-design-pattern',
  createdAt: new Date(2024, 0, 12, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const adapterDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1550782674-fa597ecc1bfd',
    author: {
      name: 'Kyle Johnson',
      href: 'https://unsplash.com/@kylejeffreys'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '18-adapter-design-pattern',
  createdAt: new Date(2024, 0, 11, 6, 0),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const observerDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1516222338250-863216ce01ea',
    author: {
      name: 'Josh Rakower',
      href: 'https://unsplash.com/@joshrako'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '17-observer-design-pattern',
  createdAt: new Date(2024, 0, 10, 5, 30),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const builderDesignPattern: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d',
    author: {
      name: 'James Barker',
      href: 'https://unsplash.com/@barkernotbaker'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '16-builder-design-pattern',
  createdAt: new Date(2024, 0, 9, 7, 30),
  listed: false,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const designPatterns: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a',
    author: {
      name: 'Jamie Street',
      href: 'https://unsplash.com/@jamie452'
    }
  },
  tags: [Tag.DESIGN_PATTERNS, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '15-design-patterns',
  createdAt: new Date(2024, 0, 8, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const distributedTracing: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8',
    author: {
      name: 'Jamie Street',
      href: 'https://unsplash.com/@jamie452'
    }
  },
  tags: [Tag.DISTRIBUTED_SYSTEMS, Tag.OBSERVABILITY],
  fileName: '14-distributed-tracing',
  createdAt: new Date(2024, 0, 4, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const howSpringProvidesDependencyInjection: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1581888227599-779811939961',
    author: {
      name: 'Jamie Street',
      href: 'https://unsplash.com/@jamie452'
    }
  },
  tags: [Tag.SOFTWARE_DEVELOPMENT],
  fileName: '13-how-spring-provides-di',
  createdAt: new Date(2024, 0, 1, 5, 30),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR]
}

const inversionOfControl: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1616093875201-cc5b7a6e9c8a',
    author: {
      name: 'Franz Hajak',
      href: 'https://unsplash.com/@riofranz'
    }
  },
  tags: [Tag.SOFTWARE_DEVELOPMENT],
  fileName: '12-inversion-of-control',
  createdAt: new Date(2023, 11, 28, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const queuesAndStacks: Post = {
  cover: {
    href: 'https://images.unsplash.com/photo-1506774518161-b710d10e2733',
    author: {
      name: 'Michał Parzuchowski',
      href: 'https://unsplash.com/@mparzuchowski'
    }
  },
  tags: [Tag.DATA_STRUCTURES, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '11-queues-and-stacks',
  createdAt: new Date(2023, 11, 25, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const arraysAndLinkedLists: Post = { 
  cover: {
    href: 'https://images.unsplash.com/photo-1682448169828-039868860001',
    author: {
      name: 'Lakindu Sepala',
      href: 'https://unsplash.com/@lakindu_sepala'
    }
  },
  tags: [Tag.DATA_STRUCTURES, Tag.SOFTWARE_DEVELOPMENT],
  fileName: '10-arrays-and-linked-lists',
  createdAt: new Date(2023, 11, 21, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const ideasToPracticeProgramming: Post = { 
  cover: {
    href: 'https://images.unsplash.com/photo-1605379399642-870262d3d051',
    author: {
      name: 'Fotis Fotopoulos',
      href: 'https://unsplash.com/@ffstop'
    }
  },
  tags: [Tag.BEGINNERS, Tag.COMMUNITY],
  fileName: '9-ideas-to-practice-programming',
  createdAt: new Date(2023, 11, 18, 5, 30),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const gitCommands: Post = { 
  cover: {
    href: 'https://images.unsplash.com/photo-1595511890410-3b8dc237a537',
    author: {
      name: 'Dietmar Ludmann',
      href: 'https://unsplash.com/@d13n'
    }
  },
  tags: [Tag.SOFTWARE_DEVELOPMENT],
  fileName: '8-git-commands',
  createdAt: new Date(2023, 11, 15, 18, 30),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const avoidExceptions: Post = { 
  cover: {
    href: 'https://images.unsplash.com/photo-1606011334315-025e4baab810',
    author: {
      name: 'Roberto Huczek',
      href: 'https://unsplash.com/@tamoio'
    }
  },
  tags: [Tag.SOFTWARE_DEVELOPMENT],
  fileName: '7-avoid-exceptions',
  createdAt: new Date(2023, 11, 11, 6, 0),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const codeReview: Post = { 
  cover: {
    href: 'https://images.unsplash.com/photo-1600232943169-3fe49a6f4071',
    author: {
      name: 'Nicolas Noonan',
      href: 'https://unsplash.com/@nikolasnoonan'
    }
  },
  tags: [Tag.SOFTWARE_DEVELOPMENT],
  fileName: '6-code-review',
  createdAt: new Date(2023, 11, 4, 5, 2),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const helloWorld: Post = { 
  cover: {
    href: 'https://images.unsplash.com/photo-1596276122653-651a3898309f',
    author: {
      name: 'Artem Bryzgalov',
      href: 'https://unsplash.com/@abrizgalov'
    }
  },
  tags: [Tag.HELLO, Tag.COMMUNITY],
  fileName: '5-hello-world',
  createdAt: new Date(2023, 10, 27, 6),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const hateoas: Post = { 
  cover: {
    href: 'https://images.unsplash.com/photo-1519098901909-b1553a1190af',
    author: {
      name: 'Florencia Potter',
      href: 'https://unsplash.com/@florenciapotter'
    }
  },
  tags: [Tag.REST],
  fileName: '4-what-is-hateoas',
  createdAt: new Date(2023, 10, 23, 6),
  origin: new URL('https://gustavoflor.medium.com/o-que-e-hateoas-eddf9b093155'),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const capTheorem: Post = { 
  cover: {
    href: 'https://images.unsplash.com/photo-1569449047196-cebeecbc6b6b',
    author: {
      name: 'Yuriy Chemerys',
      href: 'https://unsplash.com/@ychemerys'
    }
  },
  tags: [Tag.DISTRIBUTED_SYSTEMS],
  fileName: '3-cap-theorem',
  createdAt: new Date(2023, 10, 20, 6),
  origin: new URL('https://gustavoflor.medium.com/coisas-que-voc%C3%AA-deveria-saber-sobre-sistemas-distribu%C3%ADdos-teorema-cap-39db9e0adf8d'),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const json: Post = { 
  cover: {
    href: 'https://images.unsplash.com/photo-1522346513757-54c552451fdc',
    author: {
      name: 'Nik',
      href: 'https://unsplash.com/@helloimnik'
    }
  },
  tags: [Tag.JSON],
  fileName: '2-what-is-json',
  createdAt: new Date(2023, 10, 11, 6),
  origin: new URL('https://gustavoflor.medium.com/o-que-e-json-02782fa508df'),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const rest: Post = { 
  cover: {
    href: 'https://images.unsplash.com/photo-1541188495357-ad2dc89487f4',
    author: {
      name: 'Aleksandar Cvetanovic',
      href: 'https://unsplash.com/@lemonzandtea'
    }
  },
  tags: [Tag.REST, Tag.DISTRIBUTED_SYSTEMS],
  fileName: '1-what-is-rest',
  createdAt: new Date(2023, 10, 5, 6),
  origin: new URL('https://gustavoflor.medium.com/o-que-e-rest-8383ac3261cd'),
  listed: true,
  availableLanguages: [LanguageCode.PT_BR, LanguageCode.EN_US]
}

const highlight = scalabilityAndElasticity;

const posts: Post[] = [
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
];

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
  return posts.find(it => it.fileName === slug);
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
  const lang = getPreferredLanguage()
  if (isToday(post.createdAt)) {
    return isRecent(post.createdAt) ? translate('justNow') : translate('today');
  }
  return post.createdAt.toLocaleDateString(lang.code);
}

export const getKey = (post: Post): string => {
  return post.fileName
    .replace(/^\d+-/, '')
    .replace(/-([a-z])/g, (_, char) => char.toUpperCase());
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
