'use client';
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';

const ListedBooks = () => {
  const { readBooks } = useContext(BooksContext) as { readBooks: unknown };
  console.log(readBooks);
  return <div>Listed Books</div>;
};

export default ListedBooks;
