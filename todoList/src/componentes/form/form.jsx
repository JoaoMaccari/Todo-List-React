import React from "react"
import { useState } from 'react'

import './style.css'

function Form(props){

    
    const [text, setText] = useState("");
   
    function handleChange(event){
        let t = event.target.value;
        setText(t)
    }
    
    function addItem(){
    //event.preventDefault();
        if(text){
            //setItems([...items, text])
            props.onAddItem(text)
            setText('');
        }else{
            alert("insira um elemento")
        }
    }

    return(
        <form>
          <input onChange={handleChange}  type="text" value={text} />
          <button className="botao" type='button' onClick={addItem}>Add</button>
        </form>
       
    )
}

export default Form