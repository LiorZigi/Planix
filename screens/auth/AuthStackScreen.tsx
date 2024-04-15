import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmailModalScreen from './components/EmailModal';
import AuthScreen from './AuthScreen';

const Stack = createNativeStackNavigator();

const AuthStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="AuthScreen">
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Email"
        component={EmailModalScreen}
        options={{
          presentation: 'fullScreenModal',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStackScreen;
