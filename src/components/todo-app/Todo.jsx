import React, { useState } from 'react';
import Tasklist from './TaskList';

function Todo() {
  const [message, setMessage] = useState('');
  const [lists, setList] = useState(JSON.parse(localStorage.getItem('lists')) || []);
  let nextId = lists.length || 0;
  localStorage.setItem('lists', JSON.stringify(lists));

  return (
    <div className='container mx-auto mt-3'>
      <h1 className='text-center'>Todo List</h1>
      <div className='p-2 d-flex gap-3 justify-content-center align-items-center'>
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
              setMessage('');
            }
          }}
          className='btn btn-primary p-2 px-3'
        >
          Add
        </button>
      </div>
      <Tasklist todos={lists} setList={setList} />
    </div>
  );
}

export default Todo;
