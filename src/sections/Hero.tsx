import Button from '@/components/Button'
import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
        <h1 className="hero-title">
            我叫
        </h1>
        <h2 className="hero-title-large">
            燕叔阳
        </h2>
        <h3 className="hero-title-large hero-title-sub">
            我在Coding
        </h3>
        <p className="hero-text">
            大打算打算打算打算打算的撒大的三大撒打算大
        </p>
        <div className="hero-button">
            <Button text='没想好' link='#'/>
        </div>
    </div>
  )
}

export default Hero