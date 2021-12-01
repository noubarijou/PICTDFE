import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from '../pages/About';
import Carrinho from '../pages/Carrinho';
import Home from '../pages/Home';
import Produtos from '../pages/Produtos';
import NotFound from '../pages/NotFound';
import Categorias from '../pages/Categorias';

const RouteList = () => (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
)

export default RouteList;