import React, { useState } from 'react'
let nextId = 0;
function Todo() {
  const [message, setMessage] = useState('');
  const [lists, setList] = useState([]);

  function handleEditTodo(listid){
    let editMessage = prompt();
    let itemToUpdate = lists;
    let data = itemToUpdate.find(item => item.id === listid)
    if (data) {
      data.name = editMessage
    }
    setList(
      itemToUpdate
    )
    console.log(lists)
  }
  return (

    <div className='container'>
      <h1>Todo List</h1>
      <input type="text" id='inputField' value={message} onChange={e => setMessage(e.target.value)} className='rounded ms-3' />
      <button onClick={() => {
        setList([
          ...lists,
          { id: nextId++, name: message }
        ])
        
      }} className='rounded'>Add</button>
      <ul className='container'>
        {lists.map((list) => <li key={list.id} className='d-flex mt-2 rounded-3 align-items-center bg-secondary-subtle w-25 p-2 justify-content-between'>{list.name}
          <div className='d-flex gap-2'>
            <button className='btn btn-primary' onClick={() => {
              setList(
                lists.filter(a => a.id !== list.id)
              )
              console.log(list)
            }}>Delete</button>
            <button className='btn btn-primary' onClick={() => handleEditTodo(list.id)}>Edit</button></div>
        </li>)}
      </ul>
    </div>
  )
}

export default Todo
