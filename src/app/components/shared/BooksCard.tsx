
import Image from "next/image";
import { BookType } from "@/types/books.type";
import Link from "next/link";

export interface BooksCardProps {
  book: BookType;
}

export default function BooksCard({ book }: BooksCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Book Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {book.category}
        </span>

        {/* Rating */}
        <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-sm font-semibold text-gray-800 shadow">
          ⭐ {book.rating}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        
        {/* Title */}
        <div>
          <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
            {book.bookName}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            by {book.author}
          </p>
        </div>

        {/* Book Info */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg bg-gray-50 p-3">
            <p className="text-gray-400">Pages</p>
            <p className="font-semibold text-gray-800">
              {book.totalPages}
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-3">
            <p className="text-gray-400">Published</p>
            <p className="font-semibold text-gray-800">
              {book.yearOfPublishing}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {book.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Publisher */}
        <p className="text-sm text-gray-500">
          Publisher:{" "}
          <span className="font-medium text-gray-700">
            {book.publisher}
          </span>
        </p>

        {/* Button */}
        <Link href={`/books/${book.bookId}`}>
          <button className="w-full rounded-xl bg-gray-900 py-3 font-semibold text-white transition hover:bg-gray-700">
          View Details
        </button>
        </Link>
      </div>
    </div>
  );
}
