import React from 'react'
import image1 from '../img/example-about1.png'
import image2 from '../img/example-about2.png'
import image3 from '../img/example-about-3.png'

const AboutUs = () => {
    return (
        <div className='container-aboutus flex justify-around items-center gap-4 mt-11 mb-11'>
            <div className="images-about grid grid-cols-2 w-1/2">
                <div className="overflow-hidden flex flex-col gap-3 pr-3">
                    <img src={image1} alt="About Us 1" />
                    <img src={image2} alt="About Us 2" />
                </div>
                <div className="overflow-hidden">
                    <img src={image3} alt="About Us 3" className='h-full w-full object-cover' />
                </div>
            </div>
            <div className="text-about w-2/6">
                <h1 className='text-4xl font-bold mb-2.5'>About Us</h1>
                <p className='text-base'>It's time to make Fuel stand out! Present the most important information about your brand and show what makes it truly unique. Make it clear what people can expect from Fuel and what value you bring to their lives. Whether it's energy, innovation, or attitude — now is the moment to let your Fuel speak for itself. It's time to make Fuel stand out!

                    Present the most important information about your brand and show what makes it truly unique.</p>
            </div>
        </div>
    )
}

export default AboutUs