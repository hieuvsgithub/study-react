import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Products from "./Products";
import Shop from "./pages/Shop";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Header />
      {/* <div onClick={() => setShow(!show)}>{!show ? "Show" : "Hidden"}</div>
      {show && <Products />} */}
      <Shop />
      <Footer />
    </>
  );
}

export default App;
