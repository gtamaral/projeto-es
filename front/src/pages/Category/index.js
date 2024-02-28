import { View, TouchableOpacity, Text, ScrollView , SectionList, SafeAreaView} from "react-native";


import CardCategory from "../../components/card-category" 
import { AntDesign } from '@expo/vector-icons';
import Saidas from "../../components/saidas";
import { CATEGORIAS, CATEGORIAS_GASTOS } from "../../utils/data/info";
import { FlatList } from "react-native";
import CategoryButton from "../../components/category-button";
import { useState } from "react";




export default function Category() {

  const [category, setCategory] = useState(CATEGORIAS[0])


  return (
    <View className="flex-1 bg-[#5228A5]">

        <SafeAreaView className="flex-1">
          <View>
          <FlatList 
        data={CATEGORIAS}
        keyExtractor={(item) => item}
        renderItem={({item}) => (
          <CategoryButton 
            title={item}
            isSelected={item === category}
            onPress={() => setCategory(item)}
           
           />
        )}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
      
       />
        </View>
        <View className="">
            <CardCategory name="Casa" value="1500,00" />
        </View>

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
        </SafeAreaView>
    </View>
  )
}
