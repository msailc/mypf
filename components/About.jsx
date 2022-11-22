import React from 'react'
import Image from 'next/image'
import me from '../public/me.png'

const About = () => {
  return (
    <div className="flex h-screen oswald">
    <div className="m-auto bg-[#292929] p-10 rounded-lg shadow-lg">
        <div className='flex'>
      <h1 className="text-white font-size-1 py-4">
        <Image src={me} width={200} className={'rounded-xl'}></Image>
      </h1>
      <div className='px-8 py-5'>
      <h1 className='text-purple-600 text-4xl uppercase'>
        Mustafa Islamovic
      </h1>
      <p className='text-white py-4'>
        <a className='text-base py-2'>
        Hi there from my lovely dog Ozzy and me.
        </a>
        <br />
        I am a web developer with a passion for creating aesthetic and functional websites.
        <br />
        Currently 3rd year student at International Burch University with some professional experience mostly with backend development.
        <br />
        Ozzy and me are mostly fascinated by teamwork and stuff that you may accomplish with great and friendly people around with same interests.
        <br />
        For most of my 3 years career of programming I have been working with Python and its frameworks Django and FastAPI,
        <br />
        but I am also quite good with JavaScript and its backend frameworks like Express.js and Node.js. Lately I am very interested in
        <br />
        learning more about Next.js and React.js because I find them quite awesome!
        <br />
        <a className='py-2 text-gray-700 font-sans text-sm'>And yeah we come in the same one package...</a>
      </p>
      </div>
      </div>
    </div>
  </div>
  )
}

export default About