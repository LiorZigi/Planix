import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./ProfileScreen";
import AccountScreen from "./AccountScreen";
import { PlanixParamList, PlanixRoutes } from "../../core/@planix/types";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/selectors/themeSelectors";

const Stack = createNativeStackNavigator<PlanixParamList>();

export default function ProfileStackNav() {
    const theme = useSelector(selectTheme);

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
                            backgroundColor: theme.topBackgroundColor,
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
