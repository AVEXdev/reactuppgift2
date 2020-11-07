import React, { useState, useContext } from 'react'
import { UserContext } from '../shared/design/provider/UserProvider'
import { useHistory } from 'react-router-dom'

export const SignInView = () => {
    const history = useHistory()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const login = () => {
        setAuthenticatedUser(username)
        localStorage.setItem("username", username)
        history.push('/')
    }

    return (
        <form>
        <div>
            <span> Username: </span> <br /> <input onChange={event => setUsername(event.target.value)} /> <br />
            <span> Password: </span> <br /> <input type="password" onChange={event => setPassword(event.target.value)} /> <br />
            <button onClick={() => login()}>Login</button>
        </div>
        </form>
    )
}