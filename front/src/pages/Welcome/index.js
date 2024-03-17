import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {

    const navigation = useNavigation()
    return (
        <SafeAreaView className="flex-1 bg-[#5228A5]">
            <View className="flex justify-center my-2">

                <View className="flex justify-center self-center">
                    <Image source={require("../../../assets/logo-welcome.png")} style={{width: 350, height: 350}} />
                </View>

                <Text className="text-white font-semibold text-3xl text-center mx-4 mt-8">Mães fortes, finanças firmes!</Text>

                <View className="pt-40">
                    <TouchableOpacity onPress={() => navigation.navigate("Login")} className="h-[61px] bg-[#CB6CE6] rounded-3xl mx-7 items-center justify-center">
                        <Text className="text-white text-2xl font-semibold">Iniciar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}