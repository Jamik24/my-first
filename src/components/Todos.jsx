import TodoDetail from './TodoDetail'

const Todos = ({title, todos, deleteTodo, completeTodo }) => {
    return (
        <div>
            <h1 className="title has-text-primary">
                { title }
            </h1>

            {todos.map(todo => (
                <TodoDetail key={todo.id} completeTodo={completeTodo} todo={todo} deleteTodo={deleteTodo} />
            )) }
        </div>
    )
}

export default Todos