import { Router } from "express";
import {
  getAllBooks,
  getBooksByGenre,
  getFeaturedBooks,
  getSciFiBooksByPublisher,
  updateBookPrices,
} from "./book.controller";

const router = Router();


router.get("/", getAllBooks);
router.get("/genre/:genre", getBooksByGenre);
router.get("/genre/sci-fi/publisher/:publisher", getSciFiBooksByPublisher);
router.get("/featured", getFeaturedBooks);
router.put("/update-prices", updateBookPrices);
export default router;



/* postman apis which worked in my machine
 * http://localhost:5000/books
 * http://localhost:5000/books/genre/Fantasy
 *http://localhost:5000/books/genre/Sci-Fi/publisher/Roli%20Books
 *http://localhost:5000/books/featured
 *http://localhost:5000/books/update-prices
 */
