import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from '../context/auth';

const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuth()  ?(
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/autosparezdatacenter',
                        state: { from: props.location }
                    }}
                />
            )
        }
    ></Route>
);
export default AdminRoute