import React from 'react'
import TopNav from "../component/TopNav";

const MainLayout = (props) => (
    <React.Fragment>
        <TopNav/>
        <div className='topNavMarginBox' />
        {props.children}
    </React.Fragment>
)

export default MainLayout;