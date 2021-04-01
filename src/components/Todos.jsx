import TodoDetail from './TodoDetail'

const Todos = ({ todos }) => {
    return (
        <div>
            <h1 className="title has-text-primary">
                All todos
            </h1>

            {todos.map(todo => (
                <TodoDetail key={todo.id} todo={todo} />
            )) }
        </div>
    )
}

export default Todos