import { BookType } from "@/types/books.type";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const ListedBooksCard = ({ book }: { book: BookType }) => {
  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:shadow-lg md:p-6">
      <div className="flex flex-col gap-6 md:flex-row">

        {/* Book Image */}
        <div className="flex h-64 w-full shrink-0 items-center justify-center rounded-xl bg-slate-100 p-5 md:h-64 md:w-48">
          <Image
            src={book.image}
            alt={book.bookName}
            width={180}
            height={240}
            className="h-full w-auto rounded-lg object-contain"
          />
        </div>

        {/* Book Information */}
        <div className="flex flex-1 flex-col justify-between">

          {/* Top Information */}
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                {book.category}
              </span>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-600">
                {book.yearOfPublishing}
              </span>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 transition hover:text-blue-600">
              {book.bookName}
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              By{" "}
              <span className="font-semibold text-slate-700">
                {book.author}
              </span>
            </p>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-2">
              <div className="text-lg text-yellow-400">
                {"★".repeat(Math.round(book.rating))}
              </div>

              <span className="font-semibold text-slate-700">
                {book.rating}
              </span>

              <span className="text-sm text-slate-400">
                / 5
              </span>
            </div>

            {/* Review */}
            <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-500">
              {book.review}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Information */}
          <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between">

            {/* Extra Information */}
            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
              <span>
                📄 {book.totalPages} Pages
              </span>

              <span>
                📚 {book.publisher}
              </span>
            </div>

            {/* Details Button */}
            <Link
              href={`/books/${book.bookId}`}
              className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              View Details →
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;