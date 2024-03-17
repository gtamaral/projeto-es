import { Avatar } from "@rneui/base/dist/Avatar/Avatar"
import { View, Text, SafeAreaView } from "react-native"

export default function Header({name}) {
    return(
            <View className="bg-[#5228A5] pt-14 pb-3">
                <View className="flex flex-row items-center px-7">
                    <Avatar
                        size={32}
                        rounded
                        title="Mj"
                        containerStyle={{ backgroundColor: "gray" }}
                         />
                    <Text className="text-base text-white pl-8 font-semibold">Olá, {name}!</Text>
                </View>
            </View>
    )
}