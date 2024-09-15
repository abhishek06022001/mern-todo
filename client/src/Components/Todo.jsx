import React, { useState } from 'react'

function Todo({ todo, deleteTodo, handleEdit }) {
    const [name, setName] = useState(todo.name);
    const [edit, setEdit] = useState(false)
    function editTodo() {
        console.log(edit);

        setEdit((prev) => !prev);
    }
    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <div
            className='text-left h-8 flex justify-between'

        >
            {edit ?
                <input type="text"

                    onChange={handleChange}
                    onBlur={() =>{
                        setEdit(false); handleEdit(todo._id, name)
                    }}
            value={name} />
            :
            <input type="text"
                readOnly
                onBlur={() => handleEdit(todo._id, name)}
                value={name} />

            }

            <button
                onClick={editTodo}
            >Edit</button>
            <button
                onClick={() => deleteTodo(todo._id)}
            >Delete</button>
        </div>
    )
}

export default Todo