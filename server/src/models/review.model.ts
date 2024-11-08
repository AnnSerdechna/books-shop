import mongoose from 'mongoose';

import { ReviewProps } from 'data-types';

const { Schema } = mongoose;

const reviewSchema = new Schema<ReviewProps>({
  book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  review: { type: String },
  source: { type: String },
});

const Review = mongoose.model('Review', reviewSchema);

export { Review };