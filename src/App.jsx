import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";
import Checkout from "./pages/checkout.jsx";
// import Products from './pages/Products.jsx'
import Navbar from "./components/Navbar.jsx";
import AuthProvider from "./context/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path='/products' element={Products} /> */}
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
