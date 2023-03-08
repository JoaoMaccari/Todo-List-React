import { useEffect, useState } from 'react'
import React from 'react'
import './style.css'

import Item from '../../class/item'
import List from '../../componentes/list/list';
import Form from '../../componentes/form/form';

const saved_items = 'savedItems'

function App() {

  useEffect(()=>{
    
    fetch('https://api.github.com/users/joaomaccari')
    .then(response => response.json())
    .then(data =>{
      console.log(data)
      setUser({
        avatar: data.avatar_url,
        name: data.name
      })
    })

  }, []);
  
  const [user, setUser] = useState({name: '', avatar: ''})
  const [items, setItems] = useState([])

  useEffect(() =>{
    let savedItems = JSON.parse(localStorage.getItem(saved_items))
    if(savedItems){
      setItems(savedItems)
    }

  }, [])

  useEffect(()=>{
    localStorage.setItem(saved_items, JSON.stringify(items))
  },[items])

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

      <header>

        
        

          <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="" />

          </div>

          

      </header>
      
        
      <Form onAddItem={onAddItem}></Form>

      <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>



    </div>


  )


}

export default App
