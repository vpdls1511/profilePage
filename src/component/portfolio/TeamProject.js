import React, {useEffect, useState} from 'react'
import MainCard from "./MainCard";
import {getRecentData} from "../../lib/getFirestoreData";


const TeamProject = () =>{

    const [ recentProject , setResentProject] = useState([]);

    useEffect(()=>{
        getRecentData().then(docs=>setResentProject(docs));
    },[])

    return(
        <React.Fragment>
            <ul className='mainProjectItem'>
                {
                    recentProject[0] === undefined ? null:
                        <MainCard
                            title={recentProject[0].title}
                            desc={recentProject[0].desc}
                            images={recentProject[0].images}
                        />
                }
            </ul>
        </React.Fragment>
    )
}

export default TeamProject