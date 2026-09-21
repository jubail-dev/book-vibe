import ReadButton from "@/app/components/bookDetails/ReadButton";
import WhichListButton from "@/app/components/bookDetails/whichListButton";
import { BookType } from "@/types/books.type";
import Image from "next/image";
import React from "react";

export interface BookDetailPageType {
  params: Promise<{
    bookId: string;
  }>;
}

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

const BookDetailPage = async ({ params }: BookDetailPageType) => {
  const { bookId } = await params;

  const booksData = await getBooks();

  const book = booksData.find((book) => book.bookId === Number(bookId));

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">Book not found!</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Details Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 md:p-10">
            {/* Book Image */}
            <div className="flex justify-center items-center bg-slate-100 rounded-2xl p-8">
              <div className="relative w-full max-w-sm h-[450px]">
                <Image
                  src={book.image}
                  alt={book.bookName}
                  fill
                  className="object-contain rounded-xl"
                  priority
                />
              </div>
            </div>

            {/* Book Information */}
            <div className="flex flex-col justify-center">
              {/* Category */}
              <span className="w-fit px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
                {book.category}
              </span>

              {/* Book Name */}
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                {book.bookName}
              </h1>

              {/* Author */}
              <p className="text-lg text-slate-500 mt-3">
                By{" "}
                <span className="font-semibold text-slate-700">
                  {book.author}
                </span>
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-5">
                <div className="flex items-center gap-1 text-yellow-500 text-xl">
                  {"★".repeat(Math.round(book.rating))}
                </div>

                <span className="font-bold text-slate-700">{book.rating}</span>

                <span className="text-slate-400">/ 5</span>
              </div>

              {/* Review */}
              <p className="text-slate-600 leading-7 mt-6">{book.review}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <ReadButton book={book}></ReadButton>
                <WhichListButton book={book}></WhichListButton>
              </div>
            </div>
          </div>

          {/* Book Information Section */}
          <div className="border-t border-slate-200 p-6 md:p-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Book Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Pages */}
              <div className="bg-slate-50 rounded-2xl p-5">
                <p className="text-sm text-slate-400">Total Pages</p>
                <p className="text-xl font-bold text-slate-800 mt-1">
                  {book.totalPages}
                </p>
              </div>

              {/* Publisher */}
              <div className="bg-slate-50 rounded-2xl p-5">
                <p className="text-sm text-slate-400">Publisher</p>
                <p className="text-xl font-bold text-slate-800 mt-1">
                  {book.publisher}
                </p>
              </div>

              {/* Year */}
              <div className="bg-slate-50 rounded-2xl p-5">
                <p className="text-sm text-slate-400">Published</p>
                <p className="text-xl font-bold text-slate-800 mt-1">
                  {book.yearOfPublishing}
                </p>
              </div>

              {/* Category */}
              <div className="bg-slate-50 rounded-2xl p-5">
                <p className="text-sm text-slate-400">Category</p>
                <p className="text-xl font-bold text-slate-800 mt-1">
                  {book.category}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDetailPage;
