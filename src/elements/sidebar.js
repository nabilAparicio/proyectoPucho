import React, {useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiMenu, HiTemplate, HiUserGroup, HiFolderOpen, HiCode } from "react-icons/hi";
import { useNameData, useSidebarToggle } from "../../hooks";

function Sidebar() {
    const [toggle, settoggle] = useState(true);
    const handleToggle = () => {
        settoggle(!toggle)
    }
    const router = useRouter();
    return (
    <>
        <nav className= {toggle ? 'active row-start-2 row-span-6  w-14 transition-all ease-in-out duration-150 ' : 'row-start-2 row-span-6 w-48 transition-all ease-in-out duration-150'}>
            <div className={toggle ? 'rounded-lg  overflow-y-auto shadow-2xl bg-slate-100 z-10 py-4  h-full' : 'rounded-lg  overflow-y-auto shadow-2xl bg-slate-100 z-10 py-4 px-2 h-full'}>
                <div className= {toggle ? 'flex justify-center' : 'flex justify-between mx-3'}>
                    <i className={toggle ? 'hidden' : 'uppercase'}>
                        Nurtech 
                    </i>
                    <button type="button" onClick={handleToggle}>
                        <i className="text-2xl hover:text-blue-700">
                            <HiMenu/>
                        </i>
                    </button>
                </div>
                <hr className="my-4 min-w-full" />
                <ul className=" font-bold block ">
                    <li className= "flex px-4 gap-4 items-center p-1 hover:-translate-y-1 rounded-lg  transition  ease-in-out delay-150 border-2 border-slate-200 hover:border-2 hover:shadow-lg hover:text-white hover:bg-blue-700 duration-300 whitespace-nowrap grow-0 py-4 ">
                        <div className={toggle ? 'grow-0 text-2xl' : 'grow-0 text-xl '}>
                            <HiTemplate/>
                        </div>
                        <Link href="/landing" >
                            <a href="#nabil" className={toggle ? 'hidden' : ''}> 
                                Dashboard
                            </a>
                        </Link>
                    </li>
                    <li className="flex px-4 gap-4 items-center p-1 hover:-translate-y-1 rounded-lg ansition p ease-in-out delay-150 border-2 border-slate-200 hover:border-2 hover:shadow-lg hover:text-white hover:bg-blue-700 duration-300 grow-0 py-4" >
                        <div className={toggle ? 'grow-0 text-2xl' : 'grow-0 text-xl '}>
                            <HiUserGroup/>
                        </div>
                        <Link href="/landing">
                            <a href="#nabil" className={toggle ? 'hidden' : ''}  > 
                                Clients
                            </a>
                        </Link>
                    </li>
                    <li className="flex px-4 gap-4 items-center p-1 hover:-translate-y-1 rounded-lg ansition p ease-in-out delay-150 border-2 border-slate-200 hover:border-2 hover:shadow-lg hover:text-white hover:bg-blue-700 duration-300 grow-0 py-4">
                        <div className={toggle ? 'grow-0 text-2xl' : 'grow-0 text-xl '}>
                            <HiFolderOpen/>
                        </div>
                        <Link href="/landing">
                            <a href="#nabil" className={toggle ? 'hidden' : ''} > 
                                Products
                            </a>
                        </Link>
                    </li>
                    <li className="flex px-4 gap-4 items-center p-1 hover:-translate-y-1 rounded-lg ansition p ease-in-out delay-150 border-2 border-slate-200 hover:border-2 hover:shadow-lg hover:text-white hover:bg-blue-700 duration-300 grow-0 py-4">
                        <div className={toggle ? 'grow-0 text-2xl' : 'grow-0 text-xl '}>
                            <HiCode/>
                        </div>
                        <Link href="/landing">
                            <a href="#nabil" className={toggle ? 'hidden' : ''} > 
                                Works
                            </a>
                        </Link>
                    </li>
                </ul>
                <hr className="my-4 md:min-w-full" />
                <ul>
                    <li>
                        Log in
                    </li>
                    <li>
                        Log out
                    </li>
                </ul>
                <hr className="my-4 md:min-w-full" />
                <ul>
                    <li>
                        Settings
                    </li>
                </ul>
            </div>
        </nav>
    </>
    )
  }
  
  export default Sidebar