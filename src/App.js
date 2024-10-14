import { useState } from 'react';
import './App.css';
import Lists from './components/lists-rendering/Lists';
import Classdemo from './components/Classdemo';
import MovingDot from './components/MovingDot';

function App() {
  console.log("hello world");
  return (
    <div className="App d-flex flex-column gap-4">
      <header className="App-header mt-3">
        <h1>My first react app</h1>
      </header>

      
      {/* <Display />
      <Counter />
      <Lists />
      <Classdemo />
      <MovingDot /> */}
    </div>
  );
}

function Display() {
  let handleChange = (e) => {
    setTimeout(() => document.getElementById('helpId').innerHTML = " Show text: " + e.target.value, 1000)
  }
  const [name, setName] = useState("");
  return (
    <form>
      <div>
        <label for="">Enter Your Name: </label>
        <input
          type="text"
          id="inputfield"
          onChange={(e) => setTimeout(() => setName(e.target.value), 1000)}
        />
        <small id="helpId"> Show text: {name} </small>
      </div>

    </form>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const addNumber = () => {
    if (count < 20) {
      setCount(count + 1)
    }
  }
  const removeNumber = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  return (
    <div>
      <h2>Count number: {count} </h2>
      <button onClick={addNumber} className='btn btn-primary me-2'>Add number</button>
      <button onClick={removeNumber} className='btn btn-primary'>Remove number</button>
    </div>
  )
}

export default App;
