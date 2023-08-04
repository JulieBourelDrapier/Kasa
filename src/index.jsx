import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About/About'
import Header from './components/Header'
import Error from './pages/Error'
import Banner from './components/Banner'
import Footer from './components/Footer'
import CollapseAbout from './components/Collapse'
import Accommodation from './pages/Accommodation'
import StarRating from './components/StartRating'
import Tag from './components/Tag'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/collapse" element={<CollapseAbout />} />
        <Route path="/accommodation/:accommodationId" element={<Accommodation />} />
        <Route path="/star-rating" element={<StarRating />} />
        <Route path="/tag" element={<Tag />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
