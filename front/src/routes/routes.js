import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Routes = () => {
    const auth = false

    return (
        <NavigationContainer>
            {auth ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}


export default Routes;