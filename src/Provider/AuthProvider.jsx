import { getAuth } from "firebase/auth";
import { createContext } from "react";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const authInfo = {
        "name" : "Al"
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;