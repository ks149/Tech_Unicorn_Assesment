import React, {useState} from 'react';
import './Navbar.css';
import likedItems from '../images/likedItems.png'
import cart from '../images/cart.png'
import body from '../images/body.png'
import head from '../images/head.png'
import notifications from '../images/notifications.png'

function Navbar() {
  return (
    <nav>
      <ul className='container'>
          <li id="brand">Dealerz.</li>
          <li id='call'>Call Center</li>
          <li id='shipping'>Shipping & Returns</li>
          </ul>
          <br>
          </br>

         
          <ul class = "bottom">
            <li id="promo">Shop</li>
            <li id ="promo2">Promo</li>
            <li id = "promo2">About</li>
            <li id="promo2">Blog</li>
          </ul>
      
      <div class="likedItems">
        <img src={likedItems}></img>
      </div>
      <div class="cart">
        <img src={cart}></img>
      </div>
      <div class="body">
        <img src={body}></img>
      </div>
      <div class="head">
        <img src={head}></img>
      </div>
      <div class="notifications">
        <img src={notifications}></img>
      </div>

      
    </nav>

   
    
  )
}



export default Navbar