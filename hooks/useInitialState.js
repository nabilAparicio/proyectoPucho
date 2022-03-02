import { useState } from "react";

const initialState = { 
    user:[],
    userClients:[],
    clientsToggleButton: false,
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addUserData = (payload) => {
        setState({
            ...state,
            user:[payload]
        })
    }
    const addUserClients = (payload) => {
        setState({
            ...state,
            userClients:[payload]
        })
    }
    const clientsToggleButton = (payload) => {
        setState({
            ...state,
            clientsToggleButton:payload 
        })
    }

    return {
        state,
        addUserData,
        addUserClients,
        clientsToggleButton,
    }
}


export default useInitialState