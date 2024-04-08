import Account from "./components/Account";
import Bonus from "./components/Bonus";
import {useSelector} from "react-redux";

function App() {
  const amount = useSelector(state=>state.account.amount)
  const points = useSelector(state=>state.bonus.points)
  return (
    <>
      <div style={{ border: "2px solid black", padding: "10px" }}>
        <h1>App Component</h1>
        <h5>Total Amount: ${amount} </h5>
        <h5>Total bonus: {points} </h5>
      </div>
      <Account />
      <Bonus />
    </>
  );
}

export default App;
