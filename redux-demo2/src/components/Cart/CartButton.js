import classes from './CartButton.module.css';
import useCounter from "../../hooks/use-counter";

const CartButton = (props) => {
  const {count, incrementHandler, decrementHandler} = useCounter();

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{count}</span>
    </button>
  );
};

export default CartButton;
