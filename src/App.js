import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Cart from "./pages/Cart/Cart";
import DBView from "./components/DBView/DBView";
import BuyNow from "./pages/BuyNow/BuyNow";
import ScrollToTop from "./scrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <CartContext.Provider value={{ isCart, setIsCart }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/db" element={<DBView />} />
            <Route path="/buynow" element={<BuyNow />} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
