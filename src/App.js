import React, {useState} from 'react';
import './App.css';
import {Button} from './Components/Button'
import {Input} from './Components/Input'
import {ClearButton} from './Components/ClearButton'

const App = () =>{

  const[input, setInput] = useState("")
  let addToInput = val =>{
    setInput(input + val)
  }
  const handleEqual = () =>{
    setInput(eval(input))
  }
  return (
    <div className='App'>
        <div className='calc-wrapper'>
          <Input input={input}></Input>
          <div className='row'>
            <Button handleClick={addToInput}>7</Button>
            <Button handleClick={addToInput}>8</Button>
            <Button handleClick={addToInput}>9</Button>
            <Button handleClick={addToInput}>/</Button>
          </div>
          <div className='row'>
            <Button handleClick={addToInput}>4</Button>
            <Button handleClick={addToInput}>5</Button>
            <Button handleClick={addToInput}>6</Button>
            <Button handleClick={addToInput}>*</Button>
          </div>
          <div className='row'>
            <Button handleClick={addToInput}>1</Button>
            <Button handleClick={addToInput}>2</Button>
            <Button handleClick={addToInput}>3</Button>
            <Button handleClick={addToInput}>+</Button>
          </div>
          <div className='row'>
            <Button handleClick={addToInput}>.</Button>
            <Button handleClick={addToInput}>0</Button>
            <Button handleClick={handleEqual}>=</Button>
            <Button handleClick={addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => setInput(0)}>Clear</ClearButton>
          </div>
        </div>
    </div>
  );
}

export default App;
