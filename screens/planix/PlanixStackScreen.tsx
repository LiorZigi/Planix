import { Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PlanixParamList, PlanixRoutes, PlanixScreenProps } from '../../core/@planix/types';
import PlanixInnerScreen from './PlanixInnerScreen';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../store/selectors/themeSelectors';

const Drawer = createDrawerNavigator<PlanixParamList>();

export default function PlanixStackScreen({ navigation, route }: PlanixScreenProps) {
  const theme = useSelector(selectTheme);

  return (
    <Drawer.Navigator
      initialRouteName={PlanixRoutes.PlanixInner}
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.topBackgroundColor,
          shadowColor: 'transparent',
        },
        headerTitle() {
          return <Image style={styles.logo} source={require('../../assets/Planix.png')} />;
        },
        drawerContentStyle: {
          backgroundColor: theme.inputBackgroundColor,
        },
        drawerLabelStyle: {
          color: theme.textColor,
        },
        drawerActiveTintColor: theme.textColor,

      }}
    >
      <Drawer.Screen
        name={PlanixRoutes.PlanixInner}
        component={PlanixInnerScreen}
        initialParams={route.params}
        options={{ drawerLabel: 'Planix' }}
      />
      <Drawer.Screen name="Back">
        {
          () => {
            navigation.goBack();
            return (
              <></>
            );
          }
        }
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
});
