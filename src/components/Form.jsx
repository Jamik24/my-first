import { useState } from 'react'

const Form = ({ addTodo }) => {
    const [ title, setTitle ] = useState('')

    const onSubmit = () => {
        addTodo(title)
        setTitle('')
    }

    return (
        <div className="columns is-variable is-1">
        <div className="column">
            <input 
            value={title} 
            onInput={event => setTitle(event.target.value)}
            placeholder="New todo..." 
            type="text" 
            className="input is-fullwith is-medium is-rounded"/>
        </div>
        <div className="column is-narrow">
            <button onClick={() => onSubmit()} className="button is-primary is-medium is-rounded">
                Add
            </button>
        </div>
    </div>
    )
}

export default Form