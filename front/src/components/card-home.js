import { CardBase } from "@rneui/base/dist/Card/Card";
import { CardTitle } from "@rneui/base/dist/Card/Card.Title";
import { Text, View } from "react-native";
import { Card } from '@rneui/themed';




export default function CardHome({saldo}) {
    return (
        <View className="bg-[#5228A5] h-36 mx-5 mt-10 rounded-xl ">
            <View className="flex items-center">
                <Text className=" text-white text-xl font-bold mt-3">Controle financeiro</Text>
            </View>
            <View className="items-center mt-4">
                <Text className="font-base  text-white text-xl">+ R${saldo}</Text>
            </View>
        </View>
    )
}