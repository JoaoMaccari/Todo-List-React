import { useState } from 'react'
import React from 'react'
import './style.css'

import Item from '../../class/item'
import List from '../../componentes/list/list';
import Form from '../../componentes/form/form';


function App() {
  
  
  const [items, setItems] = useState([])

  function onAddItem(text) {

    let item = new Item(text)
    setItems([...items, item])

  }

  function onItemDeleted(item){
    let filteredItems = items.filter(it =>it.id != item.id)

    setItems(filteredItems);

  }

  function onDone(item){
    let uptdatedItems = items.map(it =>{
      if(it.id == item.id){
        it.done = !it.done;
      }

      return it
    })

    setItems(uptdatedItems)
  }

  return (
    <div className='container'>
      <h1> TODO </h1>
        
      <Form onAddItem={onAddItem}></Form>

       <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>

    </div>
  )


}

export default App
