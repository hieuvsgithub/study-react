import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";

function Button(props) {
  console.log(props);
  return <button className={props.variant}>{props.children}</button>;
}

function Welcome(props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <h1 style={{ color: "red" }}>Hello</h1>
      <button onClick={handleClick}>Click</button>
      {count}
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      {/* <Button variant="btn btn-primary">Click me</Button>
      <Button variant="btn btn-secondary">Haha</Button>
      <Button variant="btn btn-warning">no click tui</Button>
      <Button variant="btn btn-danger">cham tui di</Button> */}
      <Welcome />
      <Footer />
    </>
  );
}

export default App;
