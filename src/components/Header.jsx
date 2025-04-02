import React from 'react'
import logo from '../assets/logo.jpg'

function Header() {



  return (
    <div className='flex justify-between items-center max-w-250 mx-auto shadow-sm pt-2 pb-2'>
        <img src={logo} alt="logo" className='w-30 h-14'/>
        <div>
            <span className='font-bold p-2'>Movies</span>
            <span className='font-bold p-2'>Favourites</span>
        </div>
        <div className='flex'>
            <div className='flex items-center font-bold bg-[#DA9F58] p-2 rounded-xl mr-2'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg>
                <span className='text-white'>Login</span>
            </div>
            <div className='flex items-center font-bold border-1 rounded-xl p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-360 280-560h400L480-360Z"/></svg>
                <span>ENG</span>
            </div>
        </div>
    </div>
  )
}

export default Header;