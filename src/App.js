import './App.css';
import { useState } from 'react';

function App() {
  const buttons = ['CE', 'sin', 'cos', 'tan', 7, 8, 9, '-', 4, 5, 6, '+', 1, 2, 3, '*', '<<', '.', '/', '='];
  const [value, setValue] = useState(0);
  const [evaluated, setEvaluate] = useState(false);

  return (
    <div className="App">
      <div>
        <h2>React Calculator</h2>
        <div className='inputContainer'>
          <input type="text" id='displayInput' readOnly value={value}/>
        </div>
        <div className="buttonsContainer">
          {
            buttons.map((item) => (
              <button onClick={() => enterInput(item)}>{item}</button>
            ))
          }
        </div>
      </div>
    </div>
  );
  
  function enterInput(item) {
    if(evaluated) {
      setEvaluate(false)
      setValue(value)
    } 
    
    if(value === 0) {
      console.log(value);
      setValue(value + item);
      console.log(value);
    } else if(item === 'CE') {
      setValue(0)
    } else if(value[value.length - 1] === item){
      return;
    } else if(item === '='){
      setValue(eval(value));
      setEvaluate(true);
    } else {
      setValue(value.toString() + item)
    }
  }
}

export default App;
