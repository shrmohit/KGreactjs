// import css module here
import styles from "./Container.module.css";

const Container = (props) => {
  return <div className={styles.foodcontainer}>{props.children}</div>;
};

export default Container;
