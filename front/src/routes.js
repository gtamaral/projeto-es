import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Category from './pages/Category';
import Chat from './pages/Chat';
import CustomTab from './components/custom-tab';

const Tab = createBottomTabNavigator();

const Routes = () => {
    return (
        <Tab.Navigator 
         screenOptions={{
             headerShown: false, 
             tabBarHideOnKeyboard: true, 
             tabBarShowLabel: false,
             tabBarActiveTintColor:"#121212",

             tabBarStyle: {
                borderTopWidth: 0,
                backgroundColor: "#FFF"
             }
             }}
                tabBar={(props) => <CustomTab {...props}/>}
             >

            <Tab.Screen name="Home" component={Home} options={{tabBarIcon: "home"}} />
            <Tab.Screen name="Categoria" component={Category} options={{tabBarIcon: "account-balance-wallet"}} />
            <Tab.Screen name="Chat" component={Chat} options={{tabBarIcon: "chat"}}  />
        </Tab.Navigator>
    )
}

export default Routes;