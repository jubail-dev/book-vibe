import { BookType } from "@/types/books.type";
import React from "react";
import BooksCard from "../shared/BooksCard";

const getBooks = async (): Promise<BookType[]> => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();
  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="text-3xl font-bold text-center my-10">Explore Popular Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {booksData.slice(0, 6).map((book) => (
          <BooksCard key={book.bookId} book={book}></BooksCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
