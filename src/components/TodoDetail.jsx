const TodoDetail = ({ todo }) => {
    return (
        <div className="columns">
            <div className="column">
                <div className="title is-6">{ todo.title }</div>
            </div>
            <div className="column is-narrow">
                <div className="buttons">
                    <div className="button is-danger">Delete</div>
                </div>
            </div>
        </div>
    )
}

export default TodoDetail