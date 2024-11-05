import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PlanixScreen from './PlanixScreen';
import { useDynamicColors } from '../../styles/useDynamicColors';
import { PlanixScreenProps } from '../../core/@planix/types';

const Drawer = createDrawerNavigator();

export default function PlanixStackScreen({ navigation, route }: PlanixScreenProps) {
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
        {
          () => {
            navigation.goBack();
            return null;
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
