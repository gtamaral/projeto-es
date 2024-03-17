import { Text } from "react-native";
import { View } from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';


export default function CardCategory({name, value}) {
    return (
        <View className="h-[120px] mx-6 mt-10 rounded-xl bg-[#FFFFFF]">
          <View className="flex-row gap-5 pt-9 items-center justify-center">
            <View className="h-[50px] px-3 rounded-full flex items-center justify-center bg-[#D9D9D9]">
              <FontAwesome5 name="piggy-bank" size={24} color="black" />
            </View>
            <View>
              <Text className="font-semibold text-2xl">{name}</Text>
              <Text className="font-semibold text-xl">R${value}</Text>
            </View>
          </View>
      </View>
    )
}

