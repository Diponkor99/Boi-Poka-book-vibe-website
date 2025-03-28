import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books ,setBooks]=useState([])
    useEffect(()=>{
        fetch('../../../public/booksData.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto  gap-6 mx-3 md:mx-10 my-5'>
                {books.map(book=><Book book={book} key={book.bookId}></Book>)}
            </div>
        </div>
    );
};

export default Books;