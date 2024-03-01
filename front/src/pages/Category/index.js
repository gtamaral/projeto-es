import { View, TouchableOpacity, Text, ScrollView , SectionList, SafeAreaView} from "react-native";


import CardCategory from "../../components/card-category" 
import { AntDesign } from '@expo/vector-icons';
import Saidas from "../../components/saidas";
import { CATEGORIAS, CATEGORIAS_GASTOS, CATEGORIAS_GASTOS_COM_TOTAL } from "../../utils/data/info";
import { FlatList } from "react-native";
import CategoryButton from "../../components/category-button";
import { useRef, useState } from "react";
import CategoryHeader from "../../components/category-header";


export default function Category() {

  const [category, setCategory] = useState(CATEGORIAS[0])

  const sectionRef = useRef(null)

   const handleCategorySelect = (selectedCategory) => {
      setCategory(selectedCategory)

      const sectionIndex = CATEGORIAS.findIndex((category) => category === selectedCategory)

    }

  const categorySelectedPrice = CATEGORIAS_GASTOS_COM_TOTAL.find(categoria => categoria.title === category)


  return (
    <View className="flex-1 bg-[#5228A5]">

      <SafeAreaView className="flex-1">

          <View className="items-start px-5 pt-6">
            <Text className="text-white font-semibold text-2xl">Categorias:</Text>
          </View>


          <View>
            <FlatList 
              ref={sectionRef}
              data={CATEGORIAS}
              keyExtractor={(item) => item}
              renderItem={({item}) => (
                <CategoryButton 
                  title={item}
                  isSelected={item === category}
                  onPress={() => handleCategorySelect(item)}
                />
              )}
              horizontal
              className="max-h-10 mt-5"
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
        
            />
        </View>
        
          <SectionList    
            ListHeaderComponent={CategoryHeader}
            sections={CATEGORIAS_GASTOS.filter(categoria => categoria.title === category)}
            keyExtractor={(item, index) => item + index }
            stickySectionHeadersEnabled={false}
            renderItem={({item}) => (<Saidas title={item.title} value={item.value} /> )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:100}}
          />
          {/* </ScrollView> */}
          
        </SafeAreaView>
    </View>


  )
}
