import Account from "./components/Account";
import Bonus from "./components/Bonus";
import {useSelector} from "react-redux";
import Reward from "./components/Reward";

function App() {
  const amount = useSelector(state=>state.account.amount)
  const points = useSelector(state=>state.bonus.points)
  return (
    <div style={{display:"flex",margin:"2% 2%",padding:"2% 2%"}}>
      <div style={{ border: "2px solid black", padding: "10px" }}>
        <h1>App Component</h1>
        <h5>Total Amount: ${amount} </h5>
        <h5>Total bonus: {points} </h5>
      </div>
      <Account />
      <Bonus />
      <Reward></Reward>
    </div>
  );
}

export default App;
