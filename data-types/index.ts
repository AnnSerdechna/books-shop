import { Types } from 'mongoose';

export interface ReviewProps {
  _id: string;
  book: Types.ObjectId;
  review: string;
  source: string;
}

export interface AuthorProps {
  _id: string;
  name: string;
  photoUrl: string;
  bio: string;
  profession: string;
  wikiLink: string;
};

export interface BookProps {
  _id: string;
  title: string;
  author: AuthorProps;
  imageUrl: string;
  previewLink: string;
  about: string;
  price: number;
  published: Date;
  publisher: string;
  language: string;
  pageCount: number;
  nominations: string;
  genres: string;
}
