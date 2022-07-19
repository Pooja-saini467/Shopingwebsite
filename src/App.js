import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Product from "./Component/Product";
import Products from "./Component/Products";
import Cart from "./Component/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/products/:id" element={<Products />} />
        <Route exact path = "/cart" element = {<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
