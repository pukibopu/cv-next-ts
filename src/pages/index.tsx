import Email from '@/components/Email'
import SocialIcons from '@/components/SocialIcons'
import About from '@/sections/About'
import Experience from '@/sections/Experience'
import Hero from '@/sections/Hero'
import NavBar from '@/sections/NavBar'
import React from 'react'

const Index = () => {
  return (
    <div className='app'>
      <NavBar />
      <SocialIcons />
      <Email />
      <main>
        <Hero />
        <About />
        <Experience />
      </main>
      
    </div>
  )
}

export default Index