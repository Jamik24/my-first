const Soccer = ({ country, club, player }) => {
    const styles = {
        playerName: {
            backgroundColor: "gold",
            color: "white",
            padding: "20px"
        }
    }

    const sayHello = playerName => {
        alert("Hello, " + playerName)
    }

    return (
        <div>
            <h1 style={styles.playerName}>{ country }</h1>
            <h2>{ club }</h2>
            <h3>{ player }</h3>
            <button onClick={() => sayHello(player)}>Say Hello!</button>
            <hr/>
        </div>
    )
}

export default
