import { useState } from 'react'
import React from 'react'
import './style.css'

import {List} from '../../componentes/list/list';


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

       <List> items={items} </List>

    </div>
  )


}

export default App
