import React, {useEffect, useState} from 'react'
import {getProjectData} from "../../lib/getFirestoreData";
const AllProjects = () => {

    const [projects , setProjects] = useState([]);

    useEffect(()=>{
        getProjectData().then(docs => setProjects(docs))
    },[])


    return(
        <React.Fragment>
            <ul className='allProjects'>
                {
                    projects.map((items, index) => {
                        const images = items.images !== undefined ? items.images[0] : '/images/resource/profile.jpeg'
                        return(
                            <li
                                key={index}
                                className='projectCard'
                            >
                                {console.log(images)}
                                <div
                                    className='titleImg'
                                    style={{
                                        backgroundImage:'url(' + images + ')'
                                    }}
                                />
                                <p className='cardTitle'>{items.title}</p>
                                <p className='cardDesc'>{items.desc}</p>
                                <div className='viewAllBtn'> 알아보기 </div>
                            </li>
                        )
                    })
                }
            </ul>
        </React.Fragment>
    )
}

export default AllProjects