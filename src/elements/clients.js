import React,{useContext} from "react";
import AppContext from "../context/AppContext";

 function Clients() {
    const {state} = useContext(AppContext); 
    const clientsShow = state.clientsToggleButton
    const clientsArr = state.userClients
    if (clientsShow === true) {
        if (clientsArr.length === 0) {
            console.log('no hay clientes')
            
           
        } else {
            console.log("hay clientes")
            
        }
        
    }
    return <>
    <div >
        Hola mundo yo sere los clientes {(clientsArr.length === 0)?' no hay clientes':''}
    </div>
    </>
  }
  
  export default Clients