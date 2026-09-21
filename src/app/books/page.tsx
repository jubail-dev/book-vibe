import { BookType } from "@/types/books.type";
import React from "react";
import BooksCard from "../components/shared/BooksCard";

const getBooks = async (): Promise<BookType[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

const Books = async () => {
  const booksData = await getBooks();
  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="text-3xl font-bold text-center my-10">
        Explore All Books
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {booksData.map((book) => (
          <BooksCard key={book.bookId} book={book}></BooksCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
