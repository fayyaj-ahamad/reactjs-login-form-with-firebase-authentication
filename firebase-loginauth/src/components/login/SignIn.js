import "../login/signin.css";
import {Link, useNavigate} from "react-router-dom"
import { useState } from "react";
import { auth } from "../../Config/Config";
import { signInWithEmailAndPassword } from "firebase/auth";
// const auth = getAuth();
const SignIn = () =>{
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const navigate = useNavigate();
    const signInHndler = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then((cred)=>{
            setSuccessMsg('Login Successfully and Redirect Home Page')
            setEmail('');
            setPassword('');
            setErrorMsg('');
            setTimeout(()=>{
                setSuccessMsg('');
                navigate("/");
            },3000);
        }).catch((error)=>{
            if(error.message === 'Firbase: Error(auth/invalid-emial).'){
                setErrorMsg('Please Fill All Required fill');
            }
            if(error.message === 'Firbase: Error (auth/user-not-found).'){
                setErrorMsg("Email Not Found");
            }
            if(error.message === 'Firebase:(auth/wrong-password).'){
                setErrorMsg('Wrong Password');
            }
        })
    }
    return(
        <div className="container">
            <div className="title">
                <h1>Login Account</h1>
            </div>
            {successMsg&&<><div className="success-msg">{successMsg}</div></>}
            {errorMsg&&<><div className="error-msg">{errorMsg}</div></>}

            <div className="main">
                <form className="main-form" onSubmit={signInHndler}>
                    <div className="input-field">
                        <label>Email</label>
                        <input type="email" className="input"
                        autoComplete="off"
                        placeholder="Enter Email"
                        onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="input-field">
                        <label>Password</label>
                        <input type="password" className="input"
                         placeholder="Enter Your Password"
                         onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className="input-field">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
            <div style={{marginTop:"5px"}}>
            <span>I Create Account :</span>
                <Link to="/signup" style={{textDecoration:"none",color:"#f1f1f1"}}>Signin</Link>
                
            </div>
        </div>
    )
}
export default SignIn;