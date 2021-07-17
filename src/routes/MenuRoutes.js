import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Dashboard from '../components/home/HomeComponents/Dashboard'
import Clientes from '../components/home/HomeComponents/Clientes'
import Solicitudes from '../components/home/HomeComponents/Solicitudes'
import Empleados from '../components/home/HomeComponents/Empleados'
import Menu from '../components/home/Menu'

const MenuRoutes = () => {
    return(
        <>
            <Menu />
            <div>
                <Switch>
                    <Route exact path="/home/dashboard" component={Dashboard} />
                    <Route exact path="/home/solicitudes" component={Solicitudes} />
                    <Route exact path="/home/empleados" component={Empleados} />
                    <Route exact path="/home/clientes" component={Clientes} />

                    <Redirect to="/home/empleados" />
                </Switch>
            </div>
        </>
    )    
}

export default MenuRoutes;