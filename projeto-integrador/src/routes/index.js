import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Sobre from '../pages/Sobre';
import Cadastro from '../pages/Cadastro';


const RouteList = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default RouteList;