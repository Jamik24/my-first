import { useState } from 'react'
import Form from './Form'
import Todos from './Todos'
import { v4 as uuidv4 } from 'uuid';
 
const Main = () => {
    const [ todos, setTodos ] = useState([
        {id: 1, title: "Non sotib olish", completed: false},
        {id: 2, title: "Tuxum sotib olish", completed: true},
        {id: 3, title: "Olma sotib olish", completed: true},
        {id: 4, title: "Sport bilan shug'ullanish", completed: false},
        {id: 5, title: "Playstation sotib olish", completed: false}
    ])

    const addTodo = title => {
        setTodos([...todos, {id: uuidv4(), title, completed: false}])
    }

    const deleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    const completeTodo = id => {
        const newTodos = todos.map(todo => {
            if (id === todo.id) {
                todo.completed = true
            }

            return todo 
        })
        setTodos(newTodos)
    }
    
    return (
        <div className="container mt-4">
            <div className="columns is-centered">
                <div className="column is-6">
                   <Form addTodo={addTodo} />

                   <Todos title="All todos" completeTodo={ completeTodo } todos={todos} deleteTodo={deleteTodo} />
                   <Todos title="Done todos" todos={todos.filter(todo => todo.completed)} deleteTodo={deleteTodo} />
                </div>
            </div>
        </div>
    )
}
                                
export default Main