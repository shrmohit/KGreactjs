import "./App.css";
import ListOfFood from "./components/ListOfFood";
import ErrorMessage from "./components/ErrorMesssage";
import { useState } from "react";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  const [fooditem, setfooditem] = useState(["Sabji", "Milk", "Roti"]);

  // ... is a spread operator and it add current array value
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...fooditem, newFoodItem];
      setfooditem(newItems);
      console.log("Food value entered is " + newFoodItem);
    }
  };

  return (
    // example of passing container
    <Container>
      <h1 className="heading">Health Food</h1>
      <ErrorMessage fooditem={fooditem} />
      <FoodInput handleKeyDown={onKeyDown} />
      <ListOfFood fooditem={fooditem} />
    </Container>
  );
}

export default App;
