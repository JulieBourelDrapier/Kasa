import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import About from './pages/About/about'
import Header from './components/header'
import Error from './pages/Error/error'
import Footer from './components/footer'
import Accommodation from './pages/Accommodation'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation/:accommodationId" element={<Accommodation />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
