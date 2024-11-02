import { Appearance } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useDynamicColors } from './styles/useDynamicColors';
import { useEffect } from 'react';
import Router from './core/routes/Router';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PlanixStackScreen from './screens/planix/PlanixStackScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      useDynamicColors(colorScheme);
    });
    return () => subscription.remove();
  }, []);

  return (
    <Provider store={store}>
      <GestureHandlerRootView
        style={{
          flex: 1,
          backgroundColor: useDynamicColors().bottomBackgroundColor,
        }}
      >
         <NavigationContainer>
            <Stack.Navigator initialRouteName="Router">
               <Stack.Screen
                  name="Router"
                  component={Router}
                  options={{ headerShown: false }}
               />
               <Stack.Screen
                  name="PlanixStack"
                  component={PlanixStackScreen}
                  options={{ headerShown: false }}
               />
            </Stack.Navigator>
         </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}
