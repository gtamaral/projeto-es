import {NavigationContainer} from "@react-navigation/native"
import Routes from "./src/routes";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";

export default function App() {
  return (
    // <NavigationContainer>
    //   <Routes />
    // </NavigationContainer>
    <Login />
    // <Register />
  );
}

