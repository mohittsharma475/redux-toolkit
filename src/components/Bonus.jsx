import PropTypes from "prop-types";

import {useSelector,useDispatch} from "react-redux"
import { increment } from "../slices/bonusSlice"

const Bonus = () => {
//   const [bonus, setBonus] = useState({ points: 0 });

//   function incrementBonus() {
//     setBonus({ points: bonus.points + 1 });
//   }
  const amount = useSelector(state=>state.account.amount)
  const points = useSelector(state=>state.bonus.points)
  const dispatch =  useDispatch();
  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <h1>Bonus Component</h1>
      <h2>Total Points : {points}</h2>
      <h2>Total Amount : {amount}</h2>
      <button onClick={()=>dispatch(increment())}>Increment points {points}</button>
    </div>
  );
};

Bonus.propTypes = {
  bonus: PropTypes.object.isRequired,
  incrementBonus: PropTypes.func.isRequired,
};

export default Bonus;