import React, {useState, Component } from 'react';
import Tweet from './Tweet';

function App() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const [users, setUsers] =  useState([
    {name: 'Praneeth', msg: 'I like cs'},
    {name: 'HoopyPran', msg: "I'm cracked at valorant"},
    {name: 'Michael Jordan', msg: 'All I hear are swishes'}
  ]);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  }

  return(
    <div className='app'>
      {/* <h1 className={isRed ? 'red' : ''}>Change my color!</h1>
      <button onClick={increment}>{count}</button>
      <h1>{count}</h1> */}
      {users.map(user => (
        <Tweet name={user.name} msg={user.msg} likes='99'/>
      ))}
    </div>
  )
}

export default App;