import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import NotFoundPage from "./pages/NotFoundPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ShopPage" element={<ShopPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/ServicesPage" element={<ServicesPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
