import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between border-white border-b-2">
        <div className='flex items-center gap-2'>
        <a className="font-bold text-xl tracking-tight" href="javascript:void()">Github Finder</a>
        <img src="/icons8-search-64.png" className='w-8' alt="" />
        </div>
        <div className="flex items-center">
          <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700 transition-all hover:scale-125" href="javascript:void()">Home</a>
          <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700 transition-all hover:scale-125" href="javascript:void()">About</a>
          <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700 transition-all hover:scale-125" href="javascript:void()">Contact</a>
        </div>
      </nav>
  )
}

export default Navbar