import { useEffect, useState } from "react";
const Products = () => {
  const [click, setClick] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log("useEffect");
      });

    return () => {
      console.log("un-mounted");
    };
  }, [click]);
  console.log("Products");

  return (
    <>
      <div onClick={() => setClick(!click)}>Click</div>
      {products.map((product) => {
        {
          console.log("dom");
        }
        return <div key={product.id}>{product.name}</div>;
      })}
    </>
  );
};

export default Products;
