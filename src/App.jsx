import {Routes, Route} from 'react-router'
import './App.css'
import Homepage from './pages/Homepage/Homepage.jsx'
import Property from './pages/Property/Property.jsx'
import About from './pages/About/About.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Page404 from './pages/404/404.jsx'
import '/src/styles/Style.css'

function App() {
  return(
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/property" element={<Property />} />
      <Route path="*" element={<Page404 />} />                  
      </Routes>
      <Footer/>
    </>
  )
}

export default App
