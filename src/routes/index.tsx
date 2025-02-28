import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import CheckOut from '../pages/Checkout';
import PedidoFinalizado from '../pages/PedidoFinalizado';
import { Pagina404 } from '../pages/pagina404';

export function CoffeeRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/pedidoFinalizado/:id" element={<PedidoFinalizado />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
}
