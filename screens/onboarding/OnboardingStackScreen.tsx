import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstOnboarding from './FirstOnboarding';
import SecondOnboarding from './SecondOnboarding';
import AuthStackScreen from '../auth/AuthStackScreen';

const Stack = createNativeStackNavigator();

export default function OnboardingStackScreen() {
  return (
    <Stack.Navigator initialRouteName="FirstOnboarding">
      <Stack.Screen
        name="FirstOnboarding"
        component={FirstOnboarding}
        options={{
          headerShown: false,
          presentation: 'transparentModal',
        }}
      />
      <Stack.Screen
        name="SecondOnboarding"
        component={SecondOnboarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AuthStack"
        component={AuthStackScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
