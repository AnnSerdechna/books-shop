import express from 'express';
import { createAuthors, getAuthors, getOneAuthor } from '../controllers/author.controller';


const router = express.Router();

router.post('/', createAuthors);
router.get('/', getAuthors);
router.get('/:id', getOneAuthor);

export default router;