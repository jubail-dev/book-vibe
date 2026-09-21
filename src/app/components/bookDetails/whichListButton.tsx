"use client";

import { bookContext } from "@/context/BooksContext";
import { BookType } from "@/types/books.type";
import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";

const WhichListButton = ({ book }: { book: BookType }) => {
  const bookProvider = useContext(bookContext);

  if (!bookProvider) {
    return null;
  }

  const { whichListBooks, setWhichListBooks } = bookProvider;

  console.log("Book Provider", bookProvider);

  const handleWhichListButton = () => {
    console.log("Read Book Button Clicked", book);

    setWhichListBooks([...whichListBooks, book]);

    toast.success(`You have added ${book.bookName} to whichlist`, {
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
        onClick={handleWhichListButton}
      >
        Add to WhichList
      </button>
    </div>
  );
};

export default WhichListButton;
