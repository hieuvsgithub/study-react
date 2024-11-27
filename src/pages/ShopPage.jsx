import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(4);
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      });

    // return () => {
    //   second;
    // };
  }, [limit, skip]);

  function next() {
    setSkip((prev) => prev + 10);
    setPage((prev) => prev + 1);
    // console.log(skip);
  }
  function prev() {
    setSkip((prev) => prev - 10);
    setPage((prev) => prev - 1);
    // console.log(skip);
  }

  function handleLimit(value) {
    if (value === "all") {
      setLimit("total");
    } else {
      setLimit(value);
    }
    console.log(value);
  }
  return (
    <div>
      <h2>Danh sanh san pham</h2>
      <select onChange={(e) => handleLimit(e.target.value)} name="" id="">
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="10">10</option>
        <option value="all">all</option>
      </select>
      {products.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/products/${item.id}`}>
              <h3>{item.title}</h3>
            </Link>
            <span>{item.price}</span>
            <span>Xem chi tiet</span>
          </div>
        );
      })}
      <button onClick={prev}>prev</button>
      <button onClick={next}>next</button>
      <div>trang {page}</div>
    </div>
  );
};

export default Shop;
