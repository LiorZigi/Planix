import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import PlanixScreen from './PlanixScreen';
import { useDynamicColors } from '../../styles/useDynamicColors';

const Drawer = createDrawerNavigator();

interface PlanixStackScreenProps {
  navigation: NavigationProp<any>;
  route: RouteProp<any, any>;
}

export default function PlanixStackScreen({ navigation, route }: PlanixStackScreenProps) {
  const dynamicColors = useDynamicColors();

  return (
    <Drawer.Navigator
      initialRouteName="Planix"
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
        name="Planix"
        component={PlanixScreen}
        initialParams={route.params}
      />
      <Drawer.Screen name="Back">
        {() => {
          navigation.goBack();
          return null;
        }}
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
