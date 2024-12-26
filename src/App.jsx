import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Homepage from './pages/Homepage'
import Logement from './pages/Logement'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import '/src/styles/Style.css'

const router = createBrowserRouter([
  {
    path: "*",
    element: <div>404</div>
  },
  {
    path: '/',
    element: <Homepage/>
  },
  {
    path: '/logement',
    element: <Logement/>
  },
  {
    path: '/a-propos',
    element: <About/>
  }
])


function App() {
  return(
    <>
      <Navbar/>
      <RouterProvider router={router} />
      <Footer/>
    </>
  )
}

export default App
