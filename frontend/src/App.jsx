import './index.css';
import './App.css'
import Navbar from './components/header/Navbar';
import Maincamp from './components/home/Maincamp';
import Footer from './components/footer/footer';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/signing/singUp/signUp/SignUp';
import SingIn from './components/signing/SingIn';
import Cart from './components/cart_section/cart';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
         <Route path="/" element={<Maincamp/>}></Route>
         <Route path="/login" element={ <SingIn/>}></Route>
         <Route path="/register" element={<SignUp/>}></Route>
         <Route path="/cart-section/:id" element={<Cart />} />
      </Routes>
      <Footer/>
    </div>
  );
}


export default App
