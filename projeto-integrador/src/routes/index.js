import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Footer from '../components/Footer'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';


const RouteList = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default RouteList;