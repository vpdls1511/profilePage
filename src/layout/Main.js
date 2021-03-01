import React from 'react'
import TopNav from "../component/TopNav";
import Footer from "../component/Footer";

const MainLayout = (props) => (
    <React.Fragment>
        <TopNav/>
        <div className='topNavMarginBox' />
        {props.children}
        <Footer/>
    </React.Fragment>
)

export default MainLayout;