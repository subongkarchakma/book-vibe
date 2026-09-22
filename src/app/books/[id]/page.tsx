import ReadButton from '@/components/bookDetails/ReadButton';
import { IBook } from '@/types/books-type';
import Image from 'next/image';
import React from 'react';
interface IBookDetailsPageProps{
    params: Promise<{
        id: string;
    }>
}
const getBooks = async () => {
  const response = await fetch('http://localhost:3000/booksData.json');
  const data = await response.json();
  return data;
};

const BookDetailsPage =async({params}: IBookDetailsPageProps) => {
    const {id} = await params;
    const booksData = await getBooks();
    const book = booksData.find((book:IBook) => String(book.bookId) == id) as IBook
    // console.log(book);
    return (
       <div className="container mx-auto">
  <div className="card lg:card-side overflow-hidden bg-base-100 shadow-xl border border-base-200">

    {/* Book Cover */}
    <figure className="relative bg-base-200 p-6 lg:w-[320px]">
      <Image
        src={book.image}
        alt={book.bookName}
        width={300}
        height={400}
        className="rounded-xl object-cover shadow-lg transition duration-300 hover:scale-105"
      />
    </figure>

    {/* Details */}
    <div className="card-body">

      {/* Category + Rating */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="badge badge-primary badge-outline">
          {book.category}
        </span>

        <span className="badge badge-warning gap-1">
          ★ {book.rating}
        </span>

        <span className="text-sm text-base-content/50">
          {book.totalPages} pages
        </span>
      </div>

      {/* Title */}
      <h2 className="card-title mt-2 text-3xl font-bold lg:text-4xl">
        {book.bookName}
      </h2>

      {/* Author */}
      <p className="text-base-content/60">
        Written by{" "}
        <span className="font-semibold text-base-content">
          {book.author}
        </span>
      </p>

      {/* Review */}
      <p className="mt-3 max-w-3xl text-sm leading-7 text-base-content/70 lg:text-base">
        {book.review}
      </p>

      {/* Tags */}
      <div className="mt-2 flex flex-wrap gap-2">
        {book.tags.map((tag) => (
          <span
            key={tag}
            className="badge badge-ghost"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Book Information */}
      <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-base-200/60 p-4 sm:grid-cols-3">

        <div>
          <p className="text-xs text-base-content/50">Publisher</p>
          <p className="font-semibold">{book.publisher}</p>
        </div>

        <div>
          <p className="text-xs text-base-content/50">Published</p>
          <p className="font-semibold">{book.yearOfPublishing}</p>
        </div>

        <div>
          <p className="text-xs text-base-content/50">Pages</p>
          <p className="font-semibold">{book.totalPages}</p>
        </div>

      </div>

      {/* Action */}
      <div className="card-actions mt-4 justify-end">
       <ReadButton book ={book} />

      </div>

    </div>
  </div>
</div>
    );
};

export default BookDetailsPage;