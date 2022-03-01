import { Context } from "./compa";
import React from "react";

export default function Compe() {
  return (
    <div>
      <Context.Consumer>
        {(getvalues) => {
          return (
            <div>
              <h1>Component E Type 4</h1>
              <div>inital value :{getvalues.initalvalue}</div>
              <br></br>
              <button onClick={getvalues.handleIncrement}>Increament</button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={getvalues.handleDecrement}>decreament</button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={getvalues.handleReset}>Reset</button>
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          );
        }}
      </Context.Consumer>
    </div>
  );
}
