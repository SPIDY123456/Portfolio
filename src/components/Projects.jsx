import React, {useState} from 'react'
import { data } from '../data/data.js';

const Projects = () => {
    
    const project = data;

    return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                    Projects
                </p>
                <p className='py-6'>Check out some of my recent projects</p>
            </div>
            {/* Container */}

        
            <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-1">
                {/*Grid item*/}

                    {project.map((item, index) => (


                    <div 
                    key={index}
                    style={{ backgroundImage: `url(${item.image})` }}
                 className='shadow-lg shadow-[#040c16] group container rounded md-flex justify-center items-center mx-auto content-div'>
                 {/* Hover Effect*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font bold text-white tracking-wider'>
                                {item.name}

                    </span>
                            <div className= 'pt-8 text-center'>
                        <a href ={item.github} target="_blank">
                                    <button className="text-align:center rounded-lg px-5 py-2 m-2
                       bg-white text-gray-700 font-bold text-lg">Code</button>
                        </a>
                                <a href ={item.live} target="_blank">
                                    <button className="text-align:center   rounded-lg px-5 py-2 m-2
                       bg-white text-gray-700 font-bold text-lg">Live
                       </button>
                        </a>
                    </div>
                    
                              
                        </div>
                    </div>

                    ))}

                
                   
            </div>
        </div>
    </div>
  );
};

export default Projects;