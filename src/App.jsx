import Account from "./components/Account";
import Bonus from "./components/Bonus";

function App() {
  return (
    <>
      <div style={{ border: "2px solid black", padding: "10px" }}>
        <h1>App Component</h1>
        <h5>Total Amount: $ </h5>
        <h5>Total bonus: </h5>
      </div>
      <Account />
      <Bonus />
    </>
  );
}

export default App;
