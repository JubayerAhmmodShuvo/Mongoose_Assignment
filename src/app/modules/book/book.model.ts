import { Schema, model, Document } from "mongoose";
import { Book } from "./book.interface";

const bookSchema = new Schema<Book & Document>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  publicationYear: { type: Number, required: true },
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
  publisher: {
    name: { type: String, required: true },
    location: { type: String, required: true },
  },
  reviews: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
    },
  ],
});

export const BookModel = model<Book & Document>("Book", bookSchema);
