import React from 'react';
import  './intro.css'
import dev from '../img/dev.png';
const Intro = () => {
    return (
        <div className = 'header'>
            <div className='left'>
            <h2 className='intro-title'>Hello, there I'm</h2>
            <h1 className='title-name'>Lule Ahmed</h1>
        
            <div className='title'>
                <div className='title-wraper'>
                 <div className ='title-item'>Web Developer</div>
                 <div className ='title-item'>UI/UX Designer</div>
                 <div className ='title-item'>Entreprenuer</div>
                 <div className ='title-item'>Tech Advocate</div>

                </div>

            </div>
           <div className='description'>
               <h3>I am passionte about solving business problems through human-centered design.</h3>
           </div>
            
            
            
            </div>
            <div className ='right'>
                <div className='bg'></div>
             <img src={dev} alt=''className='img'/>
            </div>
        </div>
        
    )
};

export default Intro;
