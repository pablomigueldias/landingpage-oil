import React from 'react'

const PrincipalSection = () => {
    return (
        <div className="container-main-sub flex justify-around mt-16">
            <div className='container-subtitle h-min w-2xl' >
                <div className="subtitle text-xl w-max text-white border border-color-laranja p-2 bg-color-laranja-60">
                    <p>TRUSTED FULL PARTNER</p>
                </div>
                <h1 className='text-7xl mt-3'>Leader in fuel wholesale</h1>
                <div className="paragrafo w-9/12 mt-5 text-base text-white">
                    <p>Delivering premium quality fuels across the nation. Your reliable partner in energy supply for over 20 years</p>
                </div>
                <div className="buttom flex gap-5 mt-9 ">
                    <button className='bg-color-laranja text-white px-6 py-3 mt-5 hover:bg-orange-700 transition-colors duration-300'>Contact Us</button>
                    <button className='bg-none border border-white text-white px-6 py-3 mt-5 hover:bg-orange-700 transition-colors duration-300'>Our Services</button>
                </div>
                <div className="separacao border-b border-b-white mt-14 mb-7 w-4/5"></div>
                <div className="container-time-services flex gap-10">
                    <div className="years">
                        <h2 className='text-4xl font-bold mb-1'>20+</h2>
                        <p className='text-white text-sm'>Years of Experience</p>
                    </div>
                    <div className="client">
                        <h2 className='text-4xl font-bold mb-1'>473+</h2>
                        <p className='text-white text-sm'>Clients Served</p>
                    </div>
                    <div className="suport">
                        <h2 className='text-4xl font-bold mb-1'>24/7</h2>
                        <p className='text-white text-sm'>Support Available</p>
                    </div>
                </div>

            </div>
            <div className="espacamento"></div>
        </div>

    )
}

export default PrincipalSection