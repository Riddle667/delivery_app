import { createStackNavigator } from "@react-navigation/stack"
import { LoginScreen } from "../screens/login/LoginScreen";
import { Register } from "../screens/register/Register";

export type RootStackParamList = {
    LoginScreen: undefined;
    RegisterScreen: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

export const MainAppStack = () => {
  return (
    <Stack.Navigator 
        initialRouteName="LoginScreen"
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={Register} />
    </Stack.Navigator>
  )
}

