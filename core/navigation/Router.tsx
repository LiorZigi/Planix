import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import PlanixStackScreen from '../../screens/planix/PlanixStackScreen';
import OnboardingStackScreen from '../../screens/onboarding/OnboardingStackScreen';
import useAuthListener from '../hooks/useAuthListener';
import { PlanixParamList, PlanixRoutes } from '../@planix/types';
import { selectTheme } from '../../store/selectors/themeSelectors';
import { useEffect } from 'react';
import { initializeTheme } from '../../store/actions/themeActions';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator<PlanixParamList>();

export default function Router() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const { user } = useSelector((state: RootState) => state.user);
  useAuthListener();
  useEffect(() => {
    dispatch<any>(initializeTheme());
  }, [dispatch]);

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: theme.bottomBackgroundColor,
      }}
    >
      {user ? (
        <NavigationContainer>
          <Stack.Navigator initialRouteName={PlanixRoutes.BottomTabs} screenOptions={{
            contentStyle: { backgroundColor: theme.bottomBackgroundColor },
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
            contentStyle: { backgroundColor: theme.bottomBackgroundColor },
          }}>
            <Stack.Screen
              name={PlanixRoutes.OnboardingStack}
              component={OnboardingStackScreen}
              options={{ headerShown: false, presentation: 'transparentModal' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </GestureHandlerRootView>
  );
}
