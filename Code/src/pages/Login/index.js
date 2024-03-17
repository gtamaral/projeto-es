// react & rn
import { Alert, SafeAreaView, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";

// components
import Button from "../../components/Button";

// db & firebase
import { db } from "../../config/firebaseconfig"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

// icons
import { AntDesign } from '@expo/vector-icons';

// context
import { useAuth } from "../../context/AuthContext";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    const navigation = useNavigation()

    const {updateUser} = useAuth()

    const login = async() => {
        try {
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            const userDocRef = doc(db, "users", user.uid)
            const userDocSnapshot = await getDoc(userDocRef)

            if (userDocSnapshot.exists()) {
                const userData = userDocSnapshot.data();
                updateUser(userData)
            } else {
                console.log("Nenhum documento encontrado no firebase para este usuário")
            }
                
        } catch (error) {
            setErrorLogin(true)
            const errorMessage = "Ocorreu um erro desconhecido."
            if (error.code === "auth/wrong-password") {
                errorMessage = "Senha incorreta."
            } else if (error.code === "auth/user-not-found") {
                errorMessage = "Usuário não encontrado."
            }
            Alert.alert("Erro no login!", errorMessage)
        }
    }

    return (
        <View className="flex-1 bg-white">
            <SafeAreaView className="flex">

            <View className="flex-row justify-start">
                <TouchableOpacity onPress={() => navigation.goBack()} className="bg-[#8C52FF] p-2 mt-3 rounded-tr-2xl rounded-bl-2xl ml-4">
                    <AntDesign name="arrowleft" size={20} color="white" />
                </TouchableOpacity>
            </View>

            <View className="items-center justify-center pt-8">
                <Text className="font-semibold text-4xl text-[#8C52FF] ">Login</Text>
                <Text className="text-xl text-[#a2a1a1] font-semibold pt-5 mx-20 text-center">Entre com seu email e senha!</Text>
            </View>

            <View className="pt-14 flex form">
                    <TextInput 
                     className="h-[60px] bg-gray-100 mx-5 rounded-3xl p-4 py-0 text-sm" 
                     placeholder="Email" 
                     onChangeText={(text) => setEmail(text)}
                     value={email}
                    />

                    <TextInput 
                     className="h-[60px] bg-gray-100 mx-5 mt-5 rounded-3xl p-5 text-sm " 
                     placeholder="Senha" 
                     onChangeText={(text) => setPassword(text)}
                     value={password}
                     secureTextEntry
                     />

                     
                     {email === "" || password === "" ? <TouchableOpacity disabled className="h-[61px] bg-[#8C52FF] mx-5 mt-5 rounded-3xl items-center justify-center"><Text className="font-semibold text-xl text-white px-5">Entrar</Text></TouchableOpacity> : <View className="pt-10">
                            <TouchableOpacity onPress={login} className="h-[61px] bg-[#8C52FF] mx-5 mt-5 rounded-3xl items-center justify-center"><Text className="font-semibold text-xl text-white px-5">Entrar</Text></TouchableOpacity>
                        </View>}
            </View>

            

            <View className="mt-6 items-center justify-center flex ">
                <View className="flex-1 border-t border-gray-900 "></View>
                <Text className="text-base font-semibold text-[#a2a1a1] flex-shrink mx-4">Ou entrar com</Text>
                <View className="flex- border-t border-gray-900"></View>
            </View>

            <View className="pt-8">
                <Button text="Entrar com Google" />
                <View className="flex items-center justify-center pt-6">
                    <Text className="text-base text-[#a2a1a1] font-semibold">Não tem conta? <Text onPress={() => navigation.navigate("Register")} className="text-[#8C52FF]">Crie aqui.</Text></Text>
                    
                </View>
            </View>
            </SafeAreaView>
        </View> 
    )
}