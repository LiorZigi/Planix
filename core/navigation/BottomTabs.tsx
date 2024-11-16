import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Platform, StatusBar, StyleSheet } from 'react-native';
import PlanixIcon from '../icons/PlanixIcon';
import TabIcon from '../components/atoms/TabIcon';
import TabLabel from '../components/atoms/TabLabel';
import NewEventStackScreen from '../../screens/new-event/NewEventStackScreen';
import DiscoverScreen from '../../screens/discover/DiscoverScreen';
import FavoritesScreen from '../../screens/favorites/FavoritesScreen';
import ProfileStackNav from '../../screens/profile/ProfileStackNav';
import { selectTheme } from '../../store/selectors/themeSelectors';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const theme = useSelector(selectTheme);

  return (
    <>
      <StatusBar animated backgroundColor={theme.textColor} />
      <Tab.Navigator
        screenOptions={{
          animation: 'shift',
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            display: 'flex',
            elevation: 5,
            backgroundColor: theme.bottomTabsColor,
            borderTopColor: theme.borderColor,
            // borderTopWidth: 0,
          },
          headerStyle: {
            height: 100,
            backgroundColor: theme.headerColor,
          },
          headerShadowVisible: false,
        }}
      >
        <Tab.Screen
          name="Discover"
          component={DiscoverScreen}
          options={{
            headerTitleStyle: {
              color: theme.textColor,
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
              color: theme.textColor,
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
              color: theme.textColor,
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
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
});
