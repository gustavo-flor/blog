import { LanguageCode } from '@/services/lang'

export interface IPostCover {
  href: string;
  author: {
    name: string;
    href: string;
  };
}

export interface IPost {
  icon: string;
  cover: IPostCover;
  tags: string[];
  slug: string;
  publishedAt: Date;
  origin?: URL;
  listed: boolean;
  availableLanguages: LanguageCode[];
}
