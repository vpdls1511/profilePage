import React from 'react'
import TeamProject from "../component/portfolio/TeamProject";

let count = 0;

const Portfolio = () => {

    return(
        <div className='projectList'>
            <span className='projectTitleTextBox'>
                <p> 가장 최근 프로젝트들 </p>
                <hr/>
            </span>
            <TeamProject/>
        </div>
    )
}

export default Portfolio