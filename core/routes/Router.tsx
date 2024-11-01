import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { useDynamicColors } from '../../styles/useDynamicColors';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import PlanixIcon from '../icons/PlanixIcon';
import TabIcon from '../components/atoms/TabIcon';
import TabLabel from '../components/atoms/TabLabel';
import NewEventStackScreen from '../../screens/new-event/NewEventStackScreen';
import AuthStackScreen from '../../screens/auth/AuthStackScreen';
import useAuthListener from '../hooks/useAuthListener';
import DiscoverScreen from '../../screens/discover/DiscoverScreen';
import ChatScreen from '../../screens/chat/ChatScreen';
import FavoritesScreen from '../../screens/favorites/FavoritesScreen';
import ProfileStackNav from '../../screens/profile/ProfileStackNav';

const Tab = createBottomTabNavigator();

export default function Router() {
  const { user } = useSelector((state: RootState) => state.user);
  const dynamicColors = useDynamicColors();
  useAuthListener();

  return (
    <NavigationContainer>
      <StatusBar animated backgroundColor={dynamicColors.textColor} />
      <Tab.Navigator
        screenOptions={{
          // animation: 'shift',
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            display: 'flex',
            elevation: 5,
            backgroundColor: dynamicColors.bottomTabsColor,
            borderTopColor: dynamicColors.borderColor,
            borderTopWidth: 0,
            borderRadius: 30,
            position: 'absolute',
            height: 80,
          },
          headerStyle: {
            height: 100,
            backgroundColor: dynamicColors.headerColor,
          },
          headerShadowVisible: false,
        }}
      >
        <Tab.Screen
          name="Discover"
          component={DiscoverScreen}
          options={{
            headerTitleStyle: {
              color: dynamicColors.textColor,
            },
            tabBarIcon: ({ focused }: any) => (
              <TabIcon focused={focused} icon={'map'} />
            ),
            tabBarLabel: () => <TabLabel />,
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            headerTitleStyle: {
              color: dynamicColors.textColor,
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
            headerShown: false,
            tabBarIcon: () => (
              <View style={styles.createButton}>
                <PlanixIcon
                  iconName="plus"
                  size={Platform.OS === 'ios' ? 35 : 40}
                  color={dynamicColors.primaryColor}
                />
              </View>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            headerTitleStyle: {
              color: dynamicColors.textColor,
            },
            tabBarIcon: ({ focused }: any) => (
              <TabIcon focused={focused} icon={'heart'} />
            ),
            tabBarLabel: () => <TabLabel />,
          }}
        ></Tab.Screen>

        <Tab.Screen
          name="Profile"
          component={user ? ProfileStackNav : AuthStackScreen}
          options={{
            headerTitle: '',
            headerShown: !!user,
            headerTitleStyle: {
              color: dynamicColors.textColor,
            },
            tabBarIcon: ({ focused }: any) => (
              <TabIcon focused={focused} icon={'user'} />
            ),
            tabBarLabel: () => <TabLabel />,
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
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
