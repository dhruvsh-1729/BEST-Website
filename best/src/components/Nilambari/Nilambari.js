import React from 'react'
import './Nilambari.css';
import image from '../assets/nilambari.webp';

function Nilambari() {
  return (
    <>
    <div className="bg-image">
        <img src={image} alt="Nilambari Image"/>
        <div className="content">
            <div className="heading">
                <h1>OPEN DECK BUS TOUR</h1>
                <h2>NILAMBARI BUS</h2>
            </div>
            <div className="catchy">
                <span>Book your Bus tickets now using Chalo App!</span> 
            </div>
            <button className="btn">
                Book Here
            </button>
        </div>
    </div>
    </>
  )
}

export default Nilambari
