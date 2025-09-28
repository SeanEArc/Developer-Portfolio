import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MyCareer from './components/MyCareer'


function App() {

  return (
    <div>

      <Navbar/>

      <Routes> 

      <Route path = "/" element={<HomePage />} />
      <Route path = "/aboutme" element={<MyCareer/>} />

      </Routes>
    </div>


  )
}

export default App
