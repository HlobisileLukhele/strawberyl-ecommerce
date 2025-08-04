import { Routes, Route } from 'react-router-dom';
import Navbar from '@/shared/Navbar';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Shop from '@/pages/Shop';
import SignUp from '@/pages/auth/SignUp';
import SignIn from '@/pages/auth/SignIn';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import Wishlist from '@/pages/Wishlist';
import Cart from '@/pages/Cart';
import Checkout from '@/pages/Checkout';
import UserNavbar from '@/shared/UserNavbar';
import Dashboard from '@/pages/user/Dashboard';

 export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          
          {/* authenticated user navigation */}
          <Route path="/account" element={<UserNavbar/>}>
            <Route index element={<Dashboard />} />
          </Route>

        </Route>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}