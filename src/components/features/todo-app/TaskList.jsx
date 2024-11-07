function Tasklist({todos,setList}) {
    return (
      <ul className='container d-flex flex-column justify-content-center align-items-center'>
        {todos.map((list) => (
          <li
            key={list.id}
            className='d-flex mt-2 rounded-3 align-items-center bg-secondary-subtle w-50 p-2 justify-content-between text-capitalize'>
            {list.name}
            <div className='d-flex gap-2'>
              <button
                className='btn btn-primary'
                onClick={() => {
                  setList(todos.filter((a) => a.id !== list.id));
                }}>
                Delete
              </button>
              <button
                className='btn btn-primary'
                onClick={() => handleEditTodo(list.id,setList,todos)}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  function handleEditTodo(listId,setList,todos) {
    const editMessage = prompt('Edit your task:', '');
    if (!editMessage) return;

    const updatedList = todos.map((item) =>
      item.id === listId ? { ...item, name: editMessage } : item
    );
    console.log('updatedList', updatedList)

    setList(updatedList);
  }
export default Tasklist;