import { StatusBar } from 'expo-status-bar';
import { ScrollView, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/header';
import CardHome from '../../components/card-home';
import { AntDesign } from '@expo/vector-icons';
import Categories from '../../components/categories';



// data
import {CATEGORIAS_GASTOS, CATEGORIAS, CATEGORIAS_GASTOS_COM_TOTAL} from "../../utils/data/info"

export default function Home() {
  return (
    
    <View className="flex-1">
        <Header name="Maria" />
        <CardHome saldo="1500,00"/>
        
        <View className="flex-row justify-between pt-4 px-6 items-center">
            <Text className="text-2xl text-back font-semibold">Categorias</Text>
            <TouchableOpacity activeOpacity={0.6}>
                <AntDesign name='pluscircle' size={24} color="black"/>
            </TouchableOpacity>
        </View>
        

        <SectionList 
        
         sections={CATEGORIAS_GASTOS_COM_TOTAL}
         keyExtractor={(item, index) => item + index }
         stickySectionHeadersEnabled={false}
         renderSectionHeader={({section: {title, totalValue}}) => <Categories title={title} totalValue={totalValue}  />}
         showsVerticalScrollIndicator={false}
         renderItem={({item}) => null}
         contentContainerStyle={{paddingBottom:100}}
        
         />
        {/* <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories /> */}
        
    </View>
    
  );
}

