import { Link } from "react-router-dom"
const  Header = ()=>{
    return (
        <div className="header">
            <div className="logo">
               <Link to={'/'} >
               <img
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgLVahkYFXMGyjUvABC6Bc6FehIiXqI760Q&usqp=CAU"
               alt="logo" />
               </Link>
            </div>
            <div className="nav-items">
                <ul className="unordered-list">
                    <li>
                       <Link to={'/'}> Home</Link>
                    </li>
                    <li>
                    <Link to={'/about'}>
                        About
                    </Link>

                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header