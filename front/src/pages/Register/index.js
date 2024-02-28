import { Text, TextInput, View } from "react-native";
import Button from "../../components/Button";

const Register = () => {
    return (
        <View className="flex-1 bg-[#F8F7FA]">
            <View className="items-center justify-center flex pt-32">
                <Text className="font-bold text-[#8C52FF] text-3xl">Criar conta</Text>
                <Text className="font-bold text-[#a2a1a1] font-semibold pt-5 text-xl mx-10 text-center">Coloque suas informações abaixo</Text>
            </View>

            <View className="p-0 mt-8 flex mb-8">
                <View className="h-[60px] rounded-full bg-[#ebe8f1] mx-5 mb-4"><TextInput editable className="p-6" placeholder="Nome" /></View>
                <View className="h-[60px] rounded-full bg-[#ebe8f1] mx-5 mb-4"><TextInput editable className="p-6" placeholder="Email" /></View>
                <View className="h-[60px] rounded-full bg-[#ebe8f1] mx-5 mb-4"><TextInput editable className="p-6" placeholder="Senha"/></View>
                <View className="h-[60px] rounded-full bg-[#ebe8f1] mx-5"><TextInput editable className="p-6" placeholder="Repetir a senha"/></View>
            </View>

            <Button text="Criar conta" className="mt-8" />

            <View className="flex items-center justify-center mt-6">
                <Text className="text-base text-[#a2a1a1] font-bold">Já tem conta? <Text className="text-[#8C52FF] text-base font-bold">Entre aqui.</Text></Text>
            </View>
        </View>
    )
}

export default Register;