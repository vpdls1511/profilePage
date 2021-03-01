import React, {useEffect, useState} from 'react'
import {getProjectData} from "../../lib/getFirestoreData";
import {NavLink} from "react-router-dom";
import ProjectDetail from "./ProjectDetail";
const AllProjects = () => {

    const [projects , setProjects] = useState([]);

    const [isCustomDialogState , setIsCustomDialogState ] = useState(false)
    const [isCustomDialogData , setIsCustomDialogData] = useState({
        data : '',
        image:0
    })

    const OpenDetail = (data,img) => {
        setIsCustomDialogData({
            data : data,
            image : img
        })
        setIsCustomDialogState( isCustomDialogState === false ? true : false )
    }

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
                                <div
                                    className='viewAllBtn'
                                    onClick={() => OpenDetail(items,images)}
                                > 알아보기 </div>
                            </li>
                        )
                    })
                }
            </ul>
            {
                isCustomDialogState === false ? null:
                    <ProjectDetail
                        items={isCustomDialogData}
                        OpenDetail={OpenDetail}
                    />
            }
        </React.Fragment>
    )
}

export default AllProjects