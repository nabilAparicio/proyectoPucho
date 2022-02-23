import "@material-tailwind/react/tailwind.css";
import '../styles/globals.css';
import {
    AuthProvider, 
} from "../../hooks"
import AppContext from "../context/AppContext";
import useInitialState from "../../hooks/useInitialState";

function MyApp({ Component, pageProps }) {
    const initialState = useInitialState()
    return (
        <AuthProvider>
            <AppContext.Provider value={initialState}>                                    
                <Component {...pageProps} />                           
            </AppContext.Provider>
        </AuthProvider>

    )
}

export default MyApp
