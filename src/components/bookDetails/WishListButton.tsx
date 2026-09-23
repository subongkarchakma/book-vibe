'use client';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books-type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({ book }: { book: IBook }) => {
  const { wishList, setWishList } = useContext(BooksContext) as {
    wishList: IBook[];
    setWishList: React.Dispatch<React.SetStateAction<IBook[]>>;
  };

  const handleAddToWishList = () => {
    setWishList([...wishList,book]);
    toast.success(` ${book.bookName} added to wishlist`);
    console.log('button wishlisted triggered', book);
  };
  return (
    <button
      className="btn btn-primary px-8 shadow-md"
      onClick={() => handleAddToWishList()}
    >
      Add to Wishlist
    </button>
  );
};

export default WishListButton;