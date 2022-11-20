import React, { useState } from 'react'
import Image from 'next/image'
import Data from './data'



const Projects = () => {
    const [data, setData] = useState(Data)
  return (
    <div className=''>


        <div className='flex items-center justify-center'>
        <h1 className='font-size-1 text-white'>Projects</h1>
        </div>
        <div className='flex items-center justify-center py-10 text-[#8f39ff]'>
        <p>Here you can find list of projects I did</p>
        </div>


        <div className='grid'>
            {data.map((item) => (
            <div className="card" key={item.id}>
                <div className="container">
                    <div key={data.id}>
                    <h2>{item.first_name}</h2>
                    <p>{item.last_name}</p>
                    <p>{item.cijena}</p>
                    </div>
                </div>
            </div>
            ))}

        </div>
    </div>
  )
}

export default Projects