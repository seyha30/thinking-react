/******************************************************************************
 * @Author                : seyha30<sinseyha1x@gmail.com>                     *
 * @CreatedDate           : 2023-05-08 14:45:40                               *
 * @LastEditors           : seyha30<sinseyha1x@gmail.com>                     *
 * @LastEditDate          : 2023-05-08 21:06:34                               *
 * @FilePath              : thinking-react/src/App.js                         *
 * @CopyRight             : SAMBAT FINANCE                                    *
 *****************************************************************************/

import "./App.css";
import React from "react";
import { MyButton } from "./MyButton";
function App() {
  const person = { name: "seyha sin", age: 34, phone: "010 366946" };
  const { name, phone } = person;
  console.log(name + "" + phone);
  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />

      <ul>
        {products.map((p, i) => {
          return <li key={i}>{p.category}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there. <br />
        How do you do
      </p>
    </>
  );
}
