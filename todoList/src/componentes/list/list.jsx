import React from "react";
import './style.css' 

function DoneImg(props){
    if(props.done){
        return(<img alt="done" src="./assets/verifica.png"></img>)
    }else{
        return(<img alt="undone" src="./assets/fechar.png"></img>)
    }
}

function List(props){

  
    return(
    <ul >
        {props.items.map(item => <li className={item.done? "done" : ""} key={item.id}> 
            {item.text} 
            <button className="btn" onClick={() =>{props.onDone(item)}}><DoneImg done={item.done}> </DoneImg></button>
            <button className="btn" onClick={() =>{props.onItemDeleted(item)}}><img alt="delete" src="./assets/excluir.png"/></button> </li>)}
    </ul>

    )
 

}

export default List