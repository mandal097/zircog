import React from 'react'
import ContactUs from './pages/ContactUs/ContactUs'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
// import { useSelector } from 'react-redux'
// import { selectUser } from './redux/userSlice'
import Logout from './components/Logout/Logout'

const App = () => {
  // const user = useSelector(selectUser)
  return (
    <div>
      <Router>
        {/* <div>{
          user ? <Login /> : <Logout />
        }</div> */}
        <Routes>
          <Route path="/*" >
            <Route index element={<Home />} />
            <Route path="contactUs" element={<ContactUs />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            {/* {user ? <Redirect to='/' /> : <Login />} */}
            {/* </Route> */}
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
