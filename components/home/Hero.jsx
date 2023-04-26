import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='home__wrapper'>
        <h1>Hello, World!</h1>
        <p>A Next.js boilerplate with SCSS</p>
        <Image src="/assets/logo/logo.png" alt="logo" width={70} height={70}/>
    </div>
  )
}

export default Hero