import React from 'react'
import TeamProject from "../component/portfolio/TeamProject";

let count = 0;

const Portfolio = () => {

    return(
        <div className='projectList'>
            <div className='projectTitleTextBox'>
                <p>가장 최근 프로젝트들</p>
                <p>Most recent projects</p>
            </div>
            <TeamProject/>
        </div>
    )
}

export default Portfolio