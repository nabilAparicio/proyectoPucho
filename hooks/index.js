import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null)
export const UserIdDataContext = createContext(null)
export const UserEmailDataContext = createContext(null)
export const UserEmailVerifiedDataContext = createContext(null)
export const UserNameDataContext = createContext(null)
export const UserCurrentTeamIdDataContext = createContext(null)
export const UserProfilePhotoPathDataContext = createContext(null)
export const UserCreateAtDataContext = createContext(null)
export const UserUpdateAtDataContext = createContext(null)

export const AuthProvider = ({children}) => {
    const[token, setToken] = useState(null)
    return (
        <AuthContext.Provider value = {{token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}
export const UserIdDataProvider = ({children}) => {
    const[id, setId] = useState(null)
    return (
        <UserIdDataContext.Provider value = {{id, setId}}>
            {children}
        </UserIdDataContext.Provider>
    )
}
export const UserEmailDataProvider = ({children}) => {
    const[email, setEmail] = useState(null)
    return (
        <UserEmailDataContext.Provider value = {{email, setEmail}}>
            {children}
        </UserEmailDataContext.Provider>
    )
}
export const UserEmailVerifiedDataProvider = ({children}) => {
    const[emailVerified, setEmailVerified] = useState(null)
    return (
        <UserEmailVerifiedDataContext.Provider value = {{emailVerified, setEmailVerified}}>
            {children}
        </UserEmailVerifiedDataContext.Provider>
    )
}
export const UserNameDataProvider = ({children}) => {
    const[name, setName] = useState(null)
    return (
        <UserNameDataContext.Provider value = {{name, setName}}>
            {children}
        </UserNameDataContext.Provider>
    )
}
export const UserCurrentTeamIdProvider = ({children}) => {
    const[currentTeam, setCurrentTeam] = useState(null)
    return (
        <UserCurrentTeamIdDataContext.Provider value = {{currentTeam, setCurrentTeam}}>
            {children}
        </UserCurrentTeamIdDataContext.Provider>
    )
}
export const UserProfilePhotoPathProvider = ({children}) => {
    const[photoPath, setPhotoPath] = useState(null)
    return (
        <UserProfilePhotoPathDataContext.Provider value = {{photoPath, setPhotoPath}}>
            {children}
        </UserProfilePhotoPathDataContext.Provider>
    )
}
export const UserCreateAtProvider = ({children}) => {
    const[createAt, setCreateAt] = useState(null)
    return (
        <UserCreateAtDataContext.Provider value = {{createAt, setCreateAt}}>
            {children}
        </UserCreateAtDataContext.Provider>
    )
}
export const UserUpdateAtProvider = ({children}) => {
    const[updateAt, setUpdateAt] = useState(null)
    return (
        <UserUpdateAtDataContext.Provider value = {{updateAt, setUpdateAt}}>
            {children}
        </UserUpdateAtDataContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
export const useIdData = () => useContext(UserIdDataContext)
export const useEmailData = () => useContext(UserEmailDataContext)
export const useEmailVerifiedData = () => useContext(UserEmailVerifiedDataContext)
export const useNameData = () => useContext(UserNameDataContext)
export const useCurrentTeamIdData = () => useContext(UserCurrentTeamIdDataContext)
export const useProfilePhotoData = () => useContext(UserProfilePhotoPathDataContext)
export const useCreateAtData = () => useContext(UserCreateAtDataContext)
export const useUpdateAtData = () => useContext(UserUpdateAtDataContext)