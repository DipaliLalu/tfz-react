import React, { useState } from 'react';

let nextId = 0;
function Todo() {
  const [message, setMessage] = useState('');
  const [lists, setList] = useState([]);

  console.log('list is: ', lists);

  function Tasklist() {
    return (
      <ul className='container'>
        {lists.map((list) => (
          <li
            key={list.id}
            className='d-flex mt-2 rounded-3 align-items-center bg-secondary-subtle w-50 p-2 justify-content-between'
          >
            {list.name}
            <div className='d-flex gap-2'>
              <button
                className='btn btn-primary'
                onClick={() => {
                  setList(lists.filter((a) => a.id !== list.id));
                }}
              >
                Delete
              </button>
              <button
                className='btn btn-primary'
                onClick={() => handleEditTodo(list.id)}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  function handleEditTodo(listId) {
    const editMessage = prompt('Edit your task:', '');
    if (!editMessage) return;

    const updatedList = lists.map((item) =>
      item.id === listId ? { ...item, name: editMessage } : item
    );
    console.log('updatedList',updatedList)

    setList(updatedList); 
  }

  return (
    <div className='container mx-auto'>
      <h1>Todo List</h1>
      <div className='p-2 d-flex gap-3'>
        <input
          type='text'
          id='inputField'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='rounded p-2'
          placeholder='Enter task'
          style={{ width: '500px' }}
        />
        <button
          onClick={() => {
            if (message.trim()) {
              setList([...lists, { id: nextId++, name: message }]);
              setMessage(''); // Clear the input field after adding
            }
          }}
          className='btn btn-primary p-2'
        >
          Add
        </button>
      </div>
      <Tasklist />
    </div>
  );
}

export default Todo;
