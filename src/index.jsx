import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About/About'
import Header from './components/Header'
import Error from './components/Error'
import Banner from './components/Banner'
import Card from './components/Card'
import Accommodations from './pages/Accommodations'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Banner />
      <Card />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
