import { useState } from "react";

const initialState = { 
    user:[],
    clientsToggleButton: false
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addUserData = (payload) => {
        setState({
            ...state,
            user:[payload]
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
        clientsToggleButton
    }
}


export default useInitialState