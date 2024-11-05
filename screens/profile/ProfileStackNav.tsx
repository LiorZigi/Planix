import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./ProfileScreen";
import AccountScreen from "./AccountScreen";
import { useDynamicColors } from "../../styles/useDynamicColors";
import { PlanixParamList, PlanixRoutes } from "../../core/@planix/types";

const Stack = createNativeStackNavigator<PlanixParamList>();

export default function ProfileStackNav() {
    const colors = useDynamicColors();

    return (
        <Stack.Navigator initialRouteName={PlanixRoutes.Profile}>
            <Stack.Screen
                name={PlanixRoutes.Profile}
                component={ProfileScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={PlanixRoutes.Account}
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
