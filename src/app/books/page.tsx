import React from 'react';
import { IBook } from '@/types/books-type';
import BookCard from '@/components/shared/BookCard';


const getBooks = async () => {
  const response = await fetch('http://localhost:3000/booksData.json');
  const data = await response.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();
//   console.log(booksData);
  return (
     <section className="container mx-auto my-10 px-4">

      {/* Section Heading */}
      <div className="mb-8 flex items-center flex-col">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-purple-600">
          Explore Our Collection
        </p>

        <h2 className="text-3xl font-bold text-slate-800">
          Discover All Books
        </h2>

        <p className="mt-2 max-w-2xl text-slate-500">
          Explore our collection of timeless classics, inspiring stories,
          and unforgettable adventures.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
        {booksData.map((book: IBook) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>

    </section>
  );
};

export default Books;