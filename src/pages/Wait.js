import React from 'react'
import {getTestData} from "../lib/getFirestoreData";

const Wait = () => {

    React.useEffect(()=>{
        getTestData()
            .then(data => {
                console.log(data)
            })
    })

    return (
        <React.Fragment>
            <div className={'waiting'}>
                <p>준비중 입니다.</p>
            </div>
        </React.Fragment>
    )
}

export default Wait;