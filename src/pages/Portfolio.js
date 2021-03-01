import React from 'react'
import TeamProject from "../component/portfolio/TeamProject";
import AllProjects from "../component/portfolio/AllProjects";

const Portfolio = () => {

    return(
        <div className='projectList'>
            <div className='projectTitleTextBox'>
                <p>가장 최근 프로젝트</p>
                <p>Most recent projects</p>
            </div>
            <TeamProject/>

            <div className='projectTitleTextBox'>
                <p>모든 프로젝트</p>
                <p>All projects</p>
            </div>
            <AllProjects/>
        </div>
    )
}

export default Portfolio