import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import { useNavigate } from 'react-router-dom';

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
        <div className='flex justify-between items-center max-w-250 mx-auto shadow-sm px-4 py-2'>
            <img src={logo} alt="logo" className='w-30 h-14 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer'/>
            <div className='hidden md:flex'>
                <span onClick={() => navigate('/movies')} className='font-bold p-2 hover:text-white hover:bg-[#DA9F58] rounded-xl cursor-pointer shadow-md'>Movies</span>
                <span className='font-bold p-2 hover:text-white hover:bg-[#DA9F58] rounded-xl cursor-pointer shadow-md'>Favourites</span>
            </div>
            <div className='hidden sm:flex'>
                <div className='flex items-center font-loght bg-[#DA9F58] p-2 rounded-xl mr-2 shadow-md '>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg>
                    <span className='text-white'>Login</span>
                </div>
                <div className='flex items-center font-semibold border-1 rounded-xl p-2 shadow-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-360 280-560h400L480-360Z"/></svg>
                    <span className='text-md'>ENG</span>
                </div>
            </div>
            <div className='sm:hidden cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="60" viewBox="0 0 50 50">
                    <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                </svg>
            </div>
        </div>

        <div className={`max-w-250 mx-auto absolute lg:hidden top-20 left-0 bg-white w-full transform transition-tranform ${isMenuOpen ? "opacity-100": "opacity-0"}`} style={{transition: "transform 0.5s ease, opacity 0.5s ease"}}>
            <li className='list-none text-center hover:text-white hover:bg-[#DA9F58] rounded-xl p-2 my-1 cursor-pointer'>Movies</li>
            <li className='list-none text-center hover:text-white hover:bg-[#DA9F58] rounded-xl p-2 mb-1 cursor-pointer'>Favourites</li>
            <div className='flex bg-[#DA9F58] p-2 rounded-xl shadow-md justify-center mb-4 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg>
                <span className='text-white'>Login</span>
            </div>
            <div className='flex font-semibold border-1 rounded-xl p-2 shadow-md justify-center cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-360 280-560h400L480-360Z"/></svg>
                <span className='text-md'>ENG</span>
            </div>
        </div>
    </div>
  )
}

export default Header;