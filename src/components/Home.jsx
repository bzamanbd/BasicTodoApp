// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './TodoList'
import TodoList from './TodoList';
import NewTodo from './NewTodo';

const initialTodoList = ["todoOne","todoTwo"];

export default function Home() {
    const [allTodo, setTodo] = useState(initialTodoList);

    const handleNewTodo = (newTodo) => { 
        setTodo([...allTodo, newTodo]);
    }

    

  return (
      <div>
          <NewTodo onNewTodo={ handleNewTodo} />
          <TodoList allTodoList={ allTodo} />
    </div>
  )
}
