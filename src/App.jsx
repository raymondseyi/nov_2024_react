import Button from "./components/Button";
import ProductComponent from "./components/ProductComponent";
import AboutComponent from "./pages/AboutComponent";
import HomeComponent from "./pages/HomeComponent";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import ProductPage from "./pages/ProductPage";
// props - properties
// limitations of props, passing functions as props
//routing - 
//redirection
const App = () => {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomeComponent/>}/>
          <Route path="/sp-about_us" element={<AboutComponent/>}/>
          <Route path="/about" element={<Navigate to="/sp-about_us"/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/product/:productname" element={<ProductPage/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </>
  );
};

export default App;
// dynamic routing, parameterized routes,