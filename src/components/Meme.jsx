import React from 'react'

function Form() {
    return (
        <>
            <main className='px-6 py-8'>
                <form action="" className='flex flex-col gap-4'>
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
                    <button type="submit" className='py-2.5 text-white bg-gradient-to-r from-[#672280] to-[#A626D3] font-bold rounded-md'>Get a new meme image 🖼️</button>
                </form>
            </main>
            <section className='mx-6 border border-black rounded-sm'>
                <img src="" alt="meme-here" className='h-64' />
            </section>
        </>
    )
}

export default Form