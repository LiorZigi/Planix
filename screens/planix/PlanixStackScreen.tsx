import { Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useDynamicColors } from '../../styles/useDynamicColors';
import { PlanixParamList, PlanixRoutes, PlanixScreenProps } from '../../core/@planix/types';
import PlanixInnerScreen from './PlanixInnerScreen';

const Drawer = createDrawerNavigator<PlanixParamList>();

export default function PlanixStackScreen({ navigation, route }: PlanixScreenProps) {
  const dynamicColors = useDynamicColors();

  return (
    <Drawer.Navigator
      initialRouteName={PlanixRoutes.PlanixInner}
      screenOptions={{
        headerStyle: {
          backgroundColor: dynamicColors.topBackgroundColor,
          shadowColor: 'transparent',
        },
        headerTitle() {
          return <Image style={styles.logo} source={require('../../assets/Planix.png')} />;
        },
        drawerContentStyle: {
          backgroundColor: dynamicColors.inputBackgroundColor,
        },
        drawerLabelStyle: {
          color: dynamicColors.textColor,
        },
        drawerActiveTintColor: dynamicColors.textColor,
        sceneContainerStyle: {
          backgroundColor: dynamicColors.topBackgroundColor,
        },
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
