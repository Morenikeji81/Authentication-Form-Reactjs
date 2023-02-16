import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './components/Home'
import Form1 from './components/Form1'
import Form2 from './components/Form2'


export default function App() {
  return (


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form1' element={<Form1 />} />
        <Route path='/form2' element={<Form2 />} />
        </Routes> 

  )
}


 
