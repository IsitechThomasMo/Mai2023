import React from 'react'

interface Props{
    connectWallet:() => void
}

const Login = ({ connectWallet }: Props) => {
    return (
        <div>
            <h1>Bienvenue dans le générateur de nombre aléatoire</h1>
            <button onClick={connectWallet}>Se connecter</button>          
        </div>
    )
}

export default Login