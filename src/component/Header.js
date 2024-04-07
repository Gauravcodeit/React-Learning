import { Link } from "react-router-dom";
import { BrandLogo } from "../Util/Constant";
import { useContext } from "react";
import UserContext from "../Util/UserContext";
const  Header = ()=>{
    const {loggedInUser}= useContext(UserContext)
    return (
        <div className="header">
            <div className="logo">
               <Link to={'/'} >
                { true ? <div className="header-logo-title"> Itsyourfoodhub</div> : <img  src={ BrandLogo } alt="logo" />  }
               </Link>
            </div>
            <div className="nav-items">
                <ul className="unordered-list">
                    <li>
                       <Link to={'/'}> Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/grocery'}>Grocery</Link>
                    </li>
                    <li>
                        User : {loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header