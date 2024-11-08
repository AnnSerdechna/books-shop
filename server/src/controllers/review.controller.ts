import { Request, Response } from 'express';

import { getError } from '../utils/getError';
import { Review } from '../models/review.model';

const getReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    getError(res, error);
  }
};

const getReviewsByBookId = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;

    const reviews = await Review.find({ book: bookId });

    res.status(200).json(reviews);
  } catch (error) {
    getError(res, error);
  }
};

const createReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await Review.create(req.body);
    res.status(200).json(reviews);
  } catch (error) {
    getError(res, error);
  }
};

export {
  getReviews,
  getReviewsByBookId,
  createReviews,
};