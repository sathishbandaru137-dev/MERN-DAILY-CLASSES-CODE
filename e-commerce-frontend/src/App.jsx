import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import NavbarEx from './Component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


const App=()=>{
return(
  <>
  <BrowserRouter>
   <NavbarEx />
  <Routes>
   <Route path="login" element={<Login/>}/>
   <Route path="register" element={<Register/>}/>
   <Route path="product" element={<Products/>}/>
   <Route path="dashboard" element={<Dashboard/>}/>
   <Route path="home" element={<Home/>}/>
  </Routes>
  </BrowserRouter>
  </>
)
}
  export default App;