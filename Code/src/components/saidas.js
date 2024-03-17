import { FlatList, Text, TouchableOpacity, View } from "react-native";
 // Importe useNavigation


const Saidas = ({title, value}) => {

    // To do: extract the id and pass only the correctly informations
    // const navigation = useNavigation();
    return (
        <TouchableOpacity>
            <View className="h-14 mb-4 shadow-md border-b">
            <View className="flex-row items-center justify-between p-3 mx-4">
                {/* <Text className="font-normal  text-lg text-white">X</Text> */}
                <Text className="font-normal text-lg  text-white">{title}</Text>
                <Text className="font-bold text-lg text-white">R$ {value}</Text>
            </View>
        </View>   
        </TouchableOpacity> 
    )
}

export default Saidas;