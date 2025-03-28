import React from 'react';
import { CiLocationOn} from "react-icons/ci";
import { AiOutlineTeam } from "react-icons/ai";
import { AiTwotoneFile } from "react-icons/ai";
const ReadBookDetiles = ({data}) => {
    const {author,category,bookName,image,rating,tags,totalPages,yearOfPublishing,publisher}=data
    return (
        <div>
            <div className=" bg-base-200 my-6 p-7 rounded-xl shadow-2xl">
  <div className="  md:flex gap-6 ">
  <div className='bg-gray-200 px-14 py-7 rounded-xl text-center'>
  <img
      src={image}
      className="w-[172px] rounded-lg shadow-2xl mx-auto" />
  </div>
    <div >
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p className="py-6 font-medium">by: {author}</p>
    <div className='md:flex gap-3 my-2 items-center'>
        <div className='flex gap-2 my-3'>
        <p className='font-bold text-xl'>Tag:</p>
        <div className='flex gap-3'>
        {tags.map((tag,index)=><p key={index} className='text-cyan-700 bg-lime-200 px-4 rounded-md font-bold'>{tag}</p>)}
        </div>
        </div>
        <div>
        <p className='flex items-center font-medium'><CiLocationOn className='font-bold text-lime-900 text-2xl'/> Year of Publishing: {yearOfPublishing}</p>
        </div>
        
    </div>

    <div className='flex gap-3'>
         
        <p className='flex gap-1 items-center font-light '><AiOutlineTeam />Publisher:  {publisher}</p>
        <p className='flex gap-1 items-center font-light '><AiTwotoneFile />Page: {totalPages}</p>
    </div>
    <div className='divider'></div>


      <div className='flex gap-3'>
        <h1 className='font-medium bg-fuchsia-100 px-3 rounded-xl py-2 '>Category: {category}</h1>
        <h1 className='font-medium bg-cyan-100 px-3 rounded-xl py-2 '>Rating: {rating}</h1>
        <h1 className='font-medium bg-lime-300 px-3 rounded-xl py-2 '>View Details</h1>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ReadBookDetiles;