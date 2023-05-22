import { Router } from 'express';
import {
  getAllBooks, getBooksByGenre, getSciFiBooksByPublisher
} from './book.controller';

const router = Router();

router.get('/', getAllBooks);
router.get('/genre/:genre', getBooksByGenre);
router.get('/genre/sci-fi/publisher/:publisher', getSciFiBooksByPublisher);

/* postman apis which worked
* http://localhost:3000/books
* http://localhost:3000/books/genre/Fantasy
*http://localhost:3000/books/genre/Sci-Fi/publisher/Roli%20Books
*
*
 */


export default router;
