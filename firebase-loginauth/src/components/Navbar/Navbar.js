
import { Link } from "react-router-dom";
import "./navbar.css";
import { auth } from "../../Config/Config"; 
import { useNavigate } from "react-router-dom"; 
const Navbar = ({user}) =>{
    const navigate = useNavigate();
    const logout = () =>{
        auth.signOut().then(()=>{
            navigate("/signin");
        })
    }
    return(
        <div className="navbar">
            {
                user?
                <Link to="/" className="btn-logout" onClick={logout}>Logout</Link>
                :
                <Link to="/signup" className="btn">Create Account</Link>

            }
               
        </div>
    )
}

export default Navbar;