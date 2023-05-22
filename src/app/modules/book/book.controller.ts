import { Request, Response } from "express";
import { BookModel } from "./book.model";

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await BookModel.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getBooksByGenre = async (req: Request, res: Response) => {
  const { genre } = req.params;
  try {
    const books = await BookModel.find({ genre });
    res.json(books);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getSciFiBooksByPublisher = async (req: Request, res: Response) => {
  const { publisher } = req.params;
  try {
    const books = await BookModel.find({
      genre: "Sci-Fi",
      "publisher.name": publisher,
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getFeaturedBooks = async (req: Request, res: Response) => {
  try {
    const featuredBooks = await BookModel.find({ rating: { $gte: 4 } });
    const updatedBooks = featuredBooks.map((book) => {
      if (book.rating > 4.5) {
        return { ...book.toObject(), featured: "BestSeller" };
      } else {
        return { ...book.toObject(), featured: "Popular" };
      }
    });

    res.json(updatedBooks);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};



export const updateBookPrices = async (req: Request, res: Response) => {
  try {
    const result = await BookModel.aggregate([
      {
        $match: { publicationYear: { $gt: 2020 }, price: { $type: "string" } },
      },
      {
        $set: { price: { $toInt: "$price" } },
      },
    ]);

    res.json({ message: "Book prices updated successfully.", result });
  } catch (error) {
    res.status(500).json({ message: "Failed to update book prices.", error });
  }
};
