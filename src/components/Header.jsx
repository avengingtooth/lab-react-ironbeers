import { Link, Outlet } from "react-router-dom"

function Header(){
    return(
        <div>
            <nav className="homeHeader">
                <Link to='/'>
                    <img src='/homeIcon.png' alt="home"></img>
                </Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Header