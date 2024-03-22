import React from 'react'
import Navbar from './components/Header'
import Meme from './components/Meme'

function App() {
  return (
    <div className='flex items-center justify-center w-screen h-auto min-h-screen bg-zinc-200'>
      <div className='font-karla w-[550px] my-4 h-auto shadow-xl bg-white rounded-sm'>
        <Navbar />
        <Meme />
      </div>
    </div>
  )
}

export default App
