import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Information from './components/Information'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
        <div className='d-flex flex-column min-vh-100'>
          <Header />
          <div className='flex-grow-1 d-flex justify-content-center align-items-center'>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/services" element={<Services/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/information" element={<Information/>}/>
              </Routes>
            </div>
          <Footer/>
          </div>
  )
};

export default App;
