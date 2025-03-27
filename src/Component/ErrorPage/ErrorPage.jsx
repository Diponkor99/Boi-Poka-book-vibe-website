import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error =useRouteError();

    return (
        <div>
            <h1 className='text-5xl'>{error.status}</h1>
            <h1 className='text-3xl'>Page Not Found</h1>
            <p>{error.data}</p>
            <button className='btn bg-emerald-900'><Link to="/">Home</Link></button>
         </div>
    );
};

export default ErrorPage;<h1>Page Not Found</h1>