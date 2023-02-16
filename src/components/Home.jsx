import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom'
import './Card.css'

export default function Home() {
  return (
    <div className='card' >
        <p className='first-paragraph'>My Social</p>
      <h1 className='first-heading'>Start a new <br/> social adventure.</h1>
      
       <div className='card1'>
        <p >Get involved with people and events around you.</p>
        <button className='first-button'>Sign In</button>
         <p className='second-paragraph'>Or Create Account <Link to='/form1'><AiOutlineArrowRight/>
         </Link>
        </p>
    </div>
    </div>
  )
}


