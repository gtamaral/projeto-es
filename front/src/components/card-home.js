import { CardBase } from "@rneui/base/dist/Card/Card";
import { CardTitle } from "@rneui/base/dist/Card/Card.Title";
import { Text, View } from "react-native";




export default function CardHome({saldo}) {
    return (
        <View className="bg-[#5228A5] h-36 mx-5 mt-10 rounded-xl p-0">
            <View className="flex items-center">
                <Text className=" text-white text-xl font-bold mt-4">Controle financeiro</Text>
            </View>
            <View className="flex-row justify-between pt-4 mx-5">
                <View className="w-[100px]">
                    <Text className="text-center text-white text-lg font-semibold ">Balanço atual:</Text>
                </View>
                <View className="w-[130px] items-center justtify-center flex mt-4">
                    <Text className="font-base text-white text-lg font-semibold">- R${saldo}</Text>
                </View>
            </View>
        </View>
    )
}