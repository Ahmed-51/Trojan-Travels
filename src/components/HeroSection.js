import React from 'react'
import video from '../videos/video-1.mp4'
import {Button} from './Button.js'
import './HeroSection.css'
import '../App.css'

export const HeroSection = () => {
  return (
    <div className="hero-container">
        <video src={video} autoPlay loop muted> </video>
        <h1>ADVENTURE AWAITS</h1>
        <p>So what are you waiting for?</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className='btns' buttonStyle='btn--primay' buttonSize='btn--large'>
                WATCH TRAILER <i class="fa-solid fa-circle-play"></i>
            </Button>
        </div>
    </div>
  )
}
