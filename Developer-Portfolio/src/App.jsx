import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutMeCareerPage from './components/AboutMeCareerPage'


function App() {

  return (
    <div className='bg-[#2d2d30]'>

      <Navbar/>

      <Routes> 

      <Route path = "/" element={<HomePage />} />
      <Route path = "/aboutme" element={<AboutMeCareerPage/>} />

      </Routes>
    </div>


  )
}

export default App
