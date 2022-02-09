import './App.css';
import react from 'react';
import { Context } from './Component/compa';
// import { computeHeadingLevel } from '@testing-library/react';
import Compb from './Component/Compb';
import Compc from './Component/Compc';

function App() {
  const [counter, setCounter] = react.useState(0)
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  const handleReset =()=>{
    setCounter(0)
  }

  return (
    <div>
    <h1>App COMP</h1>&nbsp;
    <div>INTIAL VALUE:{counter}</div><br></br>
    <button onClick={() => handleIncrement()}>Increasement</button>&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={() => handleDecrement()}>decreament</button>&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={() => handleReset()}>reset</button>  <br></br>

<Context.Provider
value={{
  initalvalue:counter,
  handleDecrement:handleDecrement,
  handleIncrement:handleIncrement,
  handleReset
}} 
>

<Compb></Compb>
<Compc></Compc>
</Context.Provider>
    </div>
  );
}

export default App;
