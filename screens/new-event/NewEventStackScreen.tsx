import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewEventScreen from './NewEventScreen';
import BarbicueModal from './components/BarbicueModal';
import BirthdayModal from './components/BirthdayModal';
import CampingModal from './components/CampingModal';
import { useDynamicColors } from '../../styles/useDynamicColors';
import { PlanixRoutes } from '../../core/@planix/types';

const Stack = createNativeStackNavigator();

const NewEventStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName={PlanixRoutes.CreateEvent}>
      <Stack.Screen
        name={PlanixRoutes.CreateEvent}
        component={NewEventScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={PlanixRoutes.Barbecue}
        component={BarbicueModal}
        options={{
          presentation: 'modal',
          headerTitle: 'Barbecue',
          headerTitleStyle: { color: useDynamicColors().textColor },
          headerStyle: {
            backgroundColor: useDynamicColors().topBackgroundColor,
          },
        }}
      />
      <Stack.Screen
        name={PlanixRoutes.Birthday}
        component={BirthdayModal}
        options={{
          presentation: 'modal',
          headerTitle: 'Birthday',
          headerTitleStyle: { color: useDynamicColors().textColor },
          headerStyle: {
            backgroundColor: useDynamicColors().topBackgroundColor,
          },
        }}
      />
      <Stack.Screen
        name={PlanixRoutes.Camping}
        component={CampingModal}
        options={{
          presentation: 'modal',
          headerTitle: 'Camping',
          headerTitleStyle: { color: useDynamicColors().textColor },
          headerStyle: {
            backgroundColor: useDynamicColors().topBackgroundColor,
          },
        }}
      />
      <Stack.Screen
        name={PlanixRoutes.Custom}
        component={BarbicueModal}
        options={{
          presentation: 'modal',
          headerTitle: 'Custom',
          headerTitleStyle: { color: useDynamicColors().textColor },
          headerStyle: {
            backgroundColor: useDynamicColors().topBackgroundColor,
          },
        }}
      />
      <Stack.Screen
        name={PlanixRoutes.Picnic}
        component={BarbicueModal}
        options={{
          presentation: 'modal',
          headerTitle: 'Picnic',
          headerTitleStyle: { color: useDynamicColors().textColor },
          headerStyle: {
            backgroundColor: useDynamicColors().topBackgroundColor,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default NewEventStackScreen;
