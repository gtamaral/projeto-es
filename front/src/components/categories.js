import { View,Text, TouchableOpacity } from "react-native"
import { AntDesign } from '@expo/vector-icons';

const Categories = ({title, totalValue}) => {
    return (
        
        <TouchableOpacity activeOpacity={.4}>
            <View className="bg-[#EDEDED] mx-4 h-14 mt-4 flex-row justify-between rounded-3xl items-center px-5 border-b-4 border-[#8000ff]">
                <View className="flex-row gap-10 items-center">
                    <AntDesign name="heart" size={18} color="black" />
                    <Text className="font-base text-lg">{title}</Text>
                </View>
                <Text className="font-base text-lg">R${totalValue},00</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Categories;