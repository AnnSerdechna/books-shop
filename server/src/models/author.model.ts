import mongoose from 'mongoose';

import { AuthorProps } from 'data-types';

const { Schema } = mongoose;

const authorSchema = new Schema<AuthorProps>({
  name: { type: String, required: true },
  bio: { type: String },
  photoUrl: { type: String },
  profession: { type: String },
  wikiLink: { type: String },
});

const Author = mongoose.model('Author', authorSchema);

export  { Author };