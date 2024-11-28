import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    // fetch(`https://dummyjson.com/products/${id}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setData(data);
    //   });

    (async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log("co loi", error);
      }
    })();

    return () => {};
  }, []);

  return (
    <div>
      <img src={data.thumbnail} alt="anh san pham" />
      <span>{data.price}</span>
      <p>{data.description}</p>
    </div>
  );
};

export default ProductDetailPage;
