import mongoose from 'mongoose';

import { BookProps } from 'data-types';

const { Schema } = mongoose;

const bookSchema = new Schema<BookProps>({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
  about: { type: String },
  imageUrl: { type: String },
  previewLink: { type: String },
  published: { type: Date },
  publisher: { type: String },
  pageCount: { type: Number },
  price: { type: Number },
  language: { type: String },
  nominations: { type: String },
  genres: { type: String },
});

const Book = mongoose.model('Book', bookSchema);

export { Book };