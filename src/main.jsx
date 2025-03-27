import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import Home from './Component/Home/Home.jsx';
import ListedBook from './Component/ListedBook/ListedBook.jsx';
import PageToRead from './Component/PagesToRead/PageToRead.jsx';
import BookDetiles from './Component/BookDetiles/BookDetiles.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:'/listedbook',
        element:<ListedBook></ListedBook>
      },
      {
        path:'/pageToRead',
        element:<PageToRead></PageToRead>
      },
      {
        path:'book/:bookId',
        element:<BookDetiles></BookDetiles>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
