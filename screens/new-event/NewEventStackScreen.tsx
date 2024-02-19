import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewEventScreen from './NewEventScreen';
import BarbicueModal from './components/BarbicueModal';
import { colors } from '../../styles/constants';
import BirthdayModal from './components/BirthdayModal';

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
        name="Barbicue"
        component={BarbicueModal}
        options={{
          presentation: 'modal',
          headerTitle: 'Barbicue',
          headerTitleStyle: { color: colors.textColor },
          headerStyle: { backgroundColor: colors.topBackgroundColor },
        }}
      />
      <Stack.Screen
        name="Birthday"
        component={BirthdayModal}
        options={{
          presentation: 'modal',
          headerTitle: 'Birthday',
          headerTitleStyle: { color: colors.textColor },
          headerStyle: { backgroundColor: colors.topBackgroundColor },
        }}
      />
    </Stack.Navigator>
  );
};

export default NewEventStackScreen;
