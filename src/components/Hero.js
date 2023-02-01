import React from 'react';
import styled from 'styled-components';
import './Hero.css';
import Ellipse153 from '../images/Ellipse 153.png';
import Ellipse154 from '../images/Ellipse 154.png';
import Ellipse155 from '../images/Ellipse 155.png';
import Ellipse156 from '../images/Ellipse 156.png';
import Ellipse157 from '../images/Ellipse 157.png';
import Ellipse158 from '../images/Ellipse 158.png';
import Ellipse159 from '../images/Ellipse 159.png';


const Button = styled.button`
  background-color: #F86338;
  color: white;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  outline: 0;
  font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 120%;
/* or 19px */

text-align: center;
letter-spacing: 0.005em;
position: absolute;
left: 800px;
top: 550px;
display:inline-block
width: 156px;
height: 56px;

`;


function Hero() {

   
  return (
    <div className="hero-container">
     <div className="tag">
       <h1>Your Premium</h1>
       <h1>Sound, Unplugged!</h1>
       <p class='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
     </div>

   <img src={Ellipse153} className='ellipse153' alt="1"></img>
   <img src={Ellipse154} className='ellipse154' alt="1"></img>
   <img src={Ellipse155} className='ellipse155' alt="1" ></img>
   <img src={Ellipse156} className='ellipse156'alt="1"></img>
   <img src={Ellipse157} className='ellipse157' alt="1"></img>
   <img src={Ellipse158} className='ellipse158' alt="1"></img>
   <img src={Ellipse159} className='ellipse159' alt="1"></img>
   
   <div>
    <Button>
        Find Out More
    </Button>
   </div>
   
    </div>


  )
}

export default Hero