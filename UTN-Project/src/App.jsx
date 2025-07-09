import Principal from './pages/Principal'
import Product from './pages/Product'
import Cart from './pages/CartPage'
import FormPage from './pages/FormPage'
import LoginPage from './pages/LoginPage'
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/producto/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path='/form' element={<FormPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}

export default App
