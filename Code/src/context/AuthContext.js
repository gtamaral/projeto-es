import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebaseconfig';



// Hook para usar o contexto de autenticação
export const AuthContext = createContext();

// Provedor do contexto
export const AuthProvider = ({ children }) => {
    
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const updateUser = (additionalInfo) => {
        if (currentUser) {
            setCurrentUser({ ...currentUser, ...additionalInfo });
        }
    }
     
    useEffect(() => {
        const auth = getAuth();
        

        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                
                // Busca adicional para pegar o nome do usuário do Firestore
                const userDocRef = doc(db, "users", user.uid);
                const userDocSnapshot = await getDoc(userDocRef);

                if (userDocSnapshot.exists()) {
                    // Se o documento existe, adiciona o nome ao objeto do usuário
                    const userData = userDocSnapshot.data();
                    setCurrentUser({
                        ...user,
                        // ...userData,
                        name: userData.name // Supondo que o campo no Firestore seja 'name'
                    });
                } else {
                    // Se não há documento no Firestore, mantém apenas as infos do Auth
                    setCurrentUser(user);
                }
            } else {
                setCurrentUser(null);
            }
            setLoading(false);
        });

        // Retorna uma função para desinscrever o observador quando o componente é desmontado
        return unsubscribe;

    }, []);


    const value = {
        currentUser,
        loading,
        updateUser,
    };

    return (
        <AuthContext.Provider value={
            value
        }>
            {!loading && children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}