import React, { useState, useEffect } from "react";
import Image from "next/image";
import placeholder from "../public/placeholder.png";
import Data from "../components/data.jsx";

const Projects = () => {
  const [data, setData] = useState(Data);

  return (
    <div className="oswald h-[140vh]">
      <div className="">
      <div className="flex items-center justify-center">
        <h1 className="font-size-1 text-white py-5">Projects</h1>
      </div>
      <div className="flex items-center justify-center mb-10 text-[#8f39ff]">
        <p>Here you can find list of projects I did</p>
      </div>
      </div>

      <div className="wrapper items-center gap-12">
        {data.map((item) => (
        <div className="antialiased text-gray-900" key={item.id}>
          <div>
            <Image
              src={placeholder}
              width={350}
              height={350}
              className={"object-cover object-center rounded-lg shadow-md"}
            />
            <div className="relative px-4 -mt-16  ">
              <div className="bg-[#292929] p-6 rounded-lg shadow-lg">
                <div className="flex items-baseline">
                  <span className="bg-purple-400 text-purple-700 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    New
                  </span>
                  <div className="ml-2 text-purple-800 uppercase text-xs font-semibold tracking-wider">
                    2 baths &bull; 3 rooms
                  </div>
                </div>

                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate text-white">
                  {item.first_name}
                </h4>

                <div className="mt-1">
                  {item.cijena}
                  <span className="text-gray-600 text-sm"> /wk</span>
                </div>
                <div className="mt-4 justify-center gap-16 flex">
                  <span className="bg-purple-400 text-purple-700 text-xl px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    Code
                  </span>
                  <span className="bg-purple-400 text-purple-700 text-xl px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    Demo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
