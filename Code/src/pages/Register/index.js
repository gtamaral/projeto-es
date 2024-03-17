// react & native
import { Alert, SafeAreaView, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

// icons
import { AntDesign } from '@expo/vector-icons';

// firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// db
import { db } from "../../config/firebaseconfig";

// context api
import { useAuth } from "../../context/AuthContext";


const Register = () => {
    const navigation = useNavigation()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleLogin = useAuth()

    async function register() {
        try {
            const auth = getAuth();

            if ( name === "" || email === "" || password === "" || confirmPassword === "") {
                Alert.alert("É necessário preencher todos os campos!")
                return
            }
            if (password !== confirmPassword) {
                Alert.alert("As senhas precisam ser iguais!")
                return 
            }
            if (password.length & confirmPassword.length <6) {
                Alert.alert("As senhas precisam ter mais do que 6 caracteres!")
                return
            }

                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    setDoc(doc(db, "users", user.uid) ,{
                        name: name,
                        email: email

                    }).then(() => {
                        Alert.alert("Usuário registrado com sucesso!")
                    })
                   
                })
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert("Erro no login!", errorMessage)
        }
    }
    return (
        <View className="flex-1 bg-white">
            {/* icon */}
            <SafeAreaView className="">
            <View className="flex-row justify-start">
                <TouchableOpacity onPress={() => navigation.goBack()} className="bg-[#8C52FF] p-2 mt-3 rounded-tr-2xl rounded-bl-2xl ml-4">
                    <AntDesign name="arrowleft" size={20} color="white" />
                </TouchableOpacity>
            </View>

            <View className="items-center justify-center flex pt-8">
                <Text className="font-semibold text-[#8C52FF] text-3xl">Criar conta</Text>
                <Text className=" text-[#a2a1a1] font-semibold pt-5 text-xl mx-10 text-center">Coloque suas informações abaixo</Text>
            </View>

            <View className="mt-8 flex mb-14">
                <View className="h-[60px] rounded-3xl bg-gray-100 mx-5 mb-4">
                    <TextInput 
                        editable 
                        className="p-5" 
                        placeholder="Nome" 
                        textContentType="name"
                        value={name}
                        onChangeText={(text) => setName(text)}
                        />
                </View>
                <View className="h-[60px] rounded-3xl bg-gray-100 mx-5 mb-4">
                    <TextInput 
                        keyboardType="default" 
                        editable 
                        className="p-5" 
                        placeholder="Email"
                        textContentType="emailAddress"
                        value={email}
                        onChangeText={(text) => setEmail(text)} 
                        />
                </View>
                <View className="h-[60px] rounded-3xl bg-gray-100 mx-5 mb-4">
                    <TextInput 
                        className="p-5" 
                        // keyboardType="default" 
                        editable
                        placeholder="Senha" 
                        secureTextEntry
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        textContentType="password"
                        />
                </View>
                <View className="h-[60px] rounded-3xl bg-gray-100 mx-5">
                    <TextInput 
                        editable 
                        className="p-5" 
                        placeholder="Repetir a senha" 
                        secureTextEntry
                        onChangeText={(text) => setConfirmPassword(text)}
                        value={confirmPassword}
                        textContentType="password"
                        />
                </View>
            </View>

            <TouchableOpacity onPress={register} className="h-[61px] bg-[#8C52FF] mx-5 rounded-3xl items-center justify-center">
                <Text 
                    className="font-semibold text-xl text-white px-5"
                    >
                        Criar conta
                </Text>
            </TouchableOpacity>

            <View className="flex-row items-center justify-center mt-8">
                <Text className="text-base text-[#a2a1a1] font-semibold">Já tem conta? </Text>
                <TouchableOpacity> 
                    <Text onPress={() => navigation.navigate("Login")} className="text-[#8C52FF] text-base font-semibold">Entre aqui.</Text>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
        </View>
    )
}

export default Register;