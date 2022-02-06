import {useEffect,useState} from "react";
import Navbar from "../elements/navbar";
import Sidebar from "../elements/sidebar";
import { getUser } from "../network/ApiAxios";
import { useAuth} from "../../hooks"
function Dashboard() {
  const {token, setToken} = useAuth ("")
  useEffect(() => {
    const usr = async ()=>{
        const response = await getUser(token);
        const {data} = response;
        console.log(data)
        if (data.id) {
            localStorage.setItem("id", data.id);
            localStorage.setItem("name", JSON.stringify(data.name));
            localStorage.setItem("email", data.email)
            console.log(data)
        }
    }
    usr()
  },[]);

    return ( 
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen relative ">
        <Navbar></Navbar>
        <Sidebar></Sidebar>
      </div>
      
    </>
  );
  }
  
  export default Dashboard