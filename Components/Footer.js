import React from 'react';
import dark from '../Images/dark.svg';
import facebook from '../Images/icons/facebook.png';
import instagram from '../Images/icons/instagram.png';
import linkedin from '../Images/icons/linkedin.png';
import twitter from '../Images/icons/twitter.png';


const Footer =()=>  {
   
        return (
            <div>
                {/* <!-- FOOTER STARTS --> */}
              <footer className="footer">
                  <div className='con4'>

                       <div className='col'>
                           <img  src= {dark}  alt='Logo'/>
                           <div className='icons'>
                               <img  src= {instagram}/> 
                               <img  src= {facebook}/>
                               <img  src= {twitter}/>
                               <img  src= {linkedin}/>
                           </div>
                           <p className="copy">&#169;Copyright 2020</p>
                        </div>

                        <div className='col'>
                        <p className="phead">Solutions</p>
                        <p><a href="" className="pbody">Join Talent Pool</a></p>
                        <p><a href="" className="pbody">Find Jobs</a></p>
                        <p><a href="" className="pbody">Talent Pool</a></p>
                        </div>

                        <div className='col'>
                        <p className="phead">Company</p>
                        <p><a href="" className="pbody">About</a></p>
                        <p><a href="" className="pbody">Privacy Policy</a></p>
                        <p><a href="" className="pbody">Terms of Service</a></p>
                        </div>

                        <div className='col'>
                        <p className="phead">Resources</p>
                        <p><a href="" className="pbody">Blog</a></p>
                        </div>

                        <div className='col'>
                           
                        </div>

                  </div>
                    
              </footer>

             {/* <!-- FOOTER ENDS --> */}
            </div>
        )
    
}

export default Footer;