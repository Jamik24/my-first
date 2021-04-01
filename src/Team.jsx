import { useState } from 'react'

const Team = () => {
    const [players, setPlayers] = useState ([
        {name: "Sergio", team: "Real Madrid", country: "Spain"},
        {name: "Hakan", team: "Milan", country: "Turkey"},
        {name: "Jadon", team: "Borussia Dortmund", country: "England"},
    ])


    return (
        <div>
            <h3>The best players in the country</h3>
            { players.map(player => (
                <h2>Name: {player.name}, Team: {player.team}, Country: {player.country}</h2>
            ))}
        </div>
    )
}

export default 