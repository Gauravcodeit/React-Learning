import { Link } from "react-router-dom";
import { BrandLogo } from "../Util/Constant";
const  Header = ()=>{
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
                </ul>
            </div>
        </div>
    )
}
export default Header