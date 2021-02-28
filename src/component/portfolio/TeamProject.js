import React, {useEffect, useState} from 'react'
import Card from "./Card";
import {getTestData} from "../../lib/getFirestoreData";

let count = 0;

const TeamProject = () =>{


    const [projectList , setProjectList] = useState([])
    const [scrollState , setScrollState] = useState(0)

    const prevScroll = () => {
        count = count === 0 ? projectList.length-1 : count-1
        setScrollState("-"+count*100+"vw")
    }
    const nextScroll = () => {
        count = projectList.length-1 === count ? 0 : count+1
        setScrollState("-"+count*100+"vw")
    }

    useEffect(()=>{
        getTestData().then( docs => {
            setProjectList(docs)
        })

    },[0])


    return(
        <React.Fragment>
            <ul className='teamProject'>
                {
                    projectList.map((items, index) => {
                        return(
                            <Card
                                className = 'scroll'
                                key={index}
                                title={items.title}
                                desc={items.desc}
                                images={items.images}
                                state={scrollState}
                            />
                        )
                    })
                }
                <div className='slideBtn prevBtn' onClick={prevScroll}>
                    <div className='arrow'>
                        <div className='arrow1'></div>
                        <div className='arrow2'></div>
                    </div>
                </div>
                <div className='slideBtn nextBtn' onClick={nextScroll}>
                    <div className='arrow'>
                        <div className='arrow1'></div>
                        <div className='arrow2'></div>
                    </div>
                </div>
            </ul>

        </React.Fragment>
    )
}

export default TeamProject