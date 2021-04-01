import { useState } from 'react'
import Form from './Form'
import Todos from './Todos'

const Main = () => {
    const [ todos, setTodos ] = useState([
        {id: 1, title: "Non sotib olish", comlated: false},
        {id: 2, title: "Tuxum sotib olish", comlated: false},
        {id: 3, title: "Olma sotib olish", comlated: false},
        {id: 4, title: "Sport bilan shug'ullanish", comlated: false},
        {id: 5, title: "Playstation sotib olish", comlated: false}
    ])

    return (
        <div className="container mt-4">
            <div className="columns is-centered">
                <div className="column is-6">
                   <Form />

                   <Todos todos={todos} />
                </div>
            </div>
        </div>
    )
}

export default Main