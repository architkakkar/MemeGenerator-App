import React, { useState } from 'react'
import memesData from '../memesData'

function Meme() {
    const [memeImage, setMemeImage] = useState("")

    function GetNewMeme() {
        const memesArray = memesData.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length)
        const randomMeme = memesArray[randomNum]
        const URL = randomMeme.url

        setMemeImage(URL)
    }

    return (
        <>
            <main className='px-6 py-8'>
                <div className='flex flex-col gap-4'>
                    <div className="flex items-start justify-between gap-8">
                        <div className="flex flex-col w-full">
                            <label htmlFor="top" className='text-sm font-semibold'>Top Text</label>
                            <input type="text" id='top' placeholder='enter text...' className='border border-[#D1D5DB] rounded-md px-3 py-1 mt-1' />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="bottom" className='text-sm font-semibold'>Bottom Text</label>
                            <input type="text" id='bottom' placeholder='enter text...' className='border border-[#D1D5DB] rounded-md px-3 py-1 mt-1' />
                        </div>
                    </div>
                    <button type="submit" onClick={GetNewMeme} className='py-2.5 text-white bg-gradient-to-r from-[#672280] to-[#A626D3] font-bold rounded-md hover:opacity-90'>Get a new meme image 🖼️</button>
                </div>
            </main>
            <section className='mx-6 mb-10 border border-black rounded-sm '>
                <img src={memeImage} alt="meme-here" className='object-contain w-full h-full meme ' />
            </section>
        </>
    )
}

export default Meme