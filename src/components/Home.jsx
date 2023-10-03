import React from 'react'
import HeroImage from '../assets/01.jpg'
import { MdArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='h-fit w-full bg-gradient-to-b from-black via-black to-gray-800 md:h-screen'>
            <div className='max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-end h-full px-4 py-11 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a react front-end develooper</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                    I am a passionate React Js front-end developer.
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'><MdArrowRight size={30}/></span>
                        </Link>
                    </div>
                </div>

                <div className='py-11'>
                    <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto md:w-full' />
                </div>
            </div>
        </div>
    )
}

export default Home