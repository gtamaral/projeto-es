import { Text, TouchableOpacity, View } from "react-native";
import CardCategory from "./card-category";
import { AntDesign } from '@expo/vector-icons';
import { CATEGORIAS, CATEGORIAS_GASTOS_COM_TOTAL } from "../utils/data/info";
import { useState } from "react";



export default function CategoryHeader() {
    const [category, setCategory] = useState(CATEGORIAS[0])
    
    const categorySelectedPrice = CATEGORIAS_GASTOS_COM_TOTAL.find(categoria => categoria.title === category)

    return  (
        <>
            <View className="">
          {categorySelectedPrice && (
              <CardCategory name={categorySelectedPrice.title} value={categorySelectedPrice.totalValue.toFixed(2)} />
          )}
            
        </View>

        <View className="flex-row justify-between pt-8 mb-8 px-6 items-center">
              <Text className="text-2xl text-white font-base">Adicionar saída</Text>
              <TouchableOpacity activeOpacity={0.6}>
                  <AntDesign name='pluscircle' size={24} color="white"/>
              </TouchableOpacity>
        </View>
        </>
    )
}