const Form = () => {
    return (
        <div className="columns is-variable is-1">
        <div className="column">
            <input placeholder="New todo..." type="text" className="input is-fullwith is-medium is-rounded"/>
        </div>,
        <div className="column is-narrow">
            <button className="button is-primary is-medium is-rounded">
                Add
            </button>
        </div>
    </div>
    )
}

export default Form