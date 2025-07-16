import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About";
import Contact from "./Pages/Contact"
import Bags from "./Pages/Bags"
import Earings from "./Pages/Earings"
import Navbar from "./shared/Navabr"
import Footer from "./shared/Footer"

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/about" element={<About />} /> 
      <Route path="/contact" element={<Contact />} /> 
      <Route path ="/bags" element={<Bags />} />  
      <Route path="/earings" element={<Earings />} /> 
    </Routes>
    <Footer />
    </>
  )
}

export default App
