import React from 'react'
import logo from './img/logo.png'

const Header = () => {
    return (
        <div className="container-header flex items-center justify-around p-4">
            <div className="logo">
                <img src={logo} alt="logo" className='w-24 h-24' />
            </div>
            <div className="menu">
                <ul className='flex items-center justify-center gap-15 text-xl text-white'>
                    <li>About</li>
                    <li>Services</li>
                    <li>Reviews</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header