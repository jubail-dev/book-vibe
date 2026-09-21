"use client";

import React, { ReactNode, useState } from "react";
import { createContext } from "react";
import { BookType } from "@/types/books.type";

interface BooksContextType {
  readBooks: BookType[];
  setReadBooks: React.Dispatch<React.SetStateAction<BookType[]>>;
  whichListBooks: BookType[];
  setWhichListBooks: React.Dispatch<React.SetStateAction<BookType[]>>;
}

export const bookContext = createContext<BooksContextType | null>(null);

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<BookType[]>([]);
  const [whichListBooks, setWhichListBooks] = useState<BookType[]>([]);

  const shareData = {
    readBooks,
    setReadBooks,
    whichListBooks,
    setWhichListBooks,
  };

  return (
    <bookContext.Provider value={shareData}>
      {children}
    </bookContext.Provider>
  );
};

export default BooksProvider;