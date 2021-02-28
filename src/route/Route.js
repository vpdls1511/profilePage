import Home from "../pages/Home";
import Wait from "../pages/Wait";
import {Redirect} from "react-router-dom";
import Blog from "../pages/Blog";
import Portfolio from "../pages/Portfolio";

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
        component: Portfolio,
    },
    {
        path:'/blog',
        name : 'blog',
        component: Blog,
    },
    {
        path:'/contact',
        name : 'conatact',
        component: Wait,
    },
]

export {mainAppRouter};