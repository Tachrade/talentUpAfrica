import React from 'react';
import '../App';
import logo from '../Images/logo.svg';

const Header =()=>  {
   
        return (
            <div className='pos'>
            <div className="header">
                <div className='logo'>
                <img src={logo} alt="Logo" className="logo"/>
                </div>
               <div className="navs">
                   <a href="">Find Job</a>
                   <a href="">Coaching</a>
                   <a href="">Sign In</a>
                   <button className='emp'>For Employers</button>
              </div> 
            </div>
            </div>
        );
    
}

export default Header;