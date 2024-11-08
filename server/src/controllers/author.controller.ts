import { Request, Response } from 'express';

import { getError } from '../utils/getError';
import { Author } from '../models/author.model';

const getAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (error) {
    getError(res, error);
  }
};

const getOneAuthor = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const author = await Author.findById(id);

    if (!author) {
      res.status(404).json({ message: 'Author not found!' });
    }

    res.status(200).json(author);
  } catch (error) {
    getError(res, error);
  }
};

const createAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await Author.create(req.body);
    res.status(200).json(authors);
  } catch (error) {
    getError(res, error);
  }
};

export {
  getAuthors,
  getOneAuthor,
  createAuthors
};