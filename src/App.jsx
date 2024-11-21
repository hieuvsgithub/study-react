import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const students = [
  { id: 1, name: "Hieu", age: 21 },
  { id: 2, name: "Hoang", age: 33 },
  { id: 3, name: "Trong", age: 24 },
  { id: 4, name: "Dong", age: 22 },
];

function StudentItem(props) {
  return (
    <li>
      {props.student.name}-{props.student.age} Tuoi
    </li>
  );
}

function StudentList() {
  return (
    <ul>
      {students.map((student, index) => (
        <StudentItem key={index} student={student} />
      ))}
      <StudentItem student={{ name: "dung", age: 32 }} />
      <StudentItem student={{ name: "an", age: 32 }} />
    </ul>
  );
}

function App(props) {
  const [count, setCount] = useState(0);
  console.log(props);
  return (
    <>
      <h1>Danh sach sinh vien</h1>
      <StudentList />
    </>
  );
}

export default App;
