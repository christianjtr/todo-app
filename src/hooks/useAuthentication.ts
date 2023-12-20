
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';
import * as LoginServices from '../services/loginService';
import * as TaskServices from '../services/taskService';
interface useAuthenticationInterface {
    checkAuthToken: () => boolean;
    logIn: (credentials: LoginServices.LoginCredentials) => Promise<void>;
    logOut: () => Promise<void>;
} 

const useAuthentication = (): useAuthenticationInterface => {
    
    const history = useHistory();

    useEffect(() => {
        if(checkAuthToken()) history.push("/home");
    }, [history]);
    
    const checkAuthToken = (): boolean => {
        return !!Cookies.get('authToken');
    }

    const logIn = async (credentials: LoginServices.LoginCredentials): Promise<void> => {
        const { authToken } = await LoginServices.logIn(credentials);
        
        Cookies.set('authToken', authToken, { 
            sameSite: 'strict',
            expires: 7,
            // secure: true, <-- HTTPS Protocols only
        });
        
        if(checkAuthToken()) history.push("/home");
    }

    const logOut = async (): Promise<void> => {
        await LoginServices.logOut();
        
        if(checkAuthToken()) Cookies.remove('authToken');
        TaskServices.deleteTasks();
        
        history.push("/login");
    }

    return {
        checkAuthToken,
        logIn,
        logOut
    }
}

export default useAuthentication;
