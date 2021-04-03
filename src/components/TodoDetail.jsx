const TodoDetail = ({ todo, deleteTodo, completeTodo }) => {
    return (
        <div className="columns">
            <div className="column">
                <div className="title is-6">{ todo.title }</div>
            </div>
            <div className="column is-narrow">
                <div className="buttons">
                    { (!todo.completed) ? (
                        <button onClick={() => completeTodo(todo.id)} className="button is-success">Done</button>
                    ) : ('') }
                    <button onClick={() => deleteTodo(todo.id)} className="button is-danger">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoDetail