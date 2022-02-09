import React from 'react';
import { Context } from './compa';      //----2 calling the function

export default function Compd() {
const getvalues=React.useContext(Context)   //inside usecontext we used context to call the function  so import this --1


  return <div>
  <br></br>
  <h1>Component D Type 3</h1>
<div>inital value :{getvalues.initalvalue}</div><br></br>
<button onClick={getvalues.handleIncrement}>Increament</button>&nbsp;&nbsp;&nbsp;&nbsp;
<button  onClick={getvalues.handleDecrement}>decreament</button>&nbsp;&nbsp;&nbsp;&nbsp;
<button  onClick={getvalues.handleReset}>Reset</button>&nbsp;&nbsp;&nbsp;&nbsp;

  </div>
}
