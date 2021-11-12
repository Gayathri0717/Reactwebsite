import React from "react";
import '../../src/App.css';
import { Button } from './Button';
import './HeroSection.css'; 
import vd from "./Videos/video-2.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
     
      <video className='videoTag' autoPlay loop muted>
    <source src={vd} type='video/mp4' />
</video>

      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
        
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className='far fa-play-circle' ></i>
        </Button>
      </div>
    </div>
  );
}
export default HeroSection;
