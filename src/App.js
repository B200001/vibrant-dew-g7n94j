import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [lists, setLists] = useState([]);
  const [input, setInput] = useState("");
  const increase = () => {
    setCount(count + 1);
  };
  const Add = () => {
    setLists((prevlist) => [...prevlist, input]);
    setInput("");
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const delete_lis = () => {
    setLists((prev) => prev.slice(0, -1));
  };
  return (
    <div className="App">
      {count}
      <h1>Hello CodeSandbox THIS IS THE WAY</h1>
      <button onClick={increase}>INCREASE</button>
      <button onClick={decrease}>DECREASE</button>
      <h2>Start editing to see some magic happen!</h2>
      {lists.map((item) => {
        return <h2>{item}</h2>;
      })}
      {/* {input} */}
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={Add}>ADD</button>
      <button onClick={delete_lis}>DELETE</button>
    </div>
  );
}
