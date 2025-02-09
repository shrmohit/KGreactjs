import { useState } from "react";
import styles from "./FoodInput.module.css";

const FoodInput = ({ handleInputonChange }) => {
  const [showtext, setshowtext] = useState();

  return (
    <input
      className={styles.foodinput}
      type="text"
      placeholder="Enter Food Name"
      //onchange event handling
      onChange={handleInputonChange}
      // event.target.value is used for getting input tag value
    />
  );
};

export default FoodInput;
