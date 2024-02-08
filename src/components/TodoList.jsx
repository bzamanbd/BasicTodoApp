// eslint-disable-next-line no-unused-vars
import React from 'react'
import Todo from './Todo';

export default function TodoList(props) {
  // eslint-disable-next-line react/prop-types
  const newTodoList = props.allTodoList;
  console.log(newTodoList);
  return (
    <div>
      {
        // eslint-disable-next-line react/prop-types
        newTodoList.map((todo, index) => ( 
          <Todo key={index} todo={todo} /> 
        ))
      }
    </div>
  )
}
