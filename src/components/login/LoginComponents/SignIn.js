import React from 'react'
import { Helmet } from 'react-helmet'

import Logo from '../../../images/logo.jpg'

const SignIn = () => {
    return (
        <>
            <Helmet>
                <title>P&R Multimedia | Login</title>
            </Helmet>
            <div className="hold-transition login-page">
                <div className="login-box">
                    {/* /.login-logo */}
                    <div className="card card-outline card-primary">
                        <div className="card-header text-center">
                            <img src={Logo} className="card-img-top" alt=""></img>
                        </div>
                        <div className="card-body">
                            <p className="login-box-msg">Loguear para empezar tu sesión</p>
                            <form action="../../index3.html" method="post">
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Nombre de usuario" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Contraseña" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block">Iniciar Sesión</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* /.card-body */}
                    </div>
                    {/* /.card */}
                </div>
            </div>
        </>
    )
}

export default SignIn;