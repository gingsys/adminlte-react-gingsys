import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Login from '../components/login/Login'
import Footer from '../components/home/Footer'
import Header from '../components/home/Header'
import MenuRoutes from './MenuRoutes'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/login" />
                </Route>
                <Route path="/login" exact component={Login} />
                <Route path="/home">
                    <div className="wrapper">
                        <Header />                        
                        <MenuRoutes />
                        <Footer />
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;