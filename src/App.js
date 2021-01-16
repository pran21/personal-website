import React from 'react';
import './index.css';
import { NavLink, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import ErrorPage from './pages/ErrorPage'

function Main() {
    return(
        <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route path='/projects' component={ProjectsPage}></Route>
            <Route path='/contact' component={ContactPage}></Route>
            <Route component={ErrorPage}></Route>
        </Switch>
    )
}

export default class App extends React.Component {
    render() {
        return(
            <div>
                <NavBar />
                <Main />
            </div>
        )
    }
}
