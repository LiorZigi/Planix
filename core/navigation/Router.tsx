import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import PlanixStackScreen from '../../screens/planix/PlanixStackScreen';
import OnboardingStackScreen from '../../screens/onboarding/OnboardingStackScreen';
import useAuthListener from '../hooks/useAuthListener';
import { PlanixParamList, PlanixRoutes } from '../@planix/types';
import { useDynamicColors } from '../../styles/useDynamicColors';

const Stack = createNativeStackNavigator<PlanixParamList>();

export default function Router() {
  const dynamicColors = useDynamicColors();
  const { user } = useSelector((state: RootState) => state.user);
  useAuthListener();

  return (
    <>
      {user ? (
        <NavigationContainer>
          <Stack.Navigator initialRouteName={PlanixRoutes.BottomTabs} screenOptions={{
            contentStyle: { backgroundColor: dynamicColors.bottomBackgroundColor },
          }}>
            <Stack.Screen
              name={PlanixRoutes.BottomTabs}
              component={BottomTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={PlanixRoutes.PlanixStack}
              component={PlanixStackScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName={PlanixRoutes.OnboardingStack} screenOptions={{
            contentStyle: { backgroundColor: dynamicColors.bottomBackgroundColor },
          }}>
            <Stack.Screen
              name={PlanixRoutes.OnboardingStack}
              component={OnboardingStackScreen}
              options={{ headerShown: false, presentation: 'transparentModal' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
