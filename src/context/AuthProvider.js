import React, { createContext } from 'react';
import useFirebse from '../hooks/useFirebase';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
   // const{children} = props;
    const allContext = useFirebse();
    return (
        <div>
            <AuthContext.Provider value={allContext}>
        {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;