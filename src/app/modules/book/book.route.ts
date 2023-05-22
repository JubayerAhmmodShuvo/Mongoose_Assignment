import { Router } from 'express';
import {
  getAllBooks
} from './book.controller';

const router = Router();

router.get('/', getAllBooks);

export default router;
