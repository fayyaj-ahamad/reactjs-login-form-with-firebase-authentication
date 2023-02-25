import "../home/home.css"
import { auth,db } from "../../Config/Config"
import { useEffect, useState } from "react";
// import { collection,  getDoc, query, where } from "firebase/firestore";
import Navbar from "../Navbar/Navbar"
import { collection, getDocs } from "firebase/firestore";
const Home = () =>{
    const [user, setUser] = useState(null);
    useEffect(()=>{
        const getUser = () =>{
            auth.onAuthStateChanged((user)=>{
                setUser(user.email);
            })
        }

        getUser();
    })
    return(
        <>
      <div className="home-navbar">
        <Navbar user={user}/>
      </div>
        <div className="home">
        <h3 style={{fontSize:"30px"}}>Hi... Welcome</h3>
        <h2 style={{fontSize:"40px"}}>{user} </h2>
    </div>          
        </>
      
    )
}
export default Home;