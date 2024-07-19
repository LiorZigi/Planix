import * as Haptics from 'expo-haptics';
import { Appearance, Platform, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './screens/profile/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import TabIcon from './core/components/atoms/TabIcon';
import TabLabel from './core/components/atoms/TabLabel';
import NewEventStackScreen from './screens/new-event/NewEventStackScreen';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import PlanixIcon from './core/icons/PlanixIcon';
import AuthStackScreen from './screens/auth/AuthStackScreen';
import { useDynamicColors } from './styles/useDynamicColors';
import { useEffect } from 'react';
const Tab = createBottomTabNavigator();

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
          <StatusBar animated backgroundColor={useDynamicColors().textColor} />
          <Tab.Navigator
            screenOptions={{
              animation: 'shift',
              tabBarHideOnKeyboard: true,
              tabBarStyle: {
                display: 'flex',
                elevation: 5,
                backgroundColor: useDynamicColors().bottomTabsColor,
                borderTopColor: useDynamicColors().borderColor,
                borderTopWidth: 0,
                borderRadius: 30,
                position: 'absolute',
                height: 80,
              },
              headerStyle: {
                height: 100,
                backgroundColor: useDynamicColors().headerColor,
              },
              headerShadowVisible: false,
            }}
          >
            <Tab.Screen
              name="Discover"
              component={ProfileScreen}
              options={{
                headerTitleStyle: {
                  color: useDynamicColors().textColor,
                },
                tabBarIcon: ({ focused }: any) => (
                  <TabIcon focused={focused} icon={'map'} />
                ),
                tabBarLabel: () => <TabLabel />,
              }}
            ></Tab.Screen>
            <Tab.Screen
              name="Chat"
              component={ProfileScreen}
              options={{
                headerTitleStyle: {
                  color: useDynamicColors().textColor,
                },
                tabBarIcon: ({ focused }: any) => (
                  <TabIcon focused={focused} icon={'chat'} />
                ),
                tabBarLabel: () => <TabLabel />,
              }}
            ></Tab.Screen>
            <Tab.Screen
              name=" "
              component={NewEventStackScreen}
              options={{
                headerTitleStyle: {
                  color: useDynamicColors().textColor,
                },
                tabBarIcon: () => (
                  <View style={styles.createButton}>
                    <PlanixIcon
                      iconName="plus"
                      size={Platform.OS === 'ios' ? 35 : 40}
                      color={useDynamicColors().primaryColor}
                    />
                  </View>
                ),
              }}
            ></Tab.Screen>

            <Tab.Screen
              name="Favorites"
              component={ProfileScreen}
              options={{
                headerTitleStyle: {
                  color: useDynamicColors().textColor,
                },
                tabBarIcon: ({ focused }: any) => (
                  <TabIcon focused={focused} icon={'heart'} />
                ),
                tabBarLabel: () => <TabLabel />,
              }}
            ></Tab.Screen>

            <Tab.Screen
              name="Profile"
              component={AuthStackScreen}
              options={{
                headerTitle: '',
                header: () => null,
                headerTitleStyle: {
                  color: useDynamicColors().textColor,
                },
                tabBarIcon: ({ focused }: any) => (
                  <TabIcon focused={focused} icon={'user'} />
                ),
                tabBarLabel: () => <TabLabel />,
              }}
            ></Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  createButton: {
    top: Platform.OS === 'ios' ? -18 : -18,
    width: Platform.OS === 'ios' ? 60 : 60,
    height: Platform.OS === 'ios' ? 60 : 60,
    borderRadius: Platform.OS === 'ios' ? 20 : 20,

    backgroundColor: useDynamicColors().topBackgroundColor,
    borderColor: useDynamicColors().borderColor,
    borderWidth: 2.5,
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
