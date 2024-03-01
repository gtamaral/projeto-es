import { SafeAreaView, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import Button from "../../components/Button";
import { Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

export default function Login() {
    const navigation = useNavigation()

    return (
        <View className="flex-1 bg-white">
            <SafeAreaView className="flex">
            {/* <View><Image source={require("../../../assets/icon-auth-screen.png")} /></View> */}

            {/* icon */}
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
                    <TextInput className="h-[60px] bg-gray-100 mx-5 rounded-3xl p-5 text-sm" placeholder="Email" />

                    <TextInput className="h-[60px] bg-gray-100 mx-5 mt-5 rounded-3xl p-5 text-sm " placeholder="Senha" secureTextEntry/>
            </View>

            <View className="pt-10">
                <Button text="Entrar" />
            </View>

            <View className="pt-8 items-center justify-center leading-8">
                <Text className="text-base font-semibold text-[#a2a1a1]">Ou entrar com</Text>
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