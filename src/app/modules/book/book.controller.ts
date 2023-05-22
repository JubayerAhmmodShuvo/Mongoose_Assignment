import { Request, Response } from "express";
import { BookModel } from "./book.model";
import {
  getAllBooks,
  getBooksByGenre,
  getSciFiBooksByPublisher,
  getFeaturedBooks,
  updateBookPrices,
} from "./book.service";

export const getAllBooksController = async (req: Request, res: Response) => {
  try {
    const books = await getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBooksByGenreController = async (
  req: Request,
  res: Response
) => {
  const { genre } = req.params;
  try {
    const books = await getBooksByGenre(genre);
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSciFiBooksByPublisherController = async (
  req: Request,
  res: Response
) => {
  const { publisher } = req.params;
  try {
    const books = await getSciFiBooksByPublisher(publisher);
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getFeaturedBooksController = async (
  req: Request,
  res: Response
) => {
  try {
    const featuredBooks = await getFeaturedBooks();
    res.json(featuredBooks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateBookPricesController = async (
  req: Request,
  res: Response
) => {
  try {
    const message = await updateBookPrices();

    res.json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
