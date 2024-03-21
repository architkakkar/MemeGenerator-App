import React from 'react'
import Logo from '../assets/troll-face.png'

function Navbar() {
    return (
        <header className='flex items-center justify-between w-full h-16 px-6 text-white bg-gradient-to-r from-[#672280] to-[#A626D3]'>
            <div className="flex items-center gap-2">
                <img src={Logo} alt="logo" className='w-8' />
                <h3 className='text-lg font-bold'>MemeGenerator</h3>
            </div>
            <h6 className='text-xs'>React Course - Project 3</h6>
        </header>
    )
}

export default Navbar