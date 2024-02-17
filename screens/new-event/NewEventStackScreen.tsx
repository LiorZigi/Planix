import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewEventScreen from './NewEventScreen';
import Events from './components/Events';
import { useSelector } from 'react-redux';
import BarbicueScreen from './components/BarbicueModal';
import BarbicueModal from './components/BarbicueModal';
import { colors } from '../../styles/constants';

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
    </Stack.Navigator>
  );
};

export default NewEventStackScreen;
