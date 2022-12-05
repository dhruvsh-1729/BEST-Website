import React from 'react'
import './Gallery.css';

import image1 from '../assets/best1.webp';
import image2 from '../assets/best2.webp';
import image3 from '../assets/best3.jpg';

import image4 from '../assets/best4.webp';
import image5 from '../assets/best5.jpg';
import image6 from '../assets/best6.jpg';


function Gallery() {
    // const images=[image1,image2,image3,image4,image5,image6];
    // let i=0;
    // let image = document.querySelector('#gallery-bgimage');
    // setInterval(function(){
    //     image.src=images[i];
    //     i=(i+1)%images.length;
    // },5000)
  return (
   <>
   <div className="gallery-about">
    <div className="gallery-title">
        <span>Gallery</span> 
    </div>
    {/* <div className="image">
        <img src={image} id="Image"></img>
    </div> */}
    <div className="transport-left-content">
        <div className="transport-topic">
            <span>"Relive the best of BEST!"</span>
        </div>
        <div className="transport-brief">
            <p>Daily more than 20 lakh commuters use BEST buses and its subsidiary services to travel from one point of Mumbai to another.</p> 
            <p>We analyse using the best technology available to-date and implement routes and services accordingly.</p>
            <p>An example of this is the busy service offerings of BEST in the wards of South Mumbai which is also the business district.</p> 
        </div>
    </div>
    <img src={image1} id="gallery-bgimage" />
   </div>
   </>
  )
}

export default Gallery;
