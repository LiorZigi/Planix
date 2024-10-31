import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./ProfileScreen";
import AccountScreen from "./AccountScreen";
import { useDynamicColors } from "../../styles/useDynamicColors";


const Stack = createNativeStackNavigator();

export default function ProfileStackNav() {
    const colors = useDynamicColors();
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
        <Stack.Screen
            name="UserProfile"
            component={ProfileScreen}
            options={{
            headerShown: false,
            }}
        />
        <Stack.Screen
            name="Account"
            component={AccountScreen}
            options={
                {
                    title: 'Account',
                    headerStyle: {
                        backgroundColor: colors.topBackgroundColor,
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }
            }
        />
    </Stack.Navigator>
  );
};
