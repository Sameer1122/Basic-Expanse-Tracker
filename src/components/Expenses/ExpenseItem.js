import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenesItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate time={props.time} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.item}</div>
      </div>
    </Card>
  );
};

export default ExpenesItem;
