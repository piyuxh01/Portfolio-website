import React from 'react'
import { Link } from 'react-scroll';
import HeroImage from '../assets/heroImage.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20 pb-20'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                Hello! I'm Piyush Sinha, a Full Stack Developer specializing in the MERN stack and an avid competitive programmer. I have a strong foundation in building dynamic web applications using MongoDB, Express.js, React, and Node.js. Passionate about solving complex problems, I actively participate in coding competitions to continuously enhance my skills. Let's connect and create innovative solutions together!
                </p>
                <div>
                    <Link
                        to="portfolio"
                        smooth={true}
                        duration={500}
                        className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 cursor-pointer'
                    >
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={20} className='ml-1' />
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt='my Profile' className='rounded-3xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}
