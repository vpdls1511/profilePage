import Home from "../pages/Home";
import Test from "../pages/Test";
import {Redirect, Route} from "react-router-dom";

const mainAppRouter = [
    {
        path:'/',
        component: () => <Redirect to={'/about'} />,
    },
    {
        path:'/about',
        name : 'About',
        component: Home,
    },
    {
        path:'/portfolio',
        name : 'Portfolio',
        component: Test,
    },
    {
        path:'/blog',
        name : 'blog',
        component: Test,
    },
    {
        path:'/contact',
        name : 'conatact',
        component: Test,
    },
]

export {mainAppRouter};