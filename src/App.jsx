import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#1F2937] h-screen'>
      <Navbar />
      <Search/>
    </div>
  )
}

export default App
