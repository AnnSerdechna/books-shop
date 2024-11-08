import express, { urlencoded } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

import authorsRouter from './routes/author.route';
import booksRouter from './routes/book.route';
import reviewsRouter from './routes/review.route';

const mongodbConnectUrl = process.env.MONGO_DB_URL ?? '';

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use('/api/authors', authorsRouter);
app.use('/api/books', booksRouter);
app.use('/api/reviews', reviewsRouter);

mongoose.connect(mongodbConnectUrl)
  .then(() => {
    console.log('Connected!');

    app.listen(4000);
  })
  .catch((error: Error) => console.log(error.message, 'Connected db error'))
