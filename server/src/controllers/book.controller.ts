import { Request, Response } from 'express';

import { Book } from '../models/book.model';
import { getError } from '../utils/getError';

const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find().populate('author');
    res.status(200).json(books);
  } catch (error) {
    getError(res, error);
  }
};

const getOneBook = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);

    if (!book) {
      res.status(404).json({ message: 'Module not found!' });
    }

    res.status(200).json(book);
  } catch (error) {
    getError(res, error);
  }
};

const createBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.create(req.body);
    res.status(200).json(books);
  } catch (error) {
    getError(res, error);
  }
};

export {
  getBooks,
  getOneBook,
  createBooks
};