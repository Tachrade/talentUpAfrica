import React from 'react';
import land from '../Images/land.png';

const  Land = () =>  {
   
        return (
            <div className='landc'>
               <div className='land'>
                   <img src={land} alt=""/>
                   <div className='lf'>
                   <h1>Land a dream US remote job</h1>
                   <p>Employers are always checking our pool of talents for their next hire</p>
                   <button className='btc'>Join Now</button>
                       <button className='btc2'>Search Jobs</button>
                   </div>
                   
                      
                  
                  
                
               </div> 
            </div>
        );
    
}

export default Land ;