import { IBook } from "@/types/books-type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Book Image */}
      <div className="relative h-72 overflow-hidden bg-slate-100">
        <Image
          src={book.image}
          alt={book.bookName}
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-purple-700 shadow backdrop-blur">
          {book.category}
        </span>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-sm text-white backdrop-blur">
          <span className="text-yellow-400">★</span>
          {book.rating}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">

        {/* Title & Author */}
        <div>
          <h2 className="line-clamp-1 text-xl font-bold text-slate-800">
            {book.bookName}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            by <span className="font-medium text-slate-700">{book.author}</span>
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book Information */}
        <div className="grid grid-cols-2 gap-3 border-y border-slate-100 py-3">
          <div>
            <p className="text-xs text-slate-400">Pages</p>
            <p className="font-semibold text-slate-700">
              {book.totalPages}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Published</p>
            <p className="font-semibold text-slate-700">
              {book.yearOfPublishing}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Publisher</p>
            <p className="font-semibold text-slate-700">
              {book.publisher}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Category</p>
            <p className="font-semibold text-slate-700">
              {book.category}
            </p>
          </div>
        </div>

        {/* Button */}
       <Link href={`/books/${book.bookId}`}>
       <button className="w-full rounded-xl bg-purple-400 py-2.5 font-semibold text-white transition hover:bg-purple-700 cursor-pointer">
          View Details
        </button>
       </Link>
      </div>
    </div>
  );
};

export default BookCard;