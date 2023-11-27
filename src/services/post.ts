interface PublishedOn {
  label: string;
  href: string;
}

export interface Post {
  title: string;
  description: string;
  slug: string;
  tags: string[];
  fileName: string;
  createdAt: Date;
  durationInMinutes: number;
  publishedOn?: PublishedOn;
}

const highlight: Post = { 
  title: '👋 Olá, eu sou o Flôr', 
  description: 'Este é o lugar em que escrevo o que gostaria de ler, falo sobre o que estou estudando e publico devaneios sobre sistemas que você utiliza todos os dias.',
  slug: 'hello-world',
  tags: ['hello'],
  fileName: '5-hello-world',
  createdAt: new Date(2023, 11, 27),
  durationInMinutes: 1
}

const latest: Post[] = [
  { 
    title: '🥏 O que é HATEOAS e qual sua relação com REST?', 
    description: 'Falamos recentemente sobre REST, o que é e quais suas principais características, porém, um tema ficou em aberto para conversarmos, e chegou o momento de fazer isto, vamos falar sobre o que é HATEOAS…',
    slug: 'o-que-e-hateoas',
    tags: ['rest'],
    fileName: '4-o-que-e-hateoas',
    createdAt: new Date(2023, 11, 23),
    durationInMinutes: 3,
    publishedOn: {
      label: 'gustavoflor.medium.com',
      href: 'https://gustavoflor.medium.com/o-que-e-hateoas-eddf9b093155'
    }
  },
  { 
    title: '🌀 Coisas que você deveria saber sobre sistemas distribuídos: Teorema CAP', 
    description: 'O teorema CAP, também conhecido como teorema de Brewer, é um dos princípios fundamentais dos sistemas distribuídos. A premissa do teorema é que nenhum sistema com distribuição de dados pela rede…',
    slug: 'teorema-cap',
    tags: ['distributedsystems'],
    fileName: '3-teorema-cap',
    createdAt: new Date(2023, 11, 20),
    durationInMinutes: 4,
    publishedOn: {
      label: 'gustavoflor.medium.com',
      href: 'https://gustavoflor.medium.com/coisas-que-voc%C3%AA-deveria-saber-sobre-sistemas-distribu%C3%ADdos-teorema-cap-39db9e0adf8d'
    }
  },
  { 
    title: 'O que é JSON? 🏒', 
    description: 'O acrônimo JSON vem de JavaScript Object Notation, é um formato leve de gravar e transportar dados, é utilizado comumente na comunicação entre aplicações cliente-servidor, é "auto descritivo" e fácil de entender.',
    slug: 'o-que-e-json',
    tags: ['json'],
    fileName: '2-o-que-e-json',
    createdAt: new Date(2023, 11, 11),
    durationInMinutes: 2,
    publishedOn: {
      label: 'gustavoflor.medium.com',
      href: 'https://gustavoflor.medium.com/o-que-e-json-02782fa508df'
    }
  },
  { 
    title: 'O que é REST? 😴', 
    description: 'Se você pensou em descanso, lamento ter que informar, porém não será o tema do artigo de hoje, na verdade vamos falar sobre um estilo de arquitetura de software, em algumas literaturas também chamado…',
    slug: 'o-que-e-rest',
    tags: ['rest', 'distributedsystems'],
    fileName: '1-o-que-e-rest',
    createdAt: new Date(2023, 11, 5),
    durationInMinutes: 6,
    publishedOn: {
      label: 'gustavoflor.medium.com',
      href: 'https://gustavoflor.medium.com/o-que-e-rest-8383ac3261cd'
    }
  }
];

const posts = [highlight, ...latest];

export const findAll = (): Post[] => {
  return posts;
}

export const findBySlug = (slug: string): Post | undefined => {
  return posts.find(it => it.slug === slug);
}

export const getHighlight = (): Post => {
  return highlight;
}

export const getLatest = (): Post[] => {
  return latest;
}
