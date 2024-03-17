
// react / rn
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, FlatList, ScrollView, SectionList, SafeAreaView, TextInput, Pressable } from 'react-native';

// components
import CardCategory from '../../components/card-category';
import Saidas from '../../components/saidas';
import CategoryButton from '../../components/category-button';
import { AntDesign } from '@expo/vector-icons';
import Modal from '../../components/Modal';

// db => firebase
import { db } from '../../config/firebaseconfig';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';

// context
import { useAuth } from '../../context/AuthContext';

export default function Category() {
  const { currentUser } = useAuth();
  
  const [saidas, setSaidas] = useState([]);
  const [categories, setCategories] = useState([]);
  const [totalSaidas, setTotalSaidas] = useState(0);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newSaidaName, setNewSaidaName] = useState('');
  const [newSaidaValue, setNewSaidaValue] = useState('');

  const handleCategorySelect = async (categoryId, categoryName) => {
    setSelectedCategoryId(categoryId);
    setSelectedCategoryName(categoryName);

    const saidasRef = collection(db, `/users/${currentUser.uid}/categories/${categoryId}/saidas`);
    const saidasDocs = await getDocs(saidasRef);
    const saidasData = saidasDocs.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    }));

    const totalValue = saidasDocs.docs.reduce((acc, doc) => acc + doc.data().valor, 0);
    setTotalSaidas(totalValue);
    setSaidas([{ title: categoryName, data: saidasData }]);
  };

  const addSaida = async () => {
      if (newSaidaName.trim() !== "" && newSaidaValue.trim() !== "" && currentUser && selectedCategoryId) {
        const saidaRef = doc(collection(db, `/users/${currentUser.uid}/categories/${selectedCategoryId}/saidas`));
        await setDoc(saidaRef, {
          name: newSaidaName,
          valor: parseFloat(newSaidaValue), // Garanta que o valor seja armazenado como número
        });
        setModalOpen(false);
        setNewSaidaName('');
        setNewSaidaValue('');
        await fetchCategories(selectedCategoryId); // Atualiza a lista de saídas para a categoria atual
      }
    };

  const fetchCategories = async (selectedCategoryId = null) => {
      if (currentUser) {
        const userCategoriesRef = collection(db, `/users/${currentUser.uid}/categories`);
        const categoryDocs = await getDocs(userCategoriesRef);
        const categoriesData = categoryDocs.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
        }));
        setCategories(categoriesData);

        if (selectedCategoryId) {
          // Se um ID de categoria selecionada foi fornecido, recarrega apenas as saídas para essa categoria
          handleCategorySelect(selectedCategoryId, categoriesData.find(c => c.id === selectedCategoryId)?.name);
        } else if (categoriesData.length > 0) {
          // Se nenhum ID de categoria selecionada foi fornecido, seleciona a primeira categoria por padrão
          handleCategorySelect(categoriesData[0].id, categoriesData[0].name);
        }
      }
    };


  useEffect(() => {
    fetchCategories();
  }, [currentUser]);

  return (

    <View className="flex-1 bg-[#5228A5]">
      <SafeAreaView className="flex-1">

        {/* input title & icon */}
        <View className="items-start px-5 pt-6">
          <Text className="text-white font-semibold text-2xl">Categorias:</Text>
        </View>

        {/* categories menu */}
        <FlatList 
          data={categories}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({item}) => (
            <CategoryButton 
              title={item.name}
              isSelected={item.name === selectedCategoryName}
              onPress={() => handleCategorySelect(item.id, item.name)}
            />
          )}
          className="max-h-10 mt-5"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: 12, paddingHorizontal: 20}}        
        />

        <ScrollView>
          {/* card component */}
            <CardCategory name={selectedCategoryName} value={totalSaidas.toFixed(2)} />

          <View className="flex-row justify-between pt-8 mb-8 px-6 items-center">
                <Text className="text-2xl text-white font-base">Adicionar saída</Text>
                <TouchableOpacity activeOpacity={0.6} onPress={() => setModalOpen(true)}>
                    <AntDesign name='pluscircle' size={24} color="white"/>
                </TouchableOpacity>
          </View>

          {/* saidas */}
          <SectionList    
            sections={saidas}
            keyExtractor={(item, index) => item.id || String(index)}
            stickySectionHeadersEnabled={false}
            renderItem={({item}) => (<Saidas title={item.name} value={item.valor.toFixed(2)} /> )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:100}}
          />

        </ScrollView>
      </SafeAreaView>

    {/* Modal */}
     <Modal isOpen={modalOpen} withInput>
        <View className="bg-white w-full p-4 items-center rounded-xl">
          <Text className="text-2xl border">Adicionar Saída</Text>

          <TextInput
            className="mt-4 px-4 py-4 border border-gray-100 rounded w-full"
            placeholder="Nome da saída"
            placeholderTextColor={"#a0aec0"}
            value={newSaidaName}
            onChangeText={setNewSaidaName}
          />
          <TextInput
            className="mt-4 px-4 py-4 border border-gray-100 rounded w-full"
            placeholder="Valor da saída"
            placeholderTextColor={"#a0aec0"}
            value={newSaidaValue}
            onChangeText={setNewSaidaValue}
            keyboardType="numeric"
          />

          {/* buttons */}
          <View className="flex-row gap-2 mx-0 mt-6">
              <Pressable onPress={() => setModalOpen(false)} className="items-center w-[50%] p-3 rounded-md border-2 border-[#5228A5]">
                <Text className="text-base">Fechar</Text>
              </Pressable>

              <Pressable onPress={addSaida} className="items-center justify-center bg-[#5228A5] w-[50%] p-1 rounded-md">
                <Text className="text-white text-base ">Adicionar</Text>
              </Pressable>
          </View>

        </View>
      </Modal>
    </View>
  );
}
