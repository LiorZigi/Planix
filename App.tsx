import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ProfileScreen } from './screens/profile/ProfileScreen';
import { colors } from './styles/constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons } from '@expo/vector-icons';
import { Text } from 'react-native';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Profile"
        screenOptions={{
          tabBarStyle: {
            height: 90,
            backgroundColor: colors.cardColor,
            borderTopColor: colors.cardColor,
          },
        }}
      >
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerStyle: {
              height: 100,
              backgroundColor: colors.backgroundColor,
            },

            headerTitleStyle: {
              color: colors.textColor,
            },
            tabBarIcon: () => (
              <Octicons
                name="feed-person"
                color={colors.primaryColor}
                size={30}
              />
            ),
            tabBarLabel: () => (
              <Text style={{ color: colors.textColor }}>Profile</Text>
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="new"
          component={ProfileScreen}
          options={{}}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
