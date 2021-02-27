import React from 'react';
import {mainAppRouter} from "../route/Route";
import {NavLink} from "react-router-dom";

const TopNav = () => {

    const [isMenuToggle , setIsMenuToggle] = React.useState(false)

    const ChageMenuState = () => {
        setIsMenuToggle(isMenuToggle===false)
        console.log(isMenuToggle)
    }
    return(
        <div className='topNavBar'>
            <header>nGyu</header>
            <div className='hambugBtn' onClick={ChageMenuState}>
                <div className='btn-1-line'></div>
                <div className='btn-2-line'></div>
                <div className='btn-3-line'></div>
            </div>

            <ul className={isMenuToggle ? 'openDropMenu' : 'closeDropMenu'}>
                {
                    mainAppRouter.map((item, index) => {
                        return(
                            <li key={index}>
                                <NavLink to={item.path}> {item.name} </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TopNav