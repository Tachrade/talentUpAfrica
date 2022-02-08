import React from 'react';
import '../App.css';
import search from '../Images/search.png';

const Hero =()=>  {
   
        return (
            <div className="hero">
                <h1 className='heading1'>Land your dream job, <span className='textC'>home</span> and <span className='textC'>abroad</span></h1>
                <p>We connect to the top companies hiring talented professionals in the <span className='textC'>US</span> and <span className='textC'>Africa</span></p>
                <span className='sg'>
               <span className='prea'><img src={search}/></span>
                <input type="text" placeholder="Job Title or Keyword" type='text' className='search'/>
                <span><button className='btns'>Search</button></span>
                </span>
                
                
            </div>
        )
    
}

export default Hero;