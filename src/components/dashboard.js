import {useEffect,useState,useContext} from "react";
import Navbar from "../elements/navbar";
import Sidebar from "../elements/sidebar";
import Clients from "../elements/clients";
import { getUser } from "../network/ApiAxios";
import { 
    useAuth,
} from "../../hooks"
import AppContext from "../context/AppContext";

function Dashboard() {
    const {token, setToken} = useAuth ("")
    const {addUserData, state} = useContext(AppContext);

    const showClients = state.clientsToggleButton
    useEffect(() => {
        const usr = async ()=>{
            const response = await getUser(token);
            const data = response;
            if (data.id) {
                addUserData(data)
            }
        }
        usr()
    },[]);

    return (    
    <>
        <div className=" p-2 bg-gradient-to-r from-cyan-500 to-blue-500 h-screen  grid gap-1 grid-cols-12 grid-rows-6 ">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            {showClients && <Clients/>}

        </div>
      
    </>
  );
  }
  
  export default Dashboard