import './App.css';
import React, { useRef, useState } from "react"
import { TestButton } from "./TestButton";
import { TestButton1 } from './TestButton1';
import { TextInput } from './principle2';


function App() {
  // useSemiPersistentState(123, 123)
  const [value, setRed] = useState(true)

  const handleColor = () => {
    console.log(value);
    setRed(!value);
  }
  return (
    <>
      <TestButton isShowRed={value}></TestButton>
      <button onClick={handleColor}>change color</button>
      <hr></hr>
      <TestButton1 color={value ? "red" : "blue"}>123</TestButton1>
      <hr></hr>
      <TextInput key={value}/>
    </>

  );
}

const useSemiPersistentState = (key, initialState) => {
  const isMounted = useRef(false);
  console.log('A');
  const [value, setValue] = React.useState(
    console.log('B') || localStorage.getItem(key) || initialState
  );
  console.log('C');
  React.useEffect(() => {
    if (isMounted.current) {
      console.log('D');
      localStorage.setItem(key, value);
    } else {
      isMounted.current = true;
    }
  }, [value, key]);
  console.log('E');
  return [value, setValue];
};

export default App;
