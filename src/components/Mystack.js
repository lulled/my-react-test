import React from 'react';
import './mystack.css';
import figmaa from '../img/figmaa.png'
const Mystack = () => {
    return (
        <div>
         <h2 className='tools'>Tools I Use</h2> 
         <div className='tool-wrapper'>
             <div className='tools-list'>
              <ul>
                  <li><img src={figmaa} alt=''className='image'/>Figma</li>
              </ul>
             </div>
         </div>
        
      
        </div>
    )
}

export default Mystack;
