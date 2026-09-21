"use client";

import { bookContext } from "@/context/BooksContext";
import React, { useContext } from "react";
import ListedBooksCard from "../components/shared/ListedBooksCard";

const ListedPage = () => {
  const context = useContext(bookContext);

  if (!context) {
    return <div>BooksProvider not found</div>;
  }

  const { readBooks, whichListBooks } = context;

  console.log(readBooks, whichListBooks, "readBooks", "whichList");

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">

      {/* Page Header */}
      <div className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-6 py-10 text-white shadow-lg md:px-10">
        <div className="max-w-3xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-indigo-100">
            Your Library
          </p>

          <h1 className="text-3xl font-bold md:text-4xl">
            My Listed Books
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-indigo-100 md:text-base">
            Manage the books you have read and the books you want to read
            later. Keep your personal reading collection organized in one
            place.
          </p>

          {/* Book Count */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              📚 {readBooks.length} Read Books
            </span>

            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              ❤️ {whichListBooks.length} Wishlist Books
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-lift">

        {/* Read Books */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read Books"
        />

        <div className="tab-content bg-base-100 border-base-300 p-4 md:p-6">
          {readBooks.length !== 0 ? (
            <div className="grid grid-cols-1 gap-5">
              {readBooks.map((book) => {
                return (
                  <ListedBooksCard
                    key={book.bookId}
                    book={book}
                  />
                );
              })}
            </div>
          ) : (
            <div className="py-10 text-center">
              <p className="text-lg font-semibold text-slate-500">
                📚 Read Books Not Found
              </p>

              <p className="mt-2 text-sm text-slate-400">
                You haven&apos;t added any books to your read list yet.
              </p>
            </div>
          )}
        </div>

        {/* Wishlist Books */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="WishList Books"
          defaultChecked
        />

        <div className="tab-content bg-base-100 border-base-300 p-4 md:p-6">
          {whichListBooks.length !== 0 ? (
            <div className="grid grid-cols-1 gap-5">
              {whichListBooks.map((book) => {
                return (
                  <ListedBooksCard
                    key={book.bookId}
                    book={book}
                  />
                );
              })}
            </div>
          ) : (
            <div className="py-10 text-center">
              <p className="text-lg font-semibold text-slate-500">
                ❤️ Wishlist Books Not Found
              </p>

              <p className="mt-2 text-sm text-slate-400">
                You haven&apos;t added any books to your wishlist yet.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ListedPage;