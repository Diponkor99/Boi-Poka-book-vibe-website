import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { getdatachakAndAdd, WishListAdd } from '../../Utilits/ReadLocalStorageAdd';

const BookDetiles = () => {
    const param= useParams();
    const id=parseInt(param.bookId)
    const data=useLoaderData();
    const book=data.find(book=>book.bookId === id)
    const {author,bookName ,category, image,rating,publisher,tags,totalPages,yearOfPublishing,review }=book;
    // console.log(book)

    const handelOnclickRead=(id)=>{
        // console.log(id,'read data')
        getdatachakAndAdd(id)
    }

    const handelonClickWishList=(id)=>{
      WishListAdd(id)
    //  console.log(id)
    }
    return (
        <div >
            <div className="hero bg-base-200 my-10  mx-auto rounded-2xl  w-11/12"> 
                 <div className="hero-content flex-col lg:flex-row w-10/12 ">
  <div className=' flex-1/2 bg-gray-200 rounded-xl p-5 text-center'>
  <img
      src={image}
      className=" rounded-lg shadow-2xl md:h-[565px] mx-auto" />
  </div>
    <div className=' flex-1/2' >
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p className="py-6 font-medium">by: {author}</p>
      <div className='divider w-full'></div>
      <h1 className='text-md font-medium'>{category}</h1>
      <div className='divider w-full'></div>
         <p><span className='font-medium'>Review:</span> {review}</p>
         <div className='flex  gap-4 my-5'>
            <h1 className='font-medium'>Tag:</h1>
            {
              tags.map((tag,index)=>
              <h1 className='text-green-500 font-medium rounded-md bg-lime-200 px-2' key={index}>#{tag}</h1>)
            }
         </div>
         <div className='divider w-full'></div>
         <h1>Number of Pages:<span className='font-medium'> {totalPages}</span></h1>
         <h1>Publisher: <span className='font-medium'>{publisher}</span></h1>
         <h1>Year of Publishing:<span className='font-medium'>{yearOfPublishing}</span></h1>
         <h1 className='mb-4'>Rating: <span className='font-medium'> {rating}</span></h1>

     <div className='flex gap-4'>
     <button onClick={()=>handelOnclickRead(param.bookId)} className="btn btn-outline btn-success text-black">Read</button>
        <button onClick={()=>handelonClickWishList(param.bookId)} className='btn  px-5 bg-lime-400'>Wish List</button>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetiles;