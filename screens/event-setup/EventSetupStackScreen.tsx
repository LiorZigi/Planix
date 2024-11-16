import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PlanixParamList, PlanixRoutes, PlanixScreenProps } from "../../core/@planix/types";
import ProductsListSetupScreen from "./ProductsListSetupScreen";
import MembersListSetupScreen from "./MembersListSetupScreen";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/selectors/themeSelectors";

const Stack = createNativeStackNavigator<PlanixParamList>();

export default function EventSetupStackScreen({ navigation, route }: PlanixScreenProps) {
  const theme = useSelector(selectTheme);
  return (
    <Stack.Navigator initialRouteName={PlanixRoutes.MembersListSetupScreen} screenOptions={{ headerShown: false, contentStyle: { backgroundColor: theme.topBackgroundColor } }}>
      <Stack.Screen name={PlanixRoutes.MembersListSetupScreen} component={MembersListSetupScreen} initialParams={route.params} />
      <Stack.Screen name={PlanixRoutes.ProductsListSetupScreen} component={ProductsListSetupScreen} />
    </Stack.Navigator>
  );
}