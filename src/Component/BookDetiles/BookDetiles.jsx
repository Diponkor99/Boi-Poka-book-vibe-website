import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetiles = () => {
    const param= useParams();
    console.log(param.bookId)
    return (
        <div>
            <h1>book detiles</h1>
        </div>
    );
};

export default BookDetiles;