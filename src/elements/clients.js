import React,{useContext} from "react";
import AppContext from "../context/AppContext";

 function Clients() {
    const {state} = useContext(AppContext); 
    console.log(state)
    let clients = state.userClients[0]
    if (clients)
    {
        let stringName = "h"
        if (state.clientsToggleButton = true) {
            const clientsName = clients.map( clients => clients.name)
            console.log(clientsName)
            stringName = clientsName.toString()
            console.log(stringName)
        }
        else{
            clients = "no hay nada"
            console.log(clients)
            stringName = "no hay clientes"
        }
    }
    
    return <>
    <div >
        {stringName}
    </div>
    </>
  }
  
  export default Clients