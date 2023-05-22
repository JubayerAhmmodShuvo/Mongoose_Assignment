import { BookModel } from "./book.model";

export const getAllBooks = async () => {
  try {
    const books = await BookModel.find().exec();
    return books;
  } catch (error) {
    throw new Error("Failed to fetch books from the database");
  }
};

export const getBooksByGenre = async (genre: string) => {
  try {
    const books = await BookModel.find({ genre }).exec();
    return books;
  } catch (error) {
    throw new Error("Failed to fetch books by genre from the database");
  }
};

export const getSciFiBooksByPublisher = async (publisher: string) => {
  try {
    const books = await BookModel.find({
      genre: "Sci-Fi",
      "publisher.name": publisher,
    }).exec();
    return books;
  } catch (error) {
    throw new Error(
      "Failed to fetch Sci-Fi books by publisher from the database"
    );
  }
};
export const getFeaturedBooks = async () => {
  try {
    const featuredBooks = await BookModel.aggregate([
      {
        $match: { rating: { $gte: 4 } },
      },
      {
        $addFields: {
          featured: {
            $cond: [{ $gt: ["$rating", 4.5] }, "BestSeller", "Popular"],
          },
        },
      },
    ]).exec();
    return featuredBooks;
  } catch (error) {
    throw new Error("Failed to fetch featured books from the database");
  }
};

export const updateBookPrices = async () => {
  try {
    const result = await BookModel.aggregate([
      {
        $match: { publicationYear: { $gt: 2020 }, price: { $type: "string" } },
      },
      {
        $set: { price: { $toInt: "$price" } },
      },
    ]);

    return { message: "Book prices updated successfully", result };
  } catch (error) {
    throw new Error("Failed to update book prices in the database");
  }
};
