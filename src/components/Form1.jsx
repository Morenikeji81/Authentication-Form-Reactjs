import React from 'react'
import './Card.css'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Form() {
  return (
    <div className='form1---card'>
      <div className='form1-card'>
<Link to="/"><AiOutlineArrowLeft /></Link>
<h1 className='form1-heading'>Create <br/> Account.</h1>
</div>
<form className='form'>
 <input className='input' type="text" placeholder='Full Name' />
 <hr className='horizontal-line'/>
  <input className='input' type="email" placeholder='Email' />
  <hr className='horizontal-line'/>
  <input className='input' type="number" placeholder='Phone Number' />
  <hr className='horizontal-line'/>
  <input className='input' type="password" placeholder='Password' />
  <hr className='horizontal-line'/>
  <input  className='input' type="password" placeholder='Confirm Password' />
  <hr className='horizontal-line'/>
  <p className='input-paragraph'>
  <input className='input' type="checkbox" />
  Agree to terms and conditions
  </p>
</form>
<button className='btn--btn'>Sign Up</button>
<div className='flex--flex'>
<p className='last-paragraph'>Already have an account?   </p>
<Link to='/form2'><p className='last--paragraph'>Sign In</p></Link>
</div>
    </div>
  )
}



