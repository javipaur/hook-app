import React from 'react'
import { TodoListItem } from './todoListItem'

export const TodoList = ({todos,handleToggle,handlerDelete}) => {
  return (
    <>
    <ul className='list-group list-group-flush'>
                        {
                            todos.map((todo, i) => (
                                //TodoListItem,todo, index ,handlerDelete,handleToggle
                                <TodoListItem
                                  todo={todo}
                                  index={i}
                                  handleToggle={handleToggle}
                                  handlerDelete={handlerDelete}
                                />
                               
                            ))
                        }
                    </ul>
    </>
  )
}
