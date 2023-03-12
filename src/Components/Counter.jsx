import React from "react";
import "../StyleSheet/Counter.css";

function Counter(props) {
  return (
    <div className="Counter">
      {props.numClics}
    </div>
  );
}

export default Counter;