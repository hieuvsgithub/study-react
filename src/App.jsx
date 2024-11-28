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
import DashBoardPage from "./pages/admin/DashBoardPage";
import ProductsList from "./pages/admin/ProductsList";
import Text from "./pages/admin/Text";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ShopPage" element={<ShopPage />} />
        {/* <Route path="/products/LaptopPage" element={<LaptopPage />} /> */}
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/ServicesPage" element={<ServicesPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* <Route path="/admin" element={<DashBoardPage />} />
        <Route path="/admin/products" element={<ProductsList />} /> */}

        <Route path="/admin" element={<DashBoardPage />}>
          <Route path="/admin/products" element={<ProductsList />} />
          <Route path="/admin/Text" element={<Text />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
