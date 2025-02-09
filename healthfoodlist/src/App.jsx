import "./App.css";
import ListOfFood from "./components/ListOfFood";
import ErrorMessage from "./components/ErrorMesssage";
import { useState } from "react";

function App() {
  const [fooditem, setfooditem] = useState(["Sabji", "Milk", "Roti"]);
  return (
    <div className="foodcontainer">
      <h1 className="heading">Health Food</h1>
      <ErrorMessage fooditem={fooditem} />
      <input
        className="foodinput"
        type="text"
        placeholder="Enter Food Name"
      />
      <ListOfFood />
    </div>
  );
}

export default App;
