import {useEffect,useState} from "react";
import Navbar from "../elements/navbar";
import Sidebar from "../elements/sidebar";
import { getUser } from "../network/ApiAxios";
import { 
    useAuth,
    useIdData,
    useEmailData,
    useEmailVerifiedData,
    useNameData,
    useCurrentTeamIdData,
    useProfilePhotoData,
    useCreateAtData,
    useUpdateAtData
} from "../../hooks"

function Dashboard() {
    const {token, setToken} = useAuth ("")
    const {id, setId} = useIdData ("")
    const {email, setEmail} = useEmailData ("")
    const {emailVerified, setEmailVerified} = useEmailVerifiedData ("")
    const {name, setName} = useNameData ("")
    const {currentTeam, setCurrentTeam} = useCurrentTeamIdData ("")
    const {photoPath, setPhotoPath} = useProfilePhotoData ("")
    const {createAt, setCreateAt} = useCreateAtData ("")
    const {updateAt, setUpdateAt} = useUpdateAtData ("")
  useEffect(() => {
    const usr = async ()=>{
        const response = await getUser(token);
        const {data} = response;
        console.log(data)
        if (data.id) {
            setId(data.id)
            setEmail(data.email)
            setEmailVerified(data.email_verified_at)
            setName(data.name)
            setCurrentTeam(data.current_team_id)
            setPhotoPath(data.profile_photo_path)
            setCreateAt(data.created_at)
            setUpdateAt(data.updated_at)
        }
    }
    usr()
  },[]);

    return (    
    <>
        <div className=" p-2 bg-gradient-to-r from-cyan-500 to-blue-500 h-screen  grid gap-1 grid-cols-12 grid-rows-6 ">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
        </div>
      
    </>
  );
  }
  
  export default Dashboard