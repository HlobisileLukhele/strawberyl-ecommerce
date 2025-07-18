import { Routes, Route } from 'react-router-dom';
import Navbar from './Shared/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Bags from './Pages/Bags';
import Earings from './Pages/Earings';
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