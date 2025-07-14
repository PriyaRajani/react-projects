import { useEffect, useState ,useRef} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ThemeSwitcher from "./themeswitcher";

function App() {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);
  return (
    <>
     <ThemeSwitcher/>
     <h2>Use State</h2>
     <p>You clicked {count} times</p>
     <button onClick={()=>setCount(count+1)}>Increment</button>
     <br/>
     <br/>
     <br/>
     <br/>
      <input
        type="text"
        placeholder="Type something ..."
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        ref={inputRef}
      />
      <p>
        You typed : <strong>{inputVal}</strong>{" "}
      </p>
    </>
  );
}

export default App;
