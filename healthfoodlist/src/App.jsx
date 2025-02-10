import "./App.css";
import ListOfFood from "./components/ListOfFood";
import ErrorMessage from "./components/ErrorMesssage";
import { useState } from "react";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  const [foodItem, setFoodItem] = useState(["Sabji", "Milk", "Roti"]);
  // console.log(foodItem);

  // ... is a spread operator and it add current array value
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      // console.log(newFoodItem);
      let newItems = [...foodItem, newFoodItem];
      setFoodItem(newItems);
      console.log(newItems);

      console.log("Food value entered is " + newFoodItem);
    }
  };

  return (
    // example of passing container
    <Container>
      <h1 className="heading">Health Food</h1>
      <ErrorMessage foodItem={foodItem} />
      <FoodInput handleKeyDown={onKeyDown} />
      <ListOfFood items={foodItem} />
    </Container>
  );
}

export default App;
