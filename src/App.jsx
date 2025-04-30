import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'
import './assets/styles/App.css'

import Home from './pages/Home'
import Us from './pages/Us'
import Menu from './pages/Menu'
import Reservation from './pages/Reservation'
import Delivery from './pages/Delivery'

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Us />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservas" element={<Reservation />} />
        <Route path="/domicilios" element={<Delivery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
