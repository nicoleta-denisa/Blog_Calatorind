import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
    const { user } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={(routeProps) =>
                !!user ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect exact to={'/home'} />
                )
            }
        />
    );
}
