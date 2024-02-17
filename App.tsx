import { Platform, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './screens/profile/ProfileScreen';
import NewEventScreen from './screens/new-event/NewEventScreen';
import { colors } from './styles/constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons } from '@expo/vector-icons';
import { View } from 'react-native';
import TabIcon from './core/components/TabIcon';
import TabLabel from './core/components/TabLabel';
import TabBar from './core/layout/TabBar';
import NewEventStackScreen from './screens/new-event/NewEventStackScreen';
import { Provider } from 'react-redux';
import { store } from './store/store';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar animated={true} backgroundColor={colors.textColor} />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
              display: 'flex',
              elevation: 5,
              backgroundColor: colors.bottomTabsColor,
              borderTopColor: colors.borderColor,
              borderTopWidth: 2,
              borderRadius: 30,
              position: 'absolute',
              height: 80,
            },
            headerStyle: {
              height: 100,
              backgroundColor: colors.topBackgroundColor,
            },
            headerShadowVisible: false,
          })}
        >
          <Tab.Screen
            name="Discover"
            component={ProfileScreen}
            options={{
              headerTitleStyle: {
                color: colors.textColor,
              },
              tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} icon={'search'} />
              ),
              tabBarLabel: () => <TabLabel />,
            }}
          ></Tab.Screen>
          <Tab.Screen
            name=" "
            component={NewEventStackScreen}
            options={{
              headerTitleStyle: {
                color: colors.textColor,
              },
              tabBarIcon: () => (
                <View style={styles.createButton}>
                  <Octicons
                    name="plus"
                    size={Platform.OS === 'ios' ? 35 : 40}
                    color={colors.primaryColor}
                    style={{ opacity: 1 }}
                  />
                </View>
              ),
            }}
          ></Tab.Screen>

          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerTitleStyle: {
                color: colors.textColor,
              },
              tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} icon={'feed-person'} />
              ),
              tabBarLabel: () => <TabLabel />,
            }}
          ></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  createButton: {
    top: Platform.OS === 'ios' ? -18 : -18,
    width: Platform.OS === 'ios' ? 70 : 70,
    height: Platform.OS === 'ios' ? 70 : 70,
    borderRadius: Platform.OS === 'ios' ? 35 : 35,

    backgroundColor: '#2a2a2c',
    borderColor: colors.borderColor,
    borderWidth: 2,
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
