import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';

import { AiOutlineArrowLeft } from "react-icons/ai";
export default function Form1() {
  return (
    <div className='form2---card'>
      <div className='form2-card'>
      <Link to="/form1"><AiOutlineArrowLeft /></Link>
      <h1 className='form2-heading'>Welcome <br/> Back!</h1>
      <p className='form2-paragraph'>Continue your adventure</p>
      </div>
      <form className='form2--form'>
      
      <input className='input' type="email" placeholder='Email' />
      <hr className='horizontal-line'/>
     <input className='input' type="password" placeholder='Password' />
     <hr className='horizontal-line'/>
  
  <p className='form2-input-paragraph'> 
  <input className='input' type="checkbox" />
  Remember me
  </p>
  
</form>
<button className='form2-btn-btn'>Sign In</button>
<p className='form2-lastparagraph'>Forgot password?</p>
      
    </div>
  )
}
