import React from 'react'
import logo from '../img/logo.png'
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='text-white py-20 w-full  flex items-center justify-around'>
            <div className="logo-footer">
                <img src={logo} alt="Logo" className="w-32" />
            </div>
            <div className="navigation-description">
                <h2 className='text-xl font-bold mb-4'>Navigation</h2>
                <ul className='flex flex-col gap-3'>
                    <li>About</li>
                    <li>Services</li>
                    <li>Reviews</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="contact-description">
                <h2 className='text-xl font-bold mb-4'>Contact</h2>
                <ul className='flex flex-col gap-3'>
                    <li>contato@empresa.com</li>
                    <li>11 99999-9999</li>
                    <li>Rua Exemplo, 123</li>
                    <li>Santo André, SP - Brazil</li>
                </ul>
            </div>
            <div className="social-media">
                <h2 className='text-xl font-bold mb-4'>Follow Us</h2>
                <ul className='flex flex-col gap-3 w-24'>

                    <li className='flex justify-between items-center'><FaInstagram />Instagram</li>
                    <li className='flex justify-between items-center'><FaFacebook />Facebook</li>
                    <li className='flex justify-between items-center'><FaYoutube />Youtube</li>
                    <li className='flex justify-between items-center'><FaLinkedin />LinkedIn</li>
                </ul>
            </div>

        </div>

    )
}

export default Footer