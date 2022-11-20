import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

var today = new Date();
var day = today.getDate();
var month = (today.getMonth()+1);

const Hero = () => {
  return (
    <div className='flex h-screen index'>
        <div className='m-auto'>
        <h1 className='text-white font-size-1'>So,<br/>U made it here<br/>huh?</h1>
        </div>
        <div className='m-auto'>
          <div className='flex text-white'>
          <h1 className='text-[#8f39ff] '>{day}</h1>
          <h1 className='px-2'>/</h1>
          <h1 className=''>{month}</h1>
          </div>
          <h1 className='font-size-2 text-white underline py-6'>MUSTAFA ISLAMOVIC</h1>
          <ul>
            <li className='text-white py-2 hover:text-[#8f39ff]'>
              <Link href='/'>Home</Link>
            </li>
            <li className='text-white py-2 hover:text-[#8f39ff]'>
              <Link href='https://www.linkedin.com/in/mustafa-islamovic-874256235/'>LinkedIn</Link>
            </li>
            <li className='text-white py-2 hover:text-[#8f39ff]'>
              <Link href='https://www.instagram.com/msailc/'>Instagram</Link>
            </li>
            <li className='text-white py-2 hover:text-[#8f39ff]'>
              <Link href='https://github.com/msailc'>Github</Link>
            </li>
            <li className='text-[#8f39ff] py-6 underline'>
              mustafaislamovich@gmail.com
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Hero