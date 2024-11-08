import express from 'express';

import { createReviews, getReviews, getReviewsByBookId } from '../controllers/review.controller';

const router = express.Router();

router.post('/', createReviews);
router.get('/', getReviews);
router.get('/:bookId', getReviewsByBookId);

export default router;