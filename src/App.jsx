import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage'
import SignupPage from './pages/signup'
import SigninPage from './pages/signin'
import Dashboard from './pages/dashboard'
import Search from './pages/search'
import WelcomePage from './pages/welcomePage'
import Gallery from './pages/discover'
import SplashScreen from './components/splashScreen'
import ForgotPassword from './pages/forgotpassword'
import Wallpapers from './pages/wallpapers'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path='/wallpapers' element={<Wallpapers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
