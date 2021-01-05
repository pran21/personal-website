import React from 'react';
import Hello from './sayHello';

function App() {

  var counter = 0;

  const incrementCounter = () => {
    counter++;
    console.log(counter);
  }
  return(
    <div>
      <h1>Praneeth Kanna</h1>
      <button onClick={incrementCounter}>{counter}</button>
      <Hello />
    </div>
  )
}

export default App;