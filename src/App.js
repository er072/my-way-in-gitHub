import React from "react"
import TodoList from './Todo/TodoList'
import Context from './context'



function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, complated: false, title: 'buy breat' },
    { id: 2, complated: false, title: 'buy meat' },
    { id: 3, complated: false, title: 'buy juse' }
  ])


  function toggleTodo(id) {
      setTodos(todos.map(todo => {
        if (todo.id === id) {
          todo.complated = !todo.complated
        }
        return todo
      })
    )
  }

  function removeTodo (id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
      <Context.Provider value={{ removeTodo }}>
        <div className="main">
          <h1>React tutorial</h1>
          <TodoList todos={todos} onToggle={toggleTodo} />
        </div>
      </Context.Provider>
      
  );
}

export default App;
