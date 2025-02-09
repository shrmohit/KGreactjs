import "./App.css";
import ListOfFood from "./components/ListOfFood";
import ErrorMessage from "./components/ErrorMesssage";
import { useState } from "react";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  const [fooditem, setfooditem] = useState(["Sabji", "Milk", "Roti"]);

  let textshow = "food item entered by user";

  const handleInputonChange = (event) => {
    console.log(event.target.value);
    textshow = event.target.value;
  };

  return (
    // example of passing caontainer
    <Container>
      <h1 className="heading">Health Food</h1>
      <ErrorMessage fooditem={fooditem} />
      <FoodInput handleInputonChange={handleInputonChange} />
      <p>{textshow}</p>
      <ListOfFood />
    </Container>
  );
}

export default App;
