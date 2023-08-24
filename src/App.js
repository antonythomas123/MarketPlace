import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
