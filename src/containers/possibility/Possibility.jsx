//React import
import React from 'react';

//Style import
import './possibility.css';

//Image import
import possibilityimage from '../../assets/possibility.png'



const Possibility = () => {
  return (
    <div className='gpt4__possibility section__padding'  id='possibility'>
      
      <div className='gpt4__possibility-image'>
        <img src={possibilityimage} alt='possibility'/>
      </div>

      <div className='gpt4__possibility-content'>
        
        <h4>Request early access</h4>
        
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        
        
        <h4>Request Early Access to Get Started</h4>
      
      </div>

    </div>
  )
}

export default Possibility;
