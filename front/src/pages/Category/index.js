import { View, TouchableOpacity, Text, ScrollView , SectionList} from "react-native";


import CardCategory from "../../components/card-category" 
import { AntDesign } from '@expo/vector-icons';
import Saidas from "../../components/saidas";
import { CATEGORIAS_GASTOS } from "../../utils/data/info";




export default function Category() {

  // to do: extract id in component and pass to the screen
  // const {id} = useLocalSearchParams()
  // const navigation = useNavigation()


  return (
    <View className="flex-1 bg-[#5228A5]">
      <CardCategory name="Casa" value="1500,00" />

      <View className="flex-row justify-between pt-8 mb-8 px-6 items-center">
            <Text className="text-2xl text-white font-base">Adicionar saída</Text>
            <TouchableOpacity activeOpacity={0.6}>
                <AntDesign name='pluscircle' size={24} color="white"/>
            </TouchableOpacity>
        </View>

          <SectionList    
            sections={CATEGORIAS_GASTOS}
            keyExtractor={(item) => item.id }
            stickySectionHeadersEnabled={false}
            // renderSectionHeader={(item) => <Saidas title={item.title} value={item.value}  />}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (<Saidas title={item.title} value={item.value} /> )}
            contentContainerStyle={{paddingBottom:100}}
          />
    </View>
  )
}
