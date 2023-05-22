import { Router } from 'express';
import {
  getAllBooks, getBooksByGenre
} from './book.controller';

const router = Router();

router.get('/', getAllBooks);
router.get('/genre/:genre', getBooksByGenre);

export default router;
