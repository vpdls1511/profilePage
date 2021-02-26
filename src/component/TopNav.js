import {mainAppRouter as menuItem} from '../route/Route'
import {NavLink} from "react-router-dom";

const menuActiveStyle = {
    color:'aqua',
    fontweight:'bold'
}

const TopNav = () => {
    return(
        <div>
            <ul>
                {
                    menuItem.map((item, index) => {
                        return(
                            <li key={index}>
                                <NavLink to={item.path} activeStyle={menuActiveStyle}> {item.name} </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TopNav