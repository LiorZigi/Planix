import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstOnboarding from './FirstOnboarding';
import SecondOnboarding from './SecondOnboarding';
import AuthStackScreen from '../auth/AuthStackScreen';
import { PlanixParamList, PlanixRoutes } from '../../core/@planix/types';

const Stack = createNativeStackNavigator<PlanixParamList>();

export default function OnboardingStackScreen() {
  return (
    <Stack.Navigator initialRouteName={PlanixRoutes.FirstOnboarding}>
      <Stack.Screen
        name={PlanixRoutes.FirstOnboarding}
        component={FirstOnboarding}
        options={{
          headerShown: false,
          presentation: 'transparentModal',
        }}
      />
      <Stack.Screen
        name={PlanixRoutes.SecondOnboarding}
        component={SecondOnboarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={PlanixRoutes.AuthStack}
        component={AuthStackScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
