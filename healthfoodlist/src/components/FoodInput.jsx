import { useState } from "react";
import styles from "./FoodInput.module.css";
const FoodInput = () => {
  const [showtext, setshowtext] = useState();

  const handleInputonChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <input
      className={styles.foodinput}
      type="text"
      placeholder="Enter Food Name"
      //onchange event handling
      onChange={(event) => handleInputonChange(event)}
      // event.target.value is used for getting input tag value
    />
  );
};

export default FoodInput;
