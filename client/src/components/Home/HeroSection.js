import React from 'react';
import '../../App.css';
import './HeroSection.css';
import { Button } from './Button';

const HeroSection = ({state}) => {
  return (
    <div className="hero-container">
      <p className="inline-flex text-4xl font-sans md:font-serif pb-4 text-white dark:text-gray-500" style={{fontSize:20}}>
        The Federation of Taiwanese Student Association in Washington DC
      </p>
      <p className="inline-flex text-4xl font-sans md:font-serif pb-4 text-white dark:text-gray-900">
        大華府地區臺灣同學會聯合會
      </p>
      <div className='hero-btns'>
        <Button className='btns_tailer' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')}>
          JOIN US ON FaceBook <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}
export default HeroSection;