import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmailModalScreen from './components/EmailModal';
import AuthScreen from './AuthScreen';
import SignupScreen from './components/SignupScreen';
import { PlanixParamList, PlanixRoutes } from '../../core/@planix/types';

const Stack = createNativeStackNavigator<PlanixParamList>();

const AuthStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName={PlanixRoutes.AuthScreen}>
      <Stack.Screen
        name={PlanixRoutes.AuthScreen}
        component={AuthScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={PlanixRoutes.Email}
        component={EmailModalScreen}
        options={{
          presentation: 'fullScreenModal',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={PlanixRoutes.SignUp}
        component={SignupScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStackScreen;
