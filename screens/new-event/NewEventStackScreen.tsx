import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewEventScreen from './NewEventScreen';
import BarbicueModal from './components/BarbicueModal';
import BirthdayModal from './components/BirthdayModal';
import CampingModal from './components/CampingModal';
import { useDynamicColors } from '../../styles/useDynamicColors';

const Stack = createNativeStackNavigator();

const NewEventStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="NewEvent">
      <Stack.Screen
        name="NewEvent"
        component={NewEventScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Barbecue"
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
        name="Birthday"
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
        name="Camping"
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
        name="Custom"
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
        name="Picnic"
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
