import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";

import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import Store from "./Store";
import APIProductos from "./pages/products/Products";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Analiticas from "./pages/analiticas/Analiticas";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <Store>
        <div className="container">
          <Sidebar />
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/usuarios" element={<UserList />} />
              <Route path="/analiticas" element={<Analiticas />} />
              <Route path="/productos" element={<APIProductos />} />
              <Route path="/productos/:id" element={<Product />} />
              <Route path="/newProduct" element={<NewProduct />} />
            </Routes>
          </Suspense>
        </div>
      </Store>
    </Router>
  );
}
