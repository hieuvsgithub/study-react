import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <h1>hello cả lop</h1>
//   </StrictMode>
// );

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function ProductList() {
  return (
    <ul>
      <li>Products 1</li>
      <li>Products 2</li>
      <li>Products 3</li>
      <li>Products 4</li>
    </ul>
  );
}

// root.render(<ProductList />);
root.render(<App />);

// const element = React.createElement(
//   "h1",
//   { className: "title", id: "title" },
//   "xin chao ca lop"
// );
// const element2 = React.createElement(
//   "h1",
//   { className: "title", id: "title" },
//   "xin chao ca lop"
// );

// function MyApp(name) {
//   return <h2>Hello {name}</h2>;
// }
// function MyApp2(props) {
//   return <h2>Hello {props.name} </h2>;
// }

// props = properties
// children

// root.render(
//   <>
//     {element} {element2}
//   </>
// );

// root.render(MyApp("F8"));
// root.render(<MyApp2 name={"F8"} />);
