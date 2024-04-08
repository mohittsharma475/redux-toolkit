import { useState } from "react";
import PropTypes from "prop-types";
import {useSelector,useDispatch} from "react-redux"
import { increment, decrement, incrementByAmount, getUser } from "../slices/accountSlice"

const Account = () => {
  const [value, setValue] = useState(0);
  // const [account, setAccount] = useState({ amount: 0 });
 
  // function increment() {
  //   setAccount({ amount: account.amount + 1 });
  // }
  // function incrementbyvalue(value) {
  //   setAccount({ amount: account.amount + value });
  // }
  // function decrement() {
  //   setAccount({ amount: account.amount - 1 });
  // }

  const amount = useSelector(state=>state.account.amount)
  const points = useSelector(state=>state.bonus.points)
  const dispatch =  useDispatch();

  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <h2>Account Component</h2>
      <h3>Total Amount ${amount}</h3>
      <h3>Total points ${points}</h3>
      <hr></hr>
      <button onClick={()=>dispatch(increment())}>Increment +</button>
      <hr></hr>
      <button onClick={()=>dispatch(decrement())}>decrement -</button>
      <hr></hr>
      <input
        type="number"
        onChange={(e) => {
          //   e.target.focus;
          setValue(+e.target.value);
        }}
      />
      <hr></hr>
      <button onClick={() => dispatch(incrementByAmount(value))}>
        incrementbyvalue {value} +
      </button>
      <hr></hr>
      <button onClick={()=>dispatch(getUser(1))}>getUserById</button>
    </div>
  );
};

Account.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementbyvalue: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired,
};

export default Account;