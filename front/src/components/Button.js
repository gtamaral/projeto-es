import { Pressable, Text, TouchableOpacity, View } from "react-native";

export default function Button({text}) {

  return (
    <TouchableOpacity className="h-16 bg-[#8C52FF] mx-5 rounded-3xl items-center justify-center">
        <Text className="font-semibold text-xl text-white px-5">{text}</Text>
    </TouchableOpacity>
  )
}
