import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CheckOut from "../pages/Checkout";
import PedidoFinalizado from "../pages/PedidoFinalizado";

export function CoffeeRoutes() {
  return (
   <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/checkout' element={<CheckOut/>}/>
     <Route path='/pedidoFinalizado' element={<PedidoFinalizado/>}/>
    </Routes>
   </BrowserRouter>
  )
}