'use client';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books-type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({ book }: { book: IBook }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext) as {
    readBooks: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  };

  const handleReadBook = () => {
    setReadBooks([...readBooks,book]);
    toast(`you have read ${book.bookName}`)
    console.log('button read triggered', book);
  };
  return (
    <button
      className="btn btn-primary px-8 shadow-md"
      onClick={() => handleReadBook()}
    >
      Read
    </button>
  );
};

export default ReadButton;
