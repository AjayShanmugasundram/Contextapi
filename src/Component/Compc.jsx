import React from 'react';
import { Context } from './compa';      //----2 calling the function
import Compd from './Compd';
export default function Compc() {
const getvalues=React.useContext(Context)   //inside usecontext we used context to call the function  so import this --1


  return <div>
  <br></br>
  <h1>Component C type 2</h1>
  <br></br>
<div>inital value :{getvalues.initalvalue}</div><br></br>
<button onClick={getvalues.handleIncrement}>Increament</button>&nbsp;&nbsp;&nbsp;&nbsp;
<button  onClick={getvalues.handleDecrement}>decreament</button>&nbsp;&nbsp;&nbsp;&nbsp;
<button  onClick={getvalues.handleReset}>Reset</button>&nbsp;&nbsp;&nbsp;&nbsp;
<Compd></Compd>
  </div>
}
