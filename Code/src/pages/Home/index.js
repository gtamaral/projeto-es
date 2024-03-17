// utils
import { SectionList, Text, TextInput, TouchableOpacity, View } from 'react-native';

// components
import Header from '../../components/header';
import CardHome from '../../components/card-home';
import Categories from '../../components/categories';
import Modal from '../../components/Modal';

// icons
import { AntDesign } from '@expo/vector-icons';

// context
import { useAuth } from '../../context/AuthContext';

// firebase
import { collection, getDocs, doc, getFirestore, setDoc } from 'firebase/firestore';

// data
import { db } from '../../config/firebaseconfig';
import { useEffect, useState } from 'react';
import { Pressable } from 'react-native';


export default function Home() {
    const {loading, currentUser} = useAuth()

    const [modalOpen, setModalOpen] = useState(false) 
    const [categories, setCategories] = useState([])
    const [totalCategories, setTotalCategories] = useState()
    const [loadingComponent, setLoadingComponent] = useState(true)
    const [newCategoryName, setNewCategoryName] = useState("");

  
    const addCategory = async() => {
      if (newCategoryName.trim() !== "" && currentUser) {
        // cria uma nova referência de documento na coleção "categories" do usuario
        const categoryRef = doc(collection(db, `/users/${currentUser.uid}/categories`));
        await setDoc(categoryRef, {name: newCategoryName})

        // fechar o modal e limpa o campo de entrada
        setModalOpen(false)
        setNewCategoryName("")

        //Atualize a lista de categorias na interface do usuário
        fetchCategories()
      }
    }
   
    // fetch data
      const fetchCategories = async() => {
        if (currentUser) {
          const userCategoriesRef = collection(db, `/users/${currentUser.uid}/categories`)
          console.log(userCategoriesRef)
          const categoryDocs = await getDocs(userCategoriesRef) //cada doc representa uma categoria
          console.log(categoryDocs)

          let totalCategories = 0

          const categoriesData = await Promise.all(categoryDocs.docs.map(async(doc) => {
            const category = doc.data()
            const saidasRef = collection(db, `/users/${currentUser.uid}/categories/${doc.id}/saidas`);
            const saidasDocs = await getDocs(saidasRef)

            const totalValue = saidasDocs.docs.reduce((acc, doc) => acc + doc.data().valor, 0)

            totalCategories += totalValue
            return {
              title: category.name,
              id: doc.id,
              totalValue,
              data: []
            }
          }))
          setCategories(categoriesData)
          setTotalCategories(totalCategories)
          setLoadingComponent(false)
        } 
      };

      // useEffect para buscar categorias quando o componente é montado ou quando o currentUser é atualizado.
  useEffect(() => {
    fetchCategories();
  }, [currentUser]);


    if (loadingComponent) {
      return <View className="flex-1 items-center justify-center">
        <Text>Carregando...</Text>
      </View>
    }

    return (
    
    <View className="flex-1 bg-[#EDEDED]">
        {/* components */}
        <Header name={currentUser?.name || 'Carregando...'} />
        <CardHome saldo={totalCategories.toFixed(2)}/>
        
        {/* title -> modal */}
        <View className="flex-row justify-between pt-4 px-6 items-center">
            <Text className="text-2xl text-back font-semibold">Categorias</Text>
            <TouchableOpacity activeOpacity={0.6} onPress={() => setModalOpen(true)}>
                <AntDesign name='pluscircle' size={24} color="black"/>
            </TouchableOpacity>

            {/* modal */}
            <Modal isOpen={modalOpen} withInput>
              <View className="bg-white w-full p-4 items-center rounded-xl flex">
                <View>
                    <Text className="font-medium text-xl ">Adicionar categoria</Text>
                </View>
                <TextInput 
                  className="mt-4 px-4 py-4 border border-gray-100 w-full rounded"
                  placeholder='Nome da categoria'
                  placeholderTextColor={"#a0aec0"}
                  value={newCategoryName}
                  onChangeText={setNewCategoryName}
                />
                {/* buttons */}
                <View className="flex-row justify-between mt-9 gap-2 pt-4 mx-0">    

                    <View className="items-center justify-center border-2 border-[#5228A5] w-[50%] rounded-md">
                      <Pressable onPress={() => setModalOpen(false)}>
                        <Text className="p-2 text-base">Fechar</Text>
                      </Pressable>
                    </View>

                    <View className="items-center justify-centers bg-[#5228A5] w-[50%] rounded-md">
                      <Pressable onPress={addCategory} className="">
                        <Text className="p-2 text-white text-base">Adicionar</Text>
                      </Pressable>
                    </View>
                    
                </View>
                </View>
            </Modal>
        </View>

        {/* categoriess*/}
        <SectionList 
          sections={categories}
          keyExtractor={(item, index) => index.toString() }
          stickySectionHeadersEnabled={false}
          renderSectionHeader={({section: {title, totalValue}}) => <Categories title={title} totalValue={totalValue.toString()} key={title} />}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => null}
          className="flex-1"
          contentContainerStyle={{paddingBottom:100}}
         />    
    </View>
  );
}
