import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Platform, StatusBar, StyleSheet } from 'react-native';
import { useDynamicColors } from '../../styles/useDynamicColors';
import PlanixIcon from '../icons/PlanixIcon';
import TabIcon from '../components/atoms/TabIcon';
import TabLabel from '../components/atoms/TabLabel';
import NewEventStackScreen from '../../screens/new-event/NewEventStackScreen';
import DiscoverScreen from '../../screens/discover/DiscoverScreen';
import FavoritesScreen from '../../screens/favorites/FavoritesScreen';
import ProfileStackNav from '../../screens/profile/ProfileStackNav';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const dynamicColors = useDynamicColors();

  return (
    <>
      <StatusBar animated backgroundColor={dynamicColors.textColor} />
      <Tab.Navigator
        screenOptions={{
          animation: 'shift',
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            display: 'flex',
            elevation: 5,
            backgroundColor: dynamicColors.bottomTabsColor,
            borderTopColor: dynamicColors.borderColor,
            // borderTopWidth: 0,
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
          name="Create"
          component={NewEventStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon icon="plus" focused={focused} />
            ),
            tabBarLabel: () => <TabLabel />,
          }}
        ></Tab.Screen>
        {/* <Tab.Screen
          name="create"
          component={ChatScreen}
          options={{
            headerTitleStyle: {
              color: dynamicColors.textColor,
            },
            tabBarIcon: ({ focused }: any) => (
              <Image
                style={{ height: 32, width: 32 }}
                source={require('../../assets/Planixcopy.png')}
              ></Image>
            ),
            tabBarLabel: () => <TabLabel />,
          }}
        ></Tab.Screen> */}
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
          name="ProfileScreen"
          component={ProfileStackNav}
          options={{
            headerTitle(props) {
              return <Image style={styles.logo} source={require('../../assets/Planix.png')} />;
            },
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
    </>
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
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
});
