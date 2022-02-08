import React from 'react';
import '../App.css';
import HMO from '../Images/HMO.png';
import Fair from '../Images/fair.png';
import El from '../Images/El.png';
import Chris from '../Images/Chris.png';
import Nig from '../Images/Nigeria.png';
import Sbc from '../Images/Sbc.png';
import Gb from '../Images/Gb.png';
import Zer from '../Images/Zercom.png'

const Companies =()=>  {
   
        return (
         
         <div >
                <h2 className="job">Companies recruiting from our Talent List </h2>
                <div className='companies'>
                    <img src={HMO} alt='HMO Rel'/>
                    <img src={Fair} alt='Fair Money'/>
                    <img src={El} alt=''/>
                    <img src={Chris} alt=''/>
                    <img src={Nig} alt=''/>
                    <img src={Sbc} alt=''/>
                    <img src={Gb} alt=''/>
                    <img src={Zer} alt=''/>
                </div>
            </div>
        );
    
}

export default Companies;