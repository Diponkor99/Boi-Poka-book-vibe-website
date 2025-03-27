import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, image, author, bookName, tags, category } = book;
    return (
        <div>
            <Link to={`/book/${bookId}`}>
                <div className="card bg-base-100 w-full shadow-sm p-6">
                    <figure className='bg-gray-200 '>
                        <img
                            className='w-[166px] p-6'
                            src={image}
                            alt={bookName} />
                    </figure>
                    <div className="card-body">
                        <div className='flex gap-5 justify-center'>
                            {tags.map(tag => <input type="reset" value={tag} className=" bg-lime-100 py-1 px-5 rounded-lg text-green-700 font-bold" />)}</div>
                        <h2 className="card-title">{bookName}</h2>
                        <p>{author}</p>
                        <div className='border-t-2 border-dashed'></div>
                        <div className="card-actions justify-between">
                            <h1 className='font-medium text-lg'>{category}</h1>
                            <div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-lime-600" aria-label="1 star" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;