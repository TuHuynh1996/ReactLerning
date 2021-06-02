
import React, { Component, useEffect } from "react";
import { useLocation, Route, Switch } from "react-router-dom";
import routes from "../server/router";
import Navbars from '../component/Navbars'
import Sidebar from '../component/Sidebar'
function UserLayout() {
    const location = useLocation();
    const mainPanel = React.useRef(null);
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/user") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        render={(props) => <prop.component {...props} />}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };
    return (

        <div style={{ background: 'rgb(226, 226, 226)' }}>
            <Navbars />
            <Switch>{getRoutes(routes)}</Switch>
        </div>
    );
}

export default UserLayout;