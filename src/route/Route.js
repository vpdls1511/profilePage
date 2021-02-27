import Home from "../pages/Home";
import Test from "../pages/Test";
import {Redirect} from "react-router-dom";
import Blog from "../pages/Blog";

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
        component: Blog,
    },
    {
        path:'/contact',
        name : 'conatact',
        component: Test,
    },
]

export {mainAppRouter};