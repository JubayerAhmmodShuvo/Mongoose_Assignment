import { Router } from "express";
import {
  getAllBooksController,
  getBooksByGenreController,
  getFeaturedBooksController,
  getSciFiBooksByPublisherController,
  updateBookPricesController,
} from "./book.controller";

const router = Router();

router.get("/", getAllBooksController);
router.get("/genre/:genre", getBooksByGenreController);
router.get(
  "/genre/sci-fi/publisher/:publisher",
  getSciFiBooksByPublisherController
);
router.get("/featured", getFeaturedBooksController);
router.put("/update-prices", updateBookPricesController);
export default router;

/* postman apis which worked in my machine
 * http://localhost:5000/books
 * http://localhost:5000/books/genre/Fantasy
 *http://localhost:5000/books/genre/Sci-Fi/publisher/Roli%20Books
 *http://localhost:5000/books/featured
 *http://localhost:5000/books/update-prices
 */
