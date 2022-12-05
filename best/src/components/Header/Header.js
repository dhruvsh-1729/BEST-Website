import React from 'react'
import './Header.css';
import image from '../assets/menu_logo.png';

function Header() {
    const list= document.querySelectorAll('.items');
    function activeLink(){
      list.forEach((item) =>
      item.classList.remove('active'));
      this.classList.add('active');
    }
    list.forEach((item)=>
    item.addEventListener('click',activeLink));

  return (
   <>
   <div className="navbar">
    <ul>
        <img src={image} alt="BEST Logo" />
        <li className="items active"><a href="#">Home</a></li>
        <li className="items"><a href="#">About</a></li>
        <li className="items"><a href="#">Transport</a></li>
        <li className="items"><a href="#">Profile</a></li>
        <li className="items"><a href="#">Contact</a></li>
    </ul>
   </div>
   </>
  )
}

export default Header
