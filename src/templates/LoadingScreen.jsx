import React from 'react'
import iconScreen from '../components/icon/iconScreen.svg'
const LoadingScreen = () => {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-t from-sky-400 to-gray-100 backdrop-blur'>
        <img src={iconScreen} alt="icon" className="w-[170px]" />
        <span className='font-bold text-3xl text-[#129cf9a3]'>Cargando...</span>
    </div>
  )
}

export default LoadingScreen