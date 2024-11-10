import { StyleSheet, Text, View } from 'react-native';
import { colors, globalStyles } from '../../styles/constants';
import CircularProgressBar from './components/CircularProgressBar';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import ActivityTab from './components/ActivityTab';
import MembersTab from './components/MembersTab';
import AboutTab from './components/AboutTab';
import Animated from 'react-native-reanimated';
import { useDynamicColors } from '../../styles/useDynamicColors';
import PlxButton from '../../core/components/atoms/PlxButton';
import { PlanixRoutes, PlanixScreenProps } from '../../core/@planix/types';

const Tab = createMaterialTopTabNavigator();

export default function PlanixScreen({ navigation, route }: PlanixScreenProps<PlanixRoutes.Planix>) {
  const { groupName, members, notifyMembers, data } = route.params;
  const dynamicColors = useDynamicColors();
  const screenOptions: MaterialTopTabNavigationOptions = {
    tabBarLabelStyle: { fontSize: 16, textTransform: 'capitalize' },
    tabBarStyle: {
      backgroundColor: dynamicColors.topBackgroundColor,
      shadowColor: dynamicColors.borderColor,
      shadowOpacity: 0.2,
      shadowRadius: 15,
      elevation: 5,
    },
    tabBarIndicatorStyle: {
      backgroundColor: dynamicColors.textColor,
      height: 0.8,
      opacity: 0.5,
    },
    tabBarActiveTintColor: dynamicColors.textColor,
  };

  const handleChooseProduct = (): void => {
    navigation.navigate(PlanixRoutes.ChooseProduct);
  }

  return (
    <View style={styles.container}>
      <View style={styles.groupDetailsContainer}>
        <Text style={styles.groupName}>{groupName}</Text>
        <Text style={styles.location}>📍 Location </Text>
        <Text style={styles.date}>🗓️ Date </Text>
        <View style={{ justifyContent: 'space-between' }}>
          <View style={styles.progressBar}>
            <CircularProgressBar progress={80} />
            <Text
              style={{
                ...globalStyles.text,
                color: colors.textColor,
                fontSize: 16,
                alignSelf: 'center',
              }}
            >
              80% complete
            </Text>
          </View>
          <View style={{ alignSelf: 'center', flexDirection: 'row', gap: 10 }}>
            <PlxButton title="Choose Product" onPress={handleChooseProduct} textColor={dynamicColors.buttonTextColor} />
            <PlxButton title="  Add  " textColor={dynamicColors.buttonTextColor} />
          </View>
          <Animated.View style={styles.tabsContainer}>
            <Tab.Navigator screenOptions={screenOptions}>
              <Tab.Screen name="Activity">{() => <ActivityTab />}</Tab.Screen>
              <Tab.Screen name="Members">{() => <MembersTab />}</Tab.Screen>
              <Tab.Screen name="About">{() => <AboutTab />}</Tab.Screen>
            </Tab.Navigator>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  groupDetailsContainer: {
    gap: 10,
  },
  groupName: {
    ...globalStyles.text,
    fontSize: 26,
    alignSelf: 'center',
  },
  location: {
    ...globalStyles.text,
    color: 'gray',
    fontSize: 18,
    alignSelf: 'center',
  },
  date: {
    ...globalStyles.text,
    color: 'gray',
    fontSize: 16,
    alignSelf: 'center',
  },
  progressBar: {
    marginTop: 10,
  },
  tabsContainer: {
    height: '45%',
  },
});
