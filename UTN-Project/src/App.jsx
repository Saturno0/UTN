import Principal from './pages/Principal'
import Product from './pages/Product'
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/producto/:id" element={<Product />} />
    </Routes>
  )
}

export default App
