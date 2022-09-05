import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CardWeather from './components/card/CardWeather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" flex justify-center items-center w-screen h-screen App bg-gradient-to-t from-sky-500 to-blue-900">
      <CardWeather/>
      <div className='absolute bg-sky-500 rounded-lg p-2 font-bold bottom-5 right-5 border-gray-300 border-2 text-gray-300'>Jean Ticona Dev</div>
    </div>
  )
}

export default App
