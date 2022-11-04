import React from 'react'
import { Route, Routes } from "react-router-dom";
import Contact from './Pages/Contact';
import Home from './Pages/Home';

function RouterPage() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   </>
  )
}

export default RouterPage