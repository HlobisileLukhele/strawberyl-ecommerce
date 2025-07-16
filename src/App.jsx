import { Routes, Route } from 'react-router-dom';
import Navbar from './Shared/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Bags from './pages/Bags';
import Earings from './pages/Earings';

 export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="bags" element={<Bags />} />
          <Route path="earings" element={<Earings />} />
        </Route>
      </Routes>
    </>
  );
}