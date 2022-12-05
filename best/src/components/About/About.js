import React from 'react'
import './About.css';

import image1 from '../assets/best4.webp';
import image2 from '../assets/best5.jpg';
import image3 from '../assets/best6.jpg';

function About() {
    // const images=[image1,image2,image3];
    // let i=0;
    // let image = document.querySelector('#bgimage');
    // setInterval(function(){
    //     image.src=images[i];
    //     i=(i+1)%images.length;
    // },2500) 
  return (
   <>
   <div className="about">
    <div className="title">
        <span>About BEST</span> 
    </div>
    {/* <div className="image">
        <img src={image} id="Image"></img>
    </div> */}
    <div className="left-content">
        <div className="topic">
            <span>"We are the Best Public Transit in Mumbai!"</span>
        </div>
        <div className="brief">
            <p>Since the last century till date we have been providing public transit system for citizens of Mumbai 
                and our network is the best and the most robust.</p> 
            <p>Excelling ahead with going hand in hand with latest technology and our passenger's comfort while commuting
                has always been our priority.</p>
            <p>An example of this is the latest Electric AC Double Decker Bus from Switch Mobility.</p> 
        </div>
    </div>
    <img src={image2} id="bgimage" />
   </div>
   </>
  )
}

export default About;
