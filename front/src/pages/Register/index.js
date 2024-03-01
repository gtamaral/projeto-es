import { SafeAreaView, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import Button from "../../components/Button";
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

const Register = () => {
    const navigation = useNavigation()
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
                <View className="h-[60px] rounded-3xl bg-gray-100 mx-5 mb-4"><TextInput editable className="p-5" placeholder="Nome" /></View>
                <View className="h-[60px] rounded-3xl bg-gray-100 mx-5 mb-4"><TextInput editable className="p-5" placeholder="Email" /></View>
                <View className="h-[60px] rounded-3xl bg-gray-100 mx-5 mb-4"><TextInput className="p-5" placeholder="Senha" secureTextEntry/></View>
                <View className="h-[60px] rounded-3xl bg-gray-100 mx-5"><TextInput editable className="p-5" placeholder="Repetir a senha" secureTextEntry/></View>
            </View>

            <Button text="Criar conta" className="mt-1" />

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