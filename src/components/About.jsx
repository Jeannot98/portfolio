import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-4xl  mt-20'>
                    Hi, I am a passionate junior web developer, looking for opportunities in the field of web development specifically, and in IT in general.

                    I'm not just stopping at web development, but becoming a devops engineer in the future.

                    I like learning new things and above all putting into practice what I learn. THANKS
                </p>
            </div>
        </div>
    )
}

export default About