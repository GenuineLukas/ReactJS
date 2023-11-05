import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import useCounter from "../../hooks/use-counter";

const ProductItem = (props) => {
  const { title, price, description } = props;
  const {count, incrementHandler, decrementHandler} = useCounter();

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={incrementHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
