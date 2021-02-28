import React , {useEffect, useState, useRef} from 'react'
import {getTestData} from "../lib/getFirestoreData";
import Card from "../component/portfolio/Card";
import TeamProject from "../component/portfolio/TeamProject";

let count = 0;

const Portfolio = () => {

    return(
        <div className='projectList'>
            <p> Team Project </p>
            <TeamProject/>
        </div>
    )
}

export default Portfolio