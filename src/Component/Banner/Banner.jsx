import React from 'react';
import bannerImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='m-5 md:w-4/5 mx-auto '>
            <div className="hero bg-base-300  rounded-xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImg}
      className=" rounded-lg shadow-2xl sm:w-11/12 md:w-2/6" />
    <div>
      <h1 className="text-6xl font-bold my-5">Books to freshen up your bookshelf</h1>

      <button className="btn bg-lime-400">View The List</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;