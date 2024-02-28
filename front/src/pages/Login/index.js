import { Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import Button from "../../components/Button";
import { Image } from "react-native";

export default function Login() {
    return (
        <View className="flex-1 bg-[#F8F7FA] p-0">
            {/* <View><Image source={require("../../../assets/icon-auth-screen.png")} /></View> */}
            <View className="items-center justify-center flex pt-28">
                <Text className="font-semibold text-4xl text-[#8C52FF] ">Login</Text>
                <Text className="text-xl text-[#a2a1a1] font-semibold pt-5 mx-20 text-center">Entre com seu email e senha!</Text>
            </View>

            <View className="pt-14 flex">
                <View className="h-16  bg-[#ebe8f1] mx-5 rounded-full mb-6 items-start pl-6 justify-center">
                    <TextInput className="font-semibold text-base pb-1 text-black" placeholder="Email"></TextInput>
                </View>

                <View className="h-16 bg-[#ebe8f1] mx-5 rounded-full items-start justify-center">
                    <TextInput className="font-semibold text-base text-[#a2a1a1] px-5" placeholder="Senha"></TextInput>
                </View>
            </View>

            <View className="pt-10">
                <Button text="teste" />
            </View>

            <View className="pt-8 items-center justify-center leading-8">
                <Text className="text-base font-semibold text-[#a2a1a1]">Ou entrar com</Text>
            </View>

            <View className="pt-8">
                <Button text="Entrar com Google" />
                <View className="flex items-center justify-center pt-6">
                    <Text className="text-base text-[#777777] font-semibold">Não tem conta? <Text className="text-[#8C52FF]">Crie aqui.</Text></Text>
                    
                </View>
            </View>
        </View> 
    )
}