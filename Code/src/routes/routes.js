import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthProvider, useAuth } from '../context/AuthContext';
// import { AuthProvider } from '../context/AuthContext';

const Routes = () => {

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        });
        return unsubscribe; // Limpeza da subscrição
    }, []);

    return (
        <AuthProvider>
        <NavigationContainer>
            {currentUser ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
        </AuthProvider>
    );
}

export default Routes;