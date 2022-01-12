import React from 'react'
import ContactUs from './pages/ContactUs/ContactUs'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import { useSelector } from 'react-redux'
import Logout from './components/Logout/Logout'
import Registration from './pages/Registration/Registration'
import Error from './components/404/404'
import Profile from './pages/Profile/Profile'
import ChangePassword from './components/ChangePassword/ChangePassword'
import ChangeImg from './components/ChangeImg/ChangeImg'
import UpdateUser from './components/UpdateUser/UpdateUser'

const App = () => {
  const user = useSelector(state => state.user.currentUser)
  return (
    <div>
      <Router>
        {
          !user &&
          <Routes>
            <Route path="/" >
              <Route index element={<Login />} />
              <Route path="registration" element={<Registration />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        }
        {
          user &&
          <Routes>
            <Route path="/*" >
              <Route index element={<Home />} />
              <Route path="contactUs" element={<ContactUs />} />
              <Route path="login" element={user ? <Navigate to='/' /> : <Login />} />
              <Route path="registration" element={<Registration />} />
              <Route path="profile/:id" element={<Profile />} />
                <Route path="update-password/:id" element={<ChangePassword />} />
                <Route path="update-img/:id" element={<ChangeImg />} />
                <Route path="update/:id" element={<UpdateUser />} />
              <Route path="logout" element={!user ? <Navigate to='/login' /> : <Logout />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        }
        {/* <Routes>
        </Routes> */}
      </Router>
    </div>
  )
}

export default App
