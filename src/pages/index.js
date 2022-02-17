import React from "react";
import Login from "../elements/login";
import Dashboard from "../components/dashboard";
function Index() {

    return <>
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen overflow-y-auto " >
        <Login>
            <Dashboard></Dashboard>
        </Login>
    </div>
    </>
  }
  
  export default Index