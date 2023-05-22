import { Request, Response } from 'express';
import { BookModel } from './book.model';

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await BookModel.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getBooksByGenre = async (req: Request, res: Response) => {
  const { genre } = req.params;
  try {
    const books = await BookModel.find({ genre });
    res.json(books);

  } catch (error) {
    res.status(500).json({

      message: 'Internal server error',


    })
  }
}
