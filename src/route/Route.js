import Home from "../pages/Home";
import Test from "../pages/Test";
import {Route} from "react-router-dom";

function RouteWrapper({ component: Component, layout: Layout, ...rest}) {
    return (
        <Route {...rest} render={(props) =>
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        } />
    );
}

const mainAppRouter = [
    {
        path:'/home',
        name : 'HOME',
        component: Home,
        route:RouteWrapper
    },
    {
        path:'/test',
        name : 'test',
        component: Test,
        route:RouteWrapper
    },
]

export {mainAppRouter};