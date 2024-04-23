import React, { useState } from 'react'
import { IoMdArrowBack } from "react-icons/io";
import axios from 'axios'
import {toast} from 'react-toastify'

function BookAdd({handleEditComponent}) {
    const [categoryData,setCategoryData] = useState({});
    const [error,setError]  =useState('')
    const [success, setSuccess] = useState('')
    const handleChange = (e) => {
        setError('')
      setCategoryData({...categoryData,[e.target.id] : [e.target.value]})
    }
    

    const handleBookAdd = async() => {
        setError('')
        setSuccess('')
        try{
            const res = await axios.post('/api/admin/addBook',categoryData)
            const data = res.data
              toast.success('New categoryy Added!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                
                });
                handleEditComponent('BookView')
        }catch(error){
            console.log(error)
             setSuccess('')
             if(error.response.status == 409){
                setError('book already exists')
                toast.error('Oops! book already exists', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
             }
        }
    }
  return (
    
    <div className='flex flex-col gap-6  h-full w-full scroll-smooth  mt-12'>
    {/* Heading section */}
    <div>
        <div className='flex items-center pl-5 pt-6 gap-2'>
            <IoMdArrowBack className='text-2xl text-slate-600 hover:cursor-pointer' onClick={()=> handleEditComponent('BookView')}/>
            <p className='font-semibold text-2xl '>Add Books</p>
        </div>
    </div>
        

    {/* Body section */}
    <div className="flex flex-col lg:flex-row justify-between  p-4 ">
        <div className="relative lg:flex-1 m-2">
            <input type="text" id="bookName" name="bookName" onChange={handleChange} placeholder="Bookname" style={{ color : '#686868',fontSize : '14px'}} className="w-full border-2 border-gray-300 rounded-lg py-2 pl-8 focus:outline-none focus:ring-blue-500 focus:border-blue-500 " />
        </div>
        <div className="relative lg:flex-1 m-2">
            <input type="text" id="description" placeholder='Description'  onChange={handleChange} style={{color : '#686868',fontSize : '14px'}} className="w-full border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none rounded-lg py-2 pl-8" />
        </div>
        <div className="relative lg:flex-1 m-2">
            <input type="date" id="publishedDate" name="categoryName" onChange={handleChange} placeholder="Bookname" style={{ color : '#686868',fontSize : '14px'}} className="w-full border-2 border-gray-300 rounded-lg py-2 pl-8 focus:outline-none focus:ring-blue-500 focus:border-blue-500 " />
        </div>
        <div className="relative lg:flex-1 m-2">
            <input type="text" id="price" name="price"  onChange={handleChange} placeholder="price" style={{ color : '#686868',fontSize : '14px'}} className="w-full border-2 border-gray-300 rounded-lg py-2 pl-8 focus:outline-none focus:ring-blue-500 focus:border-blue-500 " />
        </div>
       
    </div>
    {
        error && (

            <div className='h-14 items-center flex justify-center border bg-red-200 border-red-700 w-48'><p className='text-red-800'>Book already exist</p></div>
        )
    }
    {
        success && (

            <div className='h-14 items-center flex justify-center border bg-green-200 border-green-700 w-48'><p className='text-green-800'>Book Added</p></div>
        )
    }
  <div>
    {/* cancel and save button */}
    <div className='flex gap-4 lg:justify-end justify-center mt-60 md:mt-40 lg:mt-72 lg:mr-6'>
            <button onClick={()=> handleEditComponent('BookView')} className='p-3 lg:p-5 w-20 lg:w-44 h-8 items-center flex justify-center rounded-3xl bg-[#FFFFFF] hover:bg-violet-500 hover:text-white border border-[#676767] text-blue-800'> cancel </button>
            <button onClick={handleBookAdd} className='p-3 lg:p-5 w-20 lg:w-44 h-8 items-center border-2 bg-[#662671] flex justify-center rounded-3xl hover:bg-purple-800 hover:text-black border-[#662671]  text-white'>Save</button>
    </div>
  </div>
</div>
  )
}

export default BookAdd