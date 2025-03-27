import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBook = () => {

    return (
        <div>
            <div className='mx-auto my-5 w-11/12  shadow-2xl bg-gray-100 py-10 text-center rounded-2xl'>
                <h1 className='font-bold text-4xl'>Book</h1>
            </div>
            <div className=' text-center mx-auto'>
            <button className='btn bg-lime-400 px-5 '>Sort By</button>
            </div>
            <Tabs className='my-5 '>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default ListedBook;