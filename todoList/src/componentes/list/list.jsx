import React from "react";



export function List(props){

    

    console.log(props)
    return(
        <ul>
            {props.items.maps(item => <li>{item}</li>)}
        </ul>
    )
}


