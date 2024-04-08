

import {useSelector,useDispatch} from "react-redux"
import { increment } from "../reducers/rewardReducer";

const Reward = () => {

  const points = useSelector(state=>state.reward.points)
  const dispatch =  useDispatch();
  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <h1>Reward Component</h1>
      <h2>Total Points : {points}</h2>
      <button onClick={()=>dispatch(increment())}>Increment points {points}</button>
    </div>
  );
};



export default Reward;