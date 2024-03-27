import React, { useState } from 'react'
import memesData from '../memesData'

function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/4t0m5.jpg"
    })
    const [allMemesData, setAllMemesData] = useState(memesData)

    function GetNewMeme() {
        const memesArray = allMemesData.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length)
        const randomMeme = memesArray[randomNum]
        const url = randomMeme.url

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }

    function handleChange(event) {
        const { name, value } = event.target

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <>
            <main className='px-6 py-8'>
                <div className='flex flex-col gap-4'>
                    <div className="flex items-start justify-between gap-8">
                        <div className="flex flex-col w-full">
                            <label htmlFor="top" className='text-sm font-semibold'>Top Text</label>
                            <input type="text" id='top' name="topText" value={meme.topText} onChange={handleChange} placeholder='enter text...' className='border border-[#D1D5DB] rounded-md px-3 py-1 mt-1' />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="bottom" className='text-sm font-semibold'>Bottom Text</label>
                            <input type="text" id='bottom' name="bottomText" value={meme.bottomText} onChange={handleChange} placeholder='enter text...' className='border border-[#D1D5DB] rounded-md px-3 py-1 mt-1' />
                        </div>
                    </div>
                    <button type="submit" onClick={GetNewMeme} className='py-2.5 text-white bg-gradient-to-r from-[#672280] to-[#A626D3] font-bold rounded-md hover:opacity-90'>Get a new meme image 🖼️</button>
                </div>
            </main>
            <section className='relative mx-6 mb-10 border border-black rounded-sm'>
                <img src={meme.randomImage} alt="meme-here" className='object-contain w-full h-full meme ' />
                <h2 className="absolute top-0 w-full my-4 font-serif text-4xl font-bold text-center uppercase -translate-x-1/2 left-1/2">{meme.topText}</h2>
                <h2 className="absolute bottom-0 w-full my-4 font-serif text-4xl font-bold text-center uppercase -translate-x-1/2 left-1/2">{meme.bottomText}</h2>
            </section>
        </>
    )
}

export default Meme