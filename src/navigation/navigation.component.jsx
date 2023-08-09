import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../assets/crown.svg";
import "./navigation.style.scss";
let Navigation = () =>{
    return(
        
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to={'/'}>
                <div>
                    <CrwnLogo className='logo'/>
                </div>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        Shop
                    </Link>
                    <Link className="nav-link" to='/auth'>
                        SignIn
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
       
    )

}
export default Navigation;