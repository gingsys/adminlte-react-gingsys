import React from 'react'
import { NavLink } from 'react-router-dom';

import Mini from '../../images/logomini.png'

const Menu = () => {

    function refresh() {
        setTimeout(()=>{
            window.location.reload();
        });
    }    

    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <div className="brand-link">
                    <img src={Mini} alt="P&R Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">P&R Multimedia</span>
                </div>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="info">
                            <a className="d-block">Usuario</a>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class with font-awesome or any other icon font library */}
                            <li className="nav-header">
                                iNICIO
                            </li>
                            <li className="nav-item">
                                <NavLink to="/home/dashboard" className="nav-link" onClick={refresh}>
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Dashboard
                                    </p>
                                </NavLink>
                            </li>
                            <li className="nav-header">
                                MANTENIMIENTOS
                            </li>
                            <li className="nav-item">
                                <NavLink to="/home/empleados" className="nav-link" onClick={refresh}>
                                    <i className="nav-icon fas fa-table" />
                                    <p>
                                        Empleados
                                    </p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/home/clientes" exact className="nav-link" onClick={refresh}>
                                    <i className="nav-icon fas fa-table" />
                                    <p>
                                        Clientes
                                    </p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/home/solicitudes" className="nav-link" onClick={refresh}>
                                    <i className="nav-icon fas fa-table" />
                                    <p>
                                        Solicitudes
                                    </p>
                                </NavLink>
                            </li>                            
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </>
    )
}

export default Menu;