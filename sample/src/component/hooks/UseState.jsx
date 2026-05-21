import React, {useState} from 'react'

function UseState() {
  const[color,setColor]=useState('blue');

  const mouseover=()=>{
    setColor(color=='blue'?'red':'blue');
  }
  const[count,setCount]=useState(0);
  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    setCount(count-1)
  }
  const reset=()=>{
    setCount(0);
  }
  return (
    <>
    <h1>Usestate</h1>
    <p style={{color:color}} onMouseOver={mouseover}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onclick={decrement}>-</button>
      <button onclick={reset}>reset</button>

    </div>
    </>
    
  )
}

export default UseState;
