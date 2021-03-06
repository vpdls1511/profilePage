import Home from "../pages/Home";
import {Redirect} from "react-router-dom";
import Blog from "../pages/Blog";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

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
        component: Contact,
    },
]

export {mainAppRouter};