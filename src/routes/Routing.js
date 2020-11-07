import React, { useEffect, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { SignInView } from '../view/SignInView'
import { UserContext } from '../shared/design/provider/UserProvider'
import { ProfileView } from '../view/ProfileView'
import { SettingsView } from '../view/SettingsView'


export const Routing = (props) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const checkIfUserIsAuthenticatedInBrowser = () => {
        setAuthenticatedUser(localStorage.getItem("username"))
    }

    useEffect(() => {
        checkIfUserIsAuthenticatedInBrowser()
    })

    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/signin" component={SignInView} />
                <Route exact path="/profile" component={ProfileView} />
                <Route exact path="/settings" component={SettingsView} />
                <Route component={HomeView} />
            </Switch>
        </Router>
    )
}