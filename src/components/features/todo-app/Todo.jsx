import React, { useState, useEffect } from 'react';
import Tasklist from './TaskList';

function Todo() {
  const [message, setMessage] = useState('');
  const [loader, setLoader] = useState(true);
  const [lists, setList] = useState(JSON.parse(localStorage.getItem('lists')) || []);
  const nextIdByList = lists.map((currentEl) => currentEl.id);
  
  useEffect(() => {
    setTimeout(() => {
      setLoader(false); 
    }, 1800);
  }, []);

  if (loader) {
    return (
      <div className='d-flex justify-content-center align-items-center mt-5'>
      <div className="spinner-border text-primary mt-5" role="status">
        <span className="visually-hidden mt-5">Loading...</span>
      </div>
      </div>
    );
  }

  let index = nextIdByList.length - 1;
  let nextId = nextIdByList[index] || 0;
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
            const uniqueTask=lists.map((task)=>task.name)
            if (message.trim()=='' || uniqueTask.includes(message.trim())) {
              alert('enter new task')
              setMessage('');
            }
            else {
              setList([...lists, { id: ++nextId, name: message }]);
              setMessage('');
            }
          }}
          className='btn btn-primary p-2 px-3'>
          Add
        </button>
      </div>
      <Tasklist todos={lists} setList={setList} />
    </div>
  );
}

export default Todo;
