import React from 'react'
import Image from 'next/image'

const Bg = () => {
  return (
    <div className='bgWrap flex items-center justify-center'>
    <Image src='/../public/me.jpg' 
    alt='me'
    width={350}
    height={350}
    quality={100}
    priority={true}
    />
  </div>
  )
}

export default Bg