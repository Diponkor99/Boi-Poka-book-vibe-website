import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { LocalStorageAddReadData, WishListAdd, WishListBooKLocalStorage } from '../../Utilits/ReadLocalStorageAdd';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReadBookDetiles from '../ReadBookDetiles/ReadBookDetiles';

const ListedBook = () => {
  
    const [data ,setData]=useState([]);
    const[wishlist,setWishlist]=useState([])
    const AllDataLoders=useLoaderData()
   const {rating, totalPages,yearOfPublishing}=data
  //  console.log(data)
useEffect(()=>{
//data loders LocalStorage in Read books
    const localeStorageData=LocalStorageAddReadData();
    const StorageDateInt=localeStorageData.map(data=>parseInt(data))
    const cakeData=AllDataLoders.filter(id=>StorageDateInt.includes(id.bookId))
    setData(cakeData)
   
   

 //data loders localStorage in Wish List books
        const wishListDataLocalStorage=WishListBooKLocalStorage();
        const wishListDataLocalStorageInt=wishListDataLocalStorage.map(data=>parseInt(data))

        const cakeWishListData=AllDataLoders.filter(data=>wishListDataLocalStorageInt.includes(data.bookId))
        
        setWishlist(cakeWishListData)
},[])
//DropDoewn Button add
const [btnName, setbtnName]=useState('')
const handeldropDoewnBtn=(id)=>{
  setbtnName(id)

  if(id==="Rating"){
    const Rating=[...data].sort((a,b)=>a.rating-b.rating)
    const Ratinglist=[...wishlist].sort((a,b)=>a.rating-b.rating)
    setWishlist(Ratinglist)
    setData(Rating)
    
  }
  if(id==='Number of pages'){
    const pages=[...data].sort((a,b)=>a.totalPages-b.totalPages)
    const pageslist=[...wishlist].sort((a,b)=>a.totalPages-b.totalPages)
    setWishlist(pageslist)
    setData(pages)
  }

  if(id==='Publisher year'){
    const year=[...data].sort((a,b)=>a.yearOfPublishing-b.yearOfPublishing)
    const yearlist=[...wishlist].sort((a,b)=>a.yearOfPublishing-b.yearOfPublishing)
    setWishlist(yearlist)
    setData(year)
  }
}


return (
        <div>
            <div className='mx-auto my-5 w-11/12  shadow-2xl bg-gray-100 py-10 text-center rounded-2xl'>
                <h1 className='font-bold text-4xl'>Book</h1>
            </div>
            <div className=' text-center mx-auto'>
            
            <div className="dropdown dropdown-bottom dropdown-end ">
  <div tabIndex={0} role="button" className="btn m-1 bg-lime-400 px-5 ">{btnName ? `Click ⬇️: ${btnName}` :'Click ⬇️'}</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>handeldropDoewnBtn('Rating')}><a>Rating</a></li>
    <li onClick={()=>handeldropDoewnBtn('Number of pages')}><a>Number of pages</a></li>
    <li onClick={()=>handeldropDoewnBtn('Publisher year')}><a>Publisher year</a></li>
  </ul>
</div>
            </div>
            <Tabs className='my-5 '>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <div className='m-4'>
        {
           data.map(data=><ReadBookDetiles key={data.bookId} data={data}></ReadBookDetiles>) 
        }
      </div>
    </TabPanel>
    <TabPanel>
    <div className='m-4'>
        {
           wishlist.map(data=><ReadBookDetiles key={data.bookId} data={data}></ReadBookDetiles>) 
        }
      </div>
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default ListedBook;