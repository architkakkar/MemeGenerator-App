import React from 'react'
import Navbar from './components/Header'
import Meme from './components/Meme'

function App() {
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-zinc-200'>
      <div className='font-karla w-[550px] h-[550px] shadow-xl bg-white rounded-sm'>
        <Navbar />
        <Meme />
      </div>
    </div>
  )
}

export default App
