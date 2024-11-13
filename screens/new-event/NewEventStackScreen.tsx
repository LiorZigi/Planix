import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewEventScreen from './NewEventScreen';
import { useDynamicColors } from '../../styles/useDynamicColors';
import { PlanixParamList, PlanixRoutes } from '../../core/@planix/types';
import EventSetupStackScreen from '../event-setup/EventSetupStackScreen';

const Stack = createNativeStackNavigator<PlanixParamList>();

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
        component={EventSetupStackScreen}
        options={{
          presentation: 'transparentModal',
          headerTitle: PlanixRoutes.Barbecue,
          headerTitleStyle: { color: useDynamicColors().textColor },
          headerStyle: {
            backgroundColor: useDynamicColors().topBackgroundColor,
          },
        }}
      />
      <Stack.Screen
        name={PlanixRoutes.Birthday}
        component={EventSetupStackScreen}
        options={{
          presentation: 'transparentModal',
          headerTitle: PlanixRoutes.Birthday,
          headerTitleStyle: { color: useDynamicColors().textColor },
          headerStyle: {
            backgroundColor: useDynamicColors().topBackgroundColor,
          },
        }}
      />
      <Stack.Screen
        name={PlanixRoutes.Camping}
        component={EventSetupStackScreen}
        options={{
          presentation: 'transparentModal',
          headerTitle: PlanixRoutes.Camping,
          headerTitleStyle: { color: useDynamicColors().textColor },
          headerStyle: {
            backgroundColor: useDynamicColors().topBackgroundColor,
          },
        }}
      />
      <Stack.Screen
        name={PlanixRoutes.Custom}
        component={EventSetupStackScreen}
        options={{
          presentation: 'transparentModal',
          headerTitle: PlanixRoutes.Custom,
          headerTitleStyle: { color: useDynamicColors().textColor },
          headerStyle: {
            backgroundColor: useDynamicColors().topBackgroundColor,
          },
        }}
      />
      <Stack.Screen
        name={PlanixRoutes.Picnic}
        component={EventSetupStackScreen}
        options={{
          presentation: 'transparentModal',
          headerTitle: PlanixRoutes.Picnic,
          headerTitleStyle: { color: useDynamicColors().textColor },
          headerStyle: {
            backgroundColor: useDynamicColors().topBackgroundColor,
          },
        }}
      />
      <Stack.Screen
        name={PlanixRoutes.BachelorParty}
        component={EventSetupStackScreen}
        options={{
          presentation: 'transparentModal',
          headerTitle: PlanixRoutes.BachelorParty,
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
