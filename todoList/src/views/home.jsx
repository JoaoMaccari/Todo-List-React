import { useState } from 'react'
import React from 'react'
import './style.css'




function App() {
  
  const [text, setText] = useState("");
  const [items, setItems] = useState([])

  function handleChange(event){
    let t = event.target.value;
    setText(t)
  }

  function addItem(event){
    //event.preventDefault();
    if(text){
      setItems([...items, text])
      setText('');
    }else{
      alert("insira um elemento")
    }

    
  }

  return (
    <div className='container'>
      <h1> TODO </h1>
        <form>
          <input onChange={handleChange}  type="text" value={text} />
          <button type='button' onClick={addItem}>Add</button>
        </form>

        <ul>
          {items.map(item =><li>{item}</li>)}
        </ul>

    </div>
  )
}

export default App
