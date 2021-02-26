import React from 'react'
import TopNav from "../component/TopNav";

const MainLayout = (props) => (
    <React.Fragment>
        <TopNav/>
        {props.children}
    </React.Fragment>
)

export default MainLayout;