import React from 'react';
import './mystack.css';
import figmaa from '../img/figmaa.png'
import mongodbb from'../img/mongodbb.png'
import reactt from '../img/reactt.png'
import nodee from '../img/nodee.png'
const Mystack = () => {
    return (
        <div className='the-tools'>
         <h2 className='tools'>Tools I Use</h2> 
         <div className='tool-wrapper'>
             <div className='tools-list'>
              <ol className='ol'>
                  <li className='list'>
                      <img src={mongodbb} alt=''className='image'/>
                     <h3 className=' tool-name'>Figma</h3> 
                     <div>
                         <p className='tool-des'>I use figma to dedign and rapid porototyping of all my projects</p>
                     </div>
                  </li>
                  <li className='list'>
                      <img src={nodee} alt=''className='image'/>
                     <h3 className=' tool-name'>Figma</h3> 
                     <div>
                         <p className='tool-des'>I use figma to dedign and rapid porototyping of all my projects</p>
                     </div>
                  </li>
                  <li className='list'>
                      <img src={reactt} alt=''className='image'/>
                     <h3 className=' tool-name'>Figma</h3> 
                     <div>
                         <p className='tool-des'>I use figma to dedign and rapid porototyping of all my projects</p>
                     </div>
                  </li>
                  <li className='list'>
                      <img src={figmaa} alt=''className='image'/>
                     <h3 className=' tool-name'>Figma</h3> 
                     <div>
                         <p className='tool-des'>I use figma to dedign and rapid porototyping of all my projects</p>
                     </div>
                  </li>
            
             
             
             
              </ol>
             </div>
         </div>
        
      
        </div>
    )
}

export default Mystack;
