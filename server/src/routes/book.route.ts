import express from 'express';

import { createBooks, getBooks, getOneBook } from '../controllers/book.controller';

const router = express.Router();

router.post('/', createBooks);
router.get('/', getBooks);
router.get('/:id', getOneBook);

export default router;