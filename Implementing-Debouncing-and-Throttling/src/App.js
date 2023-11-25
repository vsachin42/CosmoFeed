import './App.css';
import { useDebounce } from './Hooks/useDebounce';
import { useThrottle } from './Hooks/useThrottle';
import { useState } from 'react';

function App() {
  const [data, setData] = useState("");
  const handleClick = () => {
    alert("Network request made");
  }

  const debounce = useDebounce(handleClick,300);
  const throttle = useThrottle(handleClick,300);
  return (
    <div className="App">
      <h3>Fill the text to in the below input box to render it on th UI</h3>
     <input placeholder='Enter text' value={data} onChange={(e) => setData(e.target.value)}/>
     <p>{data}</p>
     <br/> <br/>
     <button onClick={debounce}>Click me for Debounce</button>
     <button onClick={throttle}>Click me for throttle</button>
    </div>
  );
}

export default App;
