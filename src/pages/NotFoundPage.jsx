import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h1>404</h1>
      <div>NotFoundPage</div>
      <Link to="/">ve trang Home</Link>
    </>
  );
};

export default NotFoundPage;
