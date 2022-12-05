import React from 'react'
import './Profile.css'; 

import image1 from '../assets/old1.jpg';
import image2 from '../assets/old2.jpg';
import image3 from '../assets/old3.jpg';
import image4 from '../assets/old4.jpg';
import image5 from '../assets/old5.jpg';
import image6 from '../assets/old6.jpeg';


function Profile() {
    // const images=[image1,image2,image3,image4,image5,image6];
    // let i=0;
    // let image = document.querySelector('#profile-bgimage');
    // setInterval(function(){
    //     image.src=images[i];
    //     i=(i+1)%images.length;
    // },3000) 
  return (
   <>
   <div className="profile-about">
    <div className="profile-title">
        <span>Profile - History</span> 
    </div>
    {/* <div className="image">
        <img src={image} id="Image"></img>
    </div> */}
    <div className="profile-left-content">
        <div className="profile-topic">
            <span>"One of the oldest tram and bus public system!" </span>
        </div>
        <div className="profile-brief">
            <p>For the last 100 years BEST has been running its services in Mumbai for point to point commuting.</p> 
            <p>Starting from the humble origins of renting a horse cart for the services throughout the day to over 5000 buses in the city.</p>
            <p>BEST has seen the city grow and bloom over the last entire century and has been the part of making lives bigger.</p> 
        </div>
    </div>
    <img src={image1} id="profile-bgimage" />
   </div>
   </>
  )
}

export default Profile;
