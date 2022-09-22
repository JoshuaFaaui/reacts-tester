//note that youre importing a css file(which has not been used yet)
import './App.css';
//note that you are importing 2 hooks from the 'react' library using the object destructuring syntax{}
import { useState, useEffect } from 'react'

function App() {
  //note that this looks similar to array destructuring
  //also note that 1st parameter is the variables value, 2nd parameter is setting it
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(100)

  function updateCount() {
    setCount(count+1)
  }
  function updateCount2() {
    setCount2(count2-1)
  }

  //note that for the use effect function, you can use the second parantheses as a condition like the 2nd below\/(runs only if either of the 2 buttons/component values are changed)
  useEffect(function () {
    console.log('Component re-rendered')
  }
  );
  useEffect(function () {
    console.log('Counterstate variable was re-rendered')
    },
    [count,count2]
  );
  useEffect(function () {
    console.log('Component re-rendered for the first time only')
  },
    []
  );

  //  state called color => string  
  const [color, setColor] = useState('yellow');
  useEffect(() => {
    console.log('Color of h1 changed to', color);
  }, [color]);
  //  //This is run every time instead of on just one particular state variable change//     
  useEffect(() => {
    //       
    console.log('Color of h1 changed to', color);
    //     
  }); function changeColor() {
    setColor('red');
  }
  
  return (
    <div className="App">
      <div>Count:{count}</div>
      <button onClick={updateCount}>Add one!</button>
      <div>2nd Counter:{ count2}</div>
      <button onClick={updateCount2}>update</button>
      
      <h1 style={{ background: color }}>Today is only Thursday</h1>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
}

export default App;
