'use client';
import BookCard from '@/components/shared/BookCard';
import ListedBookCard from '@/components/shared/ListedBookCard';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books-type';
import React, { useContext } from 'react';

const ListedBooks = () => {
  const { readBooks, wishList } = useContext(BooksContext) as {
    readBooks: any[];
    wishList: any[];
  };
  console.log(readBooks, wishList);
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Listed Books</h2>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {readBooks.length > 0 ? (
            readBooks.map((book: IBook) => {
              return <ListedBookCard key={book.bookId} book={book}></ListedBookCard>;
            })
          ) : (
            <p className="text-center text-lg">No books read yet</p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist (${wishList.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {wishList.length > 0 ? (
            wishList.map((book: IBook) => {
              return <ListedBookCard key={book.bookId} book={book}></ListedBookCard>;
            })
          ) : (
            <p className="text-center text-lg">Wishlist is empty</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
