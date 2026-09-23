import { IBook } from '@/types/books-type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListedBookCard = ({ book }: { book: IBook }) => {
  return (
    <div className="container mx-auto">
      {' '}
      <div className="flex flex-col sm:flex-row gap-6 bg-base-100 p-5 rounded-2xl shadow-md border border-base-200 hover:shadow-xl transition-shadow duration-300">
        {' '}
        {/* Book Image */}{' '}
        <div className="sm:w-48 shrink-0 w- full h-64 sm:h-56 relative overflow-hidden rounded-xl">
          {' '}
          <Image
            src={book.image}
            alt={book.bookName}
            width={200}
            height={280}
            className="w-full h-64 sm:h-56 object-cover rounded-xl"
          />{' '}
        </div>{' '}
        {/* Book Information */}{' '}
        <div className="flex flex-col justify-between flex-1">
          {' '}
          <div>
            {' '}
            <h2 className="text-2xl font-bold mb-2"> {book.bookName} </h2>{' '}
            <p className="text-sm text-gray-500 mb-3"> By {book.author} </p>{' '}
            <p className="text-gray-600 leading-relaxed">
              {' '}
              {book.review}{' '}
            </p>{' '}
          </div>{' '}
          {/* Bottom section */}{' '}
          <div className="flex gap-2 mt-5">
            <Link href={`/books/${book.bookId}`}>
              <button className="btn bg-purple-400 py-2.5 font-semibold text-white transition hover:bg-purple-700 cursor-pointer">
                View Details
              </button>
            </Link>
            <button className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-[1.2em]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              Like
            </button>
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
};

export default ListedBookCard;
