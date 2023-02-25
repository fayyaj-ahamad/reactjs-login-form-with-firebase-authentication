import { createUserWithEmailAndPassword } from "firebase/auth";
import React, {useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { collection,addDoc } from "firebase/firestore";
import { auth, db} from "../../Config/Config";
import "../login/signup.css";

const Signup = () =>{
    const [firstName,setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");

    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const navigate = useNavigate();

    const signUpHandler = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password).then((cred)=>{
            const user = cred.user;
            addDoc(collection(db,'users'),{
                firstName:firstName,
                lastName:lastName,
                email:email,
                mobile:mobile,
                uid:user.uid
            }).then(()=>{
                setSuccessMsg('New User Addedd Successfully And Redrect Login Page');
                setFirstName('');
                setLastName('');
                setEmail('');
                setMobile('');
                setErrorMsg('');
                setTimeout(()=>{
                    setSuccessMsg('');
                    navigate('/signin');
                },3000);
            }).catch((error)=>{
                setErrorMsg(error.message);
            })
        }).catch((error)=>{
            setErrorMsg(error.message);
        })
    }   
   return(
        <div className="container">
            <div className="title">
                <h1>Create Account</h1>
            </div>
            {successMsg&&<><div className="success-msg">{successMsg}</div></>}

            <div className="main">
                <form className="main-form" onSubmit={signUpHandler}>
                    <div className="input-field">
                        <label>First Name</label>
                        <input type="text" className="input" name="firstName" 
                        autoComplete="off"
                        onChange={(e)=>setFirstName(e.target.value)} placeholder="Enter First Name"/>
                    </div>
                    <div className="input-field">
                        <label>Last Name</label>
                        <input type="text" className="input" name="lastName"
                        autoComplete="off"
                        onChange={(e)=>setLastName(e.target.value)}
                        placeholder="Enter Last Name"/>
                    </div>
                    <div className="input-field">
                        <label>Email</label>
                        <input type="email" className="input"  name="email"
                        autoComplete="off"
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder="Enter Email"/>
                 </div>
                    <div className="input-field">
                        <label>Password</label>
                        <input type="password" className="input"
                        autoComplete="off"
                        name="password"
                        onChange={(e)=>setPassword(e.target.value)}
                         placeholder="Enter Your Password"/>
                    </div>
                    <div className="input-field">
                        <label>Mobile Number</label>
                        <input type="text" className="input" name="mobile"
                        autoComplete="off"
                        onChange={(e)=>setMobile(e.target.value)} placeholder="Enter Mobile Number"/>
                    </div>
                    <div className="input-field">
                        <button type="submit">Signup</button>
                    </div>
                </form>
            </div>
            <div style={{marginTop:"5px"}}>
            <span style={{color:"#f5f5f5"}}>I Have Already Account : </span>
                <Link to="/signin" style={{textDecoration:"none",color:"#f1f1f1"}}>Login</Link>
            </div>
            {errorMsg&&<><div className="error-msg">{errorMsg}</div></>}
        </div>
    )
}
export default Signup;