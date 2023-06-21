import Email from '@/components/Email'
import SocialIcons from '@/components/SocialIcons'
import About from '@/sections/About'
import Hero from '@/sections/Hero'
import NavBar from '@/sections/NavBar'
import React from 'react'

const Index = () => {
  return (
    <div className='app'>
      <NavBar />
      
      <SocialIcons />
      <main>
          <Hero />
          <About />
      </main>
      <Email />
    </div>
  )
}

export default Index