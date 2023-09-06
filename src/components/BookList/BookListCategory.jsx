import React from 'react';

export const BookListCategory = ({ setModalBookInfo, openModal, book }) => {
  return (
    <>
      <div className="flex flex-col w-[180px] h-[306px]">
        <img
          className="mb-[14px] h-[256px] rounded-[8px] cursor-pointer"
          src={book.book_image}
          alt={book.description}
          onClick={() => {
            openModal(true);
            setModalBookInfo(book);
          }}
        />
        <p
          className="text-[#111] text-[16px] font-bold leading-[1.12] tracking-[-0.64px] mb-[4px] 
                    overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {book.title}
        </p>
        <p
          className="text-[#B4AFAF] text-[12px] italic leading-[1.16] 
                    overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {book.author}
        </p>
      </div>
    </>
  );
};
