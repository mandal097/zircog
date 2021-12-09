import React from 'react'
import ContactUs from './pages/ContactUs/ContactUs'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/*" >
            <Route index element={<Home />} />
            <Route path="contactUs" element={<ContactUs />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
