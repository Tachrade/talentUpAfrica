import React from 'react';
import talent from '../Images/Talentlist.png';
import us from '../Images/Us.png';
import Hr from '../Images/Hr.png';
import career from '../Images/career.png'




const TalentList =() =>  {
   
        return (
            <>
            <div className='jus'>
                 <h2  className="job">Let’s help you stand out</h2> 
                 <div className='cent' >
                     <div className='help'>
                        
                         <h2 className='job2'>Join our Talent List</h2>
                        
                             
                             <p className='pro'>Create your professional profile by uploading your CV and filling a profile form 
                                    </p>
                                    <p className='pro2'>JOIN NOW</p>
                      </div>
                     <div className='iml'>
                         <img src={talent} alt=""/>
                     </div>
                 </div>
                
            </div>
            <div className='jus2'>                
                 <div className='cent2' >
                     <div className='help'>                   
                         <h2>Get US-based remote jobs</h2>  
                             <p className='pro'>Finding your dream remote job just got easier.
                              We curate and deliver top remote jobs in the US straight to your inbox</p>
                             <p className='pro2'>JOIN NOW</p>
                      </div>
                     <div className='iml'>
                         <img src={us} alt=""/>
                     </div>
                 </div>
                
            </div>

            <div className='jus'>
                 <div className='cent' >
                     <div className='help'>
                        
                         <h2>Showcase your talent by taking our HR-endorsed assessment</h2>                 
                             <p className='pro'>Pass the online assessment once and for all</p>
                             <p className='pro2'>JOIN NOW</p>
                      </div>
                     <div className='iml'>
                         <img src={Hr} alt=""/>
                     </div>
                 </div>
                
            </div>

            <div className='jus2'>
                
                 <div className='cent2' >
                     <div className='help'>
                        
                         <h2>Career coaching</h2>
                        
                             
                             <p className='pro'>  We offer periodic FREE career coaching to mid-senior level managers. 
                             We help you review your career path, optimize your CV to land bigger roles, prep you for interviews and negotiations  </p>
                             <p className='pro2'>JOIN NOW</p>
                      </div>
                     <div className='iml'>
                         <img src={career} alt=""/>
                     </div>
                 </div>
                
            </div>
            
            </>
        );
    
}

export default TalentList;