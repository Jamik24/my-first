import { useState } from 'react'

const Person = () => {
    const [cats, setCats] = useState ([
        {name: "Tom", color: "Red"},
        {name: "Барсук", color: "Yellow"},
        {name: "Garfield", color: "Orange"},
    ])
    

    return (
        <div>
            <h3>Pets:</h3>
            { cats.map(cat => (
                <h2>Name: {cat.name}, Color: {cat.color}</h2>
            ))}
        </div>
    )
}

export default 