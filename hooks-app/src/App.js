import React, {useState, useMemo, useEffect} from 'react';
import "./App.css";
function App() {
  const [resourceType, setResourceType] = useState('posts')
  const [count, setCount] = useState(4)
  const [color, setColor] = useState('green') 
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])
  const themeStyles = {
    backgroundColor: dark ? 'orange' : 'green',
    color: dark ? 'pink' : 'red'
  }
  useEffect(() => {
    console.log('Theme Changed')
  }, [themeStyles])
 
  // const [windowWidth, setwindowWidth] = useState(window.innerWidth)

  // const handleResize = () => {
  //   setwindowWidth(window.innerWidth)
  // }

  // useEffect(() => {
    // window.addEventListener('resize', handleResize)
  // }, [])
  
  
  function decrement() {
    setCount(prevCount => prevCount - 1) 
    
    }

   function increament() {
     setCount(prevCount=> prevCount + 1);
     setColor('red')
    }

    function slowFunction(num) {
      console.log('calling Slow Function')
      for (let i = 0; i <= 100000000; i++) {}
      return num * 2
    }
  return (
    <>
      <div>
      
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <span>{color}</span>
        <button onClick={increament}>+</button>
      </div>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1> 
      {/* <div>
        {windowWidth}
      </div> */}
      <div>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
      </div>
    </>
  );
}

export default App;
