import React,{useState} from 'react'
import { TbCategory } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function Bookview() {
    const [bookList,setBookList] = useState([]);
    
    const handleSearchChange = (e) => {

    }
    const handleSearch = () => {

    }
  return (
    <div>
          <div className='p-5 mt-8 flex flex-col lg:mt-12 '>
       <div className='h-10 w-full mb-3 flex items-center md:justify-between lg:justify-between '>
        {/*category*/}
               <div className='hidden lg:flex md:flex items-center px-2 gap-2 '>
      <TbCategory className=''/>  
      <p className='text-sm font-semibold lg:text-xl'>Books view</p>
    </div>
        {/*Search*/}
            <div className='flex items-center'>
            <input type="text" name="search" id="search" placeholder='   search' onChange={handleSearchChange}  className='lg:w-96 lg:h-9 md:w-52 w-32 outline-none   border-2 rounded-lg ' />
            <button onClick={handleSearch} className='text-sm  p-1 lg:p-2 bg-green-400 rounded-lg text-white hover:font-semibold lg:ml-2 hover:bg-green-700'>Search</button>
            </div>
        {/*Add new button*/}
            <div >
            <button onClick={() =>handleAddNewCategory('categoryAdd')} className='w-16 h-7 text-xs lg:p-2 lg:w-40 lg:h-9 lg:text-sm text-white font-semibold rounded-lg hover:bg-purple-800 bg-[#662671]'> Add New</button>
            </div>
       </div>

<div className="overflow-x-auto overflow-y-scroll sm:overflow-x-scroll">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-[#FFF8B7] dark:bg-gray-700 dark:text-gray-400">
            <tr >
                <th scope="col" className="px-4 py-3 ">
                    ID
                </th>
                <th scope="col" className="px-4 py-3 ">
                    Name
                </th>
                <th scope="col" className="px-8 py-3 flex items-center justify-center">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    
                </th>
                <th scope="col" className="px-6 py-3">
                   
                </th>
            </tr>
        </thead>
        <tbody>
            {/* { */}

                {/* categoryList.map((category)=> ( */}
                    <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     book id
                </td>
                <td scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 book name
                </td>
                <td scope="row" className="flex items-center justify-center px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    book description
                </td>
                
                <td className="hover:cursor-pointer px-2 py-4">
                <FaRegEdit />   
                {/* onClick={()=> handleEditCategory(category._id)} */}
                </td>
                <td className= "flex justify-center px-full py-4 hover:cursor-pointer">
                    <MdDelete  />
                    {/* onClick={()=> handleDelete(category._id)} */}

                </td>
            </tr>
                {/* )) */}

            {/* } */}
            
           
           
        </tbody>
    </table>
</div>

    </div>
    </div>
  )
}

export default Bookview