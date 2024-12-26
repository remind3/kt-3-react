import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const start_todos = [
        {id: 1, title: 'Помыть руки', completed: true},
        {id: 2, title: 'Сделать зарядку', completed: false},
        {id: 3, title: 'Наконец изучить React', completed: true}
      ]
    
      let local_data = JSON.parse(localStorage.getItem('todos'))
    
      const [todos, setTodos] = useState(local_data || start_todos)
    
      function deleteTodoByid(id){
        let filteredTodos = todos.filter(elem => elem.id !== id)
        setTodos(filteredTodos)
      }
    
      function changeTodos(id){
        let newTodos = todos.map(todo => {
          if (todo.id === id){
            todo.completed = !todo.completed
          }
          return todo
        })
        setTodos(newTodos)
      }
      function addTodo(title){
        let newTodo = {
          id: Date.now(),
          title,
          completed: false
        }
        setTodos([...todos, newTodo])
      }
    
      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
      }, [todos])
    
  return <AppContext.Provider value={{todos, setTodos, deleteTodoByid, changeTodos, addTodo}}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
