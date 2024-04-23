import React,{useState} from "react"

import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
     {/* <ToastContainer/> */}

    <BrowserRouter>
    <Routes>
    <Route path="home" element={<Home/>} />
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App
