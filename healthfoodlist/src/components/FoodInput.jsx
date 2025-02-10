import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      className={styles.foodinput}
      type="text"
      placeholder="Enter Food Name"
      //onchange event handling
      onKeyDown={handleKeyDown}
      // event.target.value is used for getting input tag value
    />
  );
};

export default FoodInput;
