import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import MainLayout from "./layout/Main";

import {mainAppRouter as router} from "./route/Route";
class App extends React.Component {

    constructor(props) {
        super(props);

        window.localStorage.setItem('userState','Guest');

    }

    render() {
        const AdminLayout = null;
        const userState = window.localStorage.getItem('userState');

        const Layout = userState==='Guest' ? MainLayout : AdminLayout

        return (
            <BrowserRouter>
                <Switch>
                    {
                        router.map((route , index) => {
                            return(
                                <route.route
                                    path={route.path}
                                    component={route.component}
                                    layout={Layout}
                                />
                            )
                        })
                    }
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
