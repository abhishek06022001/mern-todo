import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Todo from './Components/Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, settodo] = useState('');

  function handleInputChange(e) {
    // console.log("changed vaklye us", todo);

    settodo(e.target.value);
  }

  const CreateTodo = async (e) => {
   

    const newtodo = await axios.post('/api/todo/',
      {
        name: todo
      }
    );
    console.log("inside createtodo", newtodo);
    setTodos([...todos, newtodo.data.todo]);
    settodo('');
  }

  useEffect(() => {
    async function fetchTodos() {
      const todos = await axios.get('/api/todo/');
   
      setTodos(todos.data.todos);
    }
    fetchTodos();
  }, []);
  const deleteTodo = async (id) => {
    await axios.delete(`api/todo/${id}`);
    const newtodos = todos.filter(todo => todo._id != id);
    setTodos([...newtodos]);
  }
  const handleEdit = async (id, newName) => {
    await axios.put(`api/todo/${id}`, {
      name: newName
    });
    const tempTodo = [...todos];
    tempTodo.forEach(todo => {
      if (todo._id == id) {
        todo.name = name;
      }
    });
    setTodos(tempTodo);

  }

  return (

    <>
      <div className='p-5 '>
        <h1
          className='text-blue-800 font-mono text-center'
        >To Do Application - Full Stack Project</h1>
        <input type="text" placeholder='Name of Todo' className='bg-slate-100 text-sm p-1'
          id='create_todo'
          onChange={handleInputChange}
          value={todo}
        />
        <button class="bg-blue-500 text-white text-sm py-1 px-1 "
          onClick={CreateTodo}
        >
          Create ToDo
        </button>
        <div
          className='mx-auto  overflow-x-hidden overflow-y-auto
          bg-blue-300 mt-16
          min-h-96  w-2/5'
        >

          {todos.map(element => {
            return <Todo
              todo={element}
              deleteTodo={deleteTodo}
              handleEdit={handleEdit}
            />


          })}
        </div>
      </div>
    </>
  )
}

export default App