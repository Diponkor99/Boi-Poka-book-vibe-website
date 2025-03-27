
import Navber from '../Navbar/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-[1440px] mx-auto bg-gray-200'>
          <Navber></Navber> 
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Root;