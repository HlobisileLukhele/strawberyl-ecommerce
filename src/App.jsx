import { Routes, Route } from 'react-router-dom';
import Navbar from './shared/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './Pages/Contact';
import Shop from './Pages/Shop';
import Bags from './pages/Bags';
import Earings from './pages/Earings';
import SignUp from './Pages/auth/SignUp';
import SignIn from './Pages/auth/SignIn';
import ForgotPassword from './Pages/auth/ForgotPassword';

 export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="bags" element={<Bags />} />
          <Route path="earings" element={<Earings />} />
        </Route>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}