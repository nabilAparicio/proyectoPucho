import React, {useState, useEffect,useContext} from "react";
import { login } from "../network/ApiAxios";
import { useAuth } from "../../hooks";

export default function Login({children}) {
    const {token, setToken} = useAuth ("")
    const [isloggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        const usr = ()=>{
            if (sessionStorage._token) {
                setIsLoggedIn(true)
                setToken(sessionStorage._token)
            } else {
                setIsLoggedIn(false) 
            }
        }
        usr()
    },[]);

    // if (typeof window !== 'undefined') {
    //     if (sessionStorage.getItem("_token")) {
    //         setIsLoggedIn(true)
    //     }
    // }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
  
    const tryLogin = async () => {
        const response = await login(email, password);
        const data = response;
        if (data.token) {
            sessionStorage.setItem("_token", data.token);
            setToken(data.token)
            setIsLoggedIn(true)
        } else {
            setError(data.statusText)
        }
    }

  return (
    <>
        {!isloggedIn ? (
            <div className="flex items-center justify-center fixed  top-1/4 left-0 right-0">
                <div className="w-full max-w-md ">
                    <form className="bg-slate-100 shadow-2xl rounded-lg px-12 pt-6 pb-8 mb-4">
                        <div className="text-gray-800 text-3xl flex justify-center border-b-2 py-2 mb-4">
                            Login
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-normal mb-2"
                                htmlFor="username">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border focus:border-blue-500 focus:shadow-xl "
                                name="email"
                                v-model="form.email"
                                type="email"
                                required="required"
                                autoFocus
                                placeholder="Email"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-normal mb-2"
                                htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline focus:border focus:border-blue-500 focus:shadow-xl"
                                v-model="form.password"
                                type="password"
                                placeholder="Password"
                                name="password"
                                required
                                autoComplete="current-password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className=" text-red-500 uppercase text-sm font-bold text-center ">{error ? error+' please try again' : ''}</div>
                        <div className="flex items-center justify-between mt-4">
                            <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-800 duration-300 px-6 py-2 rounded-xl "  onClick={tryLogin} type="button">Sign In</button>
                            <a className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                                href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2022 Nurtech All rights reserved.
                    </p>
                </div>
            </div>
        ):(children)}
    </>
  );
} 