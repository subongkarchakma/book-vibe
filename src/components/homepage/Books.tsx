import React from 'react';
import BookCard from '../shared/BookCard';
import { IBook } from '@/types/books-type';

 
const getBooks = async () => {
  const response = await fetch('http://localhost:3000/booksData.json');
  const data = await response.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();
  console.log(booksData);
  return (
    <div>
 <h2 className="text-2xl font-bold text-center "> Books</h2>
    <section className="container mx-auto my-10 grid grid-cols-3 gap-4">
      {booksData.slice(0, 6).map((book: IBook) => {
        return <BookCard key={book.bookId} book={book} />;
      })}
    </section>

    </div>
  );
};

export default Books;
