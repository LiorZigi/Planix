import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewEventScreen from './NewEventScreen';
import { PlanixParamList, PlanixRoutes } from '../../core/@planix/types';
import EventSetupStackScreen from '../event-setup/EventSetupStackScreen';
import { selectTheme } from '../../store/selectors/themeSelectors';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator<PlanixParamList>();

const NewEventStackScreen = () => {
  const theme = useSelector(selectTheme);

  return (
    <Stack.Navigator initialRouteName={PlanixRoutes.CreateEvent} screenOptions={{ headerShadowVisible: false }}>
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
          headerTitleStyle: { color: theme.textColor },
          headerStyle: {
            backgroundColor: theme.topBackgroundColor,
          },
        }}
      />
      <Stack.Screen
        name={PlanixRoutes.Birthday}
        component={EventSetupStackScreen}
        options={{
          presentation: 'transparentModal',
          headerTitle: PlanixRoutes.Birthday,
          headerTitleStyle: { color: theme.textColor },
          headerStyle: {
            backgroundColor: theme.topBackgroundColor,
          },
        }}
      />
      <Stack.Screen
        name={PlanixRoutes.Camping}
        component={EventSetupStackScreen}
        options={{
          presentation: 'transparentModal',
          headerTitle: PlanixRoutes.Camping,
          headerTitleStyle: { color: theme.textColor },
          headerStyle: {
            backgroundColor: theme.topBackgroundColor,
          },
        }}
      />
      <Stack.Screen
        name={PlanixRoutes.Custom}
        component={EventSetupStackScreen}
        options={{
          presentation: 'transparentModal',
          headerTitle: PlanixRoutes.Custom,
          headerTitleStyle: { color: theme.textColor },
          headerStyle: {
            backgroundColor: theme.topBackgroundColor,
          },
        }}
      />
      <Stack.Screen
        name={PlanixRoutes.Picnic}
        component={EventSetupStackScreen}
        options={{
          presentation: 'transparentModal',
          headerTitle: PlanixRoutes.Picnic,
          headerTitleStyle: { color: theme.textColor },
          headerStyle: {
            backgroundColor: theme.topBackgroundColor,
          },
        }}
      />
      <Stack.Screen
        name={PlanixRoutes.BachelorParty}
        component={EventSetupStackScreen}
        options={{
          presentation: 'transparentModal',
          headerTitle: PlanixRoutes.BachelorParty,
          headerTitleStyle: { color: theme.textColor },
          headerStyle: {
            backgroundColor: theme.topBackgroundColor,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default NewEventStackScreen;
