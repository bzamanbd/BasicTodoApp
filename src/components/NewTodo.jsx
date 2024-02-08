// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

export default function NewTodo(props) {
    
    const [todo, setTodo] = useState(''); 
    const onHandleNewTodo = (event) => { 
        setTodo(event.target.value);
    }
    const onHandleSubmit = (event) => { 
        event.preventDefault();
        // eslint-disable-next-line react/prop-types
        props.onNewTodo(todo);

    }
    return (
        <form onSubmit={onHandleSubmit}> 
            <label htmlFor="todo">New Todo: </label>
            <input type="text" id='todo' value={todo} onChange={onHandleNewTodo} /> 
            <button type='submit'>Add Todo</button>
    </form>
    )
}
