import React, { useState }  from 'react'
import Header from '../components/header/Header'
import { Sidebar } from "flowbite-react";
import { HiInbox, HiShoppingBag, HiTable } from "react-icons/hi";
import Bookview from '../components/Books/Bookview';
import BookEdit from '../components/Books/BookEdit';
import BookAdd from '../components/Books/BookAdd';


function Home() {
    const [seletectedItem, setSeletectedItem] = useState('BookView');
    const [bookId,setBookId] = useState(null)

   const  handleEditComponent = (item) => {
  setSeletectedItem(item)
}

    const renderSelectedItem = () => {
        switch(seletectedItem){
          case 'BookView' : 
          return <Bookview setBookId={setBookId} handleEditComponent={handleEditComponent}/>
          case 'BookEdit' :
          return  <BookEdit handleEditComponent={handleEditComponent} bookId={bookId}/> 
          case 'BookAdd' :
            return <BookAdd handleEditComponent={handleEditComponent}/>
          default : 
          return null 
    
        }
      } 
  return (
    <div>
        <Header/>
        
        {/* side bar and contents goes here */}
        <div className="flex h-full">
      {/* Sidebar */}
      <Sidebar className="bg-[#FFFFFF] text-[#000000] pt-10 font-semibold w-32 lg:w-48 flex-shrink-0   mt-10 ml-3">
        {/* Sidebar Items */}
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              icon={HiInbox}
              onClick={()=> handleEditComponent('home')}
              className="hover:bg-[#FFF8B7] mb-4 ml-2 bg-slate-200"
            >
              Home
            </Sidebar.Item>
        
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      {/* Page Content */}
      <div className="flex-1 bg-[#FFFFFF] overflow-x-auto">
        {/*  page content goes here */}
     


        
        {renderSelectedItem()}
        {/* <Bookview /> */}
     
      </div>
    </div>
    </div>
  )
}

export default Home