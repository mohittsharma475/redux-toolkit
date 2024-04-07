import PropTypes from "prop-types";
import { useState } from "react";

const Bonus = () => {
  const [bonus, setBonus] = useState({ points: 0 });

  function incrementBonus() {
    setBonus({ points: bonus.points + 1 });
  }

  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <h1>Bonus Component</h1>
      <h2>Total Points : {bonus.points}</h2>
      <button onClick={incrementBonus}>Increment points {bonus.points}</button>
    </div>
  );
};

Bonus.propTypes = {
  bonus: PropTypes.object.isRequired,
  incrementBonus: PropTypes.func.isRequired,
};

export default Bonus;