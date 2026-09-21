"use client";

import { bookContext } from "@/context/BooksContext";
import { BookType } from "@/types/books.type";
import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";

const ReadButton = ({ book }: { book: BookType }) => {
  const bookProvider = useContext(bookContext);

  if (!bookProvider) {
    return null;
  }

  const { readBooks, setReadBooks } = bookProvider;

  console.log("Book Provider", bookProvider);

  const handleReadBookButton = () => {
    console.log("Read Book Button Clicked", book);

    setReadBooks([...readBooks, book]);

    toast.success(`You have read ${book.bookName} `, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div>
      <button
        className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        onClick={handleReadBookButton}
      >
        Read Now
      </button>
    </div>
  );
};

export default ReadButton;
