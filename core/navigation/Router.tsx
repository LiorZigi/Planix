import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import PlanixStackScreen from '../../screens/planix/PlanixStackScreen';
import OnboardingStackScreen from '../../screens/onboarding/OnboardingStackScreen';
import useAuthListener from '../hooks/useAuthListener';

const Stack = createNativeStackNavigator();

export default function Router() {
  const { user } = useSelector((state: RootState) => state.user);
  useAuthListener();
  return (
    <>
      {user ? (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="BottomTabs">
            <Stack.Screen
              name="BottomTabs"
              component={BottomTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlanixStack"
              component={PlanixStackScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="OnboardingStack">
            <Stack.Screen
              name="OnboardingStack"
              component={OnboardingStackScreen}
              options={{ headerShown: false, presentation: 'transparentModal' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
