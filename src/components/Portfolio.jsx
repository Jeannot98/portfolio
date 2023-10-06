import React from 'react'
import Project1 from '../assets/Capture.png'
import Project2 from '../assets/Capture1.png'
import Project3 from '../assets/weather.png'
import Project4 from '../assets/dataWebsite.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: Project1,
            demo:"https://formi.pages.dev/",
            code:"https://github.com/Jeannot98/formi",

        },
        {
            id: 2,
            src: Project2,
            demo:"https://shop-1xk.pages.dev/",
            code:"https://github.com/Jeannot98/shop",

        },
        {
            id: 3,
            src: Project3,
            demo:"https://weather-app-ek8.pages.dev/",
            code:"https://github.com/Jeannot98/Weather-app",

        },
        {
            id: 4,
            src: Project4,
            demo:"https://datawebsite-bt9.pages.dev/",
            code:"https://github.com/Jeannot98/dataWebsite",

        },
    ]
    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({ id, src, demo, code }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'> <a href={demo} target='_blank'rel="noreferrer">Demo</a> </button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={code} target='_blank' rel="noreferrer">Code</a></button>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default Portfolio