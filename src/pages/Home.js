import React from 'react'
import Profile from "../component/about/Profile";
import ProfileInfo from "../component/about/ProfileInfo";

const Home = () => {



    return (
        <React.Fragment>
            <div className="aboutWarp">
                <Profile/>
                <ProfileInfo/>
            </div>
        </React.Fragment>
    )
}

export default Home;