import React from "react";
import { Outlet } from "react-router-dom";

const DashBoardPage = () => {
  return (
    <div>
      <h2>DashBoardPage</h2>
      <Outlet />
    </div>
  );
};

export default DashBoardPage;
