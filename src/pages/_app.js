import "@material-tailwind/react/tailwind.css";
import '../styles/globals.css';
import {
    AuthProvider, 
    UserIdDataProvider, 
    UserEmailDataProvider,
    UserEmailVerifiedDataProvider,
    UserNameDataProvider,
    UserCurrentTeamIdProvider,
    UserProfilePhotoPathProvider,
    UserCreateAtProvider,
    UserUpdateAtProvider,
} from "../../hooks"
function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <UserIdDataProvider>
                <UserEmailDataProvider>
                    <UserEmailVerifiedDataProvider>
                        <UserNameDataProvider>
                            <UserCurrentTeamIdProvider>
                                <UserProfilePhotoPathProvider>
                                    <UserCreateAtProvider>
                                        <UserUpdateAtProvider>                                           
                                             <Component {...pageProps} />
                                        </UserUpdateAtProvider>
                                    </UserCreateAtProvider>
                                </UserProfilePhotoPathProvider>
                            </UserCurrentTeamIdProvider>
                        </UserNameDataProvider>
                    </UserEmailVerifiedDataProvider>
                </UserEmailDataProvider>
            </UserIdDataProvider>
        </AuthProvider>

    )
}

export default MyApp
