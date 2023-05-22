export interface Book {
  title: string;
  author: string;
  genre: string;
  publicationYear: number;
  rating: number;
  price: number;
  publisher: {
    name: string;
    location: string;
  };
  reviews: {
    user: string;
    comment: string;
  }[];
}
