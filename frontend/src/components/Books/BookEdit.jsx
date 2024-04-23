import React, { useState } from 'react'
import { IoMdArrowBack } from "react-icons/io";


function BookEdit() {
const [bookName,setBookName] = useState('')
const [bookDescription,setBookDescription] = useState('')
const [price,setPrice] =useState('')

const handleBookUpdate = () => {

}
  return (
    <div className='flex flex-col gap-6  h-full w-full scroll-smooth  mt-12'>
    {/* Heading section */}
    <div>
        <div className='flex items-center pl-5 pt-6 gap-2'>
            <IoMdArrowBack className='text-2xl text-slate-600 hover:cursor-pointer' onClick={()=> handleAddNewCategory('category')}/>
            <p className='font-semibold text-2xl '>Edit Books</p>
        </div>
    </div>

    {/* Body section */}
    <div className="flex flex-col lg:flex-row justify-between  p-4 ">
        <div className="relative lg:flex-1 m-2">
            <input type="text" id="bookName" name="bookName" value={bookName} onChange={(e)=> setBookName(e.target.value)} placeholder="Bookname" style={{ color : '#686868',fontSize : '14px'}} className="w-full border-2 border-gray-300 rounded-lg py-2 pl-8 focus:outline-none focus:ring-blue-500 focus:border-blue-500 " />
        </div>
        <div className="relative lg:flex-1 m-2">
            <input type="text" id="description" placeholder='Description' value={bookDescription} onChange={(e)=> setBookDescription(e.target.value)} style={{color : '#686868',fontSize : '14px'}} className="w-full border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none rounded-lg py-2 pl-8" />
        </div>
        <div className="relative lg:flex-1 m-2">
            <input type="date" id="publishedDate" name="categoryName" value={bookName} onChange={(e)=> setBookName(e.target.value)} placeholder="Bookname" style={{ color : '#686868',fontSize : '14px'}} className="w-full border-2 border-gray-300 rounded-lg py-2 pl-8 focus:outline-none focus:ring-blue-500 focus:border-blue-500 " />
        </div>
        <div className="relative lg:flex-1 m-2">
            <input type="text" id="price" name="price" value={price} onChange={(e)=> setPrice(e.target.value)} placeholder="price" style={{ color : '#686868',fontSize : '14px'}} className="w-full border-2 border-gray-300 rounded-lg py-2 pl-8 focus:outline-none focus:ring-blue-500 focus:border-blue-500 " />
        </div>
       
    </div>
  <div>
    {/* cancel and save button */}
    <div className='flex gap-4 lg:justify-end justify-center mt-60 md:mt-40 lg:mt-72 lg:mr-6'>
            <button onClick={()=> handleAddNewCategory('category')} className='p-3 lg:p-5 w-20 lg:w-44 h-8 items-center flex justify-center rounded-3xl bg-[#FFFFFF] hover:bg-violet-500 hover:text-white border border-[#676767] text-blue-800'> cancel </button>
            <button onClick={handleBookUpdate} className='p-3 lg:p-5 w-20 lg:w-44 h-8 items-center border-2 bg-[#662671] flex justify-center rounded-3xl hover:bg-purple-800 hover:text-black border-[#662671]  text-white'>Save</button>
    </div>
  </div>
</div>
  )
}

export default BookEdit